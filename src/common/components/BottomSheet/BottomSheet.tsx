import { Drawer } from 'vaul';
import styled from '@emotion/styled';
import { SvgIcon } from '@/common/components/SvgIcon';
import { useBottomSheet } from '@/common/hooks/useBottomSheet';

export const BottomSheet = () => {
  const {
    bottomSheet: { isOpened, menuList },
    closeBottomSheet,
  } = useBottomSheet();
  return (
    <Drawer.Root open={isOpened}>
      <Drawer.Portal>
        <StyledOverlay />
        <StyledContent
          onPointerDownOutside={closeBottomSheet}
          onCloseAutoFocus={isOpened ? closeBottomSheet : () => null}
        >
          <StyledBar />

          {menuList && (
            <>
              <StyledMenu
                textColor='black'
                onClick={() => {
                  menuList[0].handleClick();
                  closeBottomSheet();
                }}
              >
                <SvgIcon id={menuList[0].iconId} />
                {menuList[0].text}
              </StyledMenu>

              <StyledMenu
                textColor='red'
                onClick={() => {
                  menuList[1].handleClick();
                  closeBottomSheet();
                }}
              >
                <SvgIcon id={menuList[1].iconId} />
                {menuList[1].text}
              </StyledMenu>
            </>
          )}
        </StyledContent>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const StyledOverlay = styled(Drawer.Overlay)`
  position: fixed;
  inset: 0;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: calc(34.2rem + 4.8rem);
  z-index: 99;
`;

const StyledContent = styled(Drawer.Content)`
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.gray02};
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  max-width: calc(34.2rem + 4.8rem);
  height: 14.4rem;
  outline: none;
`;

const StyledBar = styled.div`
  width: 4.6rem;
  height: 0.4rem;
  flex-shrink: 0;
  border-radius: 10rem;
  background-color: rgba(0, 0, 0, 0.25);
  margin-top: 0.8rem;
  margin-bottom: 1.6rem;
`;

const StyledMenu = styled.div<{ textColor: string }>`
  ${(props) => props.theme.font.semibold16}
  color: ${(props) =>
    props.textColor === 'black' ? props.theme.color.black : props.theme.color.red};
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.8rem;
  gap: 0.8rem;
  padding-left: 2.2rem;
`;
