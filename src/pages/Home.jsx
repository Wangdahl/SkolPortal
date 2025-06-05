import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main className="text-center mb-5">
            {/* welcome section */}
            <div className='text-center mb-4'>
                <h1>Welcome to StudentPortal</h1>
                <p className='lead'>Explore courses and the latest news here.</p>
            </div>
            {/* Card links */}
            <Row xs={1} md={2} className='g-4'>
                {/*Courses */}
                <Col>
                    <Card className='h-100'>
                        <Card.Img
                            variant='top'
                            src="https://picsum.photos/id/1/600/300"
                            alt='Browse Courses'
                        />
                        <Card.Body className='d-flex flex-column'>
                            <Card.Title>Our Courses</Card.Title>
                            <Card.Text>Discover all available courses—see descriptions, plan, and more.</Card.Text>
                            <div className='mt-auto'>
                                <Button
                                    as={Link}
                                    to='/courses'
                                    variant='primary'
                                >
                                    View Courses
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/*News */}
                <Col>
                    <Card className='h-100'>
                        <Card.Img
                            variant='top'
                            src="https://picsum.photos/id/71/600/300"
                            alt='Browse Courses'
                        />
                        <Card.Body className='d-flex flex-column'>
                            <Card.Title>Latest News</Card.Title>
                            <Card.Text>Stay up to date with campus announcements, blog posts, and more.</Card.Text>
                            <div className='mt-auto'>
                                <Button
                                    as={Link}
                                    to='/news'
                                    variant='primary'
                                >
                                    Read News
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </main>
    )
}