'use client';

import { createContext, useState } from 'react';

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

export const UserContext = createContext<User>({
  name: "",
  username: "",
  email: "",
  password: "",
  setName: () => {},
  setUsername: () => {},
  setEmail: () => {},
  setPassword: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        username,
        email,
        password,
        setName,
        setUsername,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};