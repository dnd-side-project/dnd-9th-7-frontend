import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { SvgIcon } from '@common/components/SvgIcon';

export const StyledTitle = styled.div`
  ${theme.font.semibold18};
  color: ${theme.color.gray07};
  width: 100%;
`;

export const commonStyles = () => css`
  display: flex;
  padding: 2.1rem 1.8rem 2.1rem 2.4rem;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.6rem;
  align-self: stretch;
  border: 1px solid ${theme.color.gray08};
  margin-top: 1.2rem;
  ${theme.font.medium16};
  color: ${theme.color.white};
  cursor: pointer;
`;

export const StyledPlusButton = () => {
  return (
    <StyledPlusButtonContainer>
      <SvgIcon id='whitePlus' />
    </StyledPlusButtonContainer>
  );
};

const StyledPlusButtonContainer = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.transparency06};
  border-radius: 10rem;
  width: 6.2rem;
  height: 6.2rem;
  color: white;
  top: 0;
  left: 0;
`;

export const StyledRequiredField = styled.span`
  color: ${theme.color.orange};
`;
