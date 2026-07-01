import styled from 'styled-components'

export const PricingSection = styled.section`
  padding: 100px 48px 80px;
  text-align: center;
  scroll-margin-top: 50px;

  @media (max-width: 768px) {
    padding: 80px 24px 64px;
  }
`

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 380px;
  }
`
