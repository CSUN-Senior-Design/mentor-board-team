import React, { Component } from 'react'
import CourseItem from './CourseItem'

export class Courses extends Component {
    state = {
        courses: [
            {
                key: '1',
                class_name: 'Guitar Class',
                class_type: 'Music',
                class_time: '4am - 5pm',
                image_url:'https://image.shutterstock.com/image-vector/cartoon-bass-guitar-260nw-1066103675.jpg'
            },
            {
                key: '2',
                class_name: 'Piano Class',
                class_type: 'Music',
                class_time: '4pm - 5am',
                image_url:'https://ak8.picdn.net/shutterstock/videos/1926718/thumb/1.jpg'
            },
            {
                key: '3',
                class_name: 'Math Tutor',
                class_type: 'Math',
                class_time: '4pm - 5pm',
                image_url:'https://image.shutterstock.com/image-vector/math-educational-vector-seamless-pattern-600w-795328972.jpg'
            },
            {
                key: '4',
                class_name: 'Drums Class',
                class_type: 'Music',
                class_time: '4am - 5pm',
                image_url:'https://image.shutterstock.com/image-photo/closeup-detail-drum-set-against-600w-1452235409.jpg'
            },
            {
                key: '5',
                class_name: 'Keyboard Class',
                class_type: 'Music',
                class_time: '4pm - 5am',
                image_url: 'https://image.shutterstock.com/z/stock-photo-pianist-musician-performing-live-playing-keyboard-in-a-band-with-saxophone-player-in-background-576862291.jpg'
            },
            {
                key: '6',
                class_name: 'Algebra Tutor',
                class_type: 'Math',
                class_time: '4pm - 5pm',
                image_url: 'https://image.shutterstock.com/image-vector/algebra-concept-icon-advanced-calculations-600w-1434691847.jpg'
            },
            {
                key: '7',
                class_name: 'Chem Tutor',
                class_type: 'Science',
                class_time: '4am - 5pm',
                image_url:'https://image.shutterstock.com/image-photo/closeup-detail-drum-set-against-600w-1452235409.jpg'
            },
            {
                key: '8',
                class_name: 'Bio Tutor',
                class_type: 'Science',
                class_time: '4pm - 5am',
                image_url: 'https://image.shutterstock.com/z/stock-photo-pianist-musician-performing-live-playing-keyboard-in-a-band-with-saxophone-player-in-background-576862291.jpg'
            },
            // {
            //     key: '9',
            //     class_name: 'Physics Tutor',
            //     class_type: 'Science',
            //     class_time: '4pm - 5pm',
            //     image_url: 'https://image.shutterstock.com/image-vector/algebra-concept-icon-advanced-calculations-600w-1434691847.jpg'
            // },
        ]
    }

    render() {
        return (
            <div style ={courseStyle}>
                {this.state.courses.map(course => (
                     <CourseItem key = {course.key} course = {course}/>
                ))}
            </div>
        )
    }
}

const courseStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '4rem'
}

export default Courses
