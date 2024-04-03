import styled from '@emotion/styled';
import { Input } from '@/common/components/Input';
import { SvgIcon } from '@/common/componentss/SvgIcon';
import { commonStyles, StyledTitle } from '@/features/Record/record.style';

export const Place = () => {
  return (
    <>
      <StyledTitle>Place</StyledTitle>
      <StyleRecordPlace>
        <SvgIcon id='place' />
        <Input placeholder='장소를 선책하세요' />
      </StyleRecordPlace>
    </>
  );
};

const StyleRecordPlace = styled.div`
  ${commonStyles()};
  justify-content: left;
`;
