import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from './Course';

const Courses = () => {
    const courses = [
        {
            "id": "1",
            "name": "Computer Programming Basic",
            "provider": "by Abc Dowson school",
            "rating": "5",
            "price": "$14"
        },
        {
            "id": "2",
            "name": "Computer Programming Basic",
            "provider": "by Abc Dowson school",
            "rating": "5",
            "price": "$14"
        },
        {
            "id": "3",
            "name": "Computer Programming Basic",
            "provider": "by Abc Dowson school",
            "rating": "3",
            "price": "$14"
        },
        {
            "id": "4",
            "name": "Computer Programming Basic",
            "provider": "by Abc Dowson school",
            "rating": "4",
            "price": "$14"
        },
    ]
    return (
        <div>

            <span className='mt-5 text-info  fw-bold shadow-lg border rounded p-2 '>Courses</span>
            <Container>

                <Row className='justify-content-md-center justify-content-xs-center mt-5'>
                    {
                        courses.map(course => <Col key={course.id} style={{ width: '280px' }} className=' rounded ms-md-4 me-sm-1 mb-4 my-auto mx-auto' md={3} sm={6} >
                            <Course course={course}>
                            </Course>
                        </Col>)
                    }

                </Row>

            </Container>
        </div>
    );
};

export default Courses;