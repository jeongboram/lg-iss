import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubNav from './SubNav';

function Header() {

	const [lnbMenu, setLnbMenu] = useState(false)

	const onLnbMenu = () => {
		setLnbMenu(!lnbMenu);
	}

	return (
		<>
			<div className="header-container">
				<div className="inner">
					<button className="nav-hamburger" onClick={onLnbMenu}>서브 메뉴 보기</button>
					<header>
						<h1>LG ISS</h1>
						<nav>
							<ul>
								<li>
									<a className="gnb-cdp">cdp</a>
								</li>
								<li className="on">
									<Link to="/" className="gnb-iss">
										iss
									</Link>
									<SubNav />
								</li>
								<li>
									<a className="gnb-program">program</a>
								</li>
								<li>
									<a className="gnb-channel">channel</a>
								</li>
								<li>
									<a className="gnb-promotion">promotion</a>
								</li>
								<li>
									<a className="gnb-statistics">statistics</a>
								</li>
								<li>
									<a className="gnb-account">account</a>
								</li>
								<li>
									<a className="gnb-system">system</a>
								</li>
								<li>
									<a className="gnb-home-app">home-app</a>
								</li>
								<li>
									<a className="gnb-web">web</a>
								</li>
								<li>
									<a className="gnb-mobile">mobile</a>
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
					<div className={classNames('hamburger-sub-nav', { on: lnbMenu })}>
						<SubNav />
						<button className="btn-toggle" onClick={onLnbMenu}>서브메뉴 닫기</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
