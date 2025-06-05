import { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { 
    TextField, Button, FormControl, InputLabel, 
    Select, MenuItem, Dialog, DialogTitle, 
    DialogContent, DialogActions 
} from '@mui/material'
import { RegCoursesContext } from '../contexts/RegCoursesContext'
import courses from '../assets/courses.json'

export default function Register() {
    const location = useLocation();
    //Setting up states..
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [courseId, setCourseId] = useState(location.state?.courseId || '');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [errors, setErrors] = useState({
        name: false, 
        email: false, 
        course: false
    });
    //..and context
    const { registerCourse } = useContext(RegCoursesContext);

    const selectedCourse = courses.find((c) => c.id === courseId);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            name: name.trim() === '',
            email: !/^\S+@\S+\.\S+$/.test(email),
            course: courseId === ''
        };
        setErrors(newErrors);
        if(!newErrors.name && !newErrors.email && !newErrors.course) {
            //If valid register
            registerCourse(courseId);
            setDialogOpen(true);
        }
    }
    return (
        <main>
            <h1>Register</h1>
            <form noValidate onSubmit={handleSubmit}>
                <TextField
                    label='Name'
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    required
                    error={errors.name}
                    helperText={errors.name ? 'Name is required' : ''}
                    fullWidth
                    margin='normal'
                />
                <TextField 
                    label="Email" 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                    error={errors.email} 
                    helperText={errors.email ? "Enter a valid email" : ""} 
                    fullWidth 
                    margin="normal"
                />
                <FormControl fullWidth margin='normal' error={errors.course}>
                    <InputLabel id='course-select-label'>Course</InputLabel>
                    <Select
                        labelId='course-select-label'
                        value={courseId}
                        onChange={e => setCourseId(e.target.value)}
                        required
                    >
                        <MenuItem value=''><em>None</em></MenuItem>
                        {courses.map(c => (
                            <MenuItem key={c.id} value={c.id}>{c.title}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button type='submit' variant='contained' color='primary'>Submit</Button>
            </form>

            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Register Successful</DialogTitle>
                <DialogContent>
                    <p>Thank you, {name}. You have registered for the course {''}
                        <strong>{selectedCourse ? selectedCourse.title : ''}</strong>.</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </main>
    )
}