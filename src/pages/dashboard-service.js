import React, { useEffect, useState } from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DoughnutChart from '../components/charts/DoughnutChart';
import IssTable from '../components/common/IssTable';
import DropDown from '../components/common/DropDown';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
import DefaultTable from '../components/common/DefaultTable';
import DoughnutLegend from '../components/charts/DoughnutLegend';

ChartJS.register(ArcElement, Tooltip);

// export const data = {
// 	labels: ['LG Channels App Issues', 'Image Issues', 'Channel Map Issues', 'Schedule Issues', 'Playback Issues'],
// 	datasets: [
// 		{
// 			label: 'AIC(US)',
// 			data: [12, 19, 3, 5, 2, 3],
// 			backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
// 			borderWidth: 0,
// 			borderRadius: 2,
// 			cutout: '70%',
// 		},
// 		{
// 			label: 'EIC(EU)',
// 			data: [0],
// 			backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
// 			borderWidth: 0,
// 			borderRadius: 2,
// 			cutout: '70%',
// 		},
// 		{
// 			label: 'KIC(BR)',
// 			data: [10, 5],
// 			backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
// 			borderWidth: 0,
// 			borderRadius: 2,
// 			cutout: '70%',
// 		},
// 		{
// 			label: 'EIC(JA)',
// 			data: [10, 20],
// 			backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
// 			borderWidth: 0,
// 			borderRadius: 2,
// 			cutout: '70%',
// 		},
// 		{
// 			label: 'KIC(AJ)',
// 			data: [20, 5],
// 			backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
// 			borderWidth: 0,
// 			borderRadius: 2,
// 			cutout: '70%',
// 		},
// 		{
// 			label: 'KIC(KR)',
// 			data: [10],
// 			backgroundColor: ['rgba(157, 141, 247, 1)', 'rgba(233, 146, 227, 1)', 'rgba(133, 221, 219, 1)', 'rgba(76, 132, 224, 1)', 'rgba(246, 192, 101, 1)'],
// 			borderWidth: 0,
// 			borderRadius: 2,
// 			cutout: '70%',
// 		},
// 	],
// };

const DashboardService = () => {
	const [region, setRegion] = useState([]);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch('/region')
			.then((response) => response.json())
			.then((data) => {
				setRegion(data);
			});

		fetch('/countries')
			.then((response) => response.json())
			.then((data) => {
				setCountries(data);
			});
	}, []);

	return (
		<>
			<div className="contents-section-container">
				<SideBar currentTab={0}/>
				<div className="contents-section">
					<div className="grid-vertical-two">
						<div className="grid-left">
							<div className="box-worldmap">
								<div className="head">
									<div className="title">
										<h1>Monitoring World Map</h1>
									</div>
									<div className="ui-components-box">
										<DropDown item={region} title="Region" />
										<DropDown item={countries} title="Countries" />
										<DefaultButton type={'button'} text={'Search'} btnClass={'btn-search'} />
									</div>
								</div>
								<div className="ui-chart-container">
									{/* <div style={{ width: '100%', height: '100%' }}> */}
									{/* <Doughnut data={data} /> */}
									<DoughnutLegend />
									<DoughnutChart data="" className={'donut-chart-01'} />
									<DoughnutChart data="" className={'donut-chart-02'} />
									<DoughnutChart data="" className={'donut-chart-03'} />
									<DoughnutChart data="" className={'donut-chart-04'} />
									<DoughnutChart data="" className={'donut-chart-05'} />
									<DoughnutChart data="" className={'donut-chart-06'} />
									{/* </div> */}
								</div>
							</div>
							<div className="grid-column-2">
								<div className="grid-left">
									<div className="box-appIssues box-tbl">
										<DefaultTable height={`calc(100% - 40px)`} tableTitle="Service Data Issues" />
									</div>
								</div>
								<div className="grid-right">
									<div className="box-playbackIssues box-tbl">
										<DefaultTable height={`calc(100% - 40px)`} tableTitle="Playback Issues" />
									</div>
								</div>
							</div>
						</div>
						<div className="grid-right">
							<div className="box-imageIssues box-tbl">
								<DefaultTable height={`calc(100% - 40px)`} tableTitle="Image Issues" />
							</div>
							<div className="box-secheduleIssues box-tbl">
								<IssTable height={`calc(100% - 32px)`} tableTitle="Service Data Issues" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default DashboardService;
