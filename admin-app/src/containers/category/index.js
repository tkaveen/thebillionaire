import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout/index";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../actions";

export default function Category() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <Layout sidebar>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>

              <button type="button" class="btn btn-dark">
                Add Category
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
