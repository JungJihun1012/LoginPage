import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Auth from "../hoc/auth";

function LandingPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        axios.get("/api/users/logout").then((res) => {
            if (res.data.success) {
                navigate("/login");
            } else {
                alert("로그아웃 실패");
            }
            console.log(navigate);
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <h2>시작페이지</h2>
            <button onClick={handleClick}>로그아웃</button>
        </div>
    )

}

export default Auth(LandingPage, null);