import React, { useEffect, useState } from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DoughnutChart from '../components/charts/DoughnutChart';
import IssTable from '../components/common/IssTable';
import DropDown from '../components/common/DropDown';
import DefaultTable from '../components/common/DefaultTable';
import DoughnutLegend from '../components/charts/DoughnutLegend';
import { CHART_COLORS } from '../components/charts/ChartConsts';

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

	const data_aic_us = {
		title : 'AIC(US)', 
		sum : 2107,
		datasets: [
			{
				label: 'AIC(US)',
				data: [12, 19, 3, 5, 2],	//100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.PURPLE, CHART_COLORS.PINK, CHART_COLORS.MINT, CHART_COLORS.BLUE, CHART_COLORS.ORANGE],
				borderWidth: 0,
				borderRadius: 2,
				cutout: '80%',
			},
		],
		
	};

	const data_eic_eu = {
		title : 'EIC(EU)', 
		sum : 4,
		datasets: [
			{
				label: 'EIC(EU)',
				data: [100],	//100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.ORANGE],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
		
	};

	const data_kic_br = {
		title : 'KIC(BR)', 
		sum : 2,
		datasets: [
			{
				label: 'KIC(BR)',
				data: [50,30,20],	//100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.PURPLE, CHART_COLORS.BLUE, CHART_COLORS.ORANGE],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	}

	const data_eic_ja = {
		title : 'EIC(JA)', 
		sum : 0,
		datasets: [
			{
				label: 'EIC(JA)',
				data: [100],	//100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.GRAY],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	}

	const data_kic_aj = {
		title : 'KIC(JA)', 
		sum : 15215,
		datasets: [
			{
				label: 'KIC(AJ)',
				data: [40,30,30],	//100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.PURPLE, CHART_COLORS.PINK, CHART_COLORS.MINT],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	}

	const data_kic_kr = {
		title : 'KIC(KR)', 
		sum : 21,
		datasets: [
			{
				label: 'KIC(KR)',
				data: [35, 65],		//100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.GRAY, CHART_COLORS.BLUE],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	}

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
									<DoughnutChart data={data_aic_us} className={'donut-chart-01'} />
									<DoughnutChart data={data_eic_eu} className={'donut-chart-02'} />
									<DoughnutChart data={data_kic_br} className={'donut-chart-03'} />
									<DoughnutChart data={data_eic_ja} className={'donut-chart-04'} />
									<DoughnutChart data={data_kic_aj} className={'donut-chart-05'} />
									<DoughnutChart data={data_kic_kr} className={'donut-chart-06'} />
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
