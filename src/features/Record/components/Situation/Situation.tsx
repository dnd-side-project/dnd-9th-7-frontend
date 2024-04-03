import styled from '@emotion/styled';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SvgIcon } from '@/common/components/SvgIcon';
import { commonStyles, StyledRequiredField, StyledTitle } from '@/features/Record/record.style';
import { CategoryContext } from '@/features/Situation/CategoryContext';
import { theme } from '@/styles';
import * as Icons from '@/common/components/SvgIcon/assets';

export const Situation = () => {
  const { category } = useContext(CategoryContext);
  const navigate = useNavigate();

  return (
    <>
      <StyledTitle>
        Situation<StyledRequiredField>*</StyledRequiredField>
      </StyledTitle>
      <StyledSituation onClick={() => navigate('/situation')}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {category.emotion.value ? (
            <>
              <StyledCategory>
                <SvgIcon id={`${category.emotion.value}_gray` as keyof typeof Icons} />
                {category.emotion.label}
              </StyledCategory>
              <StyledCategory>
                <SvgIcon id={`${category.time.value}_gray` as keyof typeof Icons} />
                {category.time.label}
              </StyledCategory>
              <StyledCategory>
                <SvgIcon id={`${category.weather.value}_gray` as keyof typeof Icons} />
                {category.weather.label}
              </StyledCategory>
            </>
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
  color: ${theme.color.gray07};
`;

const StyledCategory = styled.span`
  display: flex;
  gap: 1.8rem;
  color: ${theme.color.white};
`;
