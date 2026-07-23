import "./impactCard.css";

function ImpactCard({ number, title, icon }) {
    return (
        <div className="impact-card">

            <div className="impact-card-icon">
                {icon}
            </div>

            <h2>{number}</h2>

            <p>{title}</p>

        </div>
    );
}

export default ImpactCard;