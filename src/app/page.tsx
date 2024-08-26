import Image from "next/image";
import styles from "@/app/page.module.css";
import background from '@/assets/img/background.png';
import background2 from '@/assets/img/background2.png';
import loginblocks from '@/assets/img/loginblocks.png'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Image src={background} className={styles.backgroundImage} alt="Background"></Image>
        <Image src={background2} className={styles.backgroundImage2} alt="Background2"></Image>
        <Image src={loginblocks} className={styles.loginblocks} alt="LoginBlocks"></Image>
      </div>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Login</h1>
        <form>
          <div className={styles.inputContainer}>
            <label>Email</label>
            <div className={styles.inputWrapper}>
              <input type="email" className={styles.input} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>Password</label>
            <div className={styles.inputWrapper}>
              <input type="password" className={styles.input} />
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <a href="#">Forgot password?</a>
            <a href="#" className={styles.resetPassword}>Reset password</a>
          </div>
          <Link href="/main">
          <button type="submit" className={styles.button}>Enter</button>
          </Link>
        </form>
        <div className={styles.signUp}>
          <span>Don't have an account?</span>
          <Link href="/signup" className={styles.createAccount}>
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
