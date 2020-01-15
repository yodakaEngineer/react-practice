import React, {useState} from "react";

interface User {
    id: number
    name: string
    age: number
    role: string
}

const List: React.FC = () => {
    const itemList: User[] = [
        {
            id: 1,
            name: 'taisuke',
            age: 23,
            role: 'engineer',
        },
        {
            id: 2,
            name: 'higedan',
            age: 40,
            role: 'PM',
        },
    ]
    const [list,setList] = useState<User[]>(itemList)
    const findById = (id: number) => {
        const user = itemList.filter(user => user.id === id)
        setList(user)
    }

    return (
        <div>
            <GetList onGetList={(id: number)=> ()=> findById(id)} onReset={()=> setList(itemList)}/>
            <Table list={list}/>
        </div>
    )
}

interface TableProps {
    list: User[]
}

const Table: React.FC<TableProps> = props => {
    const listItems = props.list.map((item: User) => {
        return (
            <tr key={item.id}>
                <td>
                    {item.id}
                </td>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.age}
                </td>
                <td>
                    {item.role}
                </td>
            </tr>
        )
    })

    if (listItems.length === 0) {
        return (<div></div>)
    }

    return (
        <table>
            <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    名前
                </th>
                <th>
                    年齢
                </th>
                <th>
                    役職
                </th>
            </tr>
            </thead>
            <tbody>
            {listItems}
            </tbody>
        </table>
    )
}

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

export default List
