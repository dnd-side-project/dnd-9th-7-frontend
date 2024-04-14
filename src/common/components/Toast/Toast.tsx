import styled from '@emotion/styled';
import { createPortal } from 'react-dom';
import { SvgIcon } from '@/common/components/SvgIcon';

export const Toast = () => {
  const content = (
    <StyledToast>
      <StyledIcon>
        <SvgIcon id='complete_white' />
      </StyledIcon>
      <StyledText>기록이 삭제되었습니다.</StyledText>
      <StyledDelete>실행취소</StyledDelete>
    </StyledToast>
  );

  const el = document.getElementById('toast');
  if (!el) return null;
  return createPortal(content, el);
};

const StyledToast = styled.div`
  position: fixed;
  left: 50%;
  bottom: 16rem;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  width: calc(100% - 4.8rem);
  height: 7.2rem;
  background-color: ${(props) => props.theme.color.transparency05};
  backdrop-filter: blur(1rem);
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  z-index: 100;
  @media screen and (min-width: 390px) {
    max-width: 34.2rem;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const StyledText = styled.div`
  ${(props) => props.theme.font.medium16}
  color: ${(props) => props.theme.color.white};
  flex-grow: 1;
`;

const StyledDelete = styled.div`
  ${(props) => props.theme.font.semibold16}
  color: ${(props) => props.theme.color.orange};
  display: flex;
  justify-content: center;
  width: 30%;
`;
