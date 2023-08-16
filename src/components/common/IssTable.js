import React, { useEffect, useState, useRef } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { ROWHEADER_TYPE } from '../../consts/IssConsts';

export const DEFAULT_HEIGHT = 'calc(100% - 40px)';
export const DEFAULT_PAGE_HEIGHT = 'calc(100% - 44px)';

const IssTable = (props) => {
	const { height, pagination, data } = props;
	const [page, setPage] = useState(1);
	const tableRef = useRef(null);

	var customHeight = height;

	if (!height) {
		customHeight = DEFAULT_HEIGHT;
	}

	if (!height && pagination) {
		customHeight = DEFAULT_PAGE_HEIGHT;
	}

	/**
	 * page click event
	 *
	 * @param {*} event
	 * @param {*} value page no
	 */
	const onChangePageHalder = (event, value) => {
		console.log('#Page Change Event=>', value);
		setPage(value);
	};

	useEffect(() => {
		const ptableref = tableRef.current;
		if (ptableref) {
			console.log('####IssTable =>', data.title);
			// console.log('CanvasRenderingContext2D', chart.ctx);
			// console.log('HTMLCanvasElement', chart.canvas);
		}

		return () => {
			const ptableref = tableRef.current;
			if (ptableref) {
				console.log('####IssTable destroy=>', data.title);
				ptableref.remove();
			}
		};
	}, []);

	return (
		<>
			{data.visibleTitle && (
				<div className="head">
					<div className="title">
						<h2>{data.title}</h2>
						{data.existTooltip && (
							<div className="ui-tooltip">
								<i>툴팁</i>
								<div className="tooltip">{data.tooltip}</div>
							</div>
						)}
					</div>
				</div>
			)}
			<TableContainer ref={tableRef} component={Paper} className="tableWrapper" style={{ height: `${customHeight}` }}>
				<Table stickyHeader={true} aria-label="simple table">
					<colgroup>
						{
							/* column width */
							data.cellWidth?.map((width, index) => (
								<col width={width} key={index}></col>
							))
						}
					</colgroup>
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
									(data.cellStyle === undefined ? ROWHEADER_TYPE.NORMAL : data.cellStyle[_idxitem]) === ROWHEADER_TYPE.FIRST ? (
										<>
											<TableCell key={`${_idxitem}_${_idx}_tablecell_${colItem}`} component="th" scope="row">
												{colItem}
											</TableCell>
										</>
									) : (
										<>
											<TableCell key={`${_idxitem}_${_idx}_tablecell_${colItem}`}>
												{(data.cellStyle === undefined ? ROWHEADER_TYPE.NORMAL : data.cellStyle[_idxitem]) === ROWHEADER_TYPE.LONG ? (
													<>
														<div className="ellipsis">{colItem}</div>
													</>
												) : (
													`${colItem}`
												)}
											</TableCell>
										</>
									),
								)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{pagination && <Pagination count={20} page={page} showFirstButton showLastButton onChange={onChangePageHalder} className="ui-pagination" />}
		</>
	);
};

export default IssTable;
