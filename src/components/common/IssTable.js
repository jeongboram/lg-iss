import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

export const ISSTABLE_DEFAULT_TITLE = 'title';

const IssTable = (props) => {
	const { height, tableTitle, pagination } = props;

	const useStyles = makeStyles({
		tableWrapper: {
			width: '100%',
			height: height,
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
		color: {
			color: '#FFFFFF'
		},
		leftIconButton: {
			color: '#B8B8B8'
		},
		rightIconButton: {
			color: '#B8B8B8'
		}
	});

	const classes = useStyles();

	const data = {
		header: ['head1', 'head2', 'head3', 'head4', 'head5', 'head6'],
		rowdata: [
			{ row: ['Frozen yoghurt', 159, 6.0, 24, 4.0, 1] },
			{ row: ['Ice cream sandwich', 237, 9.0, 37, 4.3, 1] },
			{ row: ['Eclair', 262, 16.0, 24, 6.0, 1] },
			{ row: ['Cupcake', 305, 3.7, 67, 4.3, 1] },
			{ row: ['Gingerbread', 356, 16.0, 49, 3.9, 1] },
			{ row: ['Frozen yoghurt2', 159, 6.0, 24, 4.0, 1] },
			{ row: ['Ice cream sandwich2', 237, 9.0, 37, 4.3, 1] },
			{ row: ['Eclair2', 262, 16.0, 24, 6.0, 1] },
			{ row: ['Cupcake2', 305, 3.7, 67, 4.3, 1] },
			{ row: ['Gingerbread2', 356, 16.0, 49, 3.9, 1] },
		],
	};

	return (
		<>
			<div className="head">
				<div className="title">
					<h2>{tableTitle || ISSTABLE_DEFAULT_TITLE}</h2>
					<div className="ui-tooltip">
						<i>툴팁</i>
						<div className="tooltip">tooltip</div>
					</div>
				</div>
			</div>
			<TableContainer component={Paper} className={classes.tableWrapper}>
				<Table stickyHeader={true} className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							{data.header.map((_header) => (
								<TableCell key={_header} className={classes.thead}>
									{_header}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.rowdata.map((rowItem, _idx) => (
							<TableRow key={`row_${_idx}`}>
								{rowItem.row.map((colItem, _idxitem) =>
									_idxitem === 0 ? (
										<>
											<TableCell key={`${_idxitem}_${_idx}_tablecell_${colItem}`} component="th" scope="row" className={classes.tbody}>
												{colItem}
											</TableCell>
										</>
									) : (
										<>
											<TableCell key={`${_idxitem}_${_idx}_tablecell_${colItem}`} className={classes.tbody}>{colItem}</TableCell>
										</>
									),
								)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{pagination && <Pagination count={10} showFirstButton showLastButton className="ui-pagination" />}
		</>
	);
};

export default IssTable;
