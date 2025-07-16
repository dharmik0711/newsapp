import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <Router>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route
          path="/"
          element={<News key="general" country="us" category="general" mode={mode} />}
        />
        <Route
          path="/business"
          element={<News key="business" country="us" category="business" mode={mode} />}
        />
        <Route
          path="/entertainment"
          element={<News key="entertainment" country="us" category="entertainment" mode={mode} />}
        />
        <Route
          path="/health"
          element={<News key="health" country="us" category="health" mode={mode} />}
        />
        <Route
          path="/general"
          element={<News key="general" country="us" category="general" mode={mode} />}
        />
        <Route
          path="/science"
          element={<News key="science" country="us" category="science" mode={mode} />}
        />
        <Route
          path="/sports"
          element={<News key="sports" country="us" category="sports" mode={mode} />}
        />
        <Route
          path="/technology"
          element={<News key="technology" country="us" category="technology" mode={mode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
