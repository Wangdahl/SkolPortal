import { useState } from 'react'
import { ListGroup, Pagination, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import newsList from '../assets/news.json'

export default function News() {
    // State for search term
    const [search, setSearch ] = useState('');
    //State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    //Filter news by title based on search input
    const filteredNews = newsList.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    // Calculate page count and slice out items for current page
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const startIndex = (currentPage -1) * itemsPerPage;
    const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

    return (
        <main className="mb-5">
            <h1 className='mb-4'>News</h1>
            {/* SearchBar updates `search` and resets to page 1 on change */}
            <SearchBar
                value={search}
                onChange={e => {setSearch(e.target.value); setCurrentPage(1);}}
                onClear={() => setSearch('')}
            />
            {/* List of news excerpts */}
            <ListGroup>
                {paginatedNews.map(item => (
                    <ListGroup.Item key={item.id} className='mb-3'>
                        <h2>{item.title}</h2>
                        <p>{item.excerpt}</p>
                        <small>
                            {item.author} - {item.datePublished}
                        </small>
                        <div className='mt-2'>
                            <Button 
                                as={Link}
                                to={`/news/${item.id}`}
                                variant='primary'
                                size='sm'
                            >
                                Read more
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            {/* Pagination controls shown only if more than one page */}
            {totalPages > 1 && (
                <div className='d-flex justify-content-center mt-3'>
                    <Pagination>
                        <Pagination.First
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                        />
                        <Pagination.Prev
                            onClick={() => setCurrentPage(prev => Math.max(prev -1, 1))}
                            disabled={currentPage === 1}
                        />
                        {[...Array(totalPages)].map((_, i) => (
                            <Pagination.Item
                                key={i + 1}
                                active={i + 1 === currentPage}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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