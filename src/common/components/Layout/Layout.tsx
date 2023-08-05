import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles';

export const Layout = ({ children }: PropsWithChildren) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.main`
  @media screen and (min-width: 390px) {
    width: 34.2rem;
  }
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  min-height: 100vh;
  display: flex;
  background-color: ${theme.color.black};
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;
