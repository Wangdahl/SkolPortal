import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Pagination } from 'react-bootstrap'

import courses from '../assets/courses.json'

export default function Courses() {
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(courses.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCourses = courses.slice(startIndex, endIndex);

    return (
        <main className="mb-5">
            <h2 className='mb-4'>Courses</h2>
            <Row xs={1} md={2} lg={3} className='g-4'>
                {paginatedCourses.map((course) => {
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
            {/* Pagination controls */}
            {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    <Pagination>
                        <Pagination.First
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                        />
                        <Pagination.Prev
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={currentPage === 1}
                        />
                        {[...Array(totalPages)].map((_, idx) => (
                            <Pagination.Item
                                key={idx + 1}
                                active={idx + 1 === currentPage}
                                onClick={() => setCurrentPage(idx + 1)}
                            >
                                {idx + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            onClick={() =>
                                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                            }
                            disabled={currentPage === totalPages}
                        />
                        <Pagination.Last
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                        />
                    </Pagination>
                </div>
            )}
        </main>
    )
}