import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 3.5rem;
  justify-content: space-between;
  border-radius: 1rem;
  background: ${({ theme }) => theme.COLORS.CARD_BG_100 };

  > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;

    .title-stack {
      display: flex;
      align-items: center;
      gap: 3rem;
      color: ${({ theme }) => theme.COLORS.BLUE_LIGHT_100 };

      h2, h3 {
        font-size: clamp(2.4rem, 1vw, 1.5rem);

        @media screen and (max-width: 452px) {
          font-size: clamp(2rem, 1vw, 1.5rem);
        }
      }

      @media screen and (max-width: 610px) {
        gap: 1rem;
      }
    }

    .date {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      svg {
        font-size: clamp(2rem, 1vw, 2rem);
      }

      span {
        font-size: 1.6rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.GRAY_TEXT };
      }

      @media screen and (max-width: 525px) {
        display: none;
      }
    }
  }

  > .description {
    margin-bottom: 3rem;
    font-size: clamp(1rem, 1.8rem, 2rem);
    text-align: justify;
  }

  > .buttons-wrapper {
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 820px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`

export const Tags = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`