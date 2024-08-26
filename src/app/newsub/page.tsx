import Image from "next/image";
import styles from "@/app/newsub.module.css";
import Link from "next/link";
import background from '@/assets/img/orangebackground.png';
import background2 from '@/assets/img/gradientback.png';
import icasst from '@/assets/img/ICASST LOGO.png';
import cda from '@/assets/img/CDA 2.png'
import profile from '@/assets/img/perfilimage.jpg'
import home from '@/assets/img/Home.png';
import profileicon from '@/assets/img/Profile.png'
import newsub from '@/assets/img/newsub.png'
import help from '@/assets/img/Help.png';
import Logout from '@/assets/img/logout.png'
import edit from '@/assets/img/editar.png';
import close from '@/assets/img/eliminar.png'


export default function NewSubmission() {
  return (
    <div className={styles.container}>
        <Image src={background2} className={styles.backgroundImage2} alt="Background2"></Image>
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
        <h1 className={styles.title}>New Submission</h1>
      </div>
      
        <div className={styles.listbox}>
         <Image src={background} alt="background" className={styles.imgbox}/>
         <div className={styles.listboxsubtitle}>
          <h2 className={styles.subtitle}>Add any co-authors</h2>
         </div>
          <p className={styles.description}>
          Please proceed by entering the general information for each collaborator. This includes their first names, last names, email address, organization or institution of origin, and ORCID. Ensure that all information is accurate and complete to facilitate smooth collaboration and proper attribution in the publication.
          </p>

          <div className={styles.formRow}>
          <input className={styles.input} placeholder="First Names" />
          <input className={styles.input} placeholder="Last Names" />
          </div>

          <div className={styles.formRow}>
          <input className={styles.input} placeholder="Email" />
          <input className={styles.input} placeholder="Organization" />
          </div>
          
          <div className={styles.formRow}>
          <input className={styles.input} placeholder="ORCID" />
          <button className={styles.button}>Enter</button>
          </div>

          <table className={styles.submissionsTable}>
            <thead className={styles.tableHeader}>
              <tr className={styles.categories}>
                <th className={styles.radius1}>First Names</th>
                <th className={styles.column2}>Last Names</th>
                <th>Email</th>
                <th>Organization</th>
                <th>ORCID</th>
                <th className={styles.optioncolumn}>Options</th>
              </tr>
            </thead>

            <tbody className={styles.body}>
              
              <tr className={styles.categoriesb}>
                <td className={styles.radius1}>XXXXXXXXXX1</td>
                <td>Astrobiology</td>
                <td>Not Released</td>
                <td>Now</td>
                <td>Now</td>
                <td className={styles.radius2}>
                <div className={styles.buttoncontent}>
              
                  <Link href="">
                  <div className={styles.buttone}>
                    <Image src={""} alt="Edit Icon" className={styles.optionIcone} />
                  </div>
                  </Link>
                  
                  <Link href="">
                  <div className={styles.buttond}>
                    <Image src={""} alt="Delete Icon" className={styles.optionIcond} />
                  </div>
                  </Link>
                  
                </div>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
    </div>
  );
}