import Layout from "@/components/Layout";
import Landing from "@/components/DigitalTransformation/Special Purpose Applications/Landing";
import Landingheading from "@/components/DigitalTransformation/Special Purpose Applications/Landingheading";
import Main from "@/components/DigitalTransformation/Special Purpose Applications/Main";
import Footerheading from "@/components/DigitalTransformation/Special Purpose Applications/Footerheading";
import Footerslider from "@/components/DigitalTransformation/Special Purpose Applications/Footerbottom";

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
