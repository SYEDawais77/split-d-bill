import React from "react";
import Button from "./Button";
import "../assets/awais.jpg";

export default function Friend({ friend,  onSelectedFriend, selectedFriend }) {
  const isSelected = friend?.id === selectedFriend?.id;

  return (
    <div>
      <li className={isSelected ? "selected": ""}>
        <img src={friend.image} alt={friend.image} />
        <h3>{friend.name}</h3>
        <p
          className={`${
            friend.balance > 0 ? "green" : `${friend.balance < 0 ? "red" : ""}`
          }`}
        >
          {friend.balance > 0
            ? `${friend.name} owes you ${friend.balance} `
            : `${
                friend.balance < 0
                  ? `Yor owes ${Math.abs(friend.balance)} to ${friend.name}`
                  : `You and ${friend.name} are even`
              }`}
        </p>
        <Button onClick={()=>onSelectedFriend(friend)}>{isSelected ? "Close":"Select"}</Button>
      </li>
    </div>
  );
}
