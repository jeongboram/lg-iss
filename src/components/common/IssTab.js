import React, { useEffect, useState } from 'react';

const IssTab = (props) => {
    const { isActive, children } = props;

    return (
        <>
        <div className="ui-tab-contents">
            <div className="tab-box">
                { isActive && children }
            </div>
        </div>
        </>
    )
}

export default IssTab; 