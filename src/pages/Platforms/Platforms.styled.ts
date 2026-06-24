import styled from 'styled-components'

export const PlatformsSection = styled.section`
  padding: 100px 48px 80px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 80px 24px 64px;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 56px;
`

export const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -1px;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const SectionSubtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 420px;
`

export const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`
