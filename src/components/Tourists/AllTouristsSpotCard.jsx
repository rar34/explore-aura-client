import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const AllTouristsSpotCard = ({ place }) => {
    // console.log(place)
    const { _id, image, tourists_spot_name, averageCost, totalVisitorsPerYear, travel_time, seasonality } = place;
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p className='font-medium flex flex-col md:flex-row justify-between px-4 text-gray-500'><span>Average Cost: ${averageCost}</span> <span>Travel Time: {travel_time}</span></p> <hr />
                <p className='font-medium flex flex-col md:flex-row justify-between px-4 text-gray-500'><span>Total Visitors per Year: {totalVisitorsPerYear}</span> <span>Seasonality: {seasonality}</span></p>
                <Link to={`/view-details/${_id}`}><button className="btn text-white w-full my-4 btn-success">View Details</button></Link>

            </div>
        </div>
    );
};

export default AllTouristsSpotCard;

AllTouristsSpotCard.propTypes = {
    place: PropTypes.object
}