import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return (
        <>
            <div className="header-container">
                <div className="inner">
                    <header>
                        <h1>LG ISS</h1>
                        <nav>
                            <ul>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-cdp"
                                    >
                                        cdp
                                    </a>
                                </li>
                                <li className="on">
                                    <Link to="/iss" className="gnb-iss">
                                        iss
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-program"
                                    >
                                        program
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-channel"
                                    >
                                        channel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-promotion"
                                    >
                                        promotion
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-statistics"
                                    >
                                        statistics
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-account"
                                    >
                                        account
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-system"
                                    >
                                        system
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-home-app"
                                    >
                                        home-app
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-web"
                                    >
                                        web
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        className="gnb-mobile"
                                    >
                                        mobile
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className="user-control">
                        <div className="running-time">
                            <span>30:00</span>
                        </div>
                        <div className="dropmenu-user-setting">
                            <button>
                                <span>Admin</span>
                            </button>
                            <ul className="ui-dropmenu">
                                <li>Dropmenu1</li>
                                <li>Dropmenu2</li>
                                <li>Dropmenu3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
