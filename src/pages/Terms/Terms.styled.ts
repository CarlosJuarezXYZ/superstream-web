import styled from 'styled-components'

export const TermsSection = styled.section`
  padding: 100px 48px 80px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 80px 24px 64px;
  }
`

export const TermsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
