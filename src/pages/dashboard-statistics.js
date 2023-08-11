import React, { useEffect, useState } from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DropDown from '../components/common/DropDown';
import DefaultTable from '../components/common/DefaultTable';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import { CHART_COLORS, CHART_BAR_COLOR, CHART_BAR_GRID_COLOR } from '../components/charts/ChartConsts';

const DashboardStatistics = () => {
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


	const value_graph = {
		data : {
			labels: ['D-14', 'D-13', 'D-12', 'D-11', 'D-10', 'D-9', 'D-8', 'D-7', 'D-6', 'D-5', 'D-4', 'D-3', 'D-2', 'D-1', 'Today'],
			datasets: [
				{
					label: 'This week',
					data: [-5, -2, -4, -3, 2, 4, 5, 6, 7, 8, 9, 10, 11,  15,10],
					fill: false,
					borderColor: '#85DDDB',
					order : 2
				},
				{
					label: 'baseline',
					data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					fill: false,
					pointRadius: 0,	//포인트 삭제
					borderColor: '#F6C065',
					borderDash: [5,5],
					borderDashOffset: 2,
					order : 1
				},
			],
		},
		options : {
			legend: {
				display: false,
			},
			scales: {
				y: {
					min: -20,
					max: 25,
				}
			},
		}
	};

	const changes_graph = {
		data : {
			labels: ['D-14', 'D-13', 'D-12', 'D-11', 'D-10', 'D-9', 'D-8', 'D-7', 'D-6', 'D-5', 'D-4', 'D-3', 'D-2', 'D-1', 'Today'],
			datasets: [
				{
					label: 'This week',
					data: [-5, -2, -4, -3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 15,10],
					fill: false,
					borderColor: '#85DDDB',
					order : 2
				},
			],
		},
		options : {
			legend: {
				display: false,
			},
			scales: {
				y: {
					min: -20,
					max: 25,
				}
			},
		}
	};

	const barchart_graph = {
		data : {
			labels: ['US', 'BR'],
			datasets: [
				{
					label: 'bar',
					data: [55, 62],
					fill: false,
					backgroundColor: [CHART_BAR_COLOR.BLUE, CHART_BAR_COLOR.PINK]
				}
			],
		},
		options : {
			legend: {
				display: true,
			},
			/*
			scales: {
				y: {
					min: 48,	//y축 min 값
					max: 66,	//y축 max 값
					beginAtZero: true,
					ticks: {
						stepSize: 2,	//해당 축 값 표기 기준
					},
					gridLines: {
						color: CHART_BAR_GRID_COLOR.WHITE,
						lineWidth: 3
					}
				}
			},
			*/
			scales: {
				y: {
					min: 48,	//y축 min 값
					max: 66,	//y축 max 값
				},
			},
			maxBarThickness: 40	//라인타입의 두께 조정
		}
	}

	return (
		<>
			<div className="contents-section-container">
				<SideBar currentTab={2}/>
				<div className="contents-section">
					<div className="head">
						<div className="title">
							<h1>Statistics Issues</h1>
						</div>
						<div className="ui-components-box">
							<DropDown item={region} title="Region" />
							<DropDown item={countries} title="Countries" />
							<DefaultButton type={'button'} text={'Search'} btnClass={'btn-search'} />
						</div>
					</div>
					<div className="grid-row-2">
						<div className="grid-single-row">
							<div className="box-statisIssue">
								<DefaultTable height={`calc(100% - 44px)`} pagination={true} />
							</div>
						</div>
						<div className="grid-column-3">
							<div className="grid-left">
								<div className="box-value">
									<div className="head">
										<div className="title">
											<h2>Value</h2>
										</div>
									</div>
									<div className="ui-chart-container">
										<LineChart id={"value_chart"} data={value_graph.data} options={value_graph.options} width={"100%"} height={"100%"}/>
									</div>
								</div>
							</div>
							<div className="grid-center">
								<div className="box-rateChange">
									<div className="head">
										<div className="title">
											<h2>Changes in the rate of increase and decrease</h2>
										</div>
									</div>
									<div className="ui-chart-container">
										<LineChart id={"changes_chart"} data={changes_graph.data} options={changes_graph.options} width={"100%"} height={"100%"}/>
									</div>
								</div>
							</div>
							<div className="grid-right">
								<div className="box-country">
									<div className="head">
										<div className="title">
											<h2>Country</h2>
										</div>
									</div>
									<div className="ui-chart-container">
										<BarChart id={"barChart"} data={barchart_graph.data} options={barchart_graph.options} width={"100%"} height={"100%"}/>
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
export default DashboardStatistics;
