import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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

const DefaultTable = (props) => {
	const useStyles = makeStyles({
		tableWrapper: {
			width: '100%',
			height: props.height,
			backgroundColor: 'transparent',
			borderRadius: '0',
		},
		table: {
			width: '100%',
			backgroundColor: '#1c1c1c',
		},
		thead: {
			backgroundColor: '#1c1c1c',
			color: '#B8B8B8',
			fontSize: '11px',
			borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
			padding: '8px 4px',
		},
		tbody: {
			backgroundColor: '#1c1c1c',
			color: '#fff',
			fontSize: '12px',
			borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
			padding: '8px 4px',
		},
	});

	const classes = useStyles();

	console.log('props', props.height);

	return (
		<TableContainer component={Paper} className={classes.tableWrapper}>
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
	);
};

export default DefaultTable;
