import {
  Card,
  PopularBadge,
  PlanName,
  PriceRow,
  Currency,
  Amount,
  Period,
  Divider,
  FeatureList,
  FeatureItem,
  CheckIcon,
  CtaButton,
} from './PricingCard.styled'

interface PricingCardProps {
  name: string
  price: number
  features: string[]
  featured?: boolean
  whatsappHref: string
}

function PricingCard({ name, price, features, featured = false, whatsappHref }: PricingCardProps) {
  return (
    <Card $featured={featured}>
      {featured && <PopularBadge>Más popular</PopularBadge>}

      <div>
        <PlanName>{name}</PlanName>
        <PriceRow>
          <Currency>S/</Currency>
          <Amount>{price}</Amount>
          <Period>/mes</Period>
        </PriceRow>
      </div>

      <Divider />

      <FeatureList>
        {features.map((f) => (
          <FeatureItem key={f}>
            <CheckIcon>✓</CheckIcon>
            {f}
          </FeatureItem>
        ))}
      </FeatureList>

      <CtaButton
        $featured={featured}
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        Pedir por WhatsApp
      </CtaButton>
    </Card>
  )
}

export default PricingCard
