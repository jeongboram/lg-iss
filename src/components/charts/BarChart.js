import React, {useRef, useEffect} from 'react';
import { Chart } from 'react-chartjs-2';
import {CHART_BAR_GRID_COLOR} from './ChartConsts';

export const DEFAULT_LINE_WIDTH = '258px';
export const DEFAULT_LINE_HEIGHT = '95px';

const BarChart = (props) => {
	const { width, height, data, options, id } = props;
	
	// const lineChartRef = useRef<ChartJS<"line">>(null);
	const barChartRef = useRef(null);

	const options_base = {
		maintainAspectRatio : false,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: false,
			},
			...options.plugins
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
					color : CHART_BAR_GRID_COLOR.GRAY_AXES,
					lineWidth: 1,
					circular: true,
				},
				...options.scales?.y
			},
			x: {
				/*
				border: {
					display: false,
				},
				grid: {
					color : CHART_BAR_GRID_COLOR.WHITE,
					lineWidth: 1,
				},
				*/
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
		const chart = barChartRef.current;
		if (chart) {
			console.log('####BarChart=>', id);
			// console.log('CanvasRenderingContext2D', chart.ctx);
			// console.log('HTMLCanvasElement', chart.canvas);
			console.log('###BarChart:', options_base);
		}

		return (() => {
			const chart = barChartRef.current;
			if (chart) {
				console.log('####BarChart destroy=>', id);
				chart.destroy();
			}
		})
	}, []);

	
	return (
		<>
			<Chart ref={barChartRef} type='bar' options={options_base} data={default_data} style={{width : width||DEFAULT_LINE_WIDTH, height : height||DEFAULT_LINE_HEIGHT}}/>
		</>
	);
};

export default BarChart;
