import React, {useReducer, useState} from "react";
import Button from '@material-ui/core/Button';

type btnProps = {
    name: string,
    onChangeCount: any
}

const Btn: React.FC<btnProps> = (props) => {
    const btn = (
        <Button variant="outlined" onClick={props.onChangeCount}>
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
            <p>{count}</p>
            <Btn name='リセット' onChangeCount={()=>dispatch('reset')}/>
            <Btn name='アップ' onChangeCount={()=>dispatch('up')}/>
            <Btn name='ダウン' onChangeCount={()=>dispatch('down')}/>
        </div>
    )
}

export default Counter
