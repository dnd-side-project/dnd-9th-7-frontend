import React from 'react';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  color: tomato;
`;

function Home() {
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

  // eslint-disable-next-line react/button-has-type
  return (
    <HomeContainer>
      타이포그래피<button onClick={handlePost}>post button</button>
      <button onClick={handleLogin}>로그인 button</button>
    </HomeContainer>
  );
}

export default Home;
