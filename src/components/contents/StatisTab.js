import React from 'react';
import LineChart from '../charts/LineChart';

function StatisTab() {

	const statis_status_issue_data = {
		labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
		datasets: [
			{
				label: 'status of issues',
				data: [-0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0, 0, 0, 0, 0, 0, 0, 0, 1, -0.5],
				fill: false,
				borderColor: '#9D8DF7',
				//point style
				pointBorderColor: '#9D8DF7',
				pointBackgroundColor: '#9D8DF7',
				pointBorderWidth: 2,
			}
		],
	};

	const statis_status_issue_data_option = {
		maintainAspectRatio : false,
		legend: {
			display: false,
		},
		scales: {
			y: {
				min: -1,
				max: 2,
			},
			x: {
				ticks: {
					stepSize: 2,	//해당 축 값 표기 기준
					callback : function(value, index, ticks) {
						return value + '시';
					}
				},
			},
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
					<LineChart id={"StatisTab"} data={statis_status_issue_data} options={statis_status_issue_data_option} />
				</div>
			</div>
		</div>
	);
}

export default StatisTab;
