import {TextField} from "@material-ui/core";
import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {GetListProps} from "../../pages/List/List";

const GetList: React.FC<GetListProps> = props => {
    const [id,setId] = useState(0)
    const changeId = (num: number) => {
        num <= 0 ? setId(0) : setId(num)
    }

    return (
        <div>
            <TextField id="standard-basic" label="ID検索" type='number' value={id} onChange={(e) => changeId(Number(e.target.value)) } />
            <Button variant='outlined' onClick={props.onGetList(id)} style={{margin:'0 0.5rem'}}>findById</Button>
            <Button variant='outlined' onClick={props.onReset} style={{margin:'0 0.5rem'}}>reset</Button>
        </div>
    )
}

export default GetList
