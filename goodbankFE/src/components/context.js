import React, { useState } from "react";

// Context for storing user database
const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentBalance, setCurrentBalance] = useState(0);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentEmail,
        setCurrentEmail,
        currentBalance,
        setCurrentBalance,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };
