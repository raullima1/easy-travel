import styled from 'styled-components';
import Background from '../../assets/img/background-france.jpg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  background: url(${Background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .chat {
    position: absolute;
  }

  .content {
    height: 100vh;
    max-width: 1216px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 280px 1fr;
    color: var(--white);
  }

  .wrapper-left {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .wrapper-left svg {
    justify-self: flex-start;
  }
  .wrapper-rigth {
    display: flex;
    margin: 0 0 10% 0;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
  }

  .wrapper-left .logo {
    position: absolute;
    top: 70px;
  }

  .title {
    font-size: 48px;
    font-family: 'Sora', sans-serif;
  }

  .subtitle {
    width: 300px;
    font-size: 16px;
    margin-bottom: 24px;
  }

  /* .vertical-align {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  } */

  span.subline {
    display: block;
    height: 1px;
    width: 50px;
    border: 2px solid var(--orange-ligth);
    background: var(--orange-ligth);
    border-radius: 3px;
    margin-bottom: 10%;
  }

  .icon-play {
    font-size: 30px;
    margin-right: 12px;
    color: var(--orange);
  }

  .play-video {
    display: flex;
    line-height: 40px;
    cursor: pointer;
  }

  .play-video svg {
    margin-right: 15px;
  }
`;
