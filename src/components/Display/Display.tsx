import {TextField} from "@material-ui/core";
import React, {useState} from "react";

interface InputAreaProps {
    onChange: any
}

const InputArea: React.FC<InputAreaProps> = props => {
    return (
        <TextField id="standard-basic" label="Standard" onChange={e => props.onChange(e.target.value)} />
    )
}

const Display: React.FC = () => {
    const [msg, setMsg] = useState('')

    return (
        <div>
            <p>{msg}</p>
            <InputArea onChange={(value: string)=> setMsg(value)} />
        </div>
    )
}

export default Display
