import styled from '@emotion/styled';
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
  position: absolute;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  width: inherit;
  bottom: 0;
  z-index: 10;
  display: flex;
  height: 6.8rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
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

const StyledFooterCenter = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
Footer.Left = FooterLeft;
Footer.Right = FooterRight;
Footer.Center = FooterCenter;
