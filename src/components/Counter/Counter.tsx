import React, {useReducer} from "react";
import Button from '@material-ui/core/Button';
import styled from "styled-components";

type btnProps = {
    name: string,
    onChangeCount: any
}

const Btn: React.FC<btnProps> = (props) => {
    const btn = (
        <Button variant="outlined" onClick={props.onChangeCount} style={{margin:'0 0.5rem'}}>
            {props.name}
        </Button>
    )
    return (btn)
}

const Counter: React.FC = () => {
    const reduce = (count: number, action: string) => {
        switch (action) {
            case 'up':
                return count + 1
            case 'down':
                return count === 0 ? 0 : count - 1
            case 'reset':
                return 0
            default:
                throw new Error()
        }
    }
    const [count, dispatch] = useReducer(reduce,0)

    return (
        <div>
            <Count>{count}</Count>
            <Btn name='Down' onChangeCount={()=>dispatch('down')}/>
            <Btn name='Reset' onChangeCount={()=>dispatch('reset')}/>
            <Btn name='Up' onChangeCount={()=>dispatch('up')}/>
        </div>
    )
}

export default Counter

const Count = styled.p`
margin: 1rem 0;
font-size: 2rem;
`
