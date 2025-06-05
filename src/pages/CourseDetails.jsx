import { useParams, Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

import courses from '../assets/courses.json'

export default function CourseDetails() {

    // Get course id from url
    const { id } = useParams();

    //Convert id to number and find matching course
    const course = courses.find((c) => c.id === parseInt(id, 10));

    // If no course matches, show a fallback message
    if(!course) {
        return(
            <div className='text-center mt-5'>
                <h3>Course not found.</h3>
                <Button as={Link} to='/courses' variant='secondary'>
                    Back to Courses
                </Button>
            </div>
        )
    }
    //Build a placeholder image URL
    const imgUrl = `https://picsum.photos/seed/course-${course.id * 4}/800/400`;
    return (
        <main className="mb-5">
            <h1 className='mb-4'>{course.title}</h1>
            {/* Course details card */}
            <Card className='mb-4'>
                <Card.Img variant='top' src={imgUrl} alt={course.title} />
                <Card.Body>
                    <p>
                        <strong>Instructor:</strong> {course.instructor}
                    </p>
                    <p>
                        <strong>Credits:</strong> {course.credits}
                    </p>
                    <p>
                        <strong>Duration:</strong> {course.duration}
                    </p>
                    <p>
                        <strong>Category:</strong> {course.category}
                    </p>
                    <hr />
                    <p>{course.detailedDescription}</p>
                </Card.Body>
            </Card>
            {/* Navigation buttons */}
            <div className='d-flex gap-2'>
                <Button as={Link} to='/courses' variant='outline-secondary'>
                    ← Back to Courses
                </Button>
                <Button 
                    as={Link} 
                    to="/register" 
                    state={{courseId: course.id}}
                    variant="primary"
                >
                    Register
                </Button>
            </div>
        </main>
    )
}