import React, { useRef } from 'react';

function DropDown(props) {
	const { item } = props;
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
				<div className="label">0 {item.dropdown_title}</div>
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
