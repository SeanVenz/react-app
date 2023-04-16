import auth from "./auth";
import { signOut } from "firebase/auth";

export const Logout = () => {

    const handleClick = () => {
        signOut(auth)
        .then(() => {
            console.log('signed out');
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    return(
        <button onClick={handleClick}>Logout</button>
    )
}