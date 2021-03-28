import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--modal);
  display: absolute;

  .content {
    height: 100vh;
    max-width: 1216px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    color: var(--white);

    /* background: var(--white); */
    /* padding: 24px 24px 24px 32px;
    background-color: var(--white-ligth);
    color: var(--black);
    border-radius: 25px; */
  }

  .wrapper-right {
    height: 75vh;
    display: flex;
    justify-content: flex-end;

    flex-direction: column;
  }

  .wrapper-left {
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
  }

  .wrapper-left img {
    max-width: 350px;
  }

  p {
    margin-bottom: 30px;
  }

  .ballon {
    background: var(--white);
    padding: 24px;
    background-color: var(--white-dark);
    color: var(--black-ligth);
    border-radius: 25px;
  }

  button {
    float: right;
  }
`;
