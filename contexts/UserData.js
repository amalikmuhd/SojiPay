import React, { useState } from 'react';

const UserDataContext = React.createContext('');

const UserDataProvider = ({ children }) => {
  const [data, setData] = useState({ name: 'Malik', age: 32 });

  return <UserDataContext.Provider value={{ data, setData }}>{children}</UserDataContext.Provider>;
};

export { UserDataContext, UserDataProvider };
