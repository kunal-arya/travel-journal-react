import logo from "../img/logo.svg"


export default function Nav() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="logo svg" className="nav--logo"/>
                <h1>My Travel Journal</h1>
            </nav>
        </header>
    )
}