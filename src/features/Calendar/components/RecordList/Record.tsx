import BottomSheet from '@common/components/BottomSheet';
import { SvgIcon } from '@common/components/SvgIcon';
import { useOpen } from '@common/hooks';
import styled from '@emotion/styled';

const Record = () => {
  const { open, onOpen, onClose } = useOpen();
  return (
    <>
      <StyledRecord>
        <StyledRecordImage />
        <div>
          <StyledRecordTitle>WONDERWALL</StyledRecordTitle>
          <StyledRecordArtist>OASIS</StyledRecordArtist>
        </div>

        <StyledEditButton>
          <SvgIcon id='edit_vertical_white' onClick={onOpen} />
        </StyledEditButton>
      </StyledRecord>

      <BottomSheet
        open={open}
        onClose={onClose}
        menuList={[
          {
            id: 0,
            iconId: 'photo_black',
            text: '대표 이미지로 설정하기',
          },
          {
            id: 1,
            iconId: 'trash_red',
            text: '기록 삭제하기',
          },
        ]}
      />
    </>
  );
};

const StyledRecord = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1rem;
  background-color: ${(props) => props.theme.color.black};
  border-top: 1px solid ${(props) => props.theme.color.gray08};
`;

const StyledRecordImage = styled.div`
  width: 6.4rem;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.color.gray11};
  margin-right: 1.6rem;
`;

const StyledRecordTitle = styled.div`
  ${(props) => props.theme.font.bold16}
`;

const StyledRecordArtist = styled.div`
  ${(props) => props.theme.font.medium14}
  color: ${(props) => props.theme.color.gray08};
`;

const StyledEditButton = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

export default Record;
