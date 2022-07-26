import PropTypes from 'prop-types'
import { useState } from 'react'

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    //handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1 )
    }

    const handleReset = (e) => {
        setCounter( value )
    }


    const handleSubstract = (e) => {
        setCounter( counter - 1 )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    )

}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp;