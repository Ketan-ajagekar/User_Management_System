import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  // Add User
  const addUser = (user) => {
    setUsers([user, ...users]);
  };

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Pagination logic
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const currentUsers = users.slice(firstIndex, lastIndex);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h1>User Management System</h1>

      <UserForm addUser={addUser} />
      <UserList users={currentUsers} deleteUser={deleteUser} />

      <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
