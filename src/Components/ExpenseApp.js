import {useEffect, useState} from "react";
import TransActionsComponent from "./TransActionsComponent";
import OverViewComponent from "./OverViewComponent";

const ExpenseApp = () => {

    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transActions, setTransActions] = useState([]);

    const addTransActions = (formValues) => {
        const data = {...formValues,id : Date.now()};
        setTransActions([...transActions,data]);
        console.log(transActions);
    }

    useEffect(()=>{
        let exp = 0;
        let inc = 0;
        transActions.forEach((t) => (t.type === "expense" ? exp = exp + parseFloat(t.amount) : inc = inc + parseFloat(t.amount) ));
        setExpense(exp);
        setIncome(inc);
    },[transActions])

    return (
        <section className="container">
            <OverViewComponent expense={expense} income={income} addTransActions = {addTransActions}/>
            <TransActionsComponent transactions={transActions}/>
        </section>
    )
}

export default ExpenseApp;