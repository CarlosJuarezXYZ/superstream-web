import type { ReactNode } from 'react'
import { Card, IconWrapper, BenefitTitle, BenefitDescription } from './BenefitCard.styled'

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>
      <BenefitTitle>{title}</BenefitTitle>
      <BenefitDescription>{description}</BenefitDescription>
    </Card>
  )
}

export default BenefitCard
