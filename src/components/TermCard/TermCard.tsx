import { Card, CardHeader, Number, Category, RuleList, RuleItem } from './TermCard.styled'

interface TermCardProps {
  number: string
  category: string
  rules: string[]
}

function TermCard({ number, category, rules }: TermCardProps) {
  return (
    <Card>
      <CardHeader>
        <Number>{number}</Number>
        <Category>{category}</Category>
      </CardHeader>
      <RuleList>
        {rules.map((rule) => (
          <RuleItem key={rule}>{rule}</RuleItem>
        ))}
      </RuleList>
    </Card>
  )
}

export default TermCard
