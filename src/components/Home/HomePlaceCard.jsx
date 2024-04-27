import PropTypes from 'prop-types'

const HomePlaceCard = ({ place }) => {
    const { tourists_spot_name, country_name, short_description, image } = place;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{tourists_spot_name}</h2>
                <h4 className='text-xl font-semibold'>{country_name}</h4>
                <p>{short_description}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default HomePlaceCard;

HomePlaceCard.propTypes ={
    place: PropTypes.object
}