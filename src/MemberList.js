import React from 'react';
import { Table } from 'react-bootstrap'; // Bootstrap을 사용하는 경우

const MemberList = ({ members }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {members.map(member => (
          <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MemberList;