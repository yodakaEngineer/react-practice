import React, {useState} from "react";
import Button from "@material-ui/core/Button";

interface GetListProps {
    onGetList: any,
    onReset: any
}

const GetList: React.FC<GetListProps> = props => {
    const [id,setId] = useState(0)

    return (
        <div>
            <input type='number' onChange={(e) => setId(Number(e.target.value)) } />
            <Button variant='outlined' onClick={props.onGetList(id)}>findById</Button>
            <Button variant='outlined' onClick={props.onReset}>reset</Button>
        </div>
    )
}

export default GetList
