import React from 'react';
import './User.css'; 

function User({ user, onFollowToggle }) {
  return (
    <li className="user-card">
      <img src={user.profilePicture} alt={`${user.name}'s profile`} className="profile-picture" />
      <h2>{user.name}</h2>
      <button 
        className={user.isFollowing ? 'btn-unfollow' : 'btn-follow'} 
        onClick={() => onFollowToggle(user.id)}
      >
        {user.isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </li>
  );
}

export default User;
