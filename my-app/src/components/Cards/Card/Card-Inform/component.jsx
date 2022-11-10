import './styles.scss'

const CardInform = ({text,data,className="",}) => (
            <p className={className}>{text} : {data}</p>

)


export default CardInform