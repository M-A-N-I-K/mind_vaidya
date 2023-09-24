import { auth } from "../Config/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const getUser = () => {
    return useAuthState(auth);
}

export default getUser;