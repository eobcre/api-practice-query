import { useQuery } from 'react-query';

type Users = {
  id: number;
  name: string;
};

// fetch
const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: Users[] = await res.json();
  return data;
};

// component
const User = () => {
  const { data, isLoading, isError, error } = useQuery<Users[], unknown>(
    'users',
    fetchData
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <span>Error: {error ? (error as Error).message : 'Unknown error'}</span>
    );
  }

  return (
    <div className='users-container'>
      <h2>Users</h2>
      <div>
        {data?.map((user: Users) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default User;
