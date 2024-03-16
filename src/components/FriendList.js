import Friend from "./Friend";
import React from "react";

export default function FriendList({ friends, onSelectedFriend, selectedFriend }) {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {friends.map((item) => (
          <Friend
            friend={item}
            key={item.id}
            onSelectedFriend={onSelectedFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
