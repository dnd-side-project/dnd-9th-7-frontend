import styled from '@emotion/styled';

export const Toast = ({ children }: { children: React.ReactNode }) => {
  return <StyledToast>{children}</StyledToast>;
};

const StyledToast = styled.div`
  width: 100%;
  height: 7.2rem;
  backdrop-filter: blur(1rem);
`;
