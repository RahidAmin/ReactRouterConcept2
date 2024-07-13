import React, { useState } from 'react';

const StateFullForm = () => {
    const [name, setName] = useState('Md:')
    const [email, setEmail] = useState(null);  //controlled component
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        //console.log(e.target.value)
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);



    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password should be 6 character or longer');
        } else {
            setError('')
            console.log(name, email, password)

        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>  {/*'value' and 'required' can be added in the input field */}
                <input value={name} onChange={handleName} type="name" name='name' />
                <br />
                <input required onChange={handleEmailChange} type="email" name='email' />
                <br />
                <input onChange={handlePassword} type="password" name='password' />
                <br />
                <input type="submit" name='Submit' />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;