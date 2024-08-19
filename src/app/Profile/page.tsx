import Image from "next/image";
import styles from "@/app/profiledata.module.css";
import background from '@/assets/img/background.png';
import background2 from '@/assets/img/background2.png';

import Link from "next/link";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Image src={background} className={styles.backgroundImage} alt="Background"></Image>
        <Image src={background2} className={styles.backgroundImage2} alt="Background2"></Image>
        
      </div>
      <div className={styles.profileBox}>
        <h1 className={styles.title}>My Profile</h1>
        
        <form>
          <div className={styles.inputContainer}>
            <label>First Name</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>Last Name</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>Organization</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>ORCID</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
          </div>
          
        <Link href="/main">
        <div className={styles.inputRow}>
          <button type="submit" className={styles.button1}>Edit</button>
          <button type="submit" className={styles.button2}>Save</button>
        </div>
        </Link>
    </form>
     
        
       
      </div>
    </div>
  );
}