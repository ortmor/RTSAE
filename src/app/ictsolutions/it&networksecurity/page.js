import Layout from "@/components/Layout";
import Landing from "@/components/Ict/IT & Network Security/Landing";
import Landingheading from "@/components/Ict/IT & Network Security/Landingheading";
import Main from "@/components/Ict/IT & Network Security/Main";
import Footerheading from "@/components/Ict/IT & Network Security/Footerheading";
import Footerslider from "@/components/Ict/IT & Network Security/Footerbottom";

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
