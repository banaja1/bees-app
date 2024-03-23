import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { auth_services } from "../../services/authServices";

export function SignOut() {
  const navigate = useNavigate();
  localStorage.clear();
  // navigate('/auth/sign-in');
  useEffect(() => {
    navigate('/auth/sign-in');
  });

  return (
    <>
    </>
  );
}

export default SignOut;
