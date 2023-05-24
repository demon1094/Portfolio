import { Container } from './styles'

type Data = {
  key: number
  title: string
}

export function Tag(props: Data) {
  return (
    <Container>
      {props.title}
    </Container>
  )
}