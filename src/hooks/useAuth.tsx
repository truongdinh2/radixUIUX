import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

interface AuthContextProps {
  user: any;
  login: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const login = async (data: any) => {
    setUser(data);
    navigate('/dashboard', { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
    return;
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const currentUserContext = useContext(AuthContext);

  if (!currentUserContext) {
    throw new Error('useAuth has to be used within <CurrentUserContext.Provider>');
  }

  return currentUserContext;
};
