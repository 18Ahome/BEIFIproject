import Image from "next/image";
import styles from "@/app/main.module.css";
import Link from "next/link";
import background2 from '@/assets/img/gradientback.png';
import icasst from '@/assets/img/ICASST LOGO.png';
import cda from '@/assets/img/CDA 2.png'
import profile from '@/assets/img/perfilimage.jpg'
import home from '@/assets/img/Home.png';
import profileicon from '@/assets/img/Profile.png'
import newsub from '@/assets/img/newsub.png'
import help from '@/assets/img/Help.png';
import Logout from '@/assets/img/logout.png'
import ver from '@/assets/img/ver.png'
import edit from '@/assets/img/editar.png';
import close from '@/assets/img/eliminar.png'
import neww from '@/assets/img/neww.png'

export default function main() {
  return (
    <div className={styles.container}>
        <Image src={background2} className={styles.backgroundImage2} alt="Background2"></Image>
        <div className={styles.advice}>
            <h1 className={styles.welcome}>Welcome</h1>
            <p className={styles.advicetext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend sed sem non ullamcorper. Donec fermentum gravida dui sit amet fringilla. Suspendisse consequat rutrum semper. Phasellus libero dolor, sagittis efficitur eleifend id, rhoncus ac ex.</p>
        </div>
      <div className={styles.leftPanel}>
        <Image src={icasst} className={styles.icasstlogo} alt="IcasstLogo"></Image>
        <Image src={cda} className={styles.cdalogo} alt="cdaLogo"></Image>
        <div className={styles.profilepic}>
          <Image src={profile} className={styles.profileimage} alt="Profile Photo"></Image>
        </div>

       <ul className={styles.navList}> 
        <li className={styles.navItem}>
          <Link href="/main">
            <Image src={home} alt="Home Icon" className={styles.navIcon} />
            <h1 className={styles.options}>Home</h1>
          </Link>
        </li>

        <li>
          <Link href="/Profile">
            <Image src={profileicon} alt="Profile Icon" className={styles.navIcon1} />
            <h1 className={styles.options2}>Profile</h1>
          </Link>
        </li>  
          
        <li>
          <Link href="/newsub">
            <Image src={newsub} alt="New Submission Icon" className={styles.navIcon2} />
            <h1 className={styles.options}>New Submission</h1>
          </Link>
        </li>
          
        <li>
          <Link href="help">
            <Image src={help} alt="Help Icon" className={styles.navIcon3} />
            <h1 className={styles.options2}>Help</h1>
          </Link>
        </li>
          
      </ul>

        <Link href="/Login">
        <Image src={Logout} alt="Logout Icon" className={styles.navIcon4} />
         <h1 className={styles.options3}>Log Out</h1>
        </Link>
        

      </div>
      <div className={styles.listboxtitle}>
        <h1 className={styles.title}>My Submissions</h1>
      </div>
      
        <div className={styles.listbox}>
      <table className={styles.submissionsTable}>
            <thead>
              <tr className={styles.categories}>
                <th className={styles.radius1}>Paper Identifier</th>
                <th>Category</th>
                <th>Status</th>
                <th>Submit Date</th>
                <th className={styles.optioncolumn}>Options</th>
              </tr>
            </thead>

            <tbody>
              
              <tr className={styles.categoriesb}>
                <td className={styles.radius1}>XXXXXXXXXX1</td>
                <td>Astrobiology</td>
                <td>Not Released</td>
                <td>Now</td>
                <td className={styles.radius2}>
                <div className={styles.buttoncontent}>
                  <Link href="">
                  <div className={styles.buttonv}>
                    <Image src={ver} alt="View Icon" className={styles.optionIconv} />
                  </div>
                  </Link>
                  
                  <Link href="">
                  <div className={styles.buttone}>
                    <Image src={edit} alt="Edit Icon" className={styles.optionIcone} />
                  </div>
                  </Link>
                  
                  <Link href="">
                  <div className={styles.buttond}>
                    <Image src={close} alt="Delete Icon" className={styles.optionIcond} />
                  </div>
                  </Link>
                  
                </div>
                </td>
              </tr>
              
              <tr className={styles.categoriesb}>
                <td className={styles.radius1}>XXXXXXXXXX2</td>
                <td>Geointelligence</td>
                <td>Not Released</td>
                <td >Today</td>
                <td className={styles.radius2}>
                <div className={styles.buttoncontent}>
                  <Link href="">
                  <div className={styles.buttonv}>
                    <Image src={ver} alt="View Icon" className={styles.optionIconv} />
                  </div>
                  </Link>
                  
                  <Link href="">
                  <div className={styles.buttone}>
                    <Image src={edit} alt="Edit Icon" className={styles.optionIcone} />
                  </div>
                  </Link>
                  
                  <Link href="">
                  <div className={styles.buttond}>
                    <Image src={close} alt="Delete Icon" className={styles.optionIcond} />
                  </div>
                  </Link>
                  
                </div>
                
                </td>
              </tr>
            
            </tbody>
          </table>

          <Link href="/newsub">
            <button className={styles.newSubmissionButton}>
            <Image src={neww} alt="New" className={styles.newicon} />
              <h1 className={styles.tb}>New Submission</h1>
            </button>
          </Link>

      </div>
    </div>
  );
}

