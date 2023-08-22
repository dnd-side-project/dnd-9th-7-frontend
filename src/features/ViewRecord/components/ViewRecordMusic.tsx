import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { SvgIcon } from '@common/components/SvgIcon';
import { Spacing } from '@common/components/Spacing';

export const ViewRecordMusic = () => {
  return (
    <>
      <StyledDate1>2023.01</StyledDate1>
      <StyledDate2>06</StyledDate2>
      <StyledCD />
      <div style={{ position: 'absolute', top: '26rem', backgroundColor: 'yellow' }}>
        <SvgIcon id='cover' size={342} />
      </div>
      <Spacing size={20} />
      <StyledTag>운정 캠핑장</StyledTag>
      <Spacing size={2} />
    </>
  );
};

const StyledCD = styled.div`
  border-radius: 50rem;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border: 1px solid ${theme.color.gray08};
  background-size: 'cover'; // 이미지를 div에 맞게 조절
  background-image: url(https://picsum.photos/236/354);
`;

const StyledDate1 = styled.span`
  ${theme.font.semibold16}
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledDate2 = styled.span`
  ${theme.font.bold36}
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledTag = styled.div`
  display: inline-flex;
  padding: 0.6rem 1.2rem 0.6rem 0.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  background-color: ${theme.color.gray04};
`;
