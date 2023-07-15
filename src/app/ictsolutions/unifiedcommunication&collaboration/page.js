import Layout from "@/components/Layout";
import Landing from "@/components/Ict/Unified Communication & Collaboration/Landing";
import Landingheading from "@/components/Ict/Unified Communication & Collaboration/Landingheading";
import Main from "@/components/Ict/Unified Communication & Collaboration/Main";
import Footerheading from "@/components/Ict/Unified Communication & Collaboration/Footerheading";
import Footerslider from "@/components/Ict/Unified Communication & Collaboration/Footerbottom";

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
