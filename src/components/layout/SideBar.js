import React from 'react';

function SideBar() {
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
							<a href="javascript:void(0);" className="on">
								Service
							</a>
							<a href="javascript:void(0);">Contents</a>
							<a href="javascript:void(0);">Statistics</a>
						</div>
						<div className="ui-tab-contents">
							<div className="tab-box">
								<div className="contents-service">
									<div className="line">
										<h3>Issue Count</h3>
										<div className="num-summary">
											<strong>1,842</strong>
											<span className="new">5</span>
										</div>
									</div>
									<div className="line">
										<h3>Unaddressed</h3>
										<div className="num-summary">
											<strong>76</strong>
										</div>
									</div>
									<div className="line">
										<h3>Precessing</h3>
										<div className="num-summary">
											<strong>95</strong>
										</div>
									</div>
									<div className="ui-chart-container">
										<h3>
											Status of issues by time zone <span>(Based on UTC)</span>
										</h3>
										<div className="chart-wrap">chart area</div>
									</div>
								</div>
							</div>
							<div className="tab-box">Contents Tab Contents</div>
							<div className="tab-box">Statistics Tab Contents</div>
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
				<div className="box-issus-inquiry">
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
