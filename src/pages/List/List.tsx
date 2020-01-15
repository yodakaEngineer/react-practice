import React, {useState} from "react";
import GetList from "../../components/GetList/GetList";
import Table from "../../components/Table/Table";

export interface User {
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

export default List
