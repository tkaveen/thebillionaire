import React from "react";
import Input from "../../../components/Ui/Input";
import Modal from "../../../components/Ui/Modal/Modal";
import { Container, Row, Col } from "react-bootstrap";

const AddCategoryModal = (props) => {
  const {
    show,
    handleClose,
    modalTitle,
    categoryName,
    setCategoryName,
    parentCategoryId,
    setParentCategoryId,
    categoryList,
    handleCategoryImage,
    onSubmit,
  } = props;
  return (
    <Modal
      show={show}
      handleClose={handleClose}
      onSubmit={onSubmit}
      modalTitle={modalTitle}
    >
      <Input
        value={categoryName}
        placeholder={`Category Name`}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <select
        className="form-control"
        value={parentCategoryId}
        onChange={(e) => setParentCategoryId(e.target.value)}
      >
        <option>select category</option>
        {categoryList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {/* <Input
          type="file"
          name="categoryImage"
          onChange={handleCategoryImage}
        /> */}
    </Modal>
  );
};

export default AddCategoryModal;
