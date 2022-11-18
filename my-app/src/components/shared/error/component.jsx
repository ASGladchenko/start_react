import {Link} from "react-router-dom";
import './styles.scss'

const Error = () => {
    return (
        <div className='text-center'>
            <h1>Error: 404</h1>
            <p>File not found</p>
            <span><Link to='/'>Back home page</Link></span>
        </div>

    )

}

export default Error