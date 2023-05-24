import styled from 'styled-components'

export const Container = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem 4rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.COLORS.CARD_BG_200 };

  > svg {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.COLORS.BLUE };
  }

  > span {
    white-space: nowrap;
    font-size: 2.4rem;
  }

  &:hover {
    filter: brightness(1.3);
  }

  @media screen and (max-width: 480px) {
    padding: 2rem 2rem;

    > svg {
      font-size: 2.5rem;
    }

    span {
      font-size: 2rem;
    }
  }
`