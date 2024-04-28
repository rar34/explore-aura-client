
const Offer = () => {
    return (
        <div className="min-h-96 my-14 flex flex-col md:flex-row p-10 items-center justify-center gap-10 md:gap-24 rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/QfhsGxV/bali.jpg)' }}>
            <img className="w-96" src="https://i.ibb.co/v40L921/offer.png" alt="" />
            <div className="space-y-4">
                <h2 className="text-5xl font-bold text-white">Exciting Offer For You</h2>
                <p className="text-2xl font-bold text-white">for Cox&apos;s Bazar</p>
                <p className="text-white">Explore exotic destinations with our exclusive deals: breathtaking views, luxurious accommodations, and unforgettable <br /> experiences await. Book now and embark on adventure with existing offer</p>
                <button className="btn btn-outline text-white">VIEW MORE</button>
            </div>
        </div>
    );
};

export default Offer;