import {useState} from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({expense, income, addTransActions}) => {

    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <div className="topSection">
                <div>Balance {income - expense}</div>
                <button
                    onClick={() => setIsShow((prevState) => !prevState)}
                    className={`btn ${isShow && "cancel"}`}>
                    {isShow ? "Cancel" : "Add"}
                </button>
            </div>
            {isShow && <TransActionForm addTransActions={addTransActions} setIsShow={setIsShow}/>}
            <div className="resultSection">
                <div className="expenseBox">Expense <span style={{color: "red"}}>{expense}$</span></div>
                <div className="expenseBox">Income <span>{income}$</span></div>
            </div>
        </>
    )
}

export default OverViewComponent;