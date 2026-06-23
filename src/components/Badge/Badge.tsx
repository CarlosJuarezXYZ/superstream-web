import { BadgeWrapper } from './Badge.styled'

interface BadgeProps {
  children: React.ReactNode
}

function Badge({ children }: BadgeProps) {
  return <BadgeWrapper>{children}</BadgeWrapper>
}

export default Badge
