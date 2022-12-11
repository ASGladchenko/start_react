import {connect} from "react-redux";

import { increment, decrement } from "../../store/counter/actions"

const Counter = ({number,increment,decrement}) => (
        <div>
            <button onClick={() => increment()}>+</button>
            <div>{number}</div>
            <button onClick={() => decrement()}>-</button>

        </div>

    )

const mapStateToProps=state=>({
    number: state.counter.number,
})

const mapDispatchToProps= {
    increment : increment,
    decrement : decrement,
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)