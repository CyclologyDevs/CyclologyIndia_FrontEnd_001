import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const Logout = () => {

    const history = useHistory();

    const logout = async () => {
        try {
            const res = await fetch('http://153.92.5.193:3600/logout', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            localStorage.removeItem("token")
            if (res.status === 401 || !res) {
                window.alert("Please Logout Later");
            } else {
                history.push('/');
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        logout();
    }, []);

    return (
        <div>

        </div>
    );
}

export default Logout;
