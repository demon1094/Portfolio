import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 15rem auto;
  grid-template-areas: 
  'header'
  'main';

  > .header-wrapper {
    grid-area: header;
    position: fixed;
    width: 100%;
    height: 15rem;
    z-index: 9999;
  }

  > main {
    grid-area: main;
    max-width: 115rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30rem;
    padding: 0 2%;
    margin: 0 auto;

    .return {
      position: relative;
      bottom: 16rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 2.2rem;

      svg {
        font-size: 3.2rem;
      }

      &:hover {
        filter: brightness(1.5);
      }
    }
  }
`

export const AboutMe = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  margin-top: 14rem;

  > .greeting {
    display: flex;    
    width: 100%;
    padding: 0 1%;
    
    .desktop-greeting {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6rem;
      
      img {
        width: 40rem;
        border-radius: 50%;
        filter: drop-shadow(0 0 8px ${({ theme }) => theme.COLORS.BLUE });
      }

      .curriculum {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1.8rem 4rem;
        border: 2px solid ${({ theme }) => theme.COLORS.BLUE };
        border-radius: 1rem;
        font-weight: 500;

        svg {
          font-size: 2.6rem;
        }

        span {
          font-size: 2rem;
        }

        &:hover {
          cursor: pointer;
          filter: brightness(1.4);
        }
      }
    }

    .mobile-greeting {
      width: 100%;
      display: none;
      align-items: center;
      justify-content: space-between;
      font-size: clamp(2.4rem, 1vw, 1rem);

      h1 {
        color: ${({ theme }) => theme.COLORS.WHITE };
      }

      svg {
        font-size: clamp(3.6rem, 1vw, 1rem);
        
        &:hover {
          filter: brightness(1.3);
          cursor: pointer;
        }
      }

      @media screen and (max-width: 415px) {
        justify-content: center;
        
        svg {
          display: none;
        }
      }
    }

    @media screen and (max-width: 1024px) {
      .desktop-greeting {
        display: none;
      }

      .mobile-greeting {
        display: flex;
      }
    }
  }

  > .about-me {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    padding: 4rem 4rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.COLORS.CARD_BG_100 };

    div {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-bottom: 4rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LINE };

      svg {
        font-size: 4.2rem;
      }

      h2 {
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.WHITE };
      }
    }

    p {
      text-align: justify;
      font-size: clamp(2.2rem, 1.5rem, 2vw);
      color: ${({ theme }) => theme.COLORS.WHITE };
    }
  }

  > .mobile-curriculum-button {
    width: 100%;
    display: none;

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 1.8rem 4rem;
      border: 2px solid ${({ theme }) => theme.COLORS.BLUE };
      border-radius: 1rem;
      font-weight: 600;

      svg {
        font-size: 2.6rem;
      }

      span {
        font-size: 2rem;
      }

      &:hover {
        cursor: pointer;
        filter: brightness(1.4);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 6rem;
    margin-top: 8rem;

    .mobile-curriculum-button {
      display: block;
    }
  }
`

export const Tecnologies = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;

  > h2 {
    font-size: 3.2rem;
  }

  > .tecs-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 6rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.COLORS.CARD_BG_100 };

    @media screen and (max-width: 600px) {
      padding: 3rem 2rem;
    }

    .tecs {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3rem;

      .title {
        display: flex;
        align-items: center;
        gap: 1rem;

        svg {
          font-size: 3rem;
        }

        h3 {
          font-size: clamp(2.3rem, .8vw, 1rem);
        }

        @media screen and (max-width: 600px) {
          svg {
            font-size: 2.5rem;
          }

          h3 {
            font-size: clamp(1.8rem, .8vw, 1rem);
          }
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        li {
          display: flex;
          align-items: center;
          gap: .5rem;
          font-size: clamp(1.8rem, .8vw, 1rem);

          @media screen and (max-width: 600px) {
            font-size: clamp(1.5rem, .8vw, 1rem);
            gap: .3rem;
          }
        }
      }
    }

    > .line {
      width: 1px;
      height: 100%;
      background: ${({ theme }) => theme.COLORS.LINE };
    }
  }
`

export const Projects = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;

  > h2 {
    font-size: 3.2rem;
  }

  > .projects-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
  }
`

export const Contact = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;

  > h2 {
    font-size: 3.2rem;
  }

  > .contacts-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 4rem 5rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.COLORS.CARD_BG_100 };

    @media screen and (max-width: 540px) {
      padding: 3rem 2rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      li {
        display: flex;
        align-items: center;
        gap: 1rem;

        svg {
          font-size: clamp(2.5rem, 1vw, 1rem);

          @media screen and (max-width: 450px) {
            display: none;
          }
        }

        h3 {
          font-size: clamp(1.8rem, 1vw, 1rem);
        }

        a {
          text-decoration: underline;
        } 
      }
    }

    .response-time {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 2.5rem 2rem;
      border-radius: .6rem;
      background: ${({ theme }) => theme.COLORS.CARD_BG_200 };
      
      @media screen and (max-width: 540px) {
        padding: 2rem .8rem;
      }

      svg {
        font-size: clamp(2.5rem, 1vw, 1rem);

        @media screen and (max-width: 450px) {
          display: none;
        }
      }

      p {
        font-size: clamp(1.8rem, 1vw, 1rem);
      }
    }
  }
`