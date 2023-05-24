import { Container } from './styles'
import { ReactElement } from 'react'

type Data = {
  icon?: ReactElement
  title: string
  url?: string
}

export function Button(props: Data) {
  return (
    <Container type="button" href={props.url} target="_blank">
      {props.icon}
      <span>{props.title}</span>
    </Container>
  )
}