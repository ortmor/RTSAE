import Layout from "@/components/Layout";
import Landing from "@/components/DigitalTransformation/Enterprise Resource Planning/Landing";
import Landingheading from "@/components/DigitalTransformation/Enterprise Resource Planning/Landingheading";
import Main from "@/components/DigitalTransformation/Enterprise Resource Planning/Main";
import Footerheading from "@/components/DigitalTransformation/Enterprise Resource Planning/Footerheading";
import Footerslider from "@/components/DigitalTransformation/Enterprise Resource Planning/Footerbottom";

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
