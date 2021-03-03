import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {

  const {dispatch} = useContext(AuthContext);
  

  const handleLogin = () => {
    //history.replace("/");
    const lastPath = localStorage.getItem('lastPath')|| '/';
    const user = {
      nombre: 'Andres'
    }
    
    const action = {
      type: types.login,
      payload: user
    }
    dispatch(action);
    
    history.replace(lastPath);
};
  return (
    <div className="container mt-5">
      <h1>loginApp</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
