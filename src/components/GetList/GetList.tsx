import {TextField} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {GetListProps} from "../../pages/List/List";

const GetList: React.FC<GetListProps> = props => {

    return (
        <Wrapper>
            <TextField
                id="standard-basic"
                label="ID検索"
                type='number'
                value={props.id}
                onChange={(e) => {props.onIdChange(Number(e.target.value))}} />
            <ButtonArea>
                <Button variant='outlined' onClick={props.onGetList}>findById</Button>
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
