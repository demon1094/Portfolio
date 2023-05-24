import styled from 'styled-components'

export const Container = styled.span`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3rem;
  border: 2px solid ${({ theme }) => theme.COLORS.BLUE };
  border-radius: .6rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.COLORS.BLUE_LIGHT_200 };
  text-shadow: 0 0 2px ${({ theme }) => theme.COLORS.BLUE };

  &:hover {
    filter: brightness(1.3);
  }
`