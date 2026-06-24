import styled, { css } from 'styled-components'

export const Card = styled.div<{ $featured?: boolean }>`
  background: ${({ theme }) => theme.colors.bg.card};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  ${({ $featured, theme }) =>
    $featured &&
    css`
      background: ${theme.colors.bg.cardHover};
      border-color: ${theme.colors.border.brandStrong};
      box-shadow: 0 0 40px rgba(99, 102, 241, 0.18);
    `}
`

export const PopularBadge = styled.span`
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.gradients.brand};
  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 4px 14px;
  border-radius: ${({ theme }) => theme.radii.full};
  white-space: nowrap;
`

export const PlanName = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`

export const Currency = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const Amount = styled.span`
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const Period = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
`

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border.muted};
`

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const CheckIcon = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brand.purpleMuted};
  color: ${({ theme }) => theme.colors.brand.purple};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  flex-shrink: 0;
`

export const CtaButton = styled.a<{ $featured?: boolean }>`
  display: block;
  text-align: center;
  padding: 13px 20px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;

  ${({ $featured, theme }) =>
    $featured
      ? css`
          background: ${theme.gradients.brand};
          color: white;
        `
      : css`
          background: transparent;
          border: 1px solid ${theme.colors.border.brand};
          color: ${theme.colors.brand.purpleLight};
        `}

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`
