//rsf
import React from 'react';

function Menu(props) {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">Pharma</span>
            </a>
            <div className="sidebar">
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p>
                                    User
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="/userreg" className="nav-link">
                                        <i className="fas fa-user-plus nav-icon"></i>
                                        <p>Register</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/userlist" className="nav-link">
                                        <i className="fas fa-list nav-icon"></i>
                                        <p>Listing</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-cart-plus" />
                                <p>
                                    Orders
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-pills" />
                                <p>
                                    Products
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-truck" />
                                <p>
                                    Shipment Tracking
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-file-alt" />
                                <p>
                                    Reports
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>
                                    Profile
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/calendar.html" className="nav-link">
                                <i className="nav-icon fas fa-cogs" />
                                <p>
                                    Settings
                                </p>
                            </a>
                        </li>
                        {/*<li className="nav-item">
                            <a href="pages/gallery.html" className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Gallery
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-columns" />
                                <p>
                                    Kanban Board
                                </p>
                            </a>
                        </li>*/}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Menu;