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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% + 4.8rem);
  height: 6.8rem;
  background-color: ${theme.color.black};
  flex-shrink: 0;
  z-index: 99;
  ${theme.font.bold22};
`;

const StyledNavigationLeft = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  padding-left: 2.4rem;
`;

const StyledNavigationRight = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  padding-right: 2.4rem;
  ${theme.font.semibold16}
`;

const StyledNavigationCenter = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${theme.font.semibold18}
`;

Navigation.Left = NavigationLeft;
Navigation.Right = NavigationRight;
Navigation.Center = NavigationCenter;
