import React, { useState } from 'react';
import User from './components/User.jsx';  
import './App.css'; 

function App() {
  // Usando imágenes random de ejemplo
  const [users, setUsers] = useState([
    { id: 1, name: 'Alicia', isFollowing: false, profilePicture: 'https://picsum.photos/80/80?random=1' },
    { id: 2, name: 'Bob', isFollowing: false, profilePicture: 'https://picsum.photos/80/80?random=2' },
    { id: 3, name: 'Juan', isFollowing: false, profilePicture: 'https://picsum.photos/80/80?random=3' },
    { id: 4, name: 'María', isFollowing: false, profilePicture: 'https://picsum.photos/80/80?random=4' },
    { id: 5, name: 'Luis', isFollowing: false, profilePicture: 'https://picsum.photos/80/80?random=5' },
    { id: 6, name: 'Sara', isFollowing: false, profilePicture: 'https://picsum.photos/80/80?random=6' },
  ]);

  const handleFollowToggle = (id) => {
    setUsers(
      users.map(user => 
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <div className="app-container">
      <h1>User Follow Cards</h1>
      <ul>
        {users.map(user => (
          <User 
            key={user.id} 
            user={user} 
            onFollowToggle={handleFollowToggle} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
