import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 10vh;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 25px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const LinkButton = styled.div`
  font-weight: 700;
  font-size: 21px;
`;

const FrontSection = styled.div`
  font-size: 20px;
`;
const LinkSection = styled.div`
  display: flex;
`;

const Header = function () {
  return (
    <Container>
      <HeaderWrapper>
        <FrontSection>
          <Link to="/">
            <LinkButton>Dong-dev</LinkButton>
          </Link>
        </FrontSection>
        <LinkSection>
          <Link to="/info">
            <LinkButton>Info</LinkButton>
          </Link>
        </LinkSection>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
