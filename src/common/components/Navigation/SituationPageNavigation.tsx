/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-alert */
/** @jsxImportSource @emotion/react */
import { Navigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';
import { css } from '@emotion/react';
import { CategoryContext } from '@features/Situation/CategoryContext';
import { theme } from '@styles/theme';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const SituationPageNavigation = () => {
  const navigate = useNavigate();
  const { category } = useContext(CategoryContext);

  const isAllCategoriesSelected =
    category.emotion.value && category.time.value && category.weather.value;
  const handleSubmitCategory = () => {
    // TODO: 카테고리 값이 다 입력되지 않는 경우 토스트 띄우기
    isAllCategoriesSelected ? navigate('/record') : alert('필수값을 입력하세요');
  };
  return (
    <Navigation>
      <Navigation.Left>
        <button>
          <SvgIcon id='leftArrow' onClick={() => navigate(-1)} />
        </button>
      </Navigation.Left>
      <Navigation.Center>
        <span>상황선택</span>
      </Navigation.Center>
      <Navigation.Right>
        <button
          onClick={handleSubmitCategory}
          css={css`
            color: ${isAllCategoriesSelected ? theme.color.orange : theme.color.white};
          `}
        >
          완료
        </button>
      </Navigation.Right>
    </Navigation>
  );
};
