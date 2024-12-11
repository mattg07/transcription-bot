import { useState, useEffect, useRef } from "react";

type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: { country: string; city: string };
  email: string;
  login: { uuid: string };
  phone: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
  dob: { age: number }; // Changed to number for proper sorting
};

function Fetch() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isPaintedRows, setPaintedRows] = useState<boolean>(false);
  const [sortColumn, setSortColumn] = useState<string>(""); // Track which column is sorted
  const [sortOrder, setSortOrder] = useState<boolean>(true); // true = ascending, false = descending

  const originalUsers = useRef<User[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=50");
        const data = await response.json();
        const users = data.results;
        setUsers(users);
        originalUsers.current = users;
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }
    getData();
  }, []);

  const sortBy = (column: string) => {
    const newSortOrder = sortColumn === column ? !sortOrder : true; // Toggle order if same column
    setSortColumn(column);
    setSortOrder(newSortOrder);
console.log(sortColumn)
console.log(sortOrder)
    const sortedUsers = [...users].sort((a, b) => {
      let valA, valB;
      if (column === "country") {
        valA = a.location.country.toLowerCase();
        valB = b.location.country.toLowerCase();
      } else if (column === "name") {
        valA = a.name.first.toLowerCase();
        valB = b.name.first.toLowerCase();
      } else if (column === "age") {
        valA = a.dob.age;
        valB = b.dob.age;
      } else {
        return 0; // No sorting if column doesn't match
      }

      return newSortOrder === (valA < valB) ? -1 : 1;


    });

    setUsers(sortedUsers);
  };

  const restoreUsers = () => {
    setUsers(originalUsers.current);
    setSortColumn("");
    setSortOrder(true);
  };

  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteUser = (uuid: string) => {
    const updatedUsers = users.filter((user) => user.login.uuid !== uuid);
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden gap-4 m-1">
      <button onClick={restoreUsers}>Restore Users</button>
      <input
        type="text"
        placeholder="Search by name"
        className="p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className={`w-full`}>
        <thead>
          <tr>
            <th>Photo</th>
            <th onClick={() => sortBy("name")}>
              Name {sortColumn === "name" ? (sortOrder ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => sortBy("country")}>
              Country {sortColumn === "country" ? (sortOrder ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => sortBy("age")}>
              Age {sortColumn === "age" ? (sortOrder ? "▲" : "▼") : ""}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody
          className={`bg-gray-900 ${
            isPaintedRows
              ? "[&>*:nth-child(odd)]:bg-blue-500 [&>*:nth-child(even)]:bg-gray-400"
              : ""
          }`}
        >
          {filteredUsers.map((user: User) => (
            <tr key={user.login.uuid} className="text-center">
              <td>
                <img className="m-auto" src={user.picture.medium} alt="" />
              </td>
              <td>{user.name.first}</td>
              <td>{user.location.country}</td>
              <td>{user.dob.age}</td>
              <td>
                <button
                  onClick={() => deleteUser(user.login.uuid)}
                  className="p-2 bg-black rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fetch;
