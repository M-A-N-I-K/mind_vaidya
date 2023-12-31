import { createContext, useState } from "react";

const initContextState = [];

const UserSuggestions = createContext(initContextState);

export const UserSuggestionsProvider = ({ children }) => {
	const [parsedResult, setParsedResult] = useState({});
	return (
		<UserSuggestions.Provider value={{ parsedResult, setParsedResult }}>
			{children}
		</UserSuggestions.Provider>
	);
};

export default UserSuggestions;
