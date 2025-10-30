import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignIn from "./Auth/signin";
import SignUp from "./Auth/signup";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
