/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ProjectDetail from './pages/ProjectDetail';
import Indicators from './pages/Indicators';
import PresidencyMessage from './pages/PresidencyMessage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projeto/:id" element={<ProjectDetail />} />
          <Route path="/indicadores" element={<Indicators />} />
          <Route path="/presidencia" element={<PresidencyMessage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
