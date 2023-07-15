import Layout from "@/components/Layout";
import Landing from "@/components/Ict/Datacenterinfrastructure/Landing";
import Landingheading from "@/components/Ict/Datacenterinfrastructure/Landingheading";
import Main from "@/components/Ict/Datacenterinfrastructure/Main";
import Footerheading from "@/components/Ict/Datacenterinfrastructure/Footerheading";
import Footerslider from "@/components/Ict/Datacenterinfrastructure/Footerbottom";

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
