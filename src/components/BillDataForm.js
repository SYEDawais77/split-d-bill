import React from "react";
import Button from "./Button";

export default function BillDataForm({ selectedFriend, onSplitdBill }) {
  const [billValue, setBillValue] = React.useState("");
  const [yourExpanse, setYourExpanse] = React.useState("");
  const [billPayee, setBillPayee] = React.useState("you");

  const friendExpense = billValue - yourExpanse;
   


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billValue || !yourExpanse) {
      return;
    }

    onSplitdBill(billPayee === "you" ? friendExpense : -yourExpanse )
    
    
    setBillValue("");
    setYourExpanse("");
    setBillPayee("you");

  };

  function handleYourExpanseOnChange(e){
    if(e.target.value <= billValue){
     setYourExpanse(Number(e.target.value))
    }
  }


  return (
    <div>
      <form className="form-split-bill">
        <h2>Split Bill With {selectedFriend.name} </h2>
        <label htmlFor="bill-value">💵 Bill Value</label>
        <input
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
          type="number"
          name="bill-value"
          placeholder="Bill Value"
        />
        <label htmlFor="your-expanse">🙎‍♂️ Your Expense</label>
        <input
          value={yourExpanse}
          onChange={(e) => handleYourExpanseOnChange(e)}
          type="number"
          name="your-expanse"
          placeholder="Your Expense"
        />
        <label htmlFor="other-partner-expanse">
          👩 {selectedFriend.name}'s Expanse
        </label>
        <input
          disabled
          id="other-partner-expanse"
          type="number"
          name="other-partner-expanse"
          placeholder="Partners Expanse"
          value={friendExpense ? friendExpense : 0}
        />
        <label htmlFor="bill-payee">🤑Who is paying the bill?</label>
        <select
          name="bill-payee"
          id="bill-payee"
          value={billPayee}
          onChange={(e) => setBillPayee(e.target.value)}
        >
          <option value="you">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
        <Button onClick={handleSubmit}>Split the Bill</Button>
      </form>
    </div>
  );
}
