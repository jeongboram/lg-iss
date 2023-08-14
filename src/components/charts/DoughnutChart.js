import React, { useState} from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DEFAULT_DOUGHNUT_WIDTH = '130px';
export const DEFAULT_DOUGHNUT_HEIGHT = '130px';

const DoughnutChart = (props) => {
	const { width, height, className, data } = props;
	const [isFlag, setFlag] = useState(false);
	const [layoutParam, setLayoutParam] = useState({
		width : DEFAULT_DOUGHNUT_WIDTH || width,
		height : DEFAULT_DOUGHNUT_HEIGHT || height
	})

	return (
		<>
			<div style={{ width: layoutParam.width, height: layoutParam.height }} className={`chart-type-donut ${className}`} >
				<Doughnut data={data} width={layoutParam.width} height={layoutParam.height}/>
				<div className="label">{data.title}</div>
				<div className="num">{data.sum}</div>
			</div>
		</>
	);
};

export default DoughnutChart;
