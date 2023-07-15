import Layout from "@/components/Layout";
import Landing from "@/components/ElvSolutions/Video Surveillance & Management/Landing";
import Landingheading from "@/components/ElvSolutions/Video Surveillance & Management/Landingheading";
import Main from "@/components/ElvSolutions/Video Surveillance & Management/Main";
import Footerheading from "@/components/ElvSolutions/Video Surveillance & Management/Footerheading";
import Footerslider from "@/components/ElvSolutions/Video Surveillance & Management/Footerbottom";

export default function Page() {
  return (
    <Layout>
      <Landing />
      <Landingheading />
      <Main />
      <Footerheading />
      <Footerslider />
    </Layout>
  );
}
