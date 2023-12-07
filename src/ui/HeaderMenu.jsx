import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeTogle from "./DarkModeTogle";

const HeadreStyled = styled.ul`
  gap: 0.4rem;
  display: flex;
`;
function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <HeadreStyled>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
      <li>
        <DarkModeTogle />
      </li>
    </HeadreStyled>
  );
}

export default HeaderMenu;
