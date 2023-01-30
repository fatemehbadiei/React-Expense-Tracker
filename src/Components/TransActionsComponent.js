
// const TransActionsComponent1 = ({transActions}) => {
//     return (
//         <section>
//             {transActions.length &&
//                 transActions.map((t) => (
//                     <div
//                         key={t.id}
//                         className="transaction"
//                         style={{borderRight : t.type === "expense" && "4px solid red"}}
//                     >
//                         <span>{t.desc}</span>
//                         <span>{t.amount} $</span>
//                     </div>
//                 ))}
//         </section>
//     )
// }
//
// export default TransActionsComponent1;


import {useEffect, useState} from "react";

const TransActionsComponent = ({transactions}) => {

    const [searchItem,setSearchItem] = useState("");
    const [filteredTnx,setFilterTnx] = useState(transactions);

    const changeHandler = (e) => {
      setSearchItem(e.target.value);
      filterTransactions(e.target.value);
    }

    const filterTransactions = (search) => {
      if (!search || search === ""){
          setFilterTnx(transactions);
          return;
      }
      const filtered = transactions.filter((t)=> t.desc.toLowerCase().includes(search.toLowerCase()));
      setFilterTnx(filtered);
    }

    useEffect(()=>{
        filterTransactions(searchItem);
    },[transactions]);

    if(!transactions.length) return <h3>Add some transactions</h3>

  return(
      <section>
          <input type="text" value={searchItem} onChange={changeHandler} placeholder="Search for tnx..." className="search"/>
        {filteredTnx.length ? filteredTnx.map(t =>
            <div key={t.id} className="transaction" style={{borderRight : t.type === "expense" && "4px solid red"}}>
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>) : "no item match!"}
      </section>
  )
}

export default TransActionsComponent;