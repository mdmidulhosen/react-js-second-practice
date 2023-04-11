import React, { useState } from 'react';

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            Password,
        }
        console.log(newUser);
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Form</h1>

            <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>

                <input type="text" id='name' name='name' placeholder='Your Name' onChange={handleChange} />
                <input type="email" id='name' name='name' placeholder='Your Email' onChange={handleEmailChange} />
                <input type="password" id='name' name='name' placeholder='Your Password' onChange={handlePasswordChange} />

                <button type='Submit' >Submit</button>
            </form>
        </>
    )
}

export default SignUp