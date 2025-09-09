import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children, userId = 12, useMock = true }) => {
    return (
        <UserContext.Provider value={{ userId, useMock }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
