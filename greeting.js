import React, { useState } from 'react';

function Greeting(props) {
  const [name, setName] = useState(props.name);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Hello, {name}!</h1>

      <button onClick={() => setName('React Learner')} style={{ margin: '10px' }}>
        Change Name
      </button>

      <button onClick={toggleDetails} style={{ margin: '10px' }}>
        {showDetails ? 'Hide Details' : 'Show More'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <p>🎓 You're learning <strong>ReactJS</strong> — a JavaScript library for building UIs.</p>
          <p>🔥 This component uses <strong>props</strong>, <strong>useState</strong>, and <strong>JSX</strong>.</p>
        </div>
      )}
    </div>
  );
}

export default Greeting;
