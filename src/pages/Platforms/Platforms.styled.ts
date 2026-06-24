import styled from 'styled-components'

export const PlatformsSection = styled.section`
  padding: 100px 48px 80px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 80px 24px 64px;
  }
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
