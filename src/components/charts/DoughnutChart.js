import React, { useState} from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CHART_COLORS } from './ChartConsts';

ChartJS.register(ArcElement);

export const DEFAULT_DOUGHNUT_WIDTH = '130px';
export const DEFAULT_DOUGHNUT_HEIGHT = '130px';

const DoughnutChart = (props) => {
	const { width, height, className } = props;
	const [isFlag, setFlag] = useState(false);
	const [layoutParam, setLayoutParam] = useState({
		width : DEFAULT_DOUGHNUT_WIDTH || width,
		height : DEFAULT_DOUGHNUT_HEIGHT || height
	})

	const data = {
		datasets: [
			{
				label: 'AIC(US)',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [CHART_COLORS.PURPLE, CHART_COLORS.PINK, CHART_COLORS.MINT, CHART_COLORS.BLUE, CHART_COLORS.ORANGE],
				borderWidth: 1,
				borderRadius: 0,
				cutout: '80%',
			},
			
		],
	};

	const OnClick = () => {
		console.log('==========>click=>', isFlag);
		if ( isFlag ) {
			setLayoutParam({
				width : '200px'
				,height : '200px'
			})
		} else {
			setLayoutParam({
				width : '100px'
				,height : '100px'
			})
		}
		setFlag(!isFlag); 
	}

	return (
		<>
			<div style={{ width: layoutParam.width, height: layoutParam.height }} className={`chart-type-donut ${className}`} >
				<Doughnut data={data} width={layoutParam.width} height={layoutParam.height}/>
				<div className="label">AIC(US)</div>
				<div className="num">2,107</div>
			</div>
		</>
	);
};

export default DoughnutChart;
