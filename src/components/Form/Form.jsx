import { Button, TextField } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Form.styles.scss';

export default function Form({ onSubmit }) {
    const [value, setValue] = useState('');

    const inpuFocusRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        inpuFocusRef.current?.focus();
    });

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="demo-helper-text-misaligned"
                label="Введите сообщение"
                value={value}
                onChange={handleChange}
                inputRef={inpuFocusRef}
            />
            <Button variant='outlined' type="submit">Submit</Button>
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func
}