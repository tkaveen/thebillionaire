import React, { useState } from "react";
import Layout from "../../components/Layout/index";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Input from "../../components/Ui/Input";

export default function Products() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <Layout sidebar>
      <Col md={12}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Products</h3>

          <button type="button" className="btn btn-dark" onClick={handleShow}>
            Add Category
          </button>
        </div>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            label="Name"
            value={name}
            placeholder={`Product Name`}
            onChange={(e) => setName(e.target.value)}
          />
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
