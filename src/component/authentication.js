import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export function Authentication() {
    const accessToken = localStorage.getItem("access_token")
    const navigate = useNavigate();
    useEffect(() => {
        if(accessToken == null){
            navigate('/auth/sign-in');
        }
    });
}

export default Authentication;