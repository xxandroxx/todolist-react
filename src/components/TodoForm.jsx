import React, { useEffect, useRef, useState } from 'react'

export const TodoForm = (props) => {

    const [input, setInput] = useState('');


    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('');

    }

    const handleChange = e =>{
        setInput(e.target.value);

    }



    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            
        <input type="text"
                placeholder='Todo list here'
                onChange={handleChange}
                value={input}
                name='text'
                className='todo-input'
                autoComplete='off'
                ref={inputRef}
        />

        <button className='todo-button'>Add</button>
            
        </form>
    )
}
