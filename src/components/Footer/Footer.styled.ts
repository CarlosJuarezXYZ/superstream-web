import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border.muted};
  padding: 48px 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 40px 24px 32px;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ theme }) => theme.gradients.brand};
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
    color: ${({ theme }) => theme.colors.text.primary};
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.brand.purpleLight};
  }
`

export const TrustBadges = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`

export const TrustBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => theme.colors.bg.card};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radii.full};
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
`

export const TrustIcon = styled.span`
  color: ${({ theme }) => theme.colors.brand.purple};
  display: flex;
  align-items: center;
`

export const Copyright = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.muted};
`
