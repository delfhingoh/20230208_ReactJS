import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const TestComponent = () => 
{
  return (
    <h1>Test</h1>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
  <TestComponent />
);