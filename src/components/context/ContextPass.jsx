import { createContext } from 'react';

export const UserContext = createContext(null);

const ContextPass = ({ children }) => {
  const user = { name: 'badol', email: 'badol@gmail.com' };

  const pass = { user };
  return <UserContext.Provider value={pass}>{children}</UserContext.Provider>;
};

export default ContextPass;
