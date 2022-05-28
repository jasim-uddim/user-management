import React, { FC } from "react";
import UserModels from "../Types/models";
// interface Props {
//   age?: number;
//   name?: string;
//   addUser: () => void;
// }
interface Props {
  user: UserModels;
  addUser: (user: UserModels) => void;
}

const User: FC<Props> = ({ user, addUser }) => {
  return (
    <div>
      <h1>
        Hello from :{user.name} age:{user.email}
      </h1>
      <button onClick={() => addUser(user)}>add me</button>
    </div>
  );
};

export default User;
