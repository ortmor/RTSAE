import Layout from "@/components/Layout";
import Landing from "@/components/DigitalTransformation/Management Solutions/Landing";
import Landingheading from "@/components/DigitalTransformation/Management Solutions/Landingheading";
import Main from "@/components/DigitalTransformation/Management Solutions/Main";
import Footerheading from "@/components/DigitalTransformation/Management Solutions/Footerheading";
import Footerslider from "@/components/DigitalTransformation/Management Solutions/Footerbottom";

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
