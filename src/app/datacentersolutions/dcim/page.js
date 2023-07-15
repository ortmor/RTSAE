import Layout from "@/components/Layout";
import Landing from "@/components/DataCenterSolutions/Dcim/Landing";
import Landingheading from "@/components/DataCenterSolutions/Dcim/Landingheading";
import Main from "@/components/DataCenterSolutions/Dcim/Main";
import Footerheading from "@/components/DataCenterSolutions/Dcim/Footerheading";
import Footerslider from "@/components/DataCenterSolutions/Dcim/Footerbottom";

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
