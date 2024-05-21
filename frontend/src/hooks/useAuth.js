import { useState, useEffect, useContext, createContext } from 'react';
import { loginUser as loginUserService, registerUser as registerUserService, getUserProfile } from '../Services/api';

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
    return useContext(authContext);
};

const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const { data } = await loginUserService({ email, password });
        localStorage.setItem('token', data.token);
        setUser(data.user);
    };
    const register = async (name, email, password, role) => {
        await registerUserService({ name, email, password, role });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const { data } = await getUserProfile();
                setUser(data);
            }
        };
        fetchUser();
    }, []);

    return {
        user,
        login,
        register,
        logout,
    };
};
