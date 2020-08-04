import {TextField} from "@material-ui/core";
import React, {useState} from "react";
import styled from "styled-components";

interface InputAreaProps {
    onChange: any
}

const InputArea: React.FC<InputAreaProps> = props => {
    return (
        <TextField id="standard-basic" label="入力してね" onChange={e => props.onChange(e.target.value)} />
    )
}

const Display: React.FC = () => {
    const [msg, setMsg] = useState('')

    return (
        <div>
            <Msg>{msg}</Msg>
            <InputArea onChange={(value: string)=> setMsg(value)} />
        </div>
    )
}

export default Display

const Msg = styled.p`
font-size: 2rem;
margin: 1rem 0;
`
