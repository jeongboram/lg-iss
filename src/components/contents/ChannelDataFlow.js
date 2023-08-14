import React, { useEffect, useState } from 'react';

const ChannelDataFlow = (props) => {
    const { imageUrl, data, isActive } = props;
    const [onFlag, setOn] = useState(isActive?true:false);

    const OnClick = () => {
        setOn(!onFlag);
    }

    return (
        <>
        <li className={onFlag ? "on": ""} onClick={OnClick}>
            <span className="logo" style={{ backgroundImage: `url(${imageUrl})` }}></span>
            <span className="num">{data}</span>
        </li>
        </>
    )
}


export default ChannelDataFlow; 