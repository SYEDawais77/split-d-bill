import { useState } from "react";
import FriendList from "./components/FriendList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import BillDataForm from "./components/BillDataForm";

function App() {
  const [friends, setFriends] = useState([]);
  const [isShownAddFriendForm, setIsShownAddFriendForm] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectedFriend(friend) {
    //setSelectedFriend(friend);
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setIsShownAddFriendForm(false);
  }
  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setIsShownAddFriendForm(false);
  };

  function handleClickAddFriendButton() {
    setSelectedFriend(null);
    setIsShownAddFriendForm(!isShownAddFriendForm);
  }

  function handleSplitdBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {isShownAddFriendForm && (
          <AddFriendForm onAddFriend={handleAddFriend} />
        )}
        <Button onClick={handleClickAddFriendButton}>
          {isShownAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <BillDataForm
          selectedFriend={selectedFriend}
          onSplitdBill={handleSplitdBill}
        />
      )}
    </div>
  );
}

export default App;
