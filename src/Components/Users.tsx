import React, { useEffect, useState } from "react";
import UserModels from "../Types/models";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<UserModels[]>([]);
  const [team, setTeam] = useState<UserModels[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleAddUser = (user: UserModels): void => {
    const newTeam = [...team, user];
    setTeam(newTeam);
  };
  return (
    <div>
      <h1>My users</h1>
      <h1>Team size:{team.length}</h1>
      {/* <User name="rohomot" age={55} addUser={handleAddUser}></User> */}
      {users.map((user) => (
        <User user={user} addUser={handleAddUser}></User>
      ))}
    </div>
  );
};

export default Users;
