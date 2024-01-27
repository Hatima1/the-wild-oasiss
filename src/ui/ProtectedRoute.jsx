import { Navigate, useNavigate } from "react-router-dom";
import { UseUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(---color--grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isLoading, isaAthenticated } = UseUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isaAthenticated) navigate("/login");
  }, [isaAthenticated, isLoading, navigate]);
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />;
      </Fullpage>
    );

  if (isaAthenticated) return children;
}

export default ProtectedRoute;
