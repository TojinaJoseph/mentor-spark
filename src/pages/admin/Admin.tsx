import { Link } from "react-router-dom";
const mentors = [
  { id: 1, name: "Mentor 1" },
  { id: 2, name: "Mentor 2" },
  { id: 3, name: "Mentor 3" },
];
const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <ul>
        {mentors.map((i) => (
          <li key={i.id}>
            <Link to={`/profile/${i.id}`}>{i.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
