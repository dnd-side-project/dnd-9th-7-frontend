import styled from '@emotion/styled';

export const Spacing = ({ size }: { size: number }) => {
  return <StyledSpacing size={size} />;
};

const StyledSpacing = styled.div<{ size: number }>`
  height: ${(props) => props.size}rem;
`;
