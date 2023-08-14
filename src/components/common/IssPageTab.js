import React, { useEffect, useState } from 'react';

const IssPageTab = (props) => {
    const { isActive, children } = props;

    return (
        <>
        {
            isActive &&
            <div className="grid-row-2">
                {children}
            </div>
        }
        </>
    )
}

export default IssPageTab; 