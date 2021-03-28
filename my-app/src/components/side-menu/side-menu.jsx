import SideMenuLink from "./side-menu-link/side-menu-link";

function SideMenu() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                    <i className="fas fa-chart-line"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>

            <hr className="sidebar-divider my-0" />
            <SideMenuLink classLi='nav-item active' title="Dashboard" class='fas fa-fw fa-tachometer-alt'/>
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Actions</div>

            <SideMenuLink title="Pages" class='fas fa-fw fa-folder'/>
            <SideMenuLink title="Charts" class='fas fa-fw fa-chart-area'/>
            <SideMenuLink title="Tables" class='fas fa-fw fa-table'/>

            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default SideMenu;