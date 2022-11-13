const SquareBtn = ({children,onHandleChange,value,className }) => <button className={className} onClick={()=>onHandleChange(value)}>{children}</button>

export default SquareBtn