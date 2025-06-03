import React from 'react';

function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <h1>Welcome to My Portfolio</h1>
      <button onClick={onStart} className="start-button">
        Get Started 🚀
      </button>
    </div>
  );
}

export default StartPage;
