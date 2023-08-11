import React, { useEffect, useState } from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DropDown from '../components/common/DropDown';
import DefaultTable from '../components/common/DefaultTable';

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

	return (
		<>
			<div className="contents-section-container">
				<SideBar />
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
									<div className="ui-chart-container">chart</div>
								</div>
							</div>
							<div className="grid-center">
								<div className="box-rateChange">
									<div className="head">
										<div className="title">
											<h2>Changes in the rate of increase and decrease</h2>
										</div>
									</div>
									<div className="ui-chart-container">chart</div>
								</div>
							</div>
							<div className="grid-right">
								<div className="box-country">
									<div className="head">
										<div className="title">
											<h2>Country</h2>
										</div>
									</div>
									<div className="ui-chart-container">chart</div>
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
