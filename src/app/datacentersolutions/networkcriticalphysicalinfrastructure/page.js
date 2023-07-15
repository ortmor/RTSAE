import Layout from "@/components/Layout";
import Landing from "@/components/DataCenterSolutions/Network Critical Physical Infrastructure/Landing";
import Landingheading from "@/components/DataCenterSolutions/Network Critical Physical Infrastructure/Landingheading";
import Main from "@/components/DataCenterSolutions/Network Critical Physical Infrastructure/Main";
import Footerheading from "@/components/DataCenterSolutions/Network Critical Physical Infrastructure/Footerheading";
import Footerslider from "@/components/DataCenterSolutions/Network Critical Physical Infrastructure/Footerbottom";

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
