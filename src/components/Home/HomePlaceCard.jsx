import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const HomePlaceCard = ({ place }) => {
    const { _id, tourists_spot_name, country_name, short_description, image } = place;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt={tourists_spot_name} /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{tourists_spot_name}</h2>
                <h4 className='text-xl font-semibold'>{country_name}</h4>
                <p>{short_description}</p>
                <Link to={`/view-details/${_id}`}><button className="btn text-white w-full my-4 btn-success">View Details</button></Link>
            </div>
        </div>
    );
};

export default HomePlaceCard;

HomePlaceCard.propTypes = {
    place: PropTypes.object
}