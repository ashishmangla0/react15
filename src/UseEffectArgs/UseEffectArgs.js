import { useEffect, useState } from "react";

import "./useeffectargs.css";

const url = "https://api.github.com/users";

const UseEffectArgs = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="container">
      <h3>github users</h3>
      <ul className="users">
        {users?.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UseEffectArgs;
