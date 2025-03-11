import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../actions/user_actions";

const withAuthChild = (
  SpecifiComponent: React.FC,
  option: boolean | null,
  adminRoute: boolean | null
) => {
  const AuthenticationCheck: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      (async () => {
        try {
          const res = await dispatch(auth());
          if(!res.payload.isAuth) {
            if(option)
              navigate("/login");
          } else {
            if(adminRoute && !res.payload.isAdmin) {
              navigate("/");
            } else {
              if(option == false) navigate("/");
            }
          }
        } catch (error) {
            console.error("Error occured while authentiacting", error);
        };
      })();
    }, [dispatch, navigate, option, adminRoute]);
    return <SpecifiComponent/>;
  };
  return <AuthenticationCheck/>;
};

export default withAuthChild;