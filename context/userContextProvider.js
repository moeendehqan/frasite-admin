// MyContextProvider.js
import React, { useState } from 'react';
import UserContext from './userContext';

const UserContextProvider = ({ children }) => {
    const [value, setValue] = useState('');

    return (
        <UserContext.Provider value={{ value, setValue }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
