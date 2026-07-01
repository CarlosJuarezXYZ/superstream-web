import type { ReactNode } from "react";
import {
  Card,
  IconWrapper,
  PlatformName,
  PlatformPrice,
} from "./PlatformCard.styled";

interface PlatformCardProps {
  icon: ReactNode;
  iconBg: string;
  name: string;
  price: number;
  currency?: string;
  accentColor?: string;
  logo?: string;
}

function PlatformCard({
  icon,
  iconBg,
  name,
  price,
  currency = "S/",
  accentColor = "#fff",
  logo,
}: PlatformCardProps) {
  return (
    <Card>
      {icon ? (
        <IconWrapper $bg={iconBg}>{icon}</IconWrapper>
      ) : (
        <IconWrapper $bg={iconBg}>
          <img src={logo} alt={name} height="50px" width="60px" />
        </IconWrapper>
      )}
      <PlatformName>{name}</PlatformName>
      <PlatformPrice $accentColor={accentColor}>
        {currency} {price}
      </PlatformPrice>
    </Card>
  );
}

export default PlatformCard;
