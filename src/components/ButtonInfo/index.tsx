import { ButtonHTMLAttributes, FC } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const ButtonInfo: FC = () => {
  return <Container />;
};

export { ButtonInfo };
