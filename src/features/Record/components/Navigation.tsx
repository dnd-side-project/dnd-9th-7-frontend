import { Modal } from '@/shared/common/components/Modal';
import { Navigation as RecordPageNavigation } from '@/shared/common/components/Navigation';
import { SvgIcon } from '@/shared/common/components/SvgIcon';
import { useOpen } from '@/shared/common/hooks';
import { theme } from '@/styles';

export const Navigation = () => {
  const modalProps = useOpen();
  return (
    <>
      <RecordPageNavigation>
        <RecordPageNavigation.Left onClick={modalProps.onOpen}>
          <SvgIcon id='leftArrow' />
        </RecordPageNavigation.Left>
        <RecordPageNavigation.Center>
          <span>기록하기</span>
        </RecordPageNavigation.Center>
        <RecordPageNavigation.Right>
          <span>완료</span>
        </RecordPageNavigation.Right>
      </RecordPageNavigation>
      {modalProps.open && (
        <Modal {...modalProps}>
          <Modal.Header>기록을 삭제하시겠습니까?</Modal.Header>
          <Modal.Content>그만하기 선택시 기록중인 글은 저장되지 않고 삭제됩니다.</Modal.Content>
          <Modal.Footer>
            <Modal.Button onClick={modalProps.onClose}>취소</Modal.Button>
            <Modal.Button css={{ color: theme.color.orange }}>그만하기</Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
