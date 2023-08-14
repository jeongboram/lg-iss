import React, { useEffect, useState } from 'react';

const IssTab = (props) => {
    const { isActive, children } = props;

    return (
        <>
        {
            !isActive &&
            <div className="ui-tab-contents">
                <div className="tab-box">
                {children}
                </div>
            </div>
        }
        </>
    )
}

export default IssTab; 