import type { ReactNode } from 'react'
import { Card, IconWrapper, PlatformName, PlatformPrice } from './PlatformCard.styled'

interface PlatformCardProps {
  icon: ReactNode
  iconBg: string
  name: string
  price: number
  currency?: string
  accentColor?: string
}

function PlatformCard({ icon, iconBg, name, price, currency = 'S/', accentColor = '#6366f1' }: PlatformCardProps) {
  return (
    <Card>
      <IconWrapper $bg={iconBg}>{icon}</IconWrapper>
      <PlatformName>{name}</PlatformName>
      <PlatformPrice $accentColor={accentColor}>{currency} {price}</PlatformPrice>
    </Card>
  )
}

export default PlatformCard
