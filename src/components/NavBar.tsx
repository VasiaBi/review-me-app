function NavBar() {
    return (
    <nav className="navbar bg-light navbar-expand-lg">
        <div className="nav-container justify-content-center position-sticky navbar-expand navbar-light sticky-top">
            <a className="navbar-brand" href="#">
            <img src="/src/assets/logo.svg" width="50" height="50" className="d-inline-block"/>ReviewMe</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link nav-text active" aria-current="page" href="#">How it works</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-text active" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item-right nav-text">
                        <a className="nav-link active" aria-current="page" href="#">Login/Sign up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
export default NavBar;