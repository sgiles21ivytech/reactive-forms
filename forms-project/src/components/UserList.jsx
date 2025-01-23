

const UserList = ({ users }) => (
  <div className="userDetails">
    <h2>Users:</h2>
    {users.map((user, index) => (
      <div key={index}>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email: {user.email}</p>
      </div>
    ))}
  </div>
);

export default UserList;