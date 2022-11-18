import Card from "./Card";
import useGetData from "../../hooks/useGetData";

import './styles.scss'

const Cards = () => {
    let url = window.location.href.replace(window.location.host,'jsonplaceholder.typicode.com')

    const {data} = useGetData(url)
    return (
        <>
            <h2 className='text-center'>Users</h2>
            <div className="container d-flex flex-wrap">
                {data.map(card => (
                    <Card key={card.id}
                          {...card}

                    />
                ))}
            </div>

        </>
    )
}

export default Cards