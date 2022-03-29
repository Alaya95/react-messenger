import { useState } from 'react';
export default function Form({ onSubmit }) {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            author: 'name',
            text: value
        });
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input value={value} onChange={handleChange} type="text" />
            <input type="submit" />
        </form>
    )
}