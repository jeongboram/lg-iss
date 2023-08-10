import React from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DoughnutChart from '../components/charts/DoughnutChart';

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
											<DefaultButton type={'button'} text={'Search'} btnClass={'btn-search'} />
										</div>
									</div>
									<div className="ui-chart-container">
										<DoughnutChart width='300px' height='300px'/>
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
