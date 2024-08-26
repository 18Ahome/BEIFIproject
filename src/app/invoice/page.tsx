import Image from "next/image";
import styles from "@/app/profiledata.module.css";
import background from '@/assets/img/background.png';
import background2 from '@/assets/img/background2.png';
import profile from '@/assets/img/perfilimage.jpg';
import pencil from '@/assets/img/Pencil.png';
import Link from "next/link";

export default function Invoice() {
  return (
    <div className={styles.container}>
      
      <div className={styles.leftPanel}>
        
        <Image src={background} className={styles.backgroundImage} alt="Background"></Image>
        <Image src={background2} className={styles.backgroundImage2} alt="Background2"></Image>

        <div className={styles.group}>
          <div className={styles.profilepic}>
            <Image src={profile} className={styles.profileimage} alt="Profile Photo"></Image>
            <div className={styles.editIcon}>
              <Image src={pencil} className={styles.editimg} alt="Edit Icon" />
            </div>
          </div>
          
          <Link href="/Profile">
            <button className={styles.buttonprofile}>My Profile</button>
          </Link>
          <Link href="/invoice">
            <button className={styles.buttoninvoice}>Invoice Data</button>
          </Link>
          <Link href="/main">
            <button className={styles.buttonback}>Back</button>
          </Link>
        </div>
      
      </div>


      <div className={styles.profileBox}>
        <h1 className={styles.title}>Invoice Data</h1>
        
        <form>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <label>Legal Name</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>Tax Regime</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>RFC</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label>Adress</label>
            <div className={styles.inputWrapper}>
              <input className={styles.input} />
            </div>
          </div>
          
        <div className={styles.inputContainer}>
          <label>Proof of Tax Status</label>
          <div className={styles.fileUpload}>
            <label className={styles.uploadButton} htmlFor="file">
              Upload file
            </label>
            <input type="file" id="file" className={styles.fileInput} />
            <p className={styles.dragDropText}>or drag and drop here</p>
          </div>
        </div>
        <p className={styles.fileNote}>PDF format not larger than 30MB</p>
      </div>    
          
        <Link href="">
        <div className={styles.inputRow}>
          <button className={styles.button1}>Edit</button>
          <button type="submit" className={styles.button2}>Save</button>
        </div>
        </Link>

    </form>
     
        
       
      </div>
    </div>
  );
}