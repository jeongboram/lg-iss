import React, { useRef } from 'react';

export const DEFAULT_TITLE = 'selected';

function DropDown(props) {
	const { item, title } = props;
	const inputAllRef = useRef();

	const onSelect = () => {
		console.log('input checked');
	};

	// const onSelectAll = () => {
	// 	console.log('inputRef.current', inputRef.current);
	// };

	return (
		<>
			<div className="ui-dropdown-type01">
				<div className="label">0 {title || DEFAULT_TITLE}</div>
				<ul>
					<li>
						<label onClick={onSelect}>
							<input type="checkbox" name="region" ref={inputAllRef} />
							<span>Select All</span>
						</label>
					</li>
					{item?.dropdown_list?.map((items, index) => (
						<li key={index}>
							<label onClick={onSelect}>
								<input type="checkbox" name="region" />
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
