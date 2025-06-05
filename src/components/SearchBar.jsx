import {InputGroup, FormControl, Button} from 'react-bootstrap'

export default function SearchBar({ value, onChange, onClear}) {
    return(
        <InputGroup className='mb-3'>
            <FormControl
                placeholder='Search news...'
                value={value}
                onChange={onChange}
            />
            <Button variant='outline-secondary' onClick={onClear}>
                Clear
            </Button>
        </InputGroup>
    )
}