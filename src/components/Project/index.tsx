import { Container, Tags } from './styles'
import { BsCalendarWeekFill, BsGithub, BsGlobe2 } from 'react-icons/bs'

import { Button } from '../Button'
import { Tag } from '../Tag'

type Data = {
  id: number
  title: string
  stack: string
  date: string
  description: string
  tags: Array<object>
  repo_url?: string
  deploy_url?: string
}

export function Project(props: Data) {
  return (
    <Container>
      <header>
        <div className="title-stack">
          <h2>{props.title}</h2>
          <span>●</span>
          <h3>{props.stack}</h3>
        </div>
        <div className="date">
          <BsCalendarWeekFill />
          <span>{props.date}</span>
        </div>
      </header>

      <div className="description">
        <p>{props.description}</p>
      </div>

      <Tags>
        {
          props.tags.map((tag: any) => <Tag key={tag.id} title={tag.title}/>)
        }
      </Tags>
      
      <div className="buttons-wrapper">
        <Button url={props.repo_url} icon={<BsGithub />} title="Visualizar Repositório"/>
        <Button url={props.deploy_url} icon={<BsGlobe2 />} title="Visualizar Deploy"/>
      </div>
    </Container>
  )
}