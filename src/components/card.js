import locationIcon from "../img/location.svg"

export default function card(props) {
    console.log(props)
    return (
        <div className="card">
            <img className="card--img" src={props.imageUrl} alt="" />
            <div className="card--location">
                <img src={locationIcon} alt="" />
                <p>{props.location}</p>
                <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
            </div>
            <h3 className="card--title">{props.title}</h3>
            <p className="card--date">{props.startDate} - {props.endDate}</p>
            <p className="card--para">{props.description}</p>
        </div>
    )
}