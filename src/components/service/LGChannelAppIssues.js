import React, { useState, useEffect } from 'react';
import IssTable from '../common/IssTable';
import { sub_service_tabledata } from '../../consts/sampleData';
import DropDown from '../common/DropDown';
import DefaultButton from '../common/DefaultButton';

function LGChannelAppIssues() {
	const [region, setRegion] = useState([]);
	const [countries, setCountries] = useState([]);
	const [cps, setCps] = useState([]);
	const [platforms, setPlatforms] = useState([]);

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

	return (
		<div className="contents-section-wide">
			<div className="ui-dropdown-box">
				<DropDown item={region} title="Region" />
				<DropDown item={countries} title="Countries" />
				<DropDown item={platforms} title="Platforms" />
				<DropDown item={cps} title="CPs" />
				<DefaultButton type={'button'} text={'Search'} btnClass={'btn-search'} />
			</div>
			<div className="grid-row-wide">
				<div className="row-box box-tbl box-lgchannels">
					<IssTable height={'calc(100% - 101px)'} pagination={true} data={sub_service_tabledata.issues_status} />
				</div>
				<div className="row-box box-actionPoints">
					<div className="row">
						<div className="head">
							<div className="title">
								<h2>Action Points</h2>
							</div>
						</div>
						<div className="grid-column-3">
							<div className="box-evidence">
								<h3>Evidence</h3>
								<div>chart</div>
							</div>
							<div className="box-des">
								<h3>Description</h3>
								<IssTable height={'calc(100% - 40px)'} pagination={false} data={sub_service_tabledata.description} />
							</div>
							<div className="box-actionDetail">
								<h3>Action Details</h3>
								<textarea placeholder="Enter action details"></textarea>
							</div>
						</div>
						<div className="button-container align-right">
							<button className="btn-primary-gray">Save</button>
							<button className="btn-primary-accent">Create Jira</button>
						</div>
					</div>
					<div className="row">
						<div className="box-issueHistory">
							<IssTable height={'calc(100% - 30px)'} pagination={false} data={sub_service_tabledata.issue_history} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LGChannelAppIssues;
