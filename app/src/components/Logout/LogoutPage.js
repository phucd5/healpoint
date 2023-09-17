import React from 'react';
import { useEffect, navigate } from 'react';

const Logout = () => {
        localStorage.removeItem("user");
    navigate("/login");
}

export default Logout;