import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.COLORS.HEADER_BACKGROUND };
  
  > nav {
    max-width: 115rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2%;
    margin: auto;

    img {
      width: 13rem;
    }

    .navigation {
      display: flex;
      align-items: center;
      gap: 2.5rem;

      li a {
        font-size: clamp(2rem, 2.2rem, 2.2rem);
        padding-bottom: 1rem;

        &:hover {
          filter: brightness(1.5) drop-shadow(0 0 1px ${({ theme }) => theme.COLORS.WHITE });
        }
      }

      @media screen and (max-width: 850px) {
        display: none;
      }
    }

    .social-media {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      li svg {
        font-size: 3rem;
        
        &:hover {
          cursor: pointer;
          filter: brightness(1.5);
        }
      }

      @media screen and (max-width: 850px) {
        display: none;
      }
    }

    .mobile-menu-wrapper {
      display: none;

      @media screen and (max-width: 850px) {
        display: block;
      }
    }

    .mobile-menu-wrapper.open .mobile-menu {
      .bar:nth-child(1) {
        transform: translateY(.45rem) rotate(45deg);
      }

      .bar:nth-child(2) {
        display: none;
      }

      .bar:nth-child(3) {
        transform: translateY(-.45rem) rotate(-45deg);
      }
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      
      .bar {
        width: 3rem;
        height: .3rem;
        margin: 3px 0;
        background: ${({ theme }) => theme.COLORS.WHITE };
        transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      &:hover .bar {
        background: ${({ theme }) => theme.COLORS.BLUE };
      }
    }
  }

  > .mobile-nav-bar {
    position: absolute;
    width: 100%;
    height: 40rem;
    display: none;
    user-select: none;
    background: ${({ theme }) => theme.COLORS.HEADER_BACKGROUND };

    .mobile-nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 1.2rem;
      gap: 3rem;
      margin-bottom: 4rem;

      li {
        width: 100%;
        font-size: 2rem;
        padding: 1rem;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE };

        a:hover {
          filter: brightness(1.5) drop-shadow(0 0 1px ${({ theme }) => theme.COLORS.WHITE });
        }
      }
    }

    .mobile-social-media {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4rem;
      padding-left: 1.2rem;
      font-size: 3rem;

      svg:hover {
        cursor: pointer;
        filter: brightness(1.5);
      }
    }
  }

  > .mobile-nav-bar.open {
    display: block;
    animation: openNavbar 200ms linear;
  }

  @keyframes openNavbar {
    0% {
      left: -100%;
      opacity: 0;
    }

    100% {
      left: 0;
      opacity: 100;
    }
  }
`