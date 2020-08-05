import React, {useEffect, useState} from "react";
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
    const [id,setId] = useState(0)
    useEffect(() => {
        id <= 0 ? setId(0) : setId(id)
    }, [id])

    const findById = () => {
        if(id === 0) { return }
        const user = itemList.filter(user => user.id === id)
        setList(user)
    }
    const handleReset = () => {
        setList(itemList)
        setId(0)
    }
    const handleIdChange = (id: number) => {
        setId(id)
    }
    const handleGetList = () => {
        findById()
    }

    return (
        <div>
            <PageHeader>List</PageHeader>
            <GetList onGetList={handleGetList} onReset={handleReset} onIdChange={handleIdChange} id={id}/>
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
    onReset: any,
    onIdChange: any,
    id: number
}
export default List
