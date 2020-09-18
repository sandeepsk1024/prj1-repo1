import React from "react";
import styled from "styled-components";
import BurgerMenu from "./burgermenu";

const HeaderWrapper = styled.div`
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  margin: 0 1%;
  /* display: flex; */
`;

const LogoWrapper = styled.div`
  font-size: 2em;
  font-weight: 100;
`;

const ActionsWrapper = styled.div`
  /* position: fixed;
  right: 0; */
`;

export default props => {
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>CompanyName</LogoWrapper>
        <ActionsWrapper>
          <BurgerMenu>{props.children}</BurgerMenu>
        </ActionsWrapper>
      </HeaderWrapper>
    </>
  );
};
