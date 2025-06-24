import React, { createContext, useContext, useEffect, useState } from "react";


interface AuthContextType {
  currentUsername: string;
  isLoggedIn: boolean;
  login: (username: string,password:string) => void;
  logout: () => void;
  register: (username: string, password: string, contact: number) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  loading: false,
  currentUsername: "",
  register:()=>{
  }
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentUsername, setCurrentUsername] = useState<string>("");

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLogin === "true");
    setLoading(false);
  }, []);

  const login = (username: string,password:string) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUsername", username);
    setCurrentUsername(username);
    setIsLoggedIn(true);
    console.log(`UserInput:${username } ${password} `)
    //Logic will added later using API
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setCurrentUsername("");
    setIsLoggedIn(false);
    
  };

  const register = (username:string,password:string,contact:number) => {
      console.log("Registering user:", { username, password, contact });
    //Logic will added later using API
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, loading, currentUsername,register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
