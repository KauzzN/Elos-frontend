import "./donationCard.css";

function DonationCard({ icon, title, text }) {

    return(

        <div className="donation-card">

            <div className="donation-icon">

                {icon}

            </div>

            <h3>{title}</h3>

            <p>{text}</p>

        </div>

    )
}

export default DonationCard;