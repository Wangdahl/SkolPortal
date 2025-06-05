import { useParams, Link } from "react-router-dom";
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import newsList from '../assets/news.json';

export default function NewsArticle() {
    //Grab id from URL
    const { id } = useParams();
    const numericId = parseInt(id, 10);
    //Find matching news item in the array
    const articleIndex = newsList.findIndex((n) => n.id === numericId);
    //If no article is found..
    if (articleIndex === -1) {
    return (
        <div className="text-center mt-5">
            <h3>Article not found.</h3>
            <Button 
                as={Link} 
                to="/news" 
                variant="secondary" 
                className="mt-3"
            >
                ← Back to News
            </Button>
        </div>
        );
    }
    // Pull the current article object
    const article = newsList[articleIndex];
    // Compute previous and next IDs
    const prevIndex = articleIndex - 1;
    const nextIndex = articleIndex + 1;
    const prevId = prevIndex >= 0 ? newsList[prevIndex].id : null;
    const nextId = nextIndex < newsList.length ? newsList[nextIndex].id : null;
    //Random placeholder pic
    const num = 13
    const imgUrl = `https://picsum.photos/seed/news-${article.id * num}/1600/800`;

    return(
        <main className="mb-5">
            <h1 className="mb-4">{article.title}</h1>
            {/* Previous / next buttons */}
            <div className="d-flex justify-content-between mb-3">
                {prevId !== null ? (
                    <Button
                        as={Link}
                        to={`/news/${prevId}`}
                        variant='outline-primary'
                        size='sm'
                        className="small-btn"
                    >
                        ← Previous
                    </Button>
                ) : (
                    <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        disabled
                        className="small-btn"
                    >
                        ← Previous
                    </Button>
                )}
                {nextId !== null ? (
                    <Button
                        as={Link}
                        to={`/news/${nextId}`}
                        variant="outline-primary"
                        size="sm"
                        className="small-btn"
                    >
                        Next →
                    </Button>
                    ) : (
                    <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        disabled
                        className="small-btn"
                    >
                        Next →
                    </Button>
                )}
            </div>

            {/* Card with the article */}
            <Card className="mb-4">
                <Card.Img variant='top' src={imgUrl} alt={article.title} />
                <Card.Body>
                    <p>
                        <strong>Author:</strong> {article.author}
                    </p>
                    <p>
                        <strong>Date:</strong> {article.datePublished}
                    </p>
                    <hr />
                    <p>{article.body}</p>
                </Card.Body>
            </Card>
            <Button as={Link} to='/news' variant="outline-secondary">
                ← Back to News
            </Button>
        </main>
    )
}