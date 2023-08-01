import React from 'react';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  color: tomato;
`;

function Home() {

  const handleLogin = () => {
    fetch("/login", { method: "POST" })
      .then((res) => res.json())
      .then((user) => alert(`성공 !\n${user.nickname}, ${user.email}`));
  };

  const handlePost = () => {
    fetch('/posts')
  .then((response) => response.json())
  // eslint-disable-next-line no-console
  .then((data) => console.log(data));
  }

  // eslint-disable-next-line react/button-has-type
  return <HomeContainer>Home<button onClick={handlePost}>post button</button><button onClick={handleLogin}>login button</button></HomeContainer>;
}

export default Home;
