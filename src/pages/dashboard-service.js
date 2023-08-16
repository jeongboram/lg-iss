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
	const [cps, setCps] = useState([]);
	const [platforms, setPlatforms] = useState([]);
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

		fetch('/platforms')
			.then((response) => response.json())
			.then((data) => {
				setPlatforms(data);
			});

		fetch('/cps')
			.then((response) => response.json())
			.then((data) => {
				setCps(data);
			});
	}, []);

	//------------------------------------
	//tab 관련
	//------------------------------------
	const tabMenus = [
		{
			name: dashboard_service_tabledata.schedule_issues.title,
			tooltip: dashboard_service_tabledata.schedule_issues.tooltip,
		},
		{
			name: 'Service Data Issues',
			tooltip: 'Service Data Issues tooltip',
		},
	];

	const tabChangeHandler = (selectedIdx, _data) => {
		clickTab(selectedIdx);
	};

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
									<div className="ui-dropdown-box">
										<DropDown item={region} title="Region" />
										<DropDown item={countries} title="Countries" />
										<DropDown item={platforms} title="Platforms" />
										<DropDown item={cps} title="CPs" />
										<DefaultButton type={'button'} text={'Search'} btnClass={'btn-search'} />
									</div>
								</div>
								<div className="ui-chart-container">
									<DoughnutLegend />
									<DoughnutChart data={dashboard_service_data.data_aic_us} className={'donut-chart-01'} />
									<DoughnutChart data={dashboard_service_data.data_eic_eu} className={'donut-chart-02'} />
									<DoughnutChart data={dashboard_service_data.data_kic_br} className={'donut-chart-03'} />
									<DoughnutChart data={dashboard_service_data.data_eic_ja} className={'donut-chart-04'} />
									<DoughnutChart data={dashboard_service_data.data_kic_aj} className={'donut-chart-05'} />
									<DoughnutChart data={dashboard_service_data.data_kic_kr} className={'donut-chart-06'} />
								</div>
							</div>
							<div className="grid-column-2">
								<div className="grid-left">
									<div className="box-appIssues box-tbl">
										<IssTable pagination={false} data={dashboard_service_tabledata.lg_channels_app_issues} />
									</div>
								</div>
								<div className="grid-right">
									<div className="box-playbackIssues box-tbl">
										<IssTable pagination={false} data={dashboard_service_tabledata.palyback_issue} />
									</div>
								</div>
							</div>
						</div>
						<div className="grid-right">
							<div className="box-imageIssues box-tbl">
								<IssTable pagination={false} data={dashboard_service_tabledata.image_issue} />
							</div>
							<div className="box-secheduleIssues box-tbl">
								<IssTabs tabMenus={tabMenus} currentTab={currentTab} onChange={tabChangeHandler} className="ui-tab-type02">
									<IssTab isActive={currentTab === 0}>
										<IssTable height={'100%'} pagination={false} data={dashboard_service_tabledata.schedule_issues} />
									</IssTab>
									<IssTab isActive={currentTab === 1}>
										<IssTable height={'100%'} pagination={false} data={dashboard_service_tabledata.service_data_issues} />
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
