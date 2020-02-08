import React, {useState} from "react";
import {PageHeader} from "../../App";
import GetList from "../../components/GetList/GetList";
import Table from "../../components/Table/Table";

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
        if(id === 0) { return }
        const user = itemList.filter(user => user.id === id)
        setList(user)
    }

    return (
        <div>
            <PageHeader>List</PageHeader>
            <GetList onGetList={(id: number)=> ()=> findById(id)} onReset={()=> setList(itemList)}/>
            <Table list={list}/>
        </div>
    )
}

export interface User {
    id: number
    name: string
    age: number
    role: string
}
export interface TableProps {
    list: User[]
}
export interface GetListProps {
    onGetList: any,
    onReset: any
}
export default List
