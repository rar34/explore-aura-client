
const Footer = () => {
    return (
        <footer className="footer md:px-20 p-10 bg-neutral text-white">
            <aside>
                <h6 className="footer-title">About</h6>
                <p className="text-sm">
                <span className="font-bold">ExploreAura:</span> Your portal to immersive journeys,<br /> uncovering destinations enriched with vibrant energy,<br /> cultural vibrancy, and unique spiritual experiences worldwide.</p>
            </aside>
            <nav>
                <h6 className="footer-title">Contact info</h6>
                <p>Call-centre: 1 (323)25 4121</p>
                <p>Fax: 1 (888) 637-7262</p>
                <p>Email: info@explore-aura.com</p>

                <p>18/C, Dhanmondi, Dhanmondi Avenue Street, <br /> Dhaka CA 91791, Bangladesh</p>

            </nav>
            <nav>
                <h6 className="footer-title">Important Links</h6>
                <a className="link link-hover">Popular Places</a>
                <a className="link link-hover">Career</a>
                <a className="link link-hover">Style Guid</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
        </footer>
    );
};

export default Footer;