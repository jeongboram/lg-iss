import React, { useEffect, useState } from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DoughnutChart from '../components/charts/DoughnutChart';
import IssTable from '../components/common/IssTable';
import DropDown from '../components/common/DropDown';
import DefaultTable from '../components/common/DefaultTable';
import DoughnutLegend from '../components/charts/DoughnutLegend';
import { dashboard_service_data, dashboard_service_tabledata } from '../consts/sampleData';
import IssTabs from '../components/common/IssTabs';
import IssTab from '../components/common/IssTab';

const DashboardService = () => {
	const [region, setRegion] = useState([]);
	const [countries, setCountries] = useState([]);
	const [currentTab, clickTab] = useState(0);
	
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


	//------------------------------------
	//tab 관련 
	//------------------------------------
	const tabMenus = [{ name: 'Schedule Issues' }, { name: 'Service Data Issues' }];

	const tabChangeHandler = (selectedIdx, _data) => {
		clickTab(selectedIdx, _data);
	}

	return (
		<>
			<div className="contents-section-container">
				<SideBar currentTab={0} />
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
									<DoughnutChart data={dashboard_service_data.data_aic_us} className={'donut-chart-01'} />
									<DoughnutChart data={dashboard_service_data.data_eic_eu} className={'donut-chart-02'} />
									<DoughnutChart data={dashboard_service_data.data_kic_br} className={'donut-chart-03'} />
									<DoughnutChart data={dashboard_service_data.data_eic_ja} className={'donut-chart-04'} />
									<DoughnutChart data={dashboard_service_data.data_kic_aj} className={'donut-chart-05'} />
									<DoughnutChart data={dashboard_service_data.data_kic_kr} className={'donut-chart-06'} />
									{/* </div> */}
								</div>
							</div>
							<div className="grid-column-2">
								<div className="grid-left">
									<div className="box-appIssues box-tbl">
										<IssTable height={`calc(100% - 40px)`} pagination={false} data={dashboard_service_tabledata.service_data_issue} />
									</div>
								</div>
								<div className="grid-right">
									<div className="box-playbackIssues box-tbl">
										<IssTable height={`calc(100% - 40px)`} pagination={false} data={dashboard_service_tabledata.palyback_issue} />
									</div>
								</div>
							</div>
						</div>
						<div className="grid-right">
							<div className="box-imageIssues box-tbl">
								<IssTable height={`calc(100% - 40px)`} pagination={false} data={dashboard_service_tabledata.sample_data} />
							</div>
							<div className="box-secheduleIssues box-tbl">
								<IssTabs
									tabMenus={tabMenus}
									currentTab={currentTab}
									onChange={tabChangeHandler}
								>
									<IssTab isActive={currentTab === 0}>
										<IssTable height={`calc(100% - 40px`} pagination={false} data={dashboard_service_tabledata.sample_notitle_data} />
									</IssTab>    
									<IssTab isActive={currentTab === 1}>
										<IssTable height={`calc(100% - 40px`} pagination={false} data={dashboard_service_tabledata.sample_notitle_data} />
									</IssTab>
								</IssTabs>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default DashboardService;
