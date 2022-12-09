import PropTypes from 'prop-types';
import { useState } from 'react';



export const Counter = ({value}) => {

    //console.log('render');
    
    const [count,setCount]=useState(value);

    const handleClick = (cmd) => {
        // const {target} = event;
        //console.log(cmd);
    
        // let val = Number(target.innerText.substring(1));
        // val++;
        // console.log('val',val);
        // target.innerText = `+${val}`;
        //count = count + 1;
        switch(cmd){
            case '+':{
                setCount(count+1);
                break;
            }
            case '-':{
                setCount(count-1);
                break;
            }
            case 'r':{
                setCount(value);
                break;
            }
        }        
    }

    return (
        <>
            <h2>Counter</h2>
            <h2>Inicial: {value}</h2>
            <h3><span data-testid="span-test">{count}</span></h3>
            <button onClick={()=>handleClick('+')}>+1</button>
            <button onClick={()=>handleClick('-')}>-1</button>
            <button aria-label="btn-reset" onClick={()=>handleClick('r')}>reset</button>
        </>
    )
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

Counter.defaultProps = {
    value: 0
}