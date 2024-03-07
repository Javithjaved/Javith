import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const [userDate, setUserDate] = useState({
        email: "",
        password: "",
    })

    const Navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BASEURL;
    console.log(baseUrl);
    const handleChange = (e) => {
        setUserDate({ ...userDate, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        axios({
            method: "post",
            url: `https://ec52-2405-201-e059-b805-9b7-4be9-b7b7-280.ngrok-free.app/api/v1/login`,
            data: userDate,
        })
            .then(res => {
                Navigate("/dashboard");
                const accessToken = res.data.token;
                localStorage.setItem("Accesstoken", accessToken);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <Container >
            <Row >
                <Col xs={6} className="mt-3">
                    <p className="text-center fs-5">Login Page</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Button variant="info" onClick={(e) => handleSubmit(e)}>
                            Login
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;

