// import styled from 'styled-components'
import BackgroundImage from '@public/images/garden.webp'
import styled from 'styled-components'

export const LandingBanner:React.FC = () => {
  return(
    <Container backgroundImage={BackgroundImage}>
      Hello world
    </Container>
  )
}

const Container = styled.div<{ backgroundImage: string }>`
  height: 100dvh;
  font-size: 3rem;
  background-color: url(${p => p.backgroundImage});
`
