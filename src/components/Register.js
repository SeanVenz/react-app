import auth from "./auth"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";

export const Register = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(process.env);
            console.log(user);
            setEmail('');
            setPassword('');
            // Update user state in App.js
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setEmail('');
            setPassword('');
            // Handle error
        });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}