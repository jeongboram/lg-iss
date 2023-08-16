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
					<IssTable height={'calc(100% - 137px)'} pagination={true} data={sub_service_tabledata.issues_status} />
				</div>
				<div className="row-box box-actionPoints">12</div>
			</div>
		</div>
	);
}

export default LGChannelAppIssues;
