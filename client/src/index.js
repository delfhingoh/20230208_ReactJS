import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const TestComponent = () => 
{
  return (
    <div className="container">
      <h1>Test</h1>
      <button className="btn">Button</button>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
  <TestComponent />
);