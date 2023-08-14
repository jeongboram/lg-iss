import React, {useRef, useEffect} from 'react';
import { Chart, Line } from 'react-chartjs-2';
import {CHART_LINE_GRID_COLOR} from './ChartConsts';

export const DEFAULT_LINE_WIDTH = '100%';
export const DEFAULT_LINE_HEIGHT = '100%';

const LineChart = (props) => {
	const { width, height, data, options, id } = props;
	
	// const lineChartRef = useRef<ChartJS<"line">>(null);
	const lineChartRef = useRef(null);

	const options_base = {
		maintainAspectRatio : false,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: false,
			},
		},
		scales: {
			y: {
				ticks: {
					stepSize: 2,	//해당 축 값 표기 기준
				},
				border: {
					display: false,
				},
				grid: {
					color : CHART_LINE_GRID_COLOR.GRAY_AXES
					
				},
				...options.scales?.y
			},
			x: {
				...options.scales?.x
			}
			
		},
	};

	//text color : #C9C9C9
	//line color : #FFFFFF
	//x/y axis : #55565A
	const default_data = {
		...data
	};

	useEffect(() => {
		const chart = lineChartRef.current;
		if (chart) {
			console.log('####LineChart =>', id);
			// console.log('CanvasRenderingContext2D', chart.ctx);
			// console.log('HTMLCanvasElement', chart.canvas);
		}

		return (() => {
			const chart = lineChartRef.current;
			if (chart) {
				console.log('####LineChart destroy=>', id);
				chart.destroy();
			}
		})
	}, []);

	
	return (
		<>
			{/* <Line ref={lineChartRef} options={options_base} data={default_data}  /> */}
			<Chart ref={lineChartRef} type="line" options={options_base} data={default_data} style={{width : width||DEFAULT_LINE_WIDTH, height : height||DEFAULT_LINE_HEIGHT}}/>
		</>
	);
};

export default LineChart;
