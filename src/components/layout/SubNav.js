import React from 'react';
import { Link } from 'react-router-dom';

function SubNav() {
	return (
		<>
			<ul>
				<li>
					<Link to="/" className="sub-nav-dashboard">
						Dashboard
					</Link>
				</li>
				<li>
					<Link to="/service" className="sub-nav-service">
						Service
					</Link>
				</li>
				<li>
					<Link to="/contents" className="sub-nav-contents">
						Contents
					</Link>
				</li>
				<li>
					<Link to="/statistics" className="sub-nav-statis">
						Statistics
					</Link>
					<ul>
						<li>
							<a href="#">Feature Bat</a>
						</li>
					</ul>
				</li>
				<li>
					<Link to="/pre-detection" className="sub-nav-predetection">
						Pre-Detection
					</Link>
				</li>
				<li>
					<Link to="/issue-history" className="sub-nav-issuehistory">
						Issue History
					</Link>
				</li>
			</ul>
		</>
	);
}

export default SubNav;
