import React, { useEffect, useState } from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DoughnutChart from '../components/charts/DoughnutChart';
import IssTable from '../components/common/IssTable';
import DropDown from '../components/common/DropDown';
import DefaultTable from '../components/common/DefaultTable';
import DoughnutLegend from '../components/charts/DoughnutLegend';

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
										<DefaultTable height={`calc(100% - 40px)`} tableTitle="Service Data Issues" pagination={false} />
									</div>
								</div>
								<div className="grid-right">
									<div className="box-playbackIssues box-tbl">
										<DefaultTable height={`calc(100% - 40px)`} tableTitle="Playback Issues" pagination={false} />
									</div>
								</div>
							</div>
						</div>
						<div className="grid-right">
							<div className="box-imageIssues box-tbl">
								<DefaultTable height={`calc(100% - 40px)`} tableTitle="Image Issues" pagination={false} />
							</div>
							<div className="box-secheduleIssues box-tbl">
								<IssTable height={`calc(100% - 40px)`} tableTitle="Service Data Issues" pagination={false} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default DashboardService;
