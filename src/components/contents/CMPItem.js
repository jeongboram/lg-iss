import React, { useEffect, useState } from 'react';

const CMPItem = (props) => {
    const { iconType, data, isActive } = props;
    const [onFlag, setOn] = useState(isActive?true:false);

    const OnClick = () => {
        setOn(!onFlag);
    }

    return (
        <>
        <div className={'summary-box ' + onFlag?'on':''}>
            <h3>
                Channel
                <br />
                Organization
            </h3>
            <strong>00</strong>
        </div>
        </>
    )
}


export default CMPItem; 