import { FaWhatsapp, FaAmazon } from "react-icons/fa";
import {
  SiNetflix,
  SiHbomax,
  SiCrunchyroll,
  SiParamountplus,
  SiYoutube,
} from "react-icons/si";
import type { IconType } from "react-icons";
import Badge from "../Badge/Badge";
import {
  HeroSection,
  HeroGlow,
  HeroTitle,
  HeroSub,
  HeroCtas,
  WaButton,
  PlansButton,
  PlatformsRow,
  PlatformChip,
  PlatformDot,
} from "./Hero.styled";
import { motion } from "framer-motion";
import { itemVariants } from "../../utils/motion";
import MotionSection from "../MotionSection/MotionSection";

const WA_LINK = "https://wa.me/51943316903?text=Hola%20SuperStream%2C%20quiero%20adquirir%20un%20plan";

const PLATFORMS: { name: string; color: string; image?:string; Icon: IconType | null }[] = [
  { name: "Netflix", color: "#e50914", Icon: SiNetflix },
  { name: "Disney+", color: "#113ccf", Icon: null },
  { name: "HBO Max", color: "#b5179e", Icon: SiHbomax },
  { name: "Prime Video", color: "#00a8e0", Icon: FaAmazon },
  { name: "Crunchyroll", color: "#ff6400", Icon: SiCrunchyroll },
  { name: "Paramount+", color: "#0066cc", Icon: SiParamountplus },
  { name: "YouTube Premium", color: "#ff0000", Icon: SiYoutube },
];

function Hero() {
  return (
    <HeroSection>
      <HeroGlow />
      <Badge>⦿ Streaming · IA · IPTV — Todo en un solo lugar</Badge>
      <HeroTitle>
        Todo el entretenimiento
        <br />
        en un solo lugar
      </HeroTitle>
      <HeroSub>
        Accede a Netflix, Disney+, HBO Max, ChatGPT Plus, Canva Pro, IPTV y más.
        Activación inmediata, soporte 24/7 y precios imbatibles.
      </HeroSub>
      <MotionSection>
        <HeroCtas>
          <WaButton  as={motion.a}
              variants={itemVariants}
              whileHover={{
                y: -4,
                scale: 1.03,
              }} href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={18} />
            Pedir por WhatsApp
          </WaButton>
          <PlansButton href="#plans" as={motion.a}
              variants={itemVariants}
              whileHover={{
                y: -4,
                scale: 1.03,
              }}>
            Ver todos los planes
          </PlansButton>
        </HeroCtas>
        <PlatformsRow>
          {PLATFORMS.map(({ name, color, Icon }) => (
            <PlatformChip
              as={motion.div}
              key={name}
              variants={itemVariants}
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
            >
              {Icon ? (
                <Icon size={16} color={color} />
              ) : (
                <PlatformDot $color={color}>●</PlatformDot>
              )}
              {name}
            </PlatformChip>
          ))}
        </PlatformsRow>
      </MotionSection>
    </HeroSection>
  );
}

export default Hero;
