import useGetData from "../../../hooks/useGetData";

import './styles.scss'
import Card from "../Card";



const UserDetails = ({}) => {
    let url = window.location.href.replace(window.location.host,'jsonplaceholder.typicode.com');
    const data = useGetData(url).data
    return (
        <Card {...data}
              className='User-Details'
        />
    )
}


export default UserDetails