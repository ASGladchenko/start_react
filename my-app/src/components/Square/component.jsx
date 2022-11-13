import SquareBtn from "./button/component";

const SquareComponent = ({onHandleLess,onHandleMore,value,setValue }) => (
        <div className={value < 0 ?  "square-wrapper square-wrapper-minus" : "square-wrapper" }>
           <SquareBtn className='square-btn' onHandleChange={onHandleMore} value={value}>+</SquareBtn>
            {/*<button onClick={()=>setValue(value+1)}>+</button>  For example*/}
            <span className="square-text">{value}</span>
            {/*<button onClick={()=>setValue(value-1)}>-</button> For example*/}
            <SquareBtn className='square-btn' onHandleChange={onHandleLess} value={value}>-</SquareBtn>
        </div>
)

export default SquareComponent