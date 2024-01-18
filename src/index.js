import React from 'react';
//import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
import App from './App'; // Import App using the correct path

import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);

// const root = document.getElementById('root');
// const reactRoot = ReactDOM.createRoot(root);
// reactRoot.render(<App />);