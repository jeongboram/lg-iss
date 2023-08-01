import React from "react";
import SideBar from "../components/layout/SideBar";

const Index = () => {
    return (
        <>
            <div className="main-container">
                <div className="inner">
                    <SideBar />
                    <div className="contents-section">contents section</div>
                </div>
            </div>
        </>
    );
};
export default Index;
