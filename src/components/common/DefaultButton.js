import React from 'react';

function DefaultButton(props) {
	const { type, text, btnClass } = props;

	return (
		<>
			{type === 'a' && (
				<a href="#" className={btnClass}>
					{text}
				</a>
			)}
			{type === 'button' && <button className={btnClass}>{text}</button>}
		</>
	);
}

export default DefaultButton;
