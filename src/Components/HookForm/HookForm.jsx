import React from 'react';
import useInputState from '../../Hooks/useInputState';

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rahid')
    const emailState = useInputState('ra@go.com')

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        console.log(emailState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" name='name' onChange={handleNameChange} />
                <br /> */}
                <input {...emailState} type="email" name='email' />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;