import React, { useEffect, useState } from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DropDown from '../components/common/DropDown';
import LineChart from '../components/charts/LineChart';
import IssTable from '../components/common/IssTable';
import { CHART_COLORS, CHART_BAR_COLOR, CHART_BAR_GRID_COLOR } from '../components/charts/ChartConsts';
import { Link } from 'react-router-dom';
import { dashboard_statistics_beacon_tabledata, dashboard_statistics_beacon_chart } from '../consts/sampleData';

const DashboardBeacon = () => {
	const [region, setRegion] = useState([]);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch('/region', {
				headers: {
					Accept: "application/json",
				},
			})
			.then((response) => response.json())
			.then((data) => {
				setRegion(data);
			});

		fetch('/countries', {
				headers: {
					Accept: "application/json",
				},
			})
			.then((response) => response.json())
			.then((data) => {
				setCountries(data);
			});
	}, []);

	const OnRegionDropDownHandler = (data) =>{
		console.log("####Dashboard Region Dropdown data=>", data);
	}

	const OnCountryDropDownHandler = (data) =>{
		console.log("####Dashboard Country Dropdown data=>", data);
	}

	return (
		<>
			<div className="contents-section-container">
				<SideBar currentTab={2} />
				<div className="contents-section">
					<div className="head">
						<div className="title tab-titles">
							<div>
								<h1>
									<Link to="/dashboard-statistics">Statistics Issues</Link>
								</h1>
							</div>
							<div className="on">
								<h1>
									<Link to="/dashboard-beacon">Beacon Data Issues</Link>
								</h1>
								<div className="ui-tooltip">
									<i>툴팁</i>
									<div className="tooltip">tooltips</div>
								</div>
							</div>
						</div>
						<div className="ui-components-box">
							<DropDown item={region} title="Region" onChangeDropDown={OnRegionDropDownHandler}/>
							<DropDown item={countries} title="Countries" onChangeDropDown={OnCountryDropDownHandler}/>
							<DefaultButton type={'button'} text={'Search'} btnClass={'btn-search'} />
						</div>
					</div>
					<div className="grid-row-2">
						<div className="grid-single-row">
							<div className="box-statisIssue">
								<IssTable pagination={true}  data={dashboard_statistics_beacon_tabledata.beacon_data_issue}/>
							</div>
						</div>
						<div className="grid-column-2">
							<div className="grid-left">
								<div className="box-docCount">
									<div className="head">
										<div className="title">
											<h2>Document Count</h2>
										</div>
									</div>
									<div className="ui-chart-container">
										<LineChart id={'value_chart'} data={dashboard_statistics_beacon_chart.value_graph.data} options={dashboard_statistics_beacon_chart.value_graph.options} width={'100%'} height={'100%'} />
									</div>
								</div>
							</div>
							<div className="grid-center">
								<div className="box-normalRange">
									<div className="head">
										<div className="title">
											<h2>Normal Range</h2>
										</div>
									</div>
									<div className="ui-chart-container">
										<LineChart id={'changes_chart'} data={dashboard_statistics_beacon_chart.changes_graph.data} options={dashboard_statistics_beacon_chart.changes_graph.options} width={'100%'} height={'100%'} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default DashboardBeacon;
