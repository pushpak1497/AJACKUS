const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
      <div className="sm:w-2/3 mb-4 sm:mb-0">
        <h3 className="font-semibold text-lg sm:text-xl">{user.name}</h3>
        <p className="text-sm sm:text-base">{user.email}</p>
        <p className="text-sm sm:text-base">{user.department}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-center sm:space-x-2 w-full sm:w-auto">
        <button
          onClick={() => onEdit(user)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;
