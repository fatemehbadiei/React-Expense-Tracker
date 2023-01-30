import {useState} from "react";

const TransActionForm = ({addTransActions,setIsShow}) => {

    const [formValues, setFormValues] = useState({
        type: "expense",
        amount: 0,
        desc: ""
    });

    const changeHandler = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addTransActions(formValues);
        setIsShow(false)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" onChange={changeHandler} value={formValues.desc} placeholder="description"/>
            <input type="number" name="amount" onChange={changeHandler} value={formValues.amount} placeholder="amount"/>
            <div className="radioBox">
                <input type="radio" name="type" value="expense" onChange={changeHandler}
                       checked={formValues.type === "expense"} id="expense"/>
                <label htmlFor="expense">Expense</label>
                <input type="radio" name="type" value="income" onChange={changeHandler}
                       checked={formValues.type === "income"} id="income"/>
                <label htmlFor="income">Income</label>
            </div>
            <button type="submit" className="btn primary">Add TransActions</button>
        </form>
    )
}

export default TransActionForm;