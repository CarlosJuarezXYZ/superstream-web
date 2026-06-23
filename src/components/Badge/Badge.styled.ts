import styled from 'styled-components'

export const BadgeWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => theme.colors.brand.purpleMuted};
  border: 1px solid ${({ theme }) => theme.colors.border.brand};
  color: #a5b4fc;
  padding: 5px 14px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 12px;
  font-weight: 500;
`
