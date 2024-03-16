import React from "react";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = React.useState("");
  const [imageURL, setImage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !imageURL) {
      return;
    }
    const friend = {
      id: Date.now(),
      name: name,
      image: imageURL,
      isSelected: false,
      balance: 0,
    };
    onAddFriend(friend);
    setName("");
    setImage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-add-friend">
        <label>🙎Friend Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🖼️ Image URL</label>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="button">Add</button>
      </form>
    </div>
  );
}
