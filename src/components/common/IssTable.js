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

const IssTable = (props) => {
	const { height, tableTitle, pagination, data } = props;

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
			color: '#FFFFFF',
		},
		leftIconButton: {
			color: '#B8B8B8',
		},
		rightIconButton: {
			color: '#B8B8B8',
		},
	});

	const classes = useStyles();

	return (
		<>
			{ 
			data.existTooltip && 
				<div className="head">
					<div className="title">
						<h2>{data.title}</h2>
						<div className="ui-tooltip">
							<i>툴팁</i>
							<div className="tooltip">{data.tooltip}</div>
						</div>
					</div>
				</div>
			}
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
											<TableCell key={`${_idxitem}_${_idx}_tablecell_${colItem}`} className={classes.tbody} >
												{colItem}
											</TableCell>
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
