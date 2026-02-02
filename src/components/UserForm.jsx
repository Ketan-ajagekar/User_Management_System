import { useState } from "react";

function UserForm({ addUser }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name is required");
      return;
    }

    addUser({
      id: Date.now(),
      name
    });

    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
