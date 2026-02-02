function UserList({ users, deleteUser }) {
  return (
    <>
      {users.map(user => (
        <div key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default UserList;
  