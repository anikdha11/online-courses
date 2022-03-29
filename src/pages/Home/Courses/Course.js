import React from 'react';
import { Button } from 'react-bootstrap';
import "./Course.css"

const Course = (course) => {
    console.log(course.course)
   const {name,price,rating,provider}=course.course
    return (
        <div className='bg-img p-5'>
                <h4>{name}</h4>
                <h6>Price: ${price}</h6>
                <p>Rating: {rating}</p>
                <h5>{provider}</h5>
                <Button className='text-center' style={{fontWeight:'700'}} variant='outline-light'>Add to Cart</Button>
        </div>
    );
};

export default Course;