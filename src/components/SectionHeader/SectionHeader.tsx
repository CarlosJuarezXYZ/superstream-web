import Badge from '../Badge/Badge'
import { Wrapper, Title, Subtitle } from './SectionHeader.styled'

interface SectionHeaderProps {
  badge: string
  title: string
  subtitle?: string
}

function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <Wrapper>
      <Badge>{badge}</Badge>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  )
}

export default SectionHeader
