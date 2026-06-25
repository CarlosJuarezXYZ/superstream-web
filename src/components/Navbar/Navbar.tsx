import {
  Nav,
  NavInner,
  LogoWrapper,
  LogoIcon,
  LogoText,
  NavLinks,
  NavLink,
  CtaButton,
} from './Navbar.styled'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Términos', href: '#terminos' },
]

function Navbar() {
  return (
    <Nav>
      <NavInner>
        <LogoWrapper href="#">
          <LogoIcon>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path d="M2 2L14 9L2 16V2Z" fill="white" />
            </svg>
          </LogoIcon>
          <LogoText>
            <span>Super</span>
            <span>Stream</span>
          </LogoText>
        </LogoWrapper>

        <NavLinks>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}
        </NavLinks>
      </NavInner>
    </Nav>
  )
}

export default Navbar
