/** @jsxImportSource @emotion/react */
import { Input } from '@common/components/Input';
import { SvgIcon } from '@common/components/SvgIcon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { KeyboardEvent } from 'react';

export const MusicSearchInput = () => {
  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // TODO: music api 쏘는 로직 추가
    }
  };

  return (
    <StyledInput>
      <SvgIcon id='search_gray' size={24} />
      <Input
        autoFocus
        css={css`
          flex: 1;
        `}
        onKeyDown={handleEnterKey}
      />
      <SvgIcon id='delete_keyword_black' size={24} />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.color.gray05};
  ${theme.font.semibold16}
  display: flex;
  justify-content: space-between;
`;
