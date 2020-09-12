import React from "react";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import styled from "styled-components";

import Layout from "./Layout";

const Wrapper = styled.div`
  .row {
    margin-bottom: 16px;
  }
`;

export default function Detail() {
  const query = new URLSearchParams(window.location.search);

  return (
    <Layout title="Thông tin học viên">
      <hr />

      <Wrapper>
        <Row>
          <Col md={3}>
            <b>Tên học viên:</b>
          </Col>
          <Col md={9}>{query.get("name")}</Col>
        </Row>

        <Row>
          <Col md={3}>
            <b>Email học viên:</b>
          </Col>
          <Col md={9}>{query.get("email")}</Col>
        </Row>

        <Row>
          <Col md={3}>
            <b>Số điện thoại học viên:</b>
          </Col>
          <Col md={9}>{query.get("phone")}</Col>
        </Row>

        <Row>
          <Col md={12}>
            <Link to="/">
              <Button>Quay về màn hình danh sách</Button>
            </Link>
          </Col>
        </Row>
      </Wrapper>
    </Layout>
  );
}
