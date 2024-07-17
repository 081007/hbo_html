import styles from './footer.module.css';
import fb from '/hbo.react/hbo-react/src/assets/images/fb_0.png';
import tw from '/hbo.react/hbo-react/src/assets/images/twitter_0.png';
import ig from '/hbo.react/hbo-react/src/assets/images/instagram_0.png';
import yt from '/hbo.react/hbo-react/src/assets/images/youtube_0.png';

export default function Footer() {
  return (
    <>
    <footer className={styles.Container}>
      <div>
        <a className={styles.footerLink} href="https://www.hbomax.com/br/pt/sitemap">
          Agora na HBO Max
        </a>
        <a className={styles.footerLink} href="https://www.hbomax.com/br/pt/coming-soon">
          Em breve
        </a>
        <a className={styles.footerLink} href="https://www.hbomax.com/br/pt/feature">
          Filme em destaque
        </a>
        <a className={styles.footerLink} href="https://www.hbomax.com/br/pt/series"
          >Séries</a>
        <a className={styles.footerLink} href="https://help.hbomax.com/br">Ajuda</a>
      </div>
      <p className={styles.footerLegal}>
        © 2024 WarnerMedia Direct Latin America, LLC. Todos os direitos
        reservados. HBO Max é usado sob licença.
      </p>
      <div className={styles.footerSocial}>
        <a href="https://www.facebook.com/HBOMaxBr/" className={styles.footerSocial}>
          <img src={fb} alt="Facebook" />
        </a>
        <a href="https://twitter.com/HBOMaxBR" className={styles.footerSocial}>
          <img src={tw} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/hbomaxbr/" className={styles.footerSocial}>
          <img src={ig} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/c/hbomaxbr" className={styles.footerSocial}>
          <img src={yt} alt="Youtube" />
        </a>
      </div>
    </footer>
    </>
  )
}
