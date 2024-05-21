import React ,{useState,useEffect} from 'react';
import { getDashboardData } from '../../Services/api';

const PatientDashboard = ()=>{
  const [dashboardData, setDashboardData]= useState({user:{}, appointments:[]});
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    const fetchDashboardData = async () =>{
      try {
        const response = await getDashboardData();
        setDashboardData(response.data);
        setLoading(false);        
      } catch (error) {
        setError('Error fetching dashboard data');
        setLoading(false);       
      }
    };
    fetchDashboardData();
  },[]);
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
}

   if (error ){
    return <div className="text-red-500 text-center">{error}</div>;
   }

   return(
    <div className='max-w-6xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Welcome,{dashboardData.user.name}</h1>
      <div className='bg-white p-4 rounded-lg shadow'>
        <h2 className='text-xl font-semibold mb-2'>Your Appointments</h2>
        {dashboardData.appointments.length === 0 ? (
          <p>No appointments booked</p>
        ):(
          <ul>
            {dashboardData.appointments.map((appointment)=>(
              <li key={appointment._id} className='border-b py-2'>
                <p><strong>Date:</strong>{appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
                <p><strong>Doctor:</strong> {appointment.doctor}</p>
                <p><strong>Reason:</strong> {appointment.reason}</p>

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
   );
};

export default PatientDashboard;