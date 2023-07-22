import App from "../App";
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
                </div>
                <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
            <h1>{props.greetings}</h1>
        </div>
    );
};

export default Promo;