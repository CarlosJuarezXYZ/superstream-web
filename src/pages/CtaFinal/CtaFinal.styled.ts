import styled from 'styled-components'

export const CtaSection = styled.section`
  padding: 100px 48px 120px;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 24px 100px;
  }
`

export const CtaGlow = styled.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(99, 102, 241, 0.14) 0%, transparent 70%);
  pointer-events: none;
`

export const WaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${({ theme }) => theme.gradients.whatsapp};
  color: #fff;
  padding: 18px 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.whatsapp};
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }
`
