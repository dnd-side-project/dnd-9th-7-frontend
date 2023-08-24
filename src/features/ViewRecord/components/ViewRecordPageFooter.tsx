/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Footer } from '@common/components/Footer';
import { Spacing } from '@common/components/Spacing';
import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { Dispatch, SetStateAction } from 'react';
import { ViewRecordTab } from 'src/types';

interface Props {
  selectedTab: ViewRecordTab;
  setSelectedTab: Dispatch<SetStateAction<ViewRecordTab>>;
}
export const ViewRecordPageFooter = ({ selectedTab, setSelectedTab }: Props) => {
  return (
    <Footer>
      <div onClick={() => setSelectedTab('music')}>
        <Footer.Left>
          <StyledTab>
            {selectedTab === 'music' ? (
              <SvgIcon id='active_white' size={12} />
            ) : (
              <Spacing size={1.4} />
            )}
            <StyledTitle isSelected={selectedTab === 'music'}>MUSIC</StyledTitle>
          </StyledTab>
        </Footer.Left>
      </div>
      <div
        onClick={() => setSelectedTab('record')}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Footer.Center>
          <StyledTab>
            {selectedTab === 'record' ? (
              <SvgIcon id='active_white' size={12} />
            ) : (
              <Spacing size={1.4} />
            )}
            <StyledTitle isSelected={selectedTab === 'record'}>RECORD</StyledTitle>
          </StyledTab>
        </Footer.Center>
      </div>
      <div onClick={() => setSelectedTab('play')}>
        <Footer.Right>
          <StyledTab>
            {selectedTab === 'play' ? (
              <SvgIcon id='active_white' size={12} />
            ) : (
              <Spacing size={1.4} />
            )}
            <StyledTitle isSelected={selectedTab === 'play'}>PLAY</StyledTitle>
          </StyledTab>
        </Footer.Right>
      </div>
    </Footer>
  );
};

const StyledTitle = styled.span<{ isSelected: boolean }>`
  ${theme.font.semibold16}
  color: ${(props) => (props.isSelected ? theme.color.white : theme.color.gray08)};
`;

const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
