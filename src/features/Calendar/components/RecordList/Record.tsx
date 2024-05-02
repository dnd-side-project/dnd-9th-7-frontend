import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@/common/components/SvgIcon';
import { useBottomSheet } from '@/stores/bottomSheet';
import { useToast } from '@/stores/toast';

const Record = () => {
  const { openBottomSheet } = useBottomSheet();
  const { showToast } = useToast();

  return (
    <StyledRecord>
      <StyledRecordInfo to='/view-record'>
        <StyledRecordImage />
        <div>
          <StyledRecordTitle>WONDERWALL</StyledRecordTitle>
          <StyledRecordArtist>OASIS</StyledRecordArtist>
        </div>
      </StyledRecordInfo>

      <StyledEditButton
        onClick={() =>
          openBottomSheet({
            menuList: [
              {
                iconId: 'photo_black',
                text: '대표 이미지로 설정하기',
                handleClick: () => {
                  showToast({
                    iconId: 'complete_white',
                    message: '대표 이미지가 변경되었습니다',
                    onCancel: () => console.log('실행취소'),
                  });
                },
              },
              {
                iconId: 'trash_orange',
                text: '기록 삭제하기',
                handleClick: () => {
                  showToast({
                    iconId: 'complete_white',
                    message: '기록이 삭제되었습니다',
                    onCancel: () => console.log('실행취소'),
                  });
                },
              },
            ],
          })
        }
      >
        <SvgIcon id='edit_vertical_white' />
      </StyledEditButton>
    </StyledRecord>
  );
};

const StyledRecord = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1rem;
  background-color: ${(props) => props.theme.color.black};
  border-top: 1px solid ${(props) => props.theme.color.gray08};
`;

const StyledRecordInfo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 90%;
`;

const StyledRecordImage = styled.div`
  width: 6.4rem;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.color.gray11};
  margin-right: 1.6rem;
`;

const StyledRecordTitle = styled.div`
  ${(props) => props.theme.font.bold16}
  color: ${(props) => props.theme.color.white};
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
