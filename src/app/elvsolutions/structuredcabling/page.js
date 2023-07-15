import Layout from "@/components/Layout";
import Landing from "@/components/ElvSolutions/Structured Cabling/Landing";
import Landingheading from "@/components/ElvSolutions/Structured Cabling/Landingheading";
import Main from "@/components/ElvSolutions/Structured Cabling/Main";
import Footerheading from "@/components/ElvSolutions/Structured Cabling/Footerheading";
import Footerslider from "@/components/ElvSolutions/Structured Cabling/Footerbottom";

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
