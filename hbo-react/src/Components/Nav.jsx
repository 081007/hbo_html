import styles from './nav.module.css';
import logo from '/hbo.react/hbo-react/src/assets/images/hbo-logo.svg'

export default function Nav() {
  return (
    <nav className={styles.menu}>
      <a href="index.html" className={styles.menuLogo}>
        <img
          src={logo}
          alt="Logotipo HBOMax com o nome da marca"
          className={styles.Image}/>
      </a>
      <div>
        <a href="Signin.jsx" className={styles.menuItem}>Entrar</a>
        <a href="#subscription" className={styles.menuItem}>
          Assine Agora
        </a>
      </div>
    
    </nav>

    
  )
}
