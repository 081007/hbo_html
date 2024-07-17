import styles from './signin.module.css';
export default function Signin() {
  return (
    <div>


      
       <main className={styles.content}>
      <form className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Entrar</h1>
        <label className={styles.loginLabel}> Você tem uma conta da HBO Max? </label>
        <input
          className={styles.loginField}
          type="email"
          name="email"
          autoComplete='Username'
          id="email"
          placeholder="Endereço de e-mail"
        />
        <input
          className={styles.loginField}
          type="password"
          name="password"
          autoComplete='Current password'
          id="password"
          placeholder="Senha"
          minLength="8"
          maxLength="10"
        />

        <div className={styles.loginActions}>
          <button type="submit" className={styles.button .buttonGradient}>Entrar</button>
          <a href="#" className={styles.loginLink}> Esqueceu a senha? </a>
        </div>
      </form>
    </main>

    </div>
  )
}
