import React, { useState, useCallback, useEffect } from 'react';

export const DEFAULT_TITLE = 'selected';

function DropDown(props) {
	const [open, setOpen] = useState(false);
	const [checkedList, setCheckedLists] = useState([]);
	const { item, title, onChangeDropDown } = props;

	const onCheckedAll = useCallback(
		(checked) => {
			if (checked) {
				const checkedListArray = [];

				item.dropdown_list.forEach((list) => checkedListArray.push(list));

				setCheckedLists(checkedListArray);
			} else {
				setCheckedLists([]);
			}
		},
		[item],
	);

	const onCheckedEl = useCallback(
		(checked, list) => {
			if (checked) {
				setCheckedLists([...checkedList, list]);
			} else {
				setCheckedLists(checkedList.filter((el) => el !== list));
			}
		},
		[checkedList],
	);

	useEffect(() => {
		console.log(`###[DROP][name=${title}]change checkedList=>`, checkedList);
		console.log(`###[DROP][name=${title}]change checkedList length=>`, checkedList.length);
		// console.log(`###[DROP][name=${title}]change checkedList=>`, onChangeDropDown);
		if ( checkedList != null && checkedList.length > 0 && onChangeDropDown) {
			// console.log('#### push OnChangeDropDown=>', checkedList);
			onChangeDropDown(checkedList);
		}
	}, [checkedList]);

	return (
		<>
			<div className="ui-dropdown-type01" >
				<div className="label" onClick={() => setOpen(!open)}>
					{checkedList.length} {title || DEFAULT_TITLE}
				</div>
				<ul className={open ? 'on' : ''}>
					<li>
						<label>
							<input
								type="checkbox"
								name="region"
								onChange={(e) => onCheckedAll(e.target.checked)}
								checked={checkedList.length === 0 ? false : checkedList.length === item.dropdown_list.length ? true : false}
							/>
							<span>Select All</span>
						</label>
					</li>
					{item?.dropdown_list?.map((items, index) => (
						<li key={index}>
							<label>
								<input
									type="checkbox"
									name="region"
									onChange={(e) => onCheckedEl(e.target.checked, items)}
									checked={checkedList.includes(items) ? true : false}
								/>
								<span>{items}</span>
							</label>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default DropDown;
