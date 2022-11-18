import {Link, Outlet} from "react-router-dom";

import './styles.scss'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className="container text-center d-flex ">
                    <span><Link to='/'>Home</Link></span>
                    <span><Link to='/users'>Users</Link></span>
                </div>
            </div>
            <Outlet></Outlet>
        </div>

    )

}

export default Header