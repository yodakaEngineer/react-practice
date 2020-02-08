import React from "react";
import styled from "styled-components";
import {TableProps, User} from "../../pages/List/List";

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

    return (
        <TableComponent>
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
        </TableComponent>
    )
}

export default Table

const TableComponent = styled.div`
margin: 1rem 0;
`
