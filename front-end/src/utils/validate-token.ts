import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, validateAdminToken } from '../apis/main-api';

export const useAuthCheck = () => {
  const navigate = useNavigate();

  const checkAuth = useCallback(async () => {
    const token = getToken()
    console.log(token)
    if(!token) {
      navigate('/');
    }
    const isValid = await validateAdminToken(token as string);
    if (!isValid) {
      navigate('/');
    }
    navigate('/home');
  }, [navigate]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
};