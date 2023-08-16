import React, { useState } from 'react';
import IssTabs from '../components/common/IssTabs';
import IssTab from '../components/common/IssTab';
import LGChannelAppIssues from '../components/service/LGChannelAppIssues';

const Service = () => {
	const [currentTab, clickTab] = useState(0);

	//------------------------------------
	//tab 관련
	//------------------------------------
	const tabMenus = [
		{
			name: 'LG Channels App Issues (00)',
			tooltip: 'tab2',
		},
		{
			name: 'Playback Issues (00)',
			tooltip: 'Service Data Issues tooltip',
		},
		{
			name: 'Service Data Issues (00)',
			tooltip: 'Service Data Issues tooltip',
		},

		{
			name: 'Image Issues (00)',
			tooltip: 'Service Data Issues tooltip',
		},
		{
			name: 'Schedule Issues (00)',
			tooltip: 'Service Data Issues tooltip',
		},
	];

	const tabChangeHandler = (selectedIdx, _data) => {
		clickTab(selectedIdx);
	};

	return (
		<>
			<div className="sub-detail-wrapper sub-detail-service">
				<div className="ui-page-history">
					<span className="depth1">ISS_Service</span>
					<span className="depth2">Service Detail</span>
				</div>
				<div className="head">
					<div className="title">
						<h1>Service Detail (Issue Count : 00)</h1>
					</div>
				</div>
				<div className="box-components">
					<IssTabs tabMenus={tabMenus} currentTab={currentTab} className={'ui-tab-type03'} onChange={tabChangeHandler}>
						<IssTab isActive={currentTab === 0}>
							<LGChannelAppIssues />
						</IssTab>
						<IssTab isActive={currentTab === 1}>2 tab</IssTab>
						<IssTab isActive={currentTab === 2}>3 tab</IssTab>
						<IssTab isActive={currentTab === 3}>4 tab</IssTab>
						<IssTab isActive={currentTab === 4}>5 tab</IssTab>
					</IssTabs>
				</div>
			</div>
		</>
	);
};
export default Service;
