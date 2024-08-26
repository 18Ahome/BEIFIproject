import Image from "next/image";
import styles from "@/app/contact.module.css";
import background from '@/assets/img/orangebackground.png';
import background2 from '@/assets/img/background2.png';
import mail from '@/assets/img/mail.png';
import phone from '@/assets/img/phone.png';
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.container}>
      
      <div className={styles.leftPanel}>
        
        <Image src={background} className={styles.backgroundImage} alt="Background"></Image>
        <Image src={background2} className={styles.backgroundImage2} alt="Background2"></Image>

        <div className={styles.group}>
        <div className={styles.contactInfo}>
            <Image src={mail} className={styles.contactIcon} alt="Mail Icon" />
            <p className={styles.p}>contact@icasst.mx</p>
            <p className={styles.p2}>icasst@ipn.mx</p>
          </div>
          <div className={styles.contactInfo}>
            <Image src={phone} className={styles.contactIcon} alt="Phone Icon" />
            <p className={styles.p3}>+52 55 5729 6000</p>
          </div>
        </div>
      
      </div>


      <div className={styles.profileBox}>
        <h1 className={styles.title}>Contact Us</h1>
        
        <form>
          <div className={styles.formContainer}>
           <div className={styles.inputContainer}>
            <label>Enter your name</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
           </div>
           <div className={styles.inputContainer}>
            <label>Enter your email adress</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
           </div>
           <div className={styles.inputContainer}>
            <label>Enter your message here</label>
            <div className={styles.inputWrapper}>
              <textarea className={styles.inputbig} rows={5}/>
            </div>
           </div>
          </div>
          
          
        
        <div className={styles.inputRow}>
        <Link href="">
          <button type="submit" className={styles.button1}>Submit</button>
        </Link>
        <Link href="/main">
          <button className={styles.button2}>Back</button>
        </Link>
        </div>
        
    </form>
     
        
       
      </div>
    </div>
  );
}