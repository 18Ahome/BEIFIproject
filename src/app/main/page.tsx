import Image from "next/image";
import styles from "@/app/main.module.css";

import background2 from '@/assets/img/gradientback.png';
import icasst from '@/assets/img/ICASST.png';
import cda from '@/assets/img/CDA.png'
import profile from '@/assets/img/perfilimage.jpg'
import Link from "next/link";

export default function main() {
  return (
    <div className={styles.container}>
        <Image src={background2} className={styles.backgroundImage2} alt="Background2"></Image>
        <div className={styles.advice}>
            <h1 className={styles.welcome}>Welcome</h1>
            <p className={styles.advicetext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend sed sem non ullamcorper. Donec fermentum gravida dui sit amet fringilla. Suspendisse consequat rutrum semper. Phasellus libero dolor, sagittis efficitur eleifend id, rhoncus ac ex.</p>
        </div>
      <div className={styles.leftPanel}>
        <Image src={""} className={styles.icasstlogo} alt="IcasstLogo"></Image>
        <Image src={""} className={styles.cdalogo} alt="cdaLogo"></Image>
        <Image src={""} className={styles.profile} alt="Profile Photo"></Image>
        <Link href="/main">
        <h1 className={styles.options}>Home</h1>
        </Link>
        <Link href="/Profile">
         <h1 className={styles.options2}>Profile</h1>
        </Link>
        <Link href="/Submission">
         <h1 className={styles.options}>New Submission</h1>
        </Link>
        <Link href="/Help">
            <h1 className={styles.options2}>Help</h1>
        </Link>
        <Link href="/Login">
         <h1 className={styles.options3}>Log Out</h1>
        </Link>
        

      </div>
      <div className={styles.listboxtitle}>
        <h1 className={styles.title}>My Submissions</h1>
      </div>
      <div className={styles.listbox}>

      </div>
    </div>
  );
}

