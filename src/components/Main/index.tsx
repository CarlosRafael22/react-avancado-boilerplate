import * as Style from './styles'

const Main = () => (
  <Style.Wrapper>
    <Style.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <Style.Title>React Avançado</Style.Title>
    <Style.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </Style.Description>
    <Style.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </Style.Wrapper>
)

export default Main
