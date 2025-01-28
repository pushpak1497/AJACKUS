import { useEffect, useState } from "react";
import { fetchUsers, addUser, updateUser, deleteUser } from "./api/userApi";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, []);

  const handleAddUser = async (userData) => {
    try {
      const newUser = await addUser(userData);
      setUsers([...users, newUser]);
    } catch (err) {
      setError("Failed to add user");
    }
  };

  const handleEditUser = async (updatedUser) => {
    try {
      const updatedData = await updateUser(updatedUser.id, updatedUser);
      setUsers(
        users.map((user) => (user.id === updatedData.id ? updatedData : user))
      );
      setEditingUser(null);
    } catch (err) {
      setError("Failed to update user");
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-center">User Management</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <UserForm
        onSubmit={editingUser ? handleEditUser : handleAddUser}
        user={editingUser}
      />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}

export default App;
