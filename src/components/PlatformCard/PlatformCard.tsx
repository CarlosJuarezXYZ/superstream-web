import type { ReactNode } from 'react'
import { Card, IconWrapper, PlatformName, PlatformPrice } from './PlatformCard.styled'

interface PlatformCardProps {
  icon: ReactNode
  iconBg: string
  name: string
  price: number
  currency?: string
}

function PlatformCard({ icon, iconBg, name, price, currency = 'S/' }: PlatformCardProps) {
  return (
    <Card>
      <IconWrapper $bg={iconBg}>{icon}</IconWrapper>
      <PlatformName>{name}</PlatformName>
      <PlatformPrice>{currency} {price}</PlatformPrice>
    </Card>
  )
}

export default PlatformCard
