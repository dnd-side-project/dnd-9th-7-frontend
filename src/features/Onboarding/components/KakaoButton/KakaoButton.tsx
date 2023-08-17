import React from 'react';
import styled from '@emotion/styled';

export const KakaoButton = () => {
  return <StyledKakaoButton>카카오톡으로 계속하기</StyledKakaoButton>;
};

const StyledKakaoButton = styled.div`
  ${(props) => props.theme.font.medium16}
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.2rem;
  background-color: #fee500;
  margin-bottom: 8rem;
`;
