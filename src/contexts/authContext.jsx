import React, { useState, createContext ,useEffect } from "react";
import { login, signup } from "../api/tmdb-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [email, setEmail] = useState("");


  useEffect(() => {
    // Update authentication status when the authToken changes
    setIsAuthenticated(!!authToken);
  }, [authToken]);
  //Function to put JWT token in local storage.
  const setToken = (data) => {
    console.log("setting ittt")
    localStorage.setItem("token", data);
    setAuthToken(data);
  }
  const setId = (id) => {
    console.log("setting ittt")
    localStorage.setItem("id", id);
    
  }

  const authenticate = async (email, password) => {
    const result = await login(email, password);
    const {token,id} = result
    console.log("the token ",token)
    if (result.token && id) {
     
      setToken(result.token)
      setId(id)
      setIsAuthenticated(true);
      setEmail(email);
    }
  };

  const register = async (email, password, firstName, lastName) => {
    const result = await signup(email, password, firstName,lastName);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        email
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
