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
    height: auto;
    max-width: 1216px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: var(--white);
  }

  .wrapper-header {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .wrapper-citie {
    height: auto;
    margin: 64px 0;
  }

  .wrapper-info {
    display: flex;
    
    &__card {
      background-color: var(--purple);
    }
  }

  .wrapper-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 70px 0;
  }

  .wrapper-cards {
    display: flex;
    width: 100%;
    justify-content: space-between;

    &__card1 {
      width: 384px;
      background-color: var(--white);
      color: var(--black);
      padding: 40px 16px;
      border-radius: 16px;
    }

    &__card2 {
      width: 384px;
      background-color: var(--white);
      color: var(--black);
      padding: 40px 16px;
      border-radius: 16px;
    }

    &__card3 {
      width: 384px;
      background-color: var(--white);
      color: var(--black);
      padding: 40px 16px;
      border-radius: 16px;
    }
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

  /* span.subline {
    display: block;
    height: 1px;
    width: 50px;
    border: 2px solid var(--orange-ligth);
    background: var(--orange-ligth);
    border-radius: 3px;
    margin-bottom: 10%;
  } */
`;
