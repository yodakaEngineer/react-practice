import React, {useState} from "react";
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
    const [count, setCount] = useState(0)
    const countUp = () => {
        return () => setCount(count + 1)
    };
    const countDown = () => {
        return () => setCount((prevCount)=> {
            return prevCount === 0 ? prevCount : prevCount - 1
        })
    }

    const reset = () => {
        return () => setCount(0)
    }

    return (
        <div>
            <p>{count}</p>
            <Btn name='リセット' onChangeCount={reset()}/>
            <Btn name='アップ' onChangeCount={countUp()}/>
            <Btn name='ダウン' onChangeCount={countDown()}/>
        </div>
    )
}

export default Counter
