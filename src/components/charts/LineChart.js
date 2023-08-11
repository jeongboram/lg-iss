import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
// import {CHART_COLORS} from './ChartConsts';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const DEFAULT_LINE_WIDTH = '258px';
export const DEFAULT_LINE_HEIGHT = '95px';

const LineChart = (props) => {
	const { width, height } = props;

	const options = {
		responsive: false,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
			},
			scales: {
				xAxes:[{
					gridLines: {
						color : '#000000'
					}
				}],
				yAxes:[{
					gridLines: {
						color : '#FFFFFF'
					}
				}]
			}
		},
	};
	
	//text color : #C9C9C9
	//line color : #FFFFFF
	//x/y axis : #55565A
	const data = {
		labels: ['01시', '02시', '03시', '04시', '05시','06시' ,'07시' ,'08시' ,'09시' ,'10시' ,'11시' ,'12시','13시', '14시', '15시','16시' ,'17시' ,'18시' ,'19시' ,'20시', '21시', '22시', '23시', '24시'],
		datasets: [
			{
				label: 'Second dataset',
				data: [33, 25, 35, 51, 54, 76, 33, 25, 35, 51, 54, 76, 33, 25, 35, 51, 54, 76, 33, 25, 35, 51, 54, 76],
				fill: false,
				borderColor: '#9D8DF7',
			},
		],
	};

	return (
		<Line options={options} data={data} width={width || DEFAULT_LINE_WIDTH} height={height || DEFAULT_LINE_HEIGHT} />
	);
};

export default LineChart;
