import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Layout from "../../components/Layout/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, addCategory } from "../../actions";
import Input from "../../components/Ui/Input";

export default function Category() {
  const category = useSelector((state) => state.category);
  const [categoryName, setCategoryName] = useState("");
  // const [parentCategoryId, setParentCategoryId] = useState("");
  //   const [categoryImage, setCategoryImage] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const handleClose = () => {
    const form = new FormData();
    form.append("name", categoryName);
    // form.append('parentId', parentCategoryId)
    dispatch(addCategory(form));
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(<li key={category.name}>{category.name}</li>);
    }
    return myCategories;
  };

  // const createCategoryList = (categories, options = []) => {
  //   for (let category of categories) {
  //     options.push({ value: category._id, name: category.name });
  //     if (category.children.length > 0) {
  //       createCategoryList(category.children, options);
  //     }
  //   }
  // };

  return (
    <Layout sidebar>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>

              <button
                type="button"
                className="btn btn-dark"
                onClick={handleShow}
              >
                Add Category
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>
              {renderCategories(category.categories)}
              {/* {JSON.stringify(createCategoryList(category.categories))} */}
            </ul>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={categoryName}
            placeholder={`Category Name`}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          {/* <select className="form-control">
            <option>select category</option>
            {createCategoryList(category.categories).map((option) => (
              <option key={option.value} value={option.name}>
                {option.name}
              </option>
            ))}
          </select> */}
          {/* <Input
            type="file"
            name="categoryImage"
            onChange={handleCategoryImage}
          /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}
