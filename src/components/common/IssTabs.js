import React, { useEffect, useState } from 'react';
import IssTab from './IssTab';
import IssTable from './IssTable';
import { dashboard_service_tabledata } from '../../consts/sampleData'


const IssTabs = (props) => {
    const { children, tabMenus, currentTab, onChange } = props;

    const onSelectMenu = (selectedIdx, data) => {
        console.log(`#IssTabs onSelectMenu=>[${selectedIdx}]\n`, data);
        onChange(selectedIdx, data);
    }

    return (
        <>
        <div className="ui-tab-type02">
            <div className="ui-tab-menu">
                {tabMenus.map((el, index) => (
                    <div key={index} className={index === currentTab ? 'on' : ''} onClick={() => onSelectMenu(index, el)}>
                        <h2>{el.name}</h2>
                        <div className="ui-tooltip">
                            <i>툴팁</i>
                            <div className="tooltip">Contents Issue Contents Issue Contents Issue texe text Contents Issue</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="ui-tab-contents">
                <div className="tab-box">
                    {children}
                </div>
            </div>
        </div>
        </>
    )
}

export default IssTabs; 