const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// exports.signup = (req, res) => {
//   User.findOne({ email: req.body.email }).exec(async (error, user) => {
//     if (user)
//       return res.status(400).json({
//         message: "User already registered",
//       });

//     const { firstName, lastName, email, password } = req.body;
//     const hash_password = await bcrypt.hash(password, 10);
//     const _user = new User({
//       firstName,
//       lastName,
//       email,
//       hash_password,
//       username: Math.random().toString(),
//     });

//     _user.save((error, data) => {
//       if (error) {
//         return res.status(400).json({
//           message: "Something went wrong",
//         });
//       }
//       if (data) {
//         return res.status(201).json({
//           message: "User Created Successfully",
//         });
//       }
//     });
//   });
// };

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.status(202).json({
        error: "User already registered",
      });

    const { firstName, lastName, email, password } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const _user = new User({
      firstName,
      lastName,
      email,
      hash_password,
      username: shortid.generate(),
    });

    _user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }

      if (user) {
        const token = generateJwtToken(user._id, user.role);
        const { _id, firstName, lastName, email, role, fullName } = user;
        return res.status(201).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      }
    });
  });
};

// exports.signin = (req, res) => {
//   User.findOne({ email: req.body.email }).exec(async (error, user) => {
//     if (error) return res.status(400).json({ error });
//     if (user) {
//       const passwordValidation = await user.authenticate(req.body.password);
//       if (passwordValidation && user.role === "user") {
//         const token = jwt.sign(
//           { _id: user._id, role: user.role },
//           process.env.JWT_SECRET,
//           {
//             expiresIn: "1d",
//           }
//         );
//         const { _id, firstName, lastName, email, role, fullName } = user;
//         res.status(200).json({
//           token,
//           user: {
//             _id,
//             firstName,
//             lastName,
//             email,
//             role,
//             fullName,
//           },
//         });
//       } else {
//         return res.status(400).json({
//           message: "Something went wrong",
//         });
//       }
//     } else {
//       return res.status(400).json({ message: "Something went wrong" });
//     }
//   });
// };

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword = await user.authenticate(req.body.password);
      if (isPassword && user.role === "user") {
        // const token = jwt.sign(
        //   { _id: user._id, role: user.role },
        //   process.env.JWT_SECRET,
        //   { expiresIn: "1d" }
        // );
        const token = generateJwtToken(user._id, user.role);
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } else {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};

exports.resetPassword = async (req, res) => {
  try {
    const { userId, currentPassword, newPassword, confirmPassword } = req.body;

    // validate
    if (!currentPassword || !newPassword || !confirmPassword)
      return res.status(200).json({ msg: "Not all fields have been entered." });

    if (confirmPassword !== newPassword)
      return res.status(200).json({ msg: "Passwords do not match" });

    if (newPassword.length < 5)
      return res.status(200).json({
        msg: "The password needs to be at least 5 characters long.",
      });

    const user = await User.findOne({ _id: userId });
    if (!user)
      return res
        .status(200)
        .json({ msg: "No account with this id has been registered." });

    const isMatch = await bcrypt.compare(currentPassword, user.hash_password);
    if (!isMatch) return res.status(200).json({ msg: "Invalid Password." });

    const isMatch2 = await bcrypt.compare(newPassword, user.hash_password);
    if (isMatch2)
      return res.status(200).json({ msg: "Use a Different Password." });

    //res.json("Password updated!");
    // const salt = await bcrypt.genSalt();
    // const passwordHash = await bcrypt.hash(confirmPassword, salt);

    const passwordHash = await bcrypt.hash(confirmPassword, 10);

    User.findById(userId).then((user) => {
      user.hash_password = passwordHash;
      user
        .save()
        .then(() => res.status(200).json({ msg: "Password updated!" }));
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
