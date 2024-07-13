import React, { useState } from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();  //dont go to default behaviour
        console.log('submitted');
        console.log(e.target.name.value)
        console.log(e.target.email)
        console.log(e.target.phone.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>  {/*//handleSubmit(event handler) uses for access form data */}
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="text" name='phone' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;