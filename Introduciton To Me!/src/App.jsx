import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://github.com/ShardenduMishra22" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="github logo" alt="GitHub Main Account" />
        </a>
        <h2>Main Account</h2>
        <a href="https://github.com/MishraShardendu22" target="_blank" rel="noopener noreferrer">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="github logo" alt="GitHub Project Account" />
        </a>
        <h2>Project Account</h2>
      </div>
      <h1>GitHub Accounts</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
