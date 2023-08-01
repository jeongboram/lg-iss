import React from "react";

function SideBar() {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("on submit");
    };
    return (
        <>
            <div className="sidebar-section">
                <div className="head-title">
                    <h1>LG Channels Monotoring Dashboard</h1>
                    <button className="btn-refresh">새로고침</button>
                </div>
                <div className="box-total-issue">
                    <h2>Total number of issue</h2>
                    <span className="time">2023-07-13 10:10:00</span>
                    <strong>145,555</strong>
                </div>
                <div className="box-summary-tabs">
                    <div className="ui-tab-type01">
                        <div className="ui-tab-menu">
                            <a href="javascript:void(0);">Service</a>
                            <a href="javascript:void(0);">Contents</a>
                            <a href="javascript:void(0);">Statistics</a>
                        </div>
                        <div className="ui-tab-contents">
                            <div className="tab-box">Service Tab Contents</div>
                            <div className="tab-box">Contents Tab Contents</div>
                            <div className="tab-box">
                                Statistics Tab Contents
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-search">
                    <h2>Search for Issue Code</h2>
                    <div className="field-input-search">
                        <form action="#" onSubmit={onSubmit}>
                            <i></i>
                            <input type="text" placeholder="Search all Code" />
                        </form>
                    </div>
                </div>
                <div className="box-issus-inquiry">
                    <h2>Issue Inquiry</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>text@lg.com</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>text@lg.com</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>text@lg.com</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>text@lg.com</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>text@lg.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <footer>
                    <p>
                        This data is from the HE Service Operations team
                        Available
                        <br />
                        based on LG Smart TV automation data.
                    </p>
                </footer>
            </div>
        </>
    );
}

export default SideBar;
