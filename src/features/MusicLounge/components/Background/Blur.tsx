import styled from '@emotion/styled';

interface Props {
  color: string;
}

const Blur = ({ color }: Props) => {
  return (
    <StyledBlur>
      <StyledCircle color={color} />
      <StyledFilter />
    </StyledBlur>
  );
};

const StyledBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledCircle = styled.div<{ color: string }>`
  position: absolute;
  top: -5rem;
  right: 3rem;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  width: 42rem;
  aspect-ratio: 1/1;
`;

const StyledFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(70px);
`;

export default Blur;
