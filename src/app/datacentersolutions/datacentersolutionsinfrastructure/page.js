import Layout from "@/components/Layout";
import Landing from "@/components/DataCenterSolutions/Data Center Solutions Infrastructure/Landing";
import Landingheading from "@/components/DataCenterSolutions/Data Center Solutions Infrastructure/Landingheading";
import Main from "@/components/DataCenterSolutions/Data Center Solutions Infrastructure/Main";
import Footerheading from "@/components/DataCenterSolutions/Data Center Solutions Infrastructure/Footerheading";
import Footerslider from "@/components/DataCenterSolutions/Data Center Solutions Infrastructure/Footerbottom";

export default function Datacenterinfrastructure() {
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
