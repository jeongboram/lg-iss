import React, { useState } from 'react';
import ServiceTab from '../contents/ServiceTab';
import ContentsTab from '../contents/ContentsTab';
import StatisTab from '../contents/StatisTab';
import { useNavigate } from 'react-router';

function SideBar(props) {
	const DEFAULT_TAB_INDEX = 0;
	const [currentTab, clickTab] = useState(props.currentTab);

	const navigate = useNavigate();

	const tabMenus = [
		{ name: 'Service', link: '/' },
		{ name: 'Contents', link: '/dashboard-contents' },
		{ name: 'Statistics', link: '/dashboard-statistics' },
	];

	const onSelectMenu = (index, link) => {
		navigate(link);
		//clickTab(index);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('on submit');
	};

	return (
		<>
			<div className="sidebar-section">
				<div className="head-title">
					<h1>
						LG Channels
						<br />
						Issue Sensing System
					</h1>
					<button className="btn-refresh">새로고침</button>
				</div>
				<div className="box-total-issue">
					<h2>Total Issues</h2>
					<span className="time">2023-07-13 10:10:00</span>
					<strong>145,555</strong>
				</div>
				<div className="box-summary-tabs">
					<div className="ui-tab-type01">
						<div className="ui-tab-menu">
							{tabMenus.map((el, index) => (
								<a key={index} className={index === currentTab ? 'on' : ''} onClick={() => onSelectMenu(index, el.link)}>
									{el.name}
								</a>
							))}
						</div>
						<div className="ui-tab-contents">
							<div className="tab-box">
								{currentTab === 0 && <ServiceTab />}
								{currentTab === 1 && <ContentsTab />}
								{currentTab === 2 && <StatisTab />}
							</div>
						</div>
					</div>
				</div>
				<div className="box-search">
					<h2>Search for Issue Code</h2>
					<div className="field-input-search">
						<form action="#" onSubmit={onSubmit}>
							<i></i>
							<input type="text" placeholder="Search" />
						</form>
					</div>
				</div>
				<div className="box-issues-inquiry">
					<h2>Issue Inquiry</h2>
					<table>
						<tbody>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
							<tr>
								<th scope="row">구분1</th>
								<td>text@lg.com</td>
							</tr>
						</tbody>
					</table>
				</div>
				<footer>
					<p>
						This data is from the HE Service Operations team Available
						<br />
						based on LG Smart TV automation data.
					</p>
				</footer>
			</div>
		</>
	);
}

export default SideBar;
