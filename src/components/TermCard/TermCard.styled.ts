import styled from 'styled-components'

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.bg.card};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.bg.cardHover};
    border-color: ${({ theme }) => theme.colors.border.brand};
    transform: translateY(-4px);
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Number = styled.span`
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.brand.purple};
  background: ${({ theme }) => theme.colors.brand.purpleMuted};
  border: 1px solid ${({ theme }) => theme.colors.border.brand};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 3px 8px;
`

export const Category = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const RuleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const RuleItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.secondary};

  &::before {
    content: '—';
    color: ${({ theme }) => theme.colors.text.muted};
    flex-shrink: 0;
    margin-top: 1px;
  }
`
