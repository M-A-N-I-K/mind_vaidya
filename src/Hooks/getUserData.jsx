import { useContext } from "react";
import UserData from "../Context/UserData";

const useUserData = () => {
    return useContext(UserData);
};

export default useUserData;
