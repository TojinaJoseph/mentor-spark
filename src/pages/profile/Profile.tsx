import { useParams } from "react-router-dom";
const Profile = () => {
  const { id } = useParams();
  return <h1>Mentor {id}</h1>;
};

export default Profile;
