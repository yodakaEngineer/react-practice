import {TextField} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {GetListProps} from "../../pages/List/List";

const GetList: React.FC<GetListProps> = props => {
    const [id,setId] = useState(0)
    useEffect(() => {
        id <= 0 ? setId(0) : setId(id)
    }, [id])

    return (
        <Wrapper>
            <TextField id="standard-basic" label="ID検索" type='number' value={id} onChange={(e) => setId(Number(e.target.value)) } />
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
