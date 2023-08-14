import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { ROWHEADER_TYPE } from '../../consts/IssTableConsts'

const IssTable = (props) => {
	const { height, tableTitle, pagination, data } = props;

	return (
		<>
			{data.existTooltip && (
				<div className="head">
					<div className="title">
						<h2>{data.title}</h2>
						<div className="ui-tooltip">
							<i>툴팁</i>
							<div className="tooltip">{data.tooltip}</div>
						</div>
					</div>
				</div>
			)}
			<TableContainer component={Paper} className="tableWrapper" style={{ height: `${height}` }}>
				<Table stickyHeader={true} aria-label="simple table">
					<TableHead>
						<TableRow>
							{data.header.map((_header) => (
								<TableCell key={_header}>{_header}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.rowdata.map((rowItem, _idx) => (
							<TableRow key={`row_${_idx}`}>
								{rowItem.row.map((colItem, _idxitem) =>
									(data.rowStyle === undefined ? ROWHEADER_TYPE.NORMAL : data.rowStyle[_idxitem]) === ROWHEADER_TYPE.FIRST ? (
										<>
											<TableCell key={`${_idxitem}_${_idx}_tablecell_${colItem}`} component="th" scope="row">
												{colItem}
											</TableCell>
										</>
									) : (										
										<>
											<TableCell key={`${_idxitem}_${_idx}_tablecell_${colItem}`}>
												{
													(data.rowStyle === undefined ? ROWHEADER_TYPE.NORMAL : data.rowStyle[_idxitem]) === ROWHEADER_TYPE.LONG ?
														<>
														<div className="ellipsis">{colItem}</div>
														</>
														:
														`${colItem}`
												}
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
