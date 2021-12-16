const NavBar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/MyFirstReact-1-">ARCANE</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="/MyFirstReact-1-">Home</a>
                            <a className="nav-link" href="/MyFirstReact-1-/employees">Champions</a>
                            <a className="nav-link" href="/MyFirstReact-1-/add">Add Champions</a>
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;