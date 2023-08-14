import React from 'react';
import LineChart from '../charts/LineChart';

function ContentsTab() {

	const content_issue_data = {
		labels: ['01시', '02시', '03시', '04시', '05시','06시' ,'07시' ,'08시' ,'09시' ,'10시' ,'11시' ,'12시','13시', '14시', '15시','16시' ,'17시' ,'18시' ,'19시' ,'20시', '21시', '22시', '23시', '24시'],
		datasets: [
			{
				label: 'status of issues',
				data: [-0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0, 0, 0, 0, 0, 0, 0, 0, 1, -0.5],
				fill: false,
				borderColor: '#9D8DF7',
				//point style
				pointBorderColor: '#9D8DF7',
				pointBackgroundColor: '#9D8DF7',
				pointBorderWidth: 2,
			}
		],
	};

	const content_issue_data_option = {
		maintainAspectRatio : false,
		legend: {
			display: false,
		},
		scales: {
			y: {
				min: -1,
				max: 2,
			}
		},
	}

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
					<LineChart id={"ContentsTab"} data={content_issue_data} options={content_issue_data_option} />
				</div>
			</div>
		</div>
	);
}

export default ContentsTab;
