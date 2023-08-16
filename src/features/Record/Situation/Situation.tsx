import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { commonStyles, StyledTitle } from '@features/Record/record.style';
import { theme } from '@styles/theme';

export const Situation = () => {
  return (
    <>
      <StyledTitle>Situation*</StyledTitle>
      <StyledSituation>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <span>감정 시간 날짜를 입력해주세요.</span>
          <SvgIcon id='rightArrow' />
        </div>
      </StyledSituation>
    </>
  );
};

const StyledSituation = styled.div`
  ${commonStyles()}
  color: ${theme.color.gray07}
`;
