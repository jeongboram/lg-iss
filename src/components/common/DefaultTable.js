import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';

export const DEFAULT_TITLE = 'title';

function createData(head1, head2, head3, head4, head5) {
	return { head1, head2, head3, head4, head5 };
}

const rows = [
	createData(
		'Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt',
		159,
		6.0,
		24,
		4.0,
	),
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

const DefaultTable = (props) => {
	const { height, tableTitle, pagination } = props;

	return (
		<>
			{tableTitle && (
				<div className="head">
					<div className="title">
						<h2>{tableTitle || DEFAULT_TITLE}</h2>
						<div className="ui-tooltip">
							<i>툴팁</i>
							<div className="tooltip">tooltip</div>
						</div>
					</div>
				</div>
			)}
			<TableContainer component={Paper} className="tableWrapper" style={{ height: `${height}` }}>
				<Table stickyHeader={true} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Head1</TableCell>
							<TableCell>Head2</TableCell>
							<TableCell>Head3</TableCell>
							<TableCell>Head4</TableCell>
							<TableCell>Head5</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.head1}>
								<TableCell component="th" scope="row">
									<div className="ellipsis">{row.head1}</div>
								</TableCell>
								<TableCell>{row.head2}</TableCell>
								<TableCell>{row.head3}</TableCell>
								<TableCell>{row.head4}</TableCell>
								<TableCell>{row.head5}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{pagination && <Pagination count={10} showFirstButton showLastButton className="ui-pagination" />}
		</>
	);
};

export default DefaultTable;
