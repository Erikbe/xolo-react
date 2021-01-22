import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
      const [activeSidemenu, setActiveSidemenu] = useState(false);

      const modifyActiveSidemenu = useCallback(
        newActiveSidemenu => {
          setActiveSidemenu(newActiveSidemenu);
        },
        [setActiveSidemenu]
      );

    return (
        <div className="sidebar">
            <nav className="nav-sidebar">
                <ul className="nav-sidebar-list">
                    <li className="nav-sidebar-item">
                        <Link to="/" className="nav-sidebar-link">Home</Link>
                    </li>
                    <li className="nav-sidebar-item">
                        <Link to="/how-it-works" className="nav-sidebar-link">How It Works</Link>
                    </li>
                    <li className="nav-sidebar-item" onClick={() => modifyActiveSidemenu("solutions")}>
                        <div className="nav-sidebar-link nav-sidebar-link-sidemenu">Our solutions</div>
                    </li>
                    <li className="nav-sidebar-item">
                        <Link to="/how-it-works" className="nav-sidebar-link">Pricing</Link>
                    </li>
                    <li className="nav-sidebar-item" onClick={() => modifyActiveSidemenu("help")}>
                        <div className="nav-sidebar-link nav-sidebar-link-sidemenu">Help</div>
                    </li>
                </ul>
                <ul className={activeSidemenu === "solutions" ? 'nav-sidebar nav-sidebar-sidemenu is-open' : 'nav-sidebar nav-sidebar-sidemenu'} >
                    <li className="link-back -white pb-0 pt-0" onClick={() => modifyActiveSidemenu(false)}></li>
                    <li>
                        <Link to="/go" className="iconbox iconbox-top iconbox-nav -bubble -bubble-red iconbox-invoices-white">
                            <div className="iconbox-body">
                                <div className="iconbox-title">Xolo Go</div>
                                <div className="iconbox-text">With our newest product, start invoicing your customers without registering a company.</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/leap" className="iconbox iconbox-top iconbox-nav -bubble -bubble-white iconbox-business">
                            <div className="iconbox-body">
                                <div className="iconbox-title">Xolo Leap</div>
                                <div className="iconbox-text">The most trusted product for starting a company with e-Residency since 2015.</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pay-freelancers-with-xolo" className="iconbox iconbox-top iconbox-nav -bubble -bubble-pink iconbox-building-blue">
                            <div className="iconbox-body">
                                <div className="iconbox-title">Enterprise solutions</div>
                                <div className="iconbox-text">As a company, manage your freelance workforce payments effortlessly.</div>
                            </div>
                        </Link>
                    </li>
                </ul>
                    <ul className={activeSidemenu === "help" ? 'nav-sidebar nav-sidebar-sidemenu is-open' : 'nav-sidebar nav-sidebar-sidemenu'} >
                        <li className="link-back -white pb-0 pt-0" onClick={() => modifyActiveSidemenu(false)}></li>
                        <li>
                            <Link to="/faq" className="iconbox iconbox-top iconbox-nav -bubble -bubble-red iconbox-questionmark-white">
                                <div className="iconbox-body">
                                    <div className="iconbox-title">FAQ</div>
                                    <div className="iconbox-text">Everything you need to know about doing business with Xolo.</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/leap" className="iconbox iconbox-top iconbox-nav -bubble -bubble-red iconbox-newspaper-white">
                                <div className="iconbox-body">
                                    <div className="iconbox-title">Blog</div>
                                    <div className="iconbox-text">The latest updates and expert tips for your solo business.</div>
                                </div>
                            </Link>
                        </li>
                        <li className="vertical-hr"></li>
                        <li className="nav-media">
                            <Link to="/compare">
                                <strong className="text-size-normal-plus">Compare Xolo Go and Xolo Leap</strong>
                            </Link>
                        </li>
                        <li className="article-links">
                            <Link to="/business-banking">Business banking with Xolo</Link>
                            <Link to="https://blog.xolo.io/invoicing-solution-side-business">An invoicing solution for your side business</Link>
                            <Link to="https://blog.xolo.io/xolo-referral-program">Earn income with our referral program</Link>
                        </li>
                    </ul>
                }
            </nav>
        </div>
    );
}

export default Sidebar;