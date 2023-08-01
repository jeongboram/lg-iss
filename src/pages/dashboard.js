import React from "react";
import SideBar from "../components/layout/SideBar";

const Dashboard = () => {
    return (
        <>
            <div className="main-container">
                <div className="inner">
                    <SideBar />
                    <div className="contents-section">
                        dashboard contents section
                    </div>
                </div>
            </div>
        </>
    );
};
export default Dashboard;
