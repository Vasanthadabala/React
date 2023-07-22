import App from "../App";
function Nav(props) {
    console.log(props)
    return (
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <h1>{props.name}</h1>
        </nav>
    );
};

export default Nav;