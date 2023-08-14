import React from 'react';
import { Link } from 'react-router-dom';


const IssPageTabs = (props) => {
    const { tabMenus, currentTab, onChange } = props;

    const onSelectMenu = (selectedIdx, data) => {
        console.log(`#IssPageTabs onSelectMenu=>[${selectedIdx}]\n`, data);
        onChange(selectedIdx, data);
    }

    return (
        tabMenus.map((el, index) => (
            <>
                <div key={index} className={index === currentTab ? 'on' : ''}>
                    <h1>
                        <Link to="javascript:void(0);" onClick={()=>onSelectMenu(index, el)}>{el.title}</Link>
                    </h1>
                    { /* 마지막에 하나만 표기처리 , 현재탭의 툴팁표기 */
                    tabMenus.length -1 === index && el.tooltip && 
                        <div className="ui-tooltip">
                            <i>툴팁</i>
                            <div className="tooltip">{tabMenus[currentTab].tooltip}</div>
                        </div>
                    }
                </div>
            </>
        ))
    )
}

export default IssPageTabs; 