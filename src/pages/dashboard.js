import React, { useEffect, useState } from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DropDown from '../components/common/DropDown';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ['LG Channels App Issues', 'Image Issues', 'Channel Map Issues', 'Schedule Issues', 'Playback Issues'],
	datasets: [
		{
			label: 'AIC(US)',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(157, 141, 247, 1)',
				'rgba(233, 146, 227, 1)',
				'rgba(133, 221, 219, 1)',
				'rgba(76, 132, 224, 1)',
				'rgba(246, 192, 101, 1)',
			],
			borderWidth: 0,
			borderRadius: 2,
			cutout: '70%',
		},
		{
			label: 'EIC(EU)',
			data: [0],
			backgroundColor: [
				'rgba(157, 141, 247, 1)',
				'rgba(233, 146, 227, 1)',
				'rgba(133, 221, 219, 1)',
				'rgba(76, 132, 224, 1)',
				'rgba(246, 192, 101, 1)',
			],
			borderWidth: 0,
			borderRadius: 2,
			cutout: '70%',
		},
		{
			label: 'KIC(BR)',
			data: [10, 5],
			backgroundColor: [
				'rgba(157, 141, 247, 1)',
				'rgba(233, 146, 227, 1)',
				'rgba(133, 221, 219, 1)',
				'rgba(76, 132, 224, 1)',
				'rgba(246, 192, 101, 1)',
			],
			borderWidth: 0,
			borderRadius: 2,
			cutout: '70%',
		},
		{
			label: 'EIC(JA)',
			data: [10,20],
			backgroundColor: [
				'rgba(157, 141, 247, 1)',
				'rgba(233, 146, 227, 1)',
				'rgba(133, 221, 219, 1)',
				'rgba(76, 132, 224, 1)',
				'rgba(246, 192, 101, 1)',
			],
			borderWidth: 0,
			borderRadius: 2,
			cutout: '70%',
		},
		{
			label: 'KIC(AJ)',
			data: [20, 5],
			backgroundColor: [
				'rgba(157, 141, 247, 1)',
				'rgba(233, 146, 227, 1)',
				'rgba(133, 221, 219, 1)',
				'rgba(76, 132, 224, 1)',
				'rgba(246, 192, 101, 1)',
			],
			borderWidth: 0,
			borderRadius: 2,
			cutout: '70%',
		},
		{
			label: 'KIC(KR)',
			data: [10],
			backgroundColor: [
				'rgba(157, 141, 247, 1)',
				'rgba(233, 146, 227, 1)',
				'rgba(133, 221, 219, 1)',
				'rgba(76, 132, 224, 1)',
				'rgba(246, 192, 101, 1)',
			],
			borderWidth: 0,
			borderRadius: 2,
			cutout: '70%',
		},
	],
};

const useStyles = makeStyles({
	tableWrapper: {
		width:'100%',
		height: '263px',
		backgroundColor: 'transparent',
		borderRadius: '0'
	},
	table: {
		width:'100%',
		backgroundColor: '#1c1c1c',
	},
	thead: {
		backgroundColor: '#1c1c1c',
		color: '#B8B8B8',
		fontSize: '11px',
		borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
		padding: '8px 4px'
	},
	tbody: {
		backgroundColor: '#1c1c1c',
		color: '#fff',
		fontSize: '12px',
		borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
		padding: '8px 4px'
	}
	
});

function createData(head1, head2, head3, head4, head5) {
	return { head1, head2, head3, head4, head5 };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Frozen yoghurt2', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich2', 237, 9.0, 37, 4.3),
	createData('Eclair2', 262, 16.0, 24, 6.0),
	createData('Cupcake2', 305, 3.7, 67, 4.3),
	createData('Gingerbread2', 356, 16.0, 49, 3.9),
];




const Dashboard = () => {
	const [region, setRegion] = useState([]);
	const [countries, setCountries] = useState([]);

	const classes = useStyles();

	useEffect(() => {
		fetch('/region')
			.then((response) => response.json())
			.then((data) => {
				setRegion(data);
			});

		fetch('/countries')
			.then((response) => response.json())
			.then((data) => {
				setCountries(data);
			});
	}, []);

	return (
		<>
			<div className="contents-section-container">
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
										<DropDown item={region} />
										<DropDown item={countries} />
										<DefaultButton type={'button'} text={'Search'} btnClass={'btn-search'} />
									</div>
								</div>
								<div className="ui-chart-container">
									<div style={{ width: '100%', height: '100%' }}>
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
											<TableContainer component={Paper} className={classes.tableWrapper} >
												<Table stickyHeader={true} className={classes.table} aria-label="simple table">
													<TableHead>
														<TableRow>
															<TableCell className={classes.thead}>Head1</TableCell>
															<TableCell className={classes.thead}>Head2</TableCell>
															<TableCell className={classes.thead}>Head3</TableCell>
															<TableCell className={classes.thead}>Head4</TableCell>
															<TableCell className={classes.thead}>Head5</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														{rows.map((row) => (
															<TableRow key={row.head1}>
																<TableCell component="th" scope="row" className={classes.tbody}>
																	{row.head1}
																</TableCell>
																<TableCell className={classes.tbody}>{row.head2}</TableCell>
																<TableCell className={classes.tbody}>{row.head3}</TableCell>
																<TableCell className={classes.tbody}>{row.head4}</TableCell>
																<TableCell className={classes.tbody}>{row.head5}</TableCell>
															</TableRow>
														))}
													</TableBody>
												</Table>
											</TableContainer>
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
		</>
	);
};
export default Dashboard;
