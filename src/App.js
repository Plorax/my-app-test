import "./App.css";

import { navigator } from "./core/ui/UrlNavigation";
import { useState } from 'react';

function App() {
  const [message, setNavigationUrl] = useState('http://www.google.com/');

  function handleNavigateToUrl(e) {
    e.preventDefault();
    navigator.navigateToPage(message);
  }

  function urlUpdated(e) {
    setNavigationUrl(e.target.value);
    return true;
  }
  return (
    <div className="App">
      <input name="navigationUrl" type='text' data-testid='navigateToUrl' defaultValue='http://www.google.com/' onChange={urlUpdated} />
      <button onClick={handleNavigateToUrl}>Navigate</button>
    </div>
  );
}

export default App;
