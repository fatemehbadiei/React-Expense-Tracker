import {useState} from "react";

const TransActionForm1 = ({setIsShow,addTransActions}) => {

    const [formValues,setFormValues] = useState({
        desc : "",
        amount : 0,
        type: "expense"
    });

    const submitHandler = (e) => {
      e.preventDefault();
      addTransActions(formValues);
      setIsShow(false);
    }

    const changeHandler = (e) => {
        setFormValues({...formValues , [e.target.name] : e.target.value});
    }

  return(
      <form onSubmit={submitHandler}>
          <input type="text" name="desc" value={formValues.desc} onChange={changeHandler} placeholder="Description"/>
          <input type="number" name="amount" value={formValues.amount} onChange={changeHandler} placeholder="Amount"/>
          <div className="radioBox">
              <input
                  type="radio"
                  id="expense"
                  name="type"
                  value="expense"
                  checked={formValues.type === "expense"}
                  onChange={changeHandler}
              />
              <label htmlFor="expense">Expense</label>
              <input
                  type="radio"
                  id="income"
                  name="type"
                  value="income"
                  checked={formValues.type === "income"}
                  onChange={changeHandler}
              />
              <label htmlFor="income">Income</label>
          </div>
          <button type="submit" className="btn primary">Add TransAction</button>
      </form>
  )
}

export default TransActionForm1;