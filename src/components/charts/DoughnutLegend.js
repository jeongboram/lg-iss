import React from 'react';
import { CHART_COLORS } from './ChartConsts';

const DoughnutLegend = () => {
	return (
		<>
			<div className="chart-doughnut-legend">
				<ul>
					<li>
						<i style={{ backgroundColor: `${CHART_COLORS.PURPLE}` }}></i>
						<span>LG Channels App Issues</span>
					</li>
					<li>
						<i style={{ backgroundColor: `${CHART_COLORS.PINK}` }}></i>
						<span>Image Issues</span>
					</li>
					<li>
						<i style={{ backgroundColor: `${CHART_COLORS.MINT}` }}></i>
						<span>Service Data Issues</span>
					</li>
					<li>
						<i style={{ backgroundColor: `${CHART_COLORS.BLUE}` }}></i>
						<span>Schedule Issues</span>
					</li>
					<li>
						<i style={{ backgroundColor: `${CHART_COLORS.ORANGE}` }}></i>
						<span>Playback Issues</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default DoughnutLegend;
