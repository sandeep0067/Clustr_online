import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../SkillSwap/src/App.jsx';
import SkillNetApp from './App.jsx';

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<SkillNetApp />} />
      <Route path="/auth" element={<SkillNetApp />} />
      <Route path="/profile/:profileId?" element={<SkillNetApp />} />
      <Route path="/explore" element={<SkillNetApp />} />
      <Route path="/search" element={<SkillNetApp />} />
      <Route path="/friends" element={<SkillNetApp />} />
      <Route path="/bookmarks" element={<SkillNetApp />} />
      <Route path="/messages/:chatUserId?" element={<SkillNetApp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
