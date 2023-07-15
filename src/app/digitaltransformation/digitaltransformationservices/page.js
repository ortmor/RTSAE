import Layout from "@/components/Layout";
import Landing from "@/components/DigitalTransformation/Digital Transformation Services/Landing";
import Landingheading from "@/components/DigitalTransformation/Digital Transformation Services/Landingheading";
import Main from "@/components/DigitalTransformation/Digital Transformation Services/Main";
import Footerheading from "@/components/DigitalTransformation/Digital Transformation Services/Footerheading";
import Footerslider from "@/components/DigitalTransformation/Digital Transformation Services/Footerbottom";

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
