import React, { useState } from 'react'

export default function Signup() {
    const [userdata, setUserdata] = useState({ username: "", email: "", password: ""});

    return (
        <div className="wrapper">
            <fieldset>
                <legend>Sign Up</legend>
            </fieldset>
        </div>
    )
}
