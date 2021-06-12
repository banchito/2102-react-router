import { Link, useParams } from 'react-router-dom';

const User = () => {
  const { username } = useParams();

  return (
    <div>
      <h1>User Page</h1>
      <h2>Welcome back {username}!</h2>
      <Link to={'/'}>Back to Home</Link>
    </div>
  );
}

export default User;
