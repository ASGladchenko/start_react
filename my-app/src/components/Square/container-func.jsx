import React,{useState} from 'react'

import SquareComponent from "./component";

import './styles.scss'

const Square = () => {
    const [value,setValue] = useState(0);

    const handleValueMore = ()=> setValue(value+1)

    const handleValueLess = ()=> setValue(value-1)


    return (
        <SquareComponent
            onHandleMore={handleValueMore}
            onHandleLess={handleValueLess}
            setValue={setValue}
            value={value}
        />
    )
}
export default Square