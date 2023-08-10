import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Service from './pages/service';
import Contents from './pages/contents';
import Statistics from './pages/statistics';
import PreDetection from './pages/predetection';
import IssueHistory from './pages/issuehistory';
import Header from './components/layout/Header';
import './styles/font.css';
import './styles/ui.scss';

function App() {
	return (
		<>
			<Header />
			<div className="main-container">
				<div className="inner">
					<Routes>
						<Route exact path="/" element={<Dashboard />} />
						<Route path="/service" element={<Service />} />
						<Route path="/contents" element={<Contents />} />
						<Route path="/statistics" element={<Statistics />} />
						<Route path="/pre-detection" element={<PreDetection />} />
						<Route path="/issue-history" element={<IssueHistory />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
