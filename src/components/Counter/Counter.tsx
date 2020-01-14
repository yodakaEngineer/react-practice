import React, {useState} from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>
                カウントプラス
            </button>
        </div>
    )
}

export default Counter
