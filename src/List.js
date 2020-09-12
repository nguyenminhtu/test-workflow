import React from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";

import styled from "styled-components";

import Layout from "./Layout";

const Wrapper = styled.div`
  th,
  td {
    text-align: center;
  }
`;

const mockData = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phone: "0345345667"
  },
  {
    id: 2,
    name: "Nguyễn Ngọc B",
    email: "nguyenngocB@gmail.com",
    phone: "234234234234"
  },
  {
    id: 3,
    name: "Nguyễn Thị C",
    email: "nguyenthic@gmail.com",
    phone: "234234234"
  },
  {
    id: 4,
    name: "Nguyễn Khánh D",
    email: "nguyenkhanhd@gmail.com",
    phone: "234234565765"
  },
  {
    id: 5,
    name: "Nguyễn Minh E",
    email: "nguyenminhe@gmail.com",
    phone: "078978978"
  },
  {
    id: 6,
    name: "Nguyễn Đức F",
    email: "nguyenducf@gmail.com",
    phone: "045645434543"
  },
  {
    id: 7,
    name: "Nguyễn Hà G",
    email: "nguyenhag@gmail.com",
    phone: "07686754554"
  },
  {
    id: 8,
    name: "Nguyễn Trung H",
    email: "nguyentrungh@gmail.com",
    phone: "0345345455"
  },
  {
    id: 9,
    name: "Nguyễn Nam K",
    email: "nguyennamk@gmail.com",
    phone: "0765756765"
  },
  {
    id: 10,
    name: "Nguyễn Thế M",
    email: "nguyenthem@gmail.com",
    phone: "09997767676"
  }
];

export default function List() {
  const history = useHistory();

  return (
    <Layout title="Danh sách học viên">
      <hr />
      <Wrapper>
        <div>
          <Link to="/new">
            <Button>Thêm học viên mới</Button>
          </Link>
        </div>

        <br />

        <Table bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map(data => (
              <tr
                key={data.id}
                onClick={() =>
                  history.push(
                    `/detail?name=${data.name}&email=${data.email}&phone=${data.phone}`
                  )
                }
              >
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Wrapper>
    </Layout>
  );
}
