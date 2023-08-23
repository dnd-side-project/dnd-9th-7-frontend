import styled from '@emotion/styled';
import Blur from './Blur';

interface Props {
  type: string;
  title: string;
  color: string;
}

const Background = ({ type, title, color }: Props) => {
  return (
    <StyledBackground>
      <Blur color={color} />
      <StyledType>{type}</StyledType>
      <StyledTitle>
        {title}
        <br />
        많이 들은 음악
      </StyledTitle>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  position: relative;
  width: calc(100% + 4.8rem);
  padding-top: 2rem;
  padding-bottom: 2.4rem;
  background-color: ${(props) => props.theme.color.white};
`;

const StyledType = styled.div`
  padding-right: 2.4rem;
  padding-left: 2.4rem;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.08);
  opacity: 0.35;
  text-transform: uppercase;
  ${(props) => props.theme.font.medium16}
`;

const StyledTitle = styled.div`
  padding-right: 2.4rem;
  padding-left: 2.4rem;
  margin-top: 6.2rem;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.08);
  letter-spacing: -0.2px;
  opacity: 0.99; // 왜 이게 있어야 글자가 보이는거지..?
  ${(props) => props.theme.font.bold28}
`;

export default Background;
