import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import {CHART_COLORS} from './ChartConsts';

ChartJS.register(ArcElement);

export const DEFAULT_DOUGHNUT_WIDTH = "300px";
export const DEFAULT_DOUGHNUT_HEIGHT = "300px";

const DoughnutChart = (props) => {
	const { width, height } = props;
	
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
		labels: ['LG Channels App Issues', 'Image Issues', 'Channel Map Issues', 'Schedule Issues', 'Playback Issues'],
		datasets: [
			{
				label: 'AIC(US)',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
				borderWidth: 0,
				borderRadius: 2,
				cutout: '70%',
			},
			{
				label: 'EIC(EU)',
				data: [0],
				backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
				borderWidth: 0,
				borderRadius: 2,
				cutout: '70%',
			},
			{
				label: 'KIC(BR)',
				data: [10, 5],
				backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
				borderWidth: 0,
				borderRadius: 2,
				cutout: '70%',
			},
			{
				label: 'EIC(JA)',
				data: [10, 20],
				backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
				borderWidth: 0,
				borderRadius: 2,
				cutout: '70%',
			},
			{
				label: 'KIC(AJ)',
				data: [20, 5],
				backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
				borderWidth: 0,
				borderRadius: 2,
				cutout: '70%',
			},
			{
				label: 'KIC(KR)',
				data: [10],
				backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
				borderWidth: 0,
				borderRadius: 2,
				cutout: '70%',
			},
		],
	};

	return (
        <>
        <div style={{width: width||DEFAULT_DOUGHNUT_WIDTH, height: height||DEFAULT_DOUGHNUT_HEIGHT}}>
            <Doughnut data={data} />
			<div>AIC(US)</div>
			<div>2,107</div>
        </div>
        </>
    );
};

export default DoughnutChart;