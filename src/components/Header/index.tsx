// Modules
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
// Application
import logo from '../../assets/logo.svg'

// Components
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
