import Image from "next/image";
import styles from "@/app/signup.module.css";

import background from '@/assets/img/orangebackground.png';
import background2 from '@/assets/img/background2.png';
import loginblocks from '@/assets/img/signinblocks.png'
import Link from "next/link";

export default function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Image src={background} className={styles.backgroundImage} alt="Background"></Image>
        <Image src={background2} className={styles.backgroundImage2} alt="Background2"></Image>
        <Image src={loginblocks} className={styles.loginblocks} alt="LoginBlocks"></Image>
      </div>
      <div className={styles.signupBox}>
        <h1 className={styles.title}>Sign Up</h1>
        <form className={styles.form}>
          <div className={styles.inputRow}>
            <div className={styles.inputContainer}>
              <label>First Name</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
              <label>Organization</label>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputContainer}>
              <label>Last Name</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
              <label>Email</label>
              <input type="email" className={styles.input} />
            </div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputContainer}>
              <label>ORCID</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
              <label>Password</label>
              <input type="password" className={styles.input} />
            </div>
          </div>
          <button type="submit" className={styles.button}>Sign Up</button>
        </form>
        <div className={styles.signInFooter}>
          <span>Already have an account?</span>
          <Link href="/Login" className={styles.loginLink}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}