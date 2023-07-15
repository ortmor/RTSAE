import Layout from "@/components/Layout";
import Landing from "@/components/ElvSolutions/Physical Security Solutions/Landing";
import Landingheading from "@/components/ElvSolutions/Physical Security Solutions/Landingheading";
import Main from "@/components/ElvSolutions/Physical Security Solutions/Main";
import Footerheading from "@/components/ElvSolutions/Physical Security Solutions/Footerheading";
import Footerslider from "@/components/ElvSolutions/Physical Security Solutions/Footerbottom";

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
