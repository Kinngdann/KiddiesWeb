import React from 'react';
import TextField from '@mui/material/TextField';

const Textfield = (props) => {

    console.log('text', props);
    
    return (
        <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
        />
    )
}

export default Textfield;