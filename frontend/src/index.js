import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';
import { ProvideAuth } from './hooks/useAuth';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <ProvideAuth>
        <App />
    </ProvideAuth>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

