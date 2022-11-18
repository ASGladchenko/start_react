
import CardTitle from "./Card-Title";
import CardInform from "./Card-Inform";

import './styles.scss'

const Card = ({id, username, name,website, phone,email,className}) => (
    <div className={className ? className+' User-Card': 'User-Card'}>
        <CardTitle
            cardTitle={username}
            id={id}
        />
        <CardInform data={name} text='Name:'/>
        <CardInform data={website} text='User website:'/>
        <CardInform data={phone} text='User phone number:'/>
        <CardInform data={email} text='User em@il:'/>
    </div>
)


export default Card