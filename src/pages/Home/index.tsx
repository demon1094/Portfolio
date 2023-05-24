import { 
  Container, 
  AboutMe, 
  Tecnologies, 
  Projects, 
  Contact 
} from './styles'

import { Header } from '../../components/Header'
import { Project } from '../../components/Project'

import { Zoom, Fade } from 'react-reveal';

import { 
  BsFillClipboardFill,
  BsChatHeartFill, 
  BsFillRocketTakeoffFill,
  BsLinkedin, BsDiscord
} from 'react-icons/bs'

import { TbPointFilled, TbClockFilled } from 'react-icons/tb'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { TiArrowUpThick } from 'react-icons/ti'
import { RiMailFill } from 'react-icons/ri'
import MeIMG from '../../assets/me.png'

export function Home() {
  return (
    <Container>
      <div className="header-wrapper">
        <Header />
      </div>

      <main>
        <AboutMe id="about">
          <div className="greeting">
            <div className="desktop-greeting">
              <img src={MeIMG} alt="Me" />
              <a className="curriculum" target='_blank' href='https://drive.google.com/file/d/1VdPGXYXjq3objmSuE4YZAMOXOsI5iOzw/view?usp=sharing'>
                <BsFillClipboardFill />
                <span>Currículo</span>
              </a>
            </div>

            <div className="mobile-greeting">
              <h1>Olá, seja <span className="blue-text">bem vindo!</span></h1>
              <a href="https://app.rocketseat.com.br/me/diego-araujo-00435" target="_blank">
                <BsFillRocketTakeoffFill />
               </a>
            </div>
          </div>

          <div className="about-me">
            <div>
              <BsChatHeartFill />
              <h2>Sobre <span className="blue-text">mim</span></h2>
            </div>
            
            <p>
              Meu nome é Diego, tenho 18 anos e sou desenvolvedor full stack jr<span className="blue-text"><strong>.</strong></span>
              <br />
              <br />
              Dedico muitas horas do meu dia a programação, aprendendo tecnologias novas e praticando
              com projetos pessoais<span className="blue-text"><strong>.</strong></span>
              <br />
              <br />
              Estou sempre empenhado em manter-me atualizado com as tecnologias mais recentes e as 
              melhores práticas para criar códigos eficientes e de alta qualidade<span className="blue-text"><strong>.</strong></span>
            </p>
          </div>

          <div className="mobile-curriculum-button">
            <button>
              <BsFillClipboardFill />
              <span>Currículo</span>
            </button>
          </div>
        </AboutMe>

        <Tecnologies id="tecs">
          <Zoom duration={1200} delay={150}>
            <h2>Minhas <span className="blue-text">Tecnologias</span></h2>
            <div className="tecs-wrapper">
              <div className="tecs frontend-tecs">
                <div className="title">
                  <FaReact />
                  <h3>Front-end</h3>
                </div>

                <ul>
                  <Zoom cascade delay={600}>
                    <li>
                      <TbPointFilled />
                      <span>ReactJS</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>TypeScript</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>Styled-Components</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>React Hooks</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>React Context</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>HTML</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>SASS</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>Figma</span>
                    </li>
                  </Zoom>
                </ul>
              </div>

              <div className="line"></div>

              <div className="tecs backend-tecs">
                <div className="title">
                  <FaNodeJs />
                  <h3>Back-end</h3>
                </div>

                <ul>
                  <Zoom cascade delay={600}>
                    <li>
                      <TbPointFilled />
                      <span>NodeJS</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>JavaScript</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>Express</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>Knex</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>Axios</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>SQLite</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>API's RESTful</span>
                    </li>
                    <li>
                      <TbPointFilled />
                      <span>POO</span>
                    </li>
                  </Zoom>
                </ul>
              </div>
            </div>
          </Zoom>
        </Tecnologies>

        <Projects id="projects">
          <Zoom duration={1200} delay={150}>
            <h2>Meus <span className="blue-text">Projetos</span></h2>
          </Zoom>

          <div className="projects-wrapper">
            <Fade bottom distance={'200%'} delay={150}>
              <Project
                id={1}
                title="Rocket Notes"
                stack="Full Stack"
                date="04/2023"
                description="O Rocket Notes é uma aplicação para salvar e
                gerenciar seus links úteis de forma simples e fácil, como um bloco
                de notas. Esse projeto full-stack foi desenvolvido no curso 
                Explorer da Rocketseat visando aprender tecnologias eficientes
                e escaláveis como o ReactJS e NodeJS"
                tags={[
                  { id: 1, title: 'ReactJS' },
                  { id: 2, title: 'Styled-Components' },
                  { id: 3, title: 'Hooks' },
                  { id: 4, title: 'Context' },
                  { id: 5, title: 'NodeJS' },
                  { id: 6, title: 'Express' },
                  { id: 7, title: 'Knex' },
                  { id: 8, title: 'APIs RESTful' }
                ]}
                repo_url="https://github.com/demon1094/rocketnotes-frontend/"
                deploy_url="https://main--rocket-notes-explorer.netlify.app/"
              />
              {/* <Project
                id={2}
                title="Rocket Movies"
                stack="Full Stack"
                date="04/2023"
                description="O Rocket Movies é uma aplicação para favoritar e
                classificar seus filmes prediletos de forma simples e fácil. Esse
                projeto full-stack foi desenvolvido no curso Explorer da Rocketseat
                como um desafio, visando aprimorar e treinar conhecimentos em tecnologias 
                eficientes e escaláveis como o ReactJS e NodeJS"
                tags={[
                  { id: 1, title: 'ReactJS' },
                  { id: 2, title: 'Styled-Components' },
                  { id: 3, title: 'Hooks' },
                  { id: 4, title: 'Context' },
                  { id: 5, title: 'NodeJS' },
                  { id: 6, title: 'Express' },
                  { id: 7, title: 'Knex' },
                  { id: 8, title: 'APIs RESTful' }
                ]}
                repo_url="https://github.com/demon1094/Rocket-Movies"
                deploy_url=""
              /> */}
              <Project
                id={2}
                title="ModShop Website"
                stack="Front-end"
                date="07/2023"
                description="O ModShop Website é um site de vendas de Mods para
                o jogo Euro Truck Simulator 2. Esse projeto front-end foi desenvolvido
                de forma autônoma (apenas para estudo), visando treinar habilidades de 
                estilização e responsividade com ReactJS & Styled-Components"
                tags={[
                  { id: 1, title: 'ReactJS' },
                  { id: 2, title: 'Styled-Components' },
                  { id: 3, title: 'Hooks' }
                ]}
                repo_url="https://github.com/demon1094/modshop-website"
                deploy_url="https://modshop-copy.netlify.app/"
              />
              {/* <Project
                id={3}
                title="SPA Universe"
                stack="Full Stack"
                date="04/2023"
                description="O SPA Universe é um site para descrever e falar sobre
                o Universo e sua exploração de forma geral e conceitual. Esse projeto 
                full-stack foi desenvolvido no curso Explorer da Rocketseat como um desafio, 
                visando aprimorar e treinar conhecimentos em Promisses e Rotas com JavaScript"
                tags={[
                  { id: 1, title: 'JavaScript' },
                  { id: 2, title: 'Single Page Aplication' },
                  { id: 3, title: 'Promisses' },
                  { id: 4, title: 'HTML' },
                  { id: 5, title: 'CSS' }
                ]}
                repo_url="https://github.com/demon1094/SPA-Universe"
                deploy_url=""
              /> */}
            </Fade>
          </div>
        </Projects>

        <Contact id="contact">
          <Zoom duration={1200} delay={150}>
            <h2>Formas de <span className="blue-text">Contato</span></h2>
            <div className="contacts-wrapper">
              <ul>
                <li>
                  <RiMailFill />
                  <h3>Email:</h3>
                  <a href="mailto:diegoagar345@gmail.com" target="_blank">
                    diegoagar345@gmail.com
                  </a>
                </li>
                <li>
                  <BsLinkedin />
                  <h3>Linkedin:</h3>
                  <a href="https://www.linkedin.com/in/diego-araujo-474780258/" target="_blank">
                    https://www.linkedin.com/in/diego-araujo-474780258/
                  </a>
                </li>
                <li>
                  <BsDiscord />
                  <h3>Discord:</h3>
                  <a href="https://discord.gg/Demonn#8821" target="_blank">
                    Demonn#8821
                  </a>
                </li>
              </ul>

              <div className="response-time">
                <TbClockFilled />
                <p>Tempo médio de resposta: 1 dia (corrido)</p>
              </div>
            </div>
          </Zoom>
        </Contact>
        
        <Fade bottom delay={150}>
          <a href="#" className="return">Voltar ao início <TiArrowUpThick /></a>
        </Fade>
      </main>
    </Container>
  )
}