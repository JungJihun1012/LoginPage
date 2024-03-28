import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../_actions/user_actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function withAuthCheck(SpecificComponent, option, adminRoute = null) {

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth, isAdmin } = useSelector(state => state.user);

    useEffect(() => {
      (async () => {
        try {
          const res = await dispatch(auth());
          console.log(res);

          if (!res || !res.payload || !res.payload.isAuth) {
            if (option) {
              navigate("/login");
            }
          } else {
            if (adminRoute && !res.payload.isAdmin) {
              navigate("/");
            } else {
              if (!option) navigate("/");
            }
          }
        } catch (error) {
          console.error("Error occurred while authenticating:", error);
          // Handle error, e.g., redirect to an error page
        }
      })();
    }, [dispatch, navigate, option, adminRoute]);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
