// src/App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SkillAnalysis from './pages/SkillAnalysis';
import NotFound from './pages/NotFound';
import CompaniesAnalyzed from './pages/CompaniesAnalyzed';
const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Skill Analysis</Link> | <Link to="/companies-analyzed">Companies Analyzed</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<SkillAnalysis />} />
        <Route path="/companies-analyzed" element={<CompaniesAnalyzed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
