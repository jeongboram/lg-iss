import React from 'react';
import LineChart from '../charts/LineChart';

function ContentsTab() {
	return (
		<div className="contents-service">
			<div className="line">
				<h3>Issue Count</h3>
				<div className="num-summary">
					<strong>1,842</strong>
					<span className="new">5</span>
				</div>
			</div>
			<div className="line">
				<h3>Unaddressed</h3>
				<div className="num-summary">
					<strong>76</strong>
				</div>
			</div>
			<div className="line">
				<h3>Precessing</h3>
				<div className="num-summary">
					<strong>95</strong>
				</div>
			</div>
			<div className="ui-chart-container">
				<h3>
					Status of issues by time zone <span>(Based on UTC)</span>
				</h3>
				<div className="chart-wrap">
					<LineChart />
				</div>
			</div>
		</div>
	);
}

export default ContentsTab;
