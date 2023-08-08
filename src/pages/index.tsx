/* eslint-disable react/button-has-type */
import styled from '@emotion/styled';
import { SvgIcon } from '@common/components/SvgIcon';

const HomeContainer = styled.div`
  color: tomato;
`;

const Home = () => {
  const handleLogin = () => {
    fetch('/login', { method: 'POST' })
      .then((res) => res.json())
      .then((user) => alert(`성공 !\n${user.nickname}, ${user.email}`));
  };

  const handlePost = () => {
    fetch('/posts')
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <HomeContainer>
      타이포그래피<button onClick={handlePost}>post button</button>
      <button onClick={handleLogin}>로그인 button</button>
      <SvgIcon id='collection' width={20} height={20} />
      <SvgIcon id='chevronDown2' />
    </HomeContainer>
  );
};

export default Home;
