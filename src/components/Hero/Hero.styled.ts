import styled from 'styled-components'

export const HeroSection = styled.section`
  padding: 140px 48px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: 120px 24px 64px;
  }
`

export const HeroGlow = styled.div`
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 400px;
  background: ${({ theme }) => theme.gradients.hero};
  pointer-events: none;
`

export const HeroTitle = styled.h1`
  font-size: 54px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin: 16px 0;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

export const HeroSub = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 560px;
  margin: 0 auto 36px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const HeroCtas = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
`

export const WaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.gradients.whatsapp};
  color: #fff;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.whatsapp};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }
`

export const PlansButton = styled.a`
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.35);
  color: #a5b4fc;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.18);
  }
`

export const PlatformsRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 48px;
`

export const PlatformChip = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 10px 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};

  display: flex;
  align-items: center;
  gap: 6px;

  cursor: default;

  transition:
    border-color .25s ease,
    box-shadow .25s ease,
    background .25s ease;

  &:hover {
    border-color: rgba(99,102,241,.45);
    background: rgba(99,102,241,.08);
    box-shadow: 0 10px 28px rgba(99,102,241,.18);

    svg{
      transform:scale(1.12);
    }
  }

  svg{
    transition:transform .25s ease;
  }
`

export const PlatformDot = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 20px;
`
