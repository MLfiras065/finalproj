import React, { useEffect, useState,createContext,useContext, useReducer } from "react";
const initialState = {
    userId: null,
  };

 
  const SET_USER = 'SET_USER';
  const LOGOUT = 'LOGOUT';
  const userReducer = (state, action) => {
    switch (action.type) {
      case SET_USER:
        return { ...state, userId: action.payload };
      case LOGOUT:
        return { ...state, userId: null
};
      default:
        return state;
    }
  };
  const UserContext = createContext(initialState)
  export const useUser = () => {
    return useContext(UserContext);
  };
  const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
  
    const setUser = (userId) => {
        dispatch({ type: SET_USER, payload: userId });
      };
  
    return (
      <UserContext.Provider value={{ user: state, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
    
  export default UserProvider
  
  
  
  
  
  