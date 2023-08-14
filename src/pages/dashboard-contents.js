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
				<SideBar currentTab={1} />
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
										<DefaultButton type={'button'} text={'Search'} btnClass={'btn-search'} />
									</div>
								</div>
								<div className="dafaflow-container">
									<div className="box">
										<div className="head">
											<h2>CP</h2>
											<span className="bg-gradient bg-cp on"></span>
											{/* issue 발생시 bg-gradient 에 클래스 on 추가 */}
										</div>
										<div className="cp-contents">
											<ul>
												<li className="on">
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">02</span>
												</li>
												<li className="on">
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo_2.png)` }}></span>
													<span className="num">99</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo_2.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo_2.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo_2.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
												<li>
													<span className="logo" style={{ backgroundImage: `url(/res/images/sample/cp_logo.png)` }}></span>
													<span className="num">00</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="bg-processing"></div>
									<div className="box">
										<div className="head">
											<h2>CMP</h2>
											<span className="bg-gradient bg-cmp on"></span>
										</div>
										<div className="cmp-contents">
											<div className="summary-box">
												<h3>
													Channel
													<br />
													Organization
												</h3>
												<strong>00</strong>
											</div>
											<div className="summary-box on">
												<h3>
													APP
													<br />
													Organization
												</h3>
												<strong>42</strong>
											</div>
											<div className="summary-box">
												<h3>
													Data
													<br />
													Deployment
												</h3>
												<strong>00</strong>
											</div>
										</div>
									</div>
									<div className="bg-processing"></div>
									<div className="box">
										<div className="head">
											<h2>Device</h2>
											<span className="bg-gradient bg-device on"></span>
										</div>
										<div className="device-contents">
											<div className="summary-box">
												<h3>
													Live
													<br />
													Channels
												</h3>
												<strong>00</strong>
											</div>
											<div className="summary-box on">
												<h3>
													LG Channels
													<br />
													App
												</h3>
												<strong>204</strong>
											</div>
										</div>
									</div>
								</div>
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
