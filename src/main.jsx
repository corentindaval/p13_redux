import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Page_sign_in from "./pages/sign-in"
import Page_user from "./pages/user"
import Page_transaction from "./pages/transaction"
import Redirection from "./composants/redirection"

const container = document.getElementById('root');
const root = createRoot(container);
/*
store.dispatch(getPosts())
store.dispatch(getUser())
*/
root.render(
  <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route element={<Redirection />}>
                        <Route path="/profile" element={<Page_user />} />
                        <Route path="/profile/transaction" element={<Page_transaction />} />
                    </Route>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Page_sign_in/> } />
                </Routes>
            </Router>
     
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
