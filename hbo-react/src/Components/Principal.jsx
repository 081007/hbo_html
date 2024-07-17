import Nav from './Nav';
import styles  from './principal.module.css';
import hbo from '/hbo.react/hbo-react/src/assets/images/hbo.png';
import dc from '/hbo.react/hbo-react/src/assets/images/dc.png';
import wb from '/hbo.react/hbo-react/src/assets/images/wb.png';
import cnn from '/hbo.react/hbo-react/src/assets/images/cartoon-network_neutral.png';
import mo from '/hbo.react/hbo-react/src/assets/images/max_originals.png';
export default function Principal() {
  return (
    <>
    <Nav />
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.Channels}>
          <img className={styles.Channel} src={hbo} alt="HBO" />
          <img className={styles.Channel} src={dc} alt="DC" />
          <img
            className={styles.Channel}
            src={wb}
            alt="Warner Bross"
          />
          <img
            className={styles.Channel}
            src={cnn}
            alt="Cartoon Network"
          />
          <img
            className={styles.Channel}
            src={mo}
            alt="Max Originals"
          />
        </div>
        <h1 className={styles.headerTitle}>
          <span className={styles.headerTitleLight}>Curta as melhores histórias</span>
          Para todo mundo
        </h1>
        <div className={styles.divider}></div>
        <div className={styles.offer}>
          <p>Assinaturas a partir de</p>
          <p className={styles.offerPrice}>
            R$14,15 <span className={styles.offerPriceSmall}>/mês*</span>
          </p>
        </div>
        <a href="#subscription" className={styles.button}>
          Assine agora
        </a>
        <p className={styles.textsmall}>
          *aplicável ao plano anual com o pagamento antecipado.
        </p>
      </div>
    </header>
    </>
  )
}
