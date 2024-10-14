import React, { useState } from 'react';
import User from './components/User.jsx';  
import './App.css'; 

function App() {
// Usando imágenes de ejemplo
const [users, setUsers] = useState([
  { id: 1, name: 'Alice', isFollowing: false, profilePicture: 'https://picsum.photos/80/80?random=1' },
  { id: 2, name: 'Bob', isFollowing: false, profilePicture: 'https://picsum.photos/80/80?random=2' },
  { id: 3, name: 'Charlie', isFollowing: false, profilePicture: 'https://picsum.photos/80/80?random=3' },
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
      <h1>Social Follow App</h1>
      <ul>
        {users.map(user => (
          <User key={user.id} user={user} onFollowToggle={handleFollowToggle} />
        ))}
      </ul>
    </div>
  );
}

export default App;
