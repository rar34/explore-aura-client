import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-white loading-lg"></span>
    }

    if(!user){
        return <Navigate to="/login" state={location.pathname}/>
    }
    return (
            <div>
                {children}
            </div>
        );
};

export default PrivateRoutes;

PrivateRoutes.propTypes ={
    children: PropTypes.node
}