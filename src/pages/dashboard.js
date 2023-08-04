import React from 'react';
import SideBar from '../components/layout/SideBar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
 {
		label: '# of Votes',
		data: [12, 19, 3, 5, 2, 3],
		backgroundColor: [
			'rgba(255, 99, 132, 0.8)',
			'rgba(54, 162, 235, 0.8)',
			'rgba(255, 206, 86, 0.8)',
			'rgba(75, 192, 192, 0.8)',
			'rgba(153, 102, 255, 0.8)',
			'rgba(255, 159, 64, 0.8)',
		],
		borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
					],
		borderWidth: 1,
		borderRadius: 2,
		cutout: '80%'
 },
	],
  };

const Dashboard = () => {
	return (
		<>
			<div className="main-container">
				<div className="inner">
					<SideBar />
					<div className="contents-section">
						<div className="grid-vertical-two">
							<div className="grid-left">
								<div className="box-worldmap">
									<div className="head">
										<div className="title">
											<h1>Monitoring World Map</h1>
										</div>
										<div className="ui-components-box">
											<div className="ui-dropdown-type01">
												<select>
													<option>all Region</option>
													<option>all Region</option>
													<option>all Region</option>
												</select>
											</div>
											<div className="ui-dropdown-type01">
												<select>
													<option>all Region</option>
													<option>all Region</option>
													<option>all Region</option>
												</select>
											</div>
											<div className="ui-dropdown-type01">
												<select>
													<option>all Region</option>
													<option>all Region</option>
													<option>all Region</option>
												</select>
											</div>
											<button className="btn-search">Search</button>
										</div>
									</div>
									<div className="ui-chart-container">
										<div style={{width: '300px', height: '300px'}}>
											<Doughnut data={data} />
										</div>
									</div>
								</div>
								<div className="grid-column-2">
									<div className="grid-left">
										<div className="box-appIssues box-tbl">
											<div className="head">
												<div className="title">
													<h2>LG Channels App Issues</h2>
													<div className="ui-tooltip">
														<i></i>
														<div className="tooltip">tooltip</div>
													</div>
												</div>
											</div>
											<div className="ui-table-default">
												<table>
													<colgroup>
														<col width={58}></col>
														<col width={44}></col>
														<col width={47}></col>
														<col width={310}></col>
													</colgroup>
													<thead>
														<tr>
															<th scope="col">Date</th>
															<th scope="col">Country</th>
															<th scope="col">Platform</th>
															<th scope="col">Issue Contents</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>Not playable Not playable</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">
																	Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not
																	playable
																</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>Not playable Not playable</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">
																	Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not
																	playable
																</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">
																	Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not
																	playable
																</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>Not playable Not playable</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">
																	Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not
																	playable
																</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>Not playable Not playable</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">
																	Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not
																	playable
																</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">
																	Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not
																	playable
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div className="grid-right">
										<div className="box-playbackIssues box-tbl">
											<div className="head">
												<div className="title">
													<h2>Playback Issues</h2>
													<div className="ui-tooltip">
														<i>툴팁</i>
														<div className="tooltip">tooltip</div>
													</div>
												</div>
											</div>
											<div className="ui-table-default">
												<table>
													<colgroup>
														<col width={58}></col>
														<col width={44}></col>
														<col width={47}></col>
														<col width={310}></col>
													</colgroup>
													<thead>
														<tr>
															<th scope="col">Date</th>
															<th scope="col">Country</th>
															<th scope="col">Platform</th>
															<th scope="col">Issue Contents</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>Not playable Not playable</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">
																	Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not
																	playable
																</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>Not playable Not playable</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">
																	Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not
																	playable
																</span>
															</td>
														</tr>
														<tr>
															<td>23-07-07</td>
															<td>1</td>
															<td>11</td>
															<td>
																<span className="title">
																	Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not
																	playable
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="grid-right">
								<div className="box-imageIssues box-tbl">
									<div className="head">
										<div className="title">
											<h2>Image Issues</h2>
											<div className="ui-tooltip">
												<i>툴팁</i>
												<div className="tooltip">tooltip</div>
											</div>
										</div>
									</div>
									<div className="ui-table-default">
										<table>
											<colgroup>
												<col width={58}></col>
												<col width={44}></col>
												<col width={47}></col>
												<col width={310}></col>
											</colgroup>
											<thead>
												<tr>
													<th scope="col">Date</th>
													<th scope="col">Country</th>
													<th scope="col">Platform</th>
													<th scope="col">Issue Contents</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
													</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>Not playable Not playable</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">
															Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not playable
														</span>
													</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
													</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>Not playable Not playable</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">
															Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not playable
														</span>
													</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">
															Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not playable
														</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="box-secheduleIssues box-tbl">
									<div className="head">
										<div className="title">
											<h2>Schedule Issues</h2>
											<div className="ui-tooltip">
												<i>툴팁</i>
												<div className="tooltip">tooltip</div>
											</div>
										</div>
									</div>
									<div className="ui-table-default">
										<table>
											<colgroup>
												<col width={58}></col>
												<col width={44}></col>
												<col width={47}></col>
												<col width={310}></col>
											</colgroup>
											<thead>
												<tr>
													<th scope="col">Date</th>
													<th scope="col">Country</th>
													<th scope="col">Platform</th>
													<th scope="col">Issue Contents</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
													</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>Not playable Not playable</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">
															Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not playable
														</span>
													</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">Not playable Not playable Not playable Not playable Not playable</span>
													</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>Not playable Not playable</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">
															Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not playable
														</span>
													</td>
												</tr>
												<tr>
													<td>23-07-07</td>
													<td>1</td>
													<td>11</td>
													<td>
														<span className="title">
															Not playable Not playable Not playable Not playable Not playable ot playable Not playable Not playable Not playable Not playable
														</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Dashboard;
