import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading profile component</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <h2>Hola, {user.name}</h2>
        <h2>{user.email}</h2>
      </div>
    )
  );
}

export default Profile;
