import Layout from "@/components/Layout";
import Landing from "@/components/apc/DesigningBuildingandInfrastructure/Landing";
import Landingheading from "@/components/apc/DesigningBuildingandInfrastructure/Landingheading";
import Main from "@/components/apc/DesigningBuildingandInfrastructure/Main";
import Footerheading from "@/components/apc/DesigningBuildingandInfrastructure/Footerheading";
import Footerslider from "@/components/apc/DesigningBuildingandInfrastructure/Footerbottom";

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

