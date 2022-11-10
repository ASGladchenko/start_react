
import CardTitle from "./Card-Title";
import CardInform from "./Card-Inform";

import './styles.scss'

const Card = ({id, username, name,website, phone,email}) => (
    <div key={id} className="User-Card">
        <CardTitle
            cardTitle={username}
        />
        <CardInform data={name} text='Name:'/>
        <CardInform data={website} text='User website:'/>
        <CardInform data={phone} text='User phone number:'/>
        <CardInform data={email} text='User em@il:'/>
    </div>
)


export default Card