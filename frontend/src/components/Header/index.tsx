import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h2>Relatórios de Vendas</h2>
            </div>
            
        </header>
    )
}

export default Header
