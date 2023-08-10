import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import type { PropsWithChildren } from 'react';

export const Navigation = ({ children }: PropsWithChildren) => {
  return <StyledNavigation>{children}</StyledNavigation>;
};

const NavigationLeft = ({ children }: PropsWithChildren) => (
  <StyledNavigationLeft>{children}</StyledNavigationLeft>
);
const NavigationRight = ({ children }: PropsWithChildren) => (
  <StyledNavigationRight>{children}</StyledNavigationRight>
);

const NavigationCenter = ({ children }: PropsWithChildren) => (
  <StyledNavigationCenter>{children}</StyledNavigationCenter>
);

const StyledNavigation = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  height: 6.8rem;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.black};
  ${theme.font.bold22};
`;

const StyledNavigationLeft = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
`;

const StyledNavigationRight = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
`;

const StyledNavigationCenter = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
Navigation.Left = NavigationLeft;
Navigation.Right = NavigationRight;
Navigation.Center = NavigationCenter;
