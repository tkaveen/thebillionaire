import React from "react";
import Input from "../../../components/Ui/Input";
import Modal from "../../../components/Ui/Modal/Modal";
import { Container, Row, Col } from "react-bootstrap";

const UpdatedCategoriesModal = (props) => {
  const {
    show,
    handleClose,
    modalTitle,
    size,
    expandedArray,
    checkedArray,
    handleCategoryInput,
    categoryList,
  } = props;

  return (
    <Modal show={show} handleClose={handleClose} modalTitle={modalTitle}>
      <Container>
        <Row>
          <Col>
            <h6>Expanded arry</h6>
          </Col>
        </Row>
        {expandedArray.length > 0 &&
          expandedArray.map((item, index) => (
            <Row key={index}>
              <Input
                value={item.name}
                placeholder={`Category Name`}
                onChange={(e) =>
                  handleCategoryInput("name", e.target.value, index, "expanded")
                }
              />
              <select
                className="form-control"
                value={item.parentId}
                onChange={(e) =>
                  handleCategoryInput(
                    "parentId",
                    e.target.value,
                    index,
                    "expanded"
                  )
                }
              >
                <option>select category</option>
                {categoryList.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </Row>
          ))}
        <h6>checked categories</h6>
        {checkedArray.length > 0 &&
          checkedArray.map((item, index) => (
            <Row key={index}>
              <Input
                value={item.name}
                placeholder={`Category Name`}
                onChange={(e) =>
                  handleCategoryInput("name", e.target.value, index, "checked")
                }
              />
              <select
                className="form-control"
                value={item.parentId}
                onChange={(e) =>
                  handleCategoryInput(
                    "parentId",
                    e.target.value,
                    index,
                    "checked"
                  )
                }
              >
                <option>select category</option>
                {categoryList.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </Row>
          ))}
      </Container>
      {/* <Input
          type="file"
          name="categoryImage"
          onChange={handleCategoryImage}
        /> */}
    </Modal>
  );
};

export default UpdatedCategoriesModal;
