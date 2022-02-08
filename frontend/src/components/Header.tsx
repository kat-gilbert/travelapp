// import menuIcon from "../../public/Hamburger-Menu-White.jpg"

const menuIcon = <svg width="31" height="25" viewBox="0 0 318 253" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20H317.288" stroke="white" stroke-width="40"/>
<path d="M0 126.244H317.288" stroke="white" stroke-width="40"/>
<path d="M0 233H317.288" stroke="white" stroke-width="40"/>
</svg>


function Header() {
    return (
        <nav className="Header-Nav">
            <h1 id="Logo-Header"><span id="Logo-E">e</span>mbark</h1>
            {/* <div className="Menu-Icon">{menuIcon}</div> */}
            {/* <ul>
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Outdoors</a></li>
                <li><a href="#">Arts & Culture</a></li>
            </ul> */}
        </nav>
    )
}

export default Header;