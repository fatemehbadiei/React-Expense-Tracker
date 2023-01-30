import {useEffect, useState} from "react";

const TransActionsComponent1 = (props) => {

    const [searchItem,setSearchItem] = useState("");
    const [filteredTnx,setFilteredTnx] = useState(props.transActions);


    const changeHandler = (e) => {
      setSearchItem(e.target.value);
      filterTransactions(e.target.value);
    }

    const filterTransactions = (search) => {
      if (!search || search === ""){
          setFilteredTnx(props.transActions);
          return;
      }
      const filtered = props.transActions.filter((t)=> t.desc.toLowerCase().includes(search.toLowerCase()));
      setFilteredTnx(filtered);
    }

    useEffect(()=>{
        filterTransactions(searchItem);
    },[props.transActions])

    if (!props.transActions.length) return <h3>Add Some Transactions</h3>

    return (
        <section>
            <input type="text" value={searchItem} onChange={changeHandler} placeholder="Search some Tnx..." className="search"/>
            {filteredTnx.length ?
                filteredTnx.map((t) => (
                    <div
                        key={t.id}
                        className="transaction"
                        style={{borderRight : t.type === "expense" && "4px solid red"}}
                    >
                        <span>{t.desc}</span>
                        <span>{t.amount} $</span>
                    </div>
                )): "No item matches!"}
        </section>
    )
}

export default TransActionsComponent1;