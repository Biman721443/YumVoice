
export const registerUser = async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(user => user.email === userData.email)) {
      throw new Error('User with this email already exists');
    }
    
    const newUser = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      password: userData.password 
    };
    
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    const userSession = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    };
    localStorage.setItem('currentUser', JSON.stringify(userSession));
    
    return userSession;
  };
  
  export const loginUser = async (credentials) => {
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      user => user.email === credentials.email && user.password === credentials.password
    );
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    const userSession = {
      id: user.id,
      name: user.name,
      email: user.email
    };
    localStorage.setItem('currentUser', JSON.stringify(userSession));
    
    return userSession;
  };
  
  export const logoutUser = () => {
    localStorage.removeItem('currentUser');
  };
  
  export const getUser = () => {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  };
