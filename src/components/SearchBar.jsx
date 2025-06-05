import {InputGroup, FormControl, Button} from 'react-bootstrap'

// A reusable search bar with a clear button
export default function SearchBar({ value, onChange, onClear}) {
    return(
        <InputGroup className='mb-3'>
            {/* Text input for search term */}
            <FormControl
                placeholder='Search news...'
                value={value}
                onChange={onChange}
            />
            {/* Button to clear the search field */}
            <Button variant='outline-secondary' onClick={onClear}>
                Clear
            </Button>
        </InputGroup>
    )
}