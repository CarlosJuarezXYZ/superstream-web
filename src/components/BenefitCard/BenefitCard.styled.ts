import styled from 'styled-components'

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.bg.card};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.bg.cardHover};
    border-color: ${({ theme }) => theme.colors.border.brand};
    transform: translateY(-4px);
  }
`

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.brand.purpleMuted};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.brand.purple};
`

export const BenefitTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const BenefitDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.secondary};
`
