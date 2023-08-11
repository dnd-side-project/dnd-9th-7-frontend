import { Input } from '@common/components/Input';
import styled from '@emotion/styled';
import { commonStyles, StyledTitle } from '@features/Record/record.styles';

export const Place = () => {
  return (
    <>
      <StyledTitle>Place</StyledTitle>
      <StyleRecordPlace>
        <Input placeholder='장소를 선책하세요' endComponents={<div>x</div>} />
      </StyleRecordPlace>
    </>
  );
};

const StyleRecordPlace = styled.div`
  ${commonStyles()};
`;
