import { FC } from 'react';
import * as S from './styled/AboutStyled';

interface Img {
  src: string,
  alt: string
}

const AboutPage: FC<Img> = () => {
  return (
    <>
      <S.Container>
        <S.Main>
          <S.Img
          src='/Images/Jungjihun.jpg'
          alt='Portflio image'
          />
          <S.Content>
            <S.Msg>About Me</S.Msg>
            <S.StyledMsg>안녕하세요. 프론트엔드 개발자 정지훈입니다.</S.StyledMsg>
            <S.StyledMsg>끊임없이 성장하고 싶은 개발자 입니다.</S.StyledMsg>
          </S.Content>
        </S.Main>
      </S.Container>
    </>
  )
}

export default AboutPage;