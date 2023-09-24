import { createContext, useEffect, useState } from "react";
import getUser from "../Hooks/getUser";
import { retrieveData, getMostRecentDocument } from "../Config/userSuggestions"

const initContextState = [];

const UserData = createContext(initContextState);

export const UserDataProvider = ({ children }) => {
    const [user] = getUser();
    const [data, setData] = useState([]);
    const [recentDoc, setRecentDoc] = useState([]);
    useEffect(() => {
        retrieveData(user?.email)
            .then((docs) => {
                setData(docs);
            })
            .catch((err) => console.log(err.message));

        getMostRecentDocument(user?.email)
            .then((doc) => {
                setRecentDoc(doc);
            })
            .catch((err) => console.log(err.message));
    }, [user?.email])
    return (
        <UserData.Provider value={{ data, setData, recentDoc }}>
            {children}
        </UserData.Provider>
    );
};

export default UserData;
