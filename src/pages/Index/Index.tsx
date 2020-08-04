import React from "react";
import {PageHeader} from "../../App";
import Counter from "../../components/Counter/Counter";

const Index: React.FC = () => {
    return (
        <div>
            <PageHeader>Top</PageHeader>
            <Counter/>
        </div>
    )
}

export default Index
