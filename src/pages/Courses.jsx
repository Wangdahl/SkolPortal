import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'react-bootstrap'

import courses from '../assets/courses.json'

export default function Courses() {
    return (
        <main>
            <h2 className='mb-4'>Courses</h2>
            <Row xs={1} md={2} lg={3} className='g-4'>
                {courses.map((course) => {
                    const imgUrl = `https://picsum.photos/seed/course-${course.id * 4}/600/300`;

                    return (
                        <Col key={course.id}>
                            <Card className='h-100'>
                                <Card.Img
                                    variant='top'
                                    src={imgUrl}
                                    alt={course.title}
                                />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>{course.shortDescription}</Card.Text>
                                    <div className='mt-auto'>
                                        <Button
                                            as={Link}
                                            to={`/courses/${course.id}`}
                                            variant='primary'
                                        >
                                            Read more
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </main>
    )
}