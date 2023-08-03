import Link from "next/link";
import Styles from "../../styles/home.module.scss";

const Middlehomeselection = () => {
  return (
    <div className={Styles.MiddlehomeselectionApproachhome}>
      <div className={Styles.MiddlehomeselectionApproachhead}>
        <h1>Technology to your business</h1>
      </div>

      {/* grid */}
      <div className={Styles.MiddlehomeselectionApproachgridcontainer}>
        <div className={Styles.MiddlehomeselectionApproachgridcard}>
          <div
            id={Styles.noborderbox1}
            className={Styles.MiddlehomeselectionApproachgridcardboxmain}
          >
            <div className={Styles.Middlehomeselectioniconbox}>
              <img src="/home/ict.png" />
            </div>
            <div className={Styles.Middlehomeselectionicontext}>
              <h4>ICT Solutions</h4>
            </div>

            <div className={Styles.Middlehomeselectioniconlink}>
              <Link href="/ictsolutions">Explore</Link>
            </div>
          </div>

          <div className={Styles.MiddlehomeselectionApproachgridcardboxmain}>
            <div className={Styles.Middlehomeselectioniconbox}>
              <img src="/home/software.png" />
            </div>
            <div className={Styles.Middlehomeselectionicontext}>
              <h4>
                Digital <br /> Transformation
              </h4>
            </div>

            <div className={Styles.Middlehomeselectioniconlink}>
              <Link href="/digitaltransformation">Explore</Link>
            </div>
          </div>

          <div className={Styles.MiddlehomeselectionApproachgridcardboxmain}>
            <div className={Styles.Middlehomeselectioniconbox}>
              <img src="/home/elv.png" />
            </div>
            <div className={Styles.Middlehomeselectionicontext}>
              <h4>
                ELV <br /> Solutions
              </h4>
            </div>

            <div className={Styles.Middlehomeselectioniconlink}>
              <Link href="/elvsolutions">Explore</Link>
            </div>
          </div>

          <div className={Styles.MiddlehomeselectionApproachgridcardboxmain}>
            <div className={Styles.Middlehomeselectioniconbox}>
              <img src="/home/visual.png" />
            </div>
            <div className={Styles.Middlehomeselectionicontext}>
              <h4>
                Audion Visual <br /> Solutions
              </h4>
            </div>

            <div className={Styles.Middlehomeselectioniconlink}>
              <Link href="/audiovisualsolutions">Explore</Link>
            </div>
          </div>

          <div className={Styles.MiddlehomeselectionApproachgridcardboxmain}>
            <div className={Styles.Middlehomeselectioniconbox}>
              <img src="/home/data.png" />
            </div>
            <div className={Styles.Middlehomeselectionicontext}>
              <h4>
                Data Centre <br /> Solutions
              </h4>
            </div>

            <div className={Styles.Middlehomeselectioniconlink}>
              <Link href="/datacentersolutions">Explore</Link>
            </div>
          </div>

          <div
            id={Styles.noborderbox2}
            className={Styles.MiddlehomeselectionApproachgridcardboxmain}
          >
            <div className={Styles.Middlehomeselectioniconbox}>
              <img src="/home/epc.png" />
            </div>
            <div className={Styles.Middlehomeselectionicontext}>
              <h4>
                APC Turnkey <br /> Projects
              </h4>
            </div>

            <div className={Styles.Middlehomeselectioniconlink}>
              <Link href="/apcturnkeyprojects">Explore</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middlehomeselection;
