import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { commonStyles, StyledTitle } from '@features/Record/record.style';
import { CategoryContext } from '@features/Situation/CategoryContext';
import { theme } from '@styles/theme';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Situation = () => {
  const { category } = useContext(CategoryContext);
  const navigate = useNavigate();
  return (
    <>
      <StyledTitle>Situation*</StyledTitle>
      <StyledSituation onClick={() => navigate('/situation')}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {category.emotion.value ? (
            <span>{category.emotion.value}</span>
          ) : (
            <span>감정 시간 날짜를 입력해주세요.</span>
          )}
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
