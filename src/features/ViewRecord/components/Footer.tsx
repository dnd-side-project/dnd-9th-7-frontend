/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { ViewRecordTab } from 'src/types';
import { Footer as ViewRecordPageFooter } from '@/common/components/Footer';
import { Spacing } from '@/common/components/Spacing';
import { SvgIcon } from '@/common/components/SvgIcon';
import { theme } from '@/styles';

interface Props {
  selectedTab: ViewRecordTab;
  setSelectedTab: Dispatch<SetStateAction<ViewRecordTab>>;
}
export const Footer = ({ selectedTab, setSelectedTab }: Props) => {
  return (
    <ViewRecordPageFooter>
      <div onClick={() => setSelectedTab('music')}>
        <ViewRecordPageFooter.Left>
          <StyledTab>
            {selectedTab === 'music' ? (
              <SvgIcon id='active_white' size={12} />
            ) : (
              <Spacing size={1.4} />
            )}
            <StyledTitle isSelected={selectedTab === 'music'}>MUSIC</StyledTitle>
          </StyledTab>
        </ViewRecordPageFooter.Left>
      </div>
      <div
        onClick={() => setSelectedTab('record')}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <ViewRecordPageFooter.Center>
          <StyledTab>
            {selectedTab === 'record' ? (
              <SvgIcon id='active_white' size={12} />
            ) : (
              <Spacing size={1.4} />
            )}
            <StyledTitle isSelected={selectedTab === 'record'}>RECORD</StyledTitle>
          </StyledTab>
        </ViewRecordPageFooter.Center>
      </div>
      <div onClick={() => setSelectedTab('play')}>
        <ViewRecordPageFooter.Right>
          <StyledTab>
            {selectedTab === 'play' ? (
              <SvgIcon id='active_white' size={12} />
            ) : (
              <Spacing size={1.4} />
            )}
            <StyledTitle isSelected={selectedTab === 'play'}>PLAY</StyledTitle>
          </StyledTab>
        </ViewRecordPageFooter.Right>
      </div>
    </ViewRecordPageFooter>
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
  cursor: pointer;
`;
