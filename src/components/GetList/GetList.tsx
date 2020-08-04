import {TextField} from "@material-ui/core";
import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {GetListProps} from "../../pages/List/List";

const GetList: React.FC<GetListProps> = props => {
    const [id,setId] = useState(0)
    const changeId = (num: number) => {
        num <= 0 ? setId(0) : setId(num)
    }

    return (
        <Wrapper>
            <TextField id="standard-basic" label="ID検索" type='number' value={id} onChange={(e) => changeId(Number(e.target.value)) } />
            <ButtonArea>
                <Button variant='outlined' onClick={props.onGetList(id)}>findById</Button>
                <Button variant='outlined' onClick={props.onReset}>reset</Button>
            </ButtonArea>
        </Wrapper>
    )
}

export default GetList

const ButtonArea = styled.div`
margin-top: auto;
`

const Wrapper = styled.div`
display: flex;
`
