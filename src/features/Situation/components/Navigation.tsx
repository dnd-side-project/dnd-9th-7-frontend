/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-alert */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation as SituationPageNavigation } from '@/common/components/Navigation';
import { SvgIcon } from '@/common/components/SvgIcon';
import { CategoryContext } from '@/features/Situation/CategoryContext';
import { theme } from '@/styles';

export const Navigation = () => {
  const navigate = useNavigate();
  const { category } = useContext(CategoryContext);

  const isAllCategoriesSelected =
    category.emotion.value && category.time.value && category.weather.value;
  const handleSubmitCategory = () => {
    // TODO: 카테고리 값이 다 입력되지 않는 경우 토스트 띄우기
    isAllCategoriesSelected ? navigate('/record') : alert('필수값을 입력하세요');
  };
  return (
    <SituationPageNavigation>
      <SituationPageNavigation.Left>
        <button>
          <SvgIcon id='leftArrow' onClick={() => navigate(-1)} />
        </button>
      </SituationPageNavigation.Left>
      <SituationPageNavigation.Center>
        <span>상황선택</span>
      </SituationPageNavigation.Center>
      <SituationPageNavigation.Right>
        <button
          onClick={handleSubmitCategory}
          css={css`
            color: ${isAllCategoriesSelected ? theme.color.orange : theme.color.white};
          `}
        >
          완료
        </button>
      </SituationPageNavigation.Right>
    </SituationPageNavigation>
  );
};
