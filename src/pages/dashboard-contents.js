import React, { useEffect, useState } from 'react';
import SideBar from '../components/layout/SideBar';
import DefaultButton from '../components/common/DefaultButton';
import DropDown from '../components/common/DropDown';
import DefaultTable from '../components/common/DefaultTable';

const DashboardContents = () => {
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
				<SideBar currentTab={1}/>
				<div className="contents-section">
					<div className="grid-vertical-two">
						<div className="grid-left">
							<div className="box-channel-dataflow">
								<div className="head">
									<div className="title">
										<h1>LG Channels Data Flow</h1>
									</div>
									<div className="ui-components-box">
										<DropDown item={region} title="Region" />
										<DropDown item={countries} title="Countries" />
										<DefaultButton type={'button'} text={'Search'} btnClass={'btn-search'} pagination={false} />
									</div>
								</div>
								<div className="ui-chart-container">data flow</div>
							</div>
							<div className="grid-column-2">
								<div className="grid-left">
									<div className="box-cmpIssues box-tbl">
										<DefaultTable height={`calc(100% - 40px)`} tableTitle="CMP Issues" pagination={false} />
									</div>
								</div>
								<div className="grid-right">
									<div className="box-deviceIssues box-tbl">
										<DefaultTable height={`calc(100% - 40px)`} tableTitle="Device Issues" pagination={false} />
									</div>
								</div>
							</div>
						</div>
						<div className="grid-right">
							<div className="box-cpIssues box-tbl">
								<DefaultTable height={`calc(100% - 40px)`} tableTitle="CP Issues" pagination={false} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default DashboardContents;
