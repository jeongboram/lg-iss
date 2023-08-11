import React from 'react';
import LineChart from '../charts/LineChart';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

// export const options = {
// 	responsive: false,
// 	plugins: {
// 		legend: {
// 			position: 'top',
// 		},
// 		title: {
// 			display: true,
// 			text: 'Chart.js Line Chart',
// 		},
// 	},
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
// 	labels,
// 	datasets: [
// 		{
// 			label: 'Dataset 1',
// 			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
// 			borderColor: 'rgb(255, 99, 132)',
// 			backgroundColor: 'rgba(255, 99, 132, 0.5)',
// 		},
// 		{
// 			label: 'Dataset 2',
// 			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
// 			borderColor: 'rgb(53, 162, 235)',
// 			backgroundColor: 'rgba(53, 162, 235, 0.5)',
// 		},
// 	],
// };

function SideBar() {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log('on submit');
	};

	// const data = {
	// 	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	// 	datasets: [
	// 		{
	// 			label: 'Second dataset',
	// 			data: [33, 25, 35, 51, 54, 76],
	// 			fill: false,
	// 			borderColor: '#742774',
	// 		},
	// 	],
	// };

	return (
		<>
			<div className="sidebar-section">
				<div className="head-title">
					<h1>
						LG Channels
						<br />
						Issue Sensing System
					</h1>
					<button className="btn-refresh">새로고침</button>
				</div>
				<div className="box-total-issue">
					<h2>Total Issues</h2>
					<span className="time">2023-07-13 10:10:00</span>
					<strong>145,555</strong>
				</div>
				<div className="box-summary-tabs">
					<div className="ui-tab-type01">
						<div className="ui-tab-menu">
							<a className="on">Service</a>
							<a>Contents</a>
							<a>Statistics</a>
						</div>
						<div className="ui-tab-contents">
							<div className="tab-box">
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
							</div>
							<div className="tab-box">Contents Tab Contents</div>
							<div className="tab-box">Statistics Tab Contents</div>
						</div>
					</div>
				</div>
				<div className="box-search">
					<h2>Search for Issue Code</h2>
					<div className="field-input-search">
						<form action="#" onSubmit={onSubmit}>
							<i></i>
							<input type="text" placeholder="Search" />
						</form>
					</div>
				</div>
				<div className="box-issues-inquiry">
					<h2>Issue Inquiry</h2>
					<table>
						<tbody>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
						</tbody>
					</table>
				</div>
				<footer>
					<p>
						This data is from the HE Service Operations team Available
						<br />
						based on LG Smart TV automation data.
					</p>
				</footer>
			</div>
		</>
	);
}

export default SideBar;
