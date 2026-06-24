import styled from 'styled-components'

export const IPTVSection = styled.section`
  padding: 100px 48px 80px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 80px 24px 64px;
  }
`

export const IPTVGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 640px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 280px;
  }
`
