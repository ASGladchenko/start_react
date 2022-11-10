import data from './mocData'

import './styles.scss'
import Card from "./Card";

const Cards = () => (
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

export default Cards