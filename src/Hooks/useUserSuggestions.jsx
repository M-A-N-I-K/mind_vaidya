import { useContext } from "react";
import UserSuggestions from "../Context/UserSuggestionsProvider"

const useUserSuggestions = () => {
    return useContext(UserSuggestions);
};

export default useUserSuggestions;
