import React ,{useEffect,useState}from 'react'
import {getUsers,deleteUser} from '../../Services/api';


const ManageUsers = () => {
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        const fetchUsers = async ()=>{
            const response = await getUsers();
            setUsers(response.data);
        };
        fetchUsers();
    },[]);

    const handleDelete = async (id)=>{
        await deleteUser(id);
        setUsers(users.filter(user => user.id !==id));
    };

  return (
    <div>
        <h1>Manage Users</h1>
        <ul>
            {users.map(user =>(
                <li  key={user._id}>
                {user.name} - {user.role}
                <button onClick={()=> handleDelete(user._id)}>Delete</button>

                </li>
            ))}
        </ul>
    </div>
  );
};

export default ManageUsers 