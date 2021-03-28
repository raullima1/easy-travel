import { FC } from 'react';
import { ButtonChat } from '../ButtonChat';

import { Container } from './styles';
import avatarHenrique from '../../assets/svg/avatar-henrique.svg';
import avatarJacquin from '../../assets/svg/avatar-jacquin.svg';

const parametro = 'padrao';

const Avatars = {
  padrao: <img src={avatarHenrique} alt="avatar padrao" />,
  frances: <img src={avatarJacquin} alt="avatar tompero" />,
};

const Assistant: FC = () => {
  return (
    <Container>
      <div className="content">
        <div className="wrapper-left">{Avatars[parametro]}</div>
        <div className="wrapper-right">
          <div className="ballon">
            <p />
            <p>
              Olá, me chamo Henrique, sou o assistente virtual da Easy Travel.
            </p>
            <p>
              Que bom que você se interessou pela <strong>França</strong> e para
              te ajudar no seu planejamento irei chamar um amigo meu de lá!
            </p>
            <ButtonChat>Continuar</ButtonChat>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Assistant };
