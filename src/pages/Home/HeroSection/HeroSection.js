import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from "../../../image/education.jpg"
const HeroSection = () => {
    return (
        <div className='mt-5 mb-5'>
            <Container>
                <Row className='align-items-start'>
                    <Col className='text-start' sm={6}>
                        <h1 >
                        Large educational programs
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officia nulla sit, ex quae cum quisquam modi voluptates fuga repudiandae.</p>
                        <Button variant="outline-success">Try For Free</Button>{' '}

                    </Col>
                    <Col sm={6}>
                        <img className='border border-1 rounded img-fluid h-75 shadow bg-dark' src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;