import Swal from "sweetalert2";

const NewsLetter = () => {

    const handleSubscribe = () => {
        Swal.fire({
            title: "Subscribed",
            text: "Thanks for subscribed us",
            icon: "success"
        });
    }

    return (
        <div className="min-h-96 flex items-center p-3 justify-center my-14 rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/fFBT7Xr/coxsbazar.jpg)' }}>
            <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-5xl font-bold">Subscribe to our NEWSLETTER</h2>
                <p className="font-bold">Subscribe to our NEWSLETTER and stay updated</p>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <button onClick={handleSubscribe} className="btn text-black w-full font-bold btn-outline btn-default">SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default NewsLetter;