/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button } from '../button/Button';
import { User } from '../../types/users';
import { Loader } from '../Loader/Loader';

export const UsersList: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
    if (!showList) {
      fetchUsers();
    }
  };

  const handleCloseButtonClick = () => {
    setShowList(false);
  };

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/users');

      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showList) {
      fetchUsers();
    }
  }, [showList]);

  return (
    <section className="userslist">
      <Button
        text="Наши клиенты"
        onSubmit={handleButtonClick}
      />

      {showList && (
        <div className="user-list-container">
          <div className="user-list__head">
            <button
              type="button"
              className="user-list__button"
              onClick={handleCloseButtonClick}
            >
            </button>
          </div>

          <div className="user-list__users">
            {isLoading ? (
              <Loader />
            ) : (
              <ul>
                {users.map((user) => (
                  <li key={user.id}>{user.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
