import { useContext } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RegCoursesContext } from '../contexts/RegCoursesContext'
import courses from '../assets/courses.json'

export default function MyCourses() {
    // Get the array of registrations from context
    const { registered } = useContext(RegCoursesContext);

    //If not registered for any courses
    if(registered.length === 0) {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6} className="text-center mt-5">
                        <h3>You haven’t registered for any courses yet.</h3>
                        <Button as={Link} to="/courses" variant="primary" className="mt-3">
                            Browse Courses
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <main className="mb-5">
            <Container>
                <Row className='justify-content-center'>
                    {/* Center column that limits width on larger screens */}
                    <Col xs={12} md={8} lg={6}>
                        <h1 className='mb-4'>My Courses</h1>
                        {/* Loop through each registration and display course info */}
                        {registered.map((reg, idx) => {
                            const course = courses.find((c) => c.id === reg.courseId);
                            {/*If not found, skip */}
                            if(!course) return null;

                            return (
                                <Card key={idx} className='mb-3'>
                                    <Card.Body>
                                        <Card.Title>{course.title}</Card.Title>
                                        <p>
                                            <strong>Instructor:</strong> {course.instructor}
                                        </p>
                                        <p>
                                            <strong>Credits:</strong> {course.credits}
                                        </p>
                                        <p>
                                            <strong>Duration:</strong> {course.duration}
                                        </p>
                                        <hr />
                                        <p>
                                            <strong>Your Name:</strong> {reg.name}
                                            <br />
                                            <strong>Your Email:</strong> {reg.email}
                                        </p>
                                        <Button
                                            as={Link}
                                            to={`/courses/${course.id}`}
                                            variant='outline-primary'
                                            size='sm'
                                        >
                                            View Course Details
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}