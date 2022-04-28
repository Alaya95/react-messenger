
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { logIn, signUp } from "../../services/firebase";

export const Home = ({ isSignUp }) => {
    const [error, setError] = useState("");
    const handleSubmit = async ({ login, pass }) => {

        try {
            if (isSignUp) {
                await signUp(login, pass);
            } else {
                await logIn(login, pass);
            }
        } catch (error) {
            setError(error.message);
        }

    }

    return (
        <>
            <div>Home page</div>

            <LoginForm onSubmit={handleSubmit} />

            {error && <div>{error}</div>}

            <Link to={isSignUp ? '/' : '/signup'} >

                {isSignUp ? 'to login' : 'to signup'}
            </Link>

            {/* <button onClick={onAuth}>Auth</button> */}

            form
        </>
    )
}