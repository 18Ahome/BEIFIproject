import Image from "next/image";
import styles from "@/app/newsub.module.css";
import Link from "next/link";
import background from '@/assets/img/orangebackground.png';
import background2 from '@/assets/img/gradientback.png';
import icasst from '@/assets/img/ICASST LOGO.png';
import cda from '@/assets/img/CDA 2.png';
import profile from '@/assets/img/perfilimage.jpg';
import home from '@/assets/img/Home.png';
import profileicon from '@/assets/img/Profile.png';
import newsub from '@/assets/img/newsub.png';
import help from '@/assets/img/Help.png';
import Logout from '@/assets/img/logout.png';
import edit from '@/assets/img/editar.png';
import close from '@/assets/img/eliminar.png';

export default function NewSubmission() {
  return (
    <div className={styles.container}>
      <Image src={background2} className={styles.backgroundImage2} alt="Background2" />
      <div className={styles.leftPanel}>
        <Image src={icasst} className={styles.icasstlogo} alt="IcasstLogo" />
        <Image src={cda} className={styles.cdalogo} alt="cdaLogo" />
        <div className={styles.profilepic}>
          <Image src={profile} className={styles.profileimage} alt="Profile Photo" />
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
        <Image src={background} alt="background" className={styles.imgbox} />

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

          <tbody className={styles.tbody}>
            <tr className={styles.categoriesb}>
              <td className={styles.radius1}>""</td>
              <td>""</td>
              <td>""</td>
              <td>""</td>
              <td>""</td>
              <td className={styles.radius2}>
                <div className={styles.buttoncontent}>
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
              <td className={styles.radius1}>""</td>
              <td>""</td>
              <td>""</td>
              <td>""</td>
              <td>""</td>
              <td className={styles.radius2}>
                <div className={styles.buttoncontent}>
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
        <div className={styles.back}></div>

        {/* Sección 2 */}

        <div className={styles.listboxsubtitle2}>
          <h2 className={styles.subtitle2}>Add paper information</h2>
        </div>
        <p className={styles.description2}>
          Please provide the details of the research publication, including the complete title, the identifier or key assigned by Morressier, the category under which the research falls, relevant keywords separated by commas, the preferred presentation mode, the nominated presenter selected from the list of registered co-authors, and a succinct summary of the publication's content (abstract). Ensure that all entries are precise and adhere to the publication standards.
        </p>

        <div className={styles.formContainer}>
          <form>
            <div className={styles.formRow2}>
              <input className={styles.input2} placeholder="Title" />
              <input className={styles.input2} placeholder="Identifier or Key" />
            </div>

            <div className={styles.formRow2}>
              <select className={styles.select2} id="category" name="category" required>
                <option className={styles.option} value="" disabled selected>Select a category</option>
                <option className={styles.option} value="science">Science</option>
                <option className={styles.option} value="technology">Technology</option>
                <option className={styles.option} value="engineering">Engineering</option>
                <option className={styles.option} value="mathematics">Mathematics</option>
              </select>

              <select className={styles.select2} id="presentation" name="presentation" required>
                <option className={styles.option} value="Presentation modality" disabled selected> Presentation modality </option>
                <option className={styles.option} value="presential"> Presential </option>
                <option className={styles.option} value="poster"> Poster </option>
              </select>
            </div>

            <div className={styles.formRow2}>
              <input className={styles.input2} placeholder="Key Words" />
              <select className={styles.select2} id="speaker" name="speaker" required>
                <option className={styles.option} value="Proposed Speaker" disabled selected> Proposed Speaker </option>
                <option className={styles.option} value="presential"> Presential </option>
                <option className={styles.option} value="poster"> Poster </option>
              </select>
            </div>

            <div className={styles.formRow2}>
              <textarea className={styles.inputbig} rows={5} placeholder="Abstract"/>
            </div>

            <div className={styles.inputRow}>
              <Link href="/main">
                <button className={styles.button2}>Back</button>
              </Link>
              <Link href="/main">
                <button type="submit" className={styles.button1}>Submit</button>
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

