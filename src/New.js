import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styled from "styled-components";

import Layout from "./Layout";

const Wrapper = styled.div`
  input {
    &::placeholder {
      font-size: 13px;
    }
  }

  label {
    font-weight: 400;
  }
`;

export default function New() {
  return (
    <Layout title="Tạo mới học viên">
      <hr />
      <Wrapper>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Tên học viên: </Form.Label>
            <Form.Control type="text" placeholder="Nhập tên học viên..." />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email học viên: </Form.Label>
            <Form.Control type="email" placeholder="Nhập email học viên..." />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Số điện thoại học viên: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại học viên..."
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mật khẩu học viên: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu học viên..."
            />
          </Form.Group>
          <Link to="/">
            <Button variant="primary" type="submit">
              Tạo
            </Button>
          </Link>
        </Form>
      </Wrapper>
    </Layout>
  );
}
