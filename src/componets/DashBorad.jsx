import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Row, Table } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Model from "./Model";
const Dashboard = ({ handleShow, show, handleClose }) => {
    const [userInformation, setUserInformation] = useState();
    useEffect(() => {
        axios({
            method: "get",
            url: "https://ec52-2405-201-e059-b805-9b7-4be9-b7b7-280.ngrok-free.app/api/v1/users",
            headers: {
                "ngrok-skip-browser-warning": true
            }
        })
            .then(res => {
                const data = res.data.data;
                setUserInformation(data);
            })
            .catch(err => err)
    }, []);
    const handleDelete = (user) => {
        axios({
            method: "delete",
            url: `https://ec52-2405-201-e059-b805-9b7-4be9-b7b7-280.ngrok-free.app/deleteUser/${user}`,
        })
            .then(res => res)
            .catch(err => err)
    }

    return (
        <div>
            <Row>
                <Col> <p className="fs-4 fw-bold p-3">User DashBoard</p></Col>
                <Col className="text-end p-3">
                    <Button variant="info" onClick={handleShow}>Add User</Button>
                </Col>

            </Row>
            <Table striped bordered hover className="p-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(userInformation) && userInformation.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button className="me-2" variant="info" onClick={handleShow}><Icon icon="line-md:edit-twotone" /></Button>
                                <Button variant="info" onClick={() => handleDelete(user.id)}><Icon icon="pajamas:remove" /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Model handleShow={handleShow} show={show} handleClose={handleClose} />
        </div>
    )
}

export default Dashboard; 
