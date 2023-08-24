import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import type { PropsWithChildren } from 'react';

export const Footer = ({ children }: PropsWithChildren) => {
  return <StyledFooter>{children}</StyledFooter>;
};

const FooterLeft = ({ children }: PropsWithChildren) => (
  <StyledFooterLeft>{children}</StyledFooterLeft>
);

const FooterRight = ({ children }: PropsWithChildren) => (
  <StyledFooterRight>{children}</StyledFooterRight>
);

const FooterCenter = ({ children }: PropsWithChildren) => (
  <StyledFooterCenter>{children}</StyledFooterCenter>
);

const StyledFooter = styled.footer`
  position: fixed;
  height: 5.8rem;
  width: 100%;
  max-width: calc(34.2rem + 4.8rem);
  bottom: 0;
  z-index: 99;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${theme.color.gray12};
`;

const StyledFooterLeft = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
`;

const StyledFooterRight = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
`;

const StyledFooterCenter = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
`;

Footer.Left = FooterLeft;
Footer.Right = FooterRight;
Footer.Center = FooterCenter;
