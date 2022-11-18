import './styles.scss'
import {Link} from "react-router-dom";

const CardTitle = ({id,cardTitle,className=""}) => (
    <h3 className={className}><Link to={"/users/"+id}>{cardTitle}</Link></h3>

)


export default CardTitle