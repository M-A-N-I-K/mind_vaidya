import { createContext, useState } from "react";

const initState = "";

const initContextState = [];

const UserSuggestions = createContext(initContextState);

export const UserSuggestionsProvider = ({ children }) => {
	const [result, setResult] = useState(initState);
	const [parsedResult,setParsedResult] = useState({});
	return (
		<UserSuggestions.Provider value={{ result, setResult,parsedResult,setParsedResult }}>
			{children}
		</UserSuggestions.Provider>
	);
};

export default UserSuggestions;
