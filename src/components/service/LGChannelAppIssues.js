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
				<div className="row-box">
					<IssTable height={'calc(100% - 40px)'} pagination={false} data={sub_service_tabledata.lg_channels_app_issues} />
				</div>
				<div className="row-box">12</div>
			</div>
		</div>
	);
}

export default LGChannelAppIssues;
