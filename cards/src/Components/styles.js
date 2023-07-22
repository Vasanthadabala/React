import App from "../App";
function Bag(props) {
    const bag = {
        padding: "20px",
        border: "2px solid gray",
        background: "#fff",
        margin: "30px 0",
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag;