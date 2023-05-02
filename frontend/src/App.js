import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {LoginPage,SignupPage} from "./Route.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
// import { getAllProducts } from "./redux/actions/product";

function App() {

  useEffect(() => {
    Store.dispatch(loadUser());
    // Store.dispatch(loadSeller());
    // Store.dispatch(getAllProducts());


  }, []);

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignupPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;