import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CHART_COLORS } from './ChartConsts';
// import {CHART_COLORS} from './ChartConsts';

ChartJS.register(ArcElement);

export const DEFAULT_DOUGHNUT_WIDTH = '130px';
export const DEFAULT_DOUGHNUT_HEIGHT = '130px';

const DoughnutChart = (props) => {
	const { width, height, className } = props;

	// const data = {
	// 	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	// 	datasets: [
	// 		{
	// 			label: '# of Votes',
	// 			data: [12, 19, 3, 5, 2, 3],
	// 			backgroundColor: [
	// 				CHART_COLORS.RED,
	// 				CHART_COLORS.BULE,
	// 				CHART_COLORS.YELLOW,
	// 				CHART_COLORS.GREEN,
	// 				CHART_COLORS.PURPLE,
	// 				CHART_COLORS.ORANGE,
	// 			],
	// 			borderColor: [
	// 				'rgba(255, 99, 132, 1)',
	// 				'rgba(54, 162, 235, 1)',
	// 				'rgba(255, 206, 86, 1)',
	// 				'rgba(75, 192, 192, 1)',
	// 				'rgba(153, 102, 255, 1)',
	// 				'rgba(255, 159, 64, 1)',
	// 			],
	// 			borderWidth: 1,			//doughnut 굵기
	// 			borderRadius: 2,
	// 			cutout: '80%',			//doughnut 내부 원의 지름크기
	// 			options: {
	// 				plugins: {
	// 					legend: {
	// 						display: false
	// 					}
	// 				}
	// 			}
	// 		},

	// 	],

	// };

	const data = {
		datasets: [
			{
				label: 'AIC(US)',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [CHART_COLORS.PURPLE, CHART_COLORS.PINK, CHART_COLORS.MINT, CHART_COLORS.BLUE, CHART_COLORS.ORANGE],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	};

	return (
		<>
			<div style={{ width: width || DEFAULT_DOUGHNUT_WIDTH, height: height || DEFAULT_DOUGHNUT_HEIGHT }} className={`chart-type-donut ${className}`}>
				<Doughnut data={data} />
				<div className="label">AIC(US)</div>
				<div className="num">2,107</div>
			</div>
		</>
	);
};

export default DoughnutChart;
