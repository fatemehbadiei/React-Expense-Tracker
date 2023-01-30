import OverViewComponent1 from "./OverViewComponent1";
import TransActionsComponent1 from "./TransActionsComponent1";
import {useEffect, useState} from "react";

const ExpenseApp1 = () => {

    const [expense,setExpense] = useState(0);
    const [income,setIncome] = useState(0);
    const [transActions,setTransActions] = useState([]);

    const addTransActions = (formValues) => {
        const data = {...formValues,id:Date.now()};
        setTransActions([...transActions,data]);
    }

    useEffect(()=>{
        let exp = 0 ;
        let inc = 0 ;
        transActions.forEach((t)=> t.type === "expense" ? exp = exp + parseFloat((t.amount)) : inc = inc + parseFloat(t.amount));
        setExpense(exp);
        setIncome(inc);
    },[transActions]);

  return(
      <div className="container">
          <OverViewComponent1 expense={expense} income={income} addTransActions={addTransActions}/>
          <TransActionsComponent1 transActions={transActions}/>
      </div>
  )
}

export default ExpenseApp1;