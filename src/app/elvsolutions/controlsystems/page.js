import Layout from "@/components/Layout";
import Landing from "@/components/ElvSolutions/Control systems/Landing";
import Landingheading from "@/components/ElvSolutions/Control systems/Landingheading";
import Main from "@/components/ElvSolutions/Control systems/Main";
import Footerheading from "@/components/ElvSolutions/Control systems/Footerheading";
import Footerslider from "@/components/ElvSolutions/Control systems/Footerbottom";

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
