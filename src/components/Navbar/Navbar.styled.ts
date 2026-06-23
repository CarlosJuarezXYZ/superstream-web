import styled from 'styled-components'

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(8, 11, 20, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.15);
  padding: 18px 48px;

  @media (max-width: 768px) {
    padding: 18px 24px;
  }
`

export const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`

export const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const LogoText = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.3px;

  span:first-child {
    color: #ffffff;
  }

  span:last-child {
    color: #818cf8;
  }
`

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.purpleLight};
  }
`

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  border-radius: 8px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`
