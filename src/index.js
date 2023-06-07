import React from "react";
import App from './components/App';
import { createRoot } from 'react-dom/client';
import './styles/main.scss'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);