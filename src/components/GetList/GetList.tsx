import React, {useState} from "react";

interface GetListProps {
    onGetList: any,
    onReset: any
}

const GetList: React.FC<GetListProps> = props => {
    const [id,setId] = useState(0)

    return (
        <div>
            <input type='number' onChange={(e) => setId(Number(e.target.value)) } />
            <button onClick={props.onGetList(id)}>findById</button>
            <button onClick={props.onReset}>reset</button>
        </div>
    )
}

export default GetList
