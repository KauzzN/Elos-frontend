import "./parceirosCard.css";

function ParceirosCard({ icon, title, text }){

    return(

        <div className="partnership-card">

            <div className="partnership-icon">

                {icon}

            </div>

            <h3>{title}</h3>

            <p>{text}</p>

        </div>

    )
}

export default ParceirosCard;