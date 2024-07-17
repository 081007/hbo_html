import styles from './sections.module.css';
import hbod from '/hbo.react/hbo-react/src/assets/images/hbo-default_0.webp';
import md  from '/hbo.react/hbo-react/src/assets/images/MAX-Default.webp';
import dcd from '/hbo.react/hbo-react/src/assets/images/DC_Default.webp';
import cnd from '/hbo.react/hbo-react/src/assets/images/CN-Default.webp';
import wbd from '/hbo.react/hbo-react/src/assets/images/WB-Default.webp';
import ucl from '/hbo.react/hbo-react/src/assets/images/UCL-Default.webp';
export default function Sections() {
  return (
    <>
    <main>
      <section id="subscription" className={styles.subscription}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            Conheça nossos planos e economize na assinatura trimestral ou anual
            com o pagamento antecipado.
          </h2>
          <div className={styles.subscriptionPlans}>
            <div className={styles.subscriptionCard}>
              <div>
                <div className={styles.subscriptionPlan}>
                  <h3>Mobile</h3>
                  <p className={styles.subscriptionPrice}>
                    R$ 19,90 <span className={styles.textsmall}>/mês</span>
                  </p>
                </div>
                <ul className={styles.subscriptionGoals}>
                  <li className={styles.subscriptionDescription}>
                    Aproveite em smartphones e tablets, onde quiser.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Assista em 1 tela por vez.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Tenha conteúdo em resolução adaptada para cada dispositivo.
                  </li>
                  <li className={styles.subscriptionDescription}>
                    Baixe suas séries e filmes favoritos, assista onde e quando
                    quiser.
                  </li>
                </ul>
              </div>
              <button className={styles.button}>
                Escolher o Plano Mobile
              </button>
            </div>

            <div className={styles.subscriptionCard}>
              <div>
                <div className={styles.subscriptionPlan}>
                  <h3>Multitelas</h3>
                    <p className={styles.subscriptionPrice}>
                      R$ 27,90 <span className={styles.textsmall}>/mês</span>
                    </p>
                </div>
                <ul>
                    <li className={styles.subscriptionDescription}>
                    Aproveite em todos os seus dispositivos.
                  </li>
                    <li className={styles.subscriptionDescription}>
                    Chromecast e Airplay disponíveis.
                  </li>
                    <li className={styles.subscriptionDescription}>
                    Assista em até 3 telas ao mesmo tempo.
                  </li>
                    <li className={styles.subscriptionDescription}>
                    Tenha conteúdo em alta definição, com qualidade 4K.
                  </li>
                    <li className={styles.subscriptionDescription}>
                    Baixe suas séries e filmes favoritos, assista onde e quando
                    quiser.
                  </li>
                    <li className={styles.subscriptionDescription}>
                    Crie até 5 perfis diferentes.
                  </li>
                </ul>
              </div>
              <button className={styles.button}>
                Escolher o Plano Multitelas
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contents" className={styles.container}>
        <h2 className={styles.title}>Descubra novos universos</h2>
        <div className={styles.contentsContainer}>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src={hbod}
              alt="HBO"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src={md}
              alt="Max Originals"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src={dcd}
              alt="DC"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src={wbd}
              alt="Warner Bross"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src={cnd}
              alt="Cartoon Network"
            />
          </div>
          <div className={styles.contentsCard}>
            <img
              className={styles.contentsImage}
              src={ucl}
              alt="UEFA Champions League"
            />
          </div>
        </div>
      </section>
    </main>
    
    </>
  )
}
