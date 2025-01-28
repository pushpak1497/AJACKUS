import { useState, useEffect } from "react";

const UserForm = ({ onSubmit, user }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [department, setDepartment] = useState(user?.department || "");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setDepartment(user.department);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !department) return;
    onSubmit({ name, email, department, id: user?.id });
    setName("");
    setDepartment("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 space-y-4 max-w-full sm:max-w-md lg:max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className=" w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-lg text-lg"
      >
        {user ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
