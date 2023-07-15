import Layout from "@/components/Layout";
import Landing from "@/components/DataCenterSolutions/Data Centre Maintenance Services/Landing";
import Landingheading from "@/components/DataCenterSolutions/Data Centre Maintenance Services/Landingheading";
import Main from "@/components/DataCenterSolutions/Data Centre Maintenance Services/Main";
import Footerheading from "@/components/DataCenterSolutions/Data Centre Maintenance Services/Footerheading";
import Footerslider from "@/components/DataCenterSolutions/Data Centre Maintenance Services/Footerbottom";

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
