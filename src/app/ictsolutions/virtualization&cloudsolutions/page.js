import Layout from "@/components/Layout";
import Landing from "@/components/Ict/Virtualization & Cloud Solutions/Landing";
import Landingheading from "@/components/Ict/Virtualization & Cloud Solutions/Landingheading";
import Main from "@/components/Ict/Virtualization & Cloud Solutions/Main";
import Footerheading from "@/components/Ict/Virtualization & Cloud Solutions/Footerheading";
import Footerslider from "@/components/Ict/Virtualization & Cloud Solutions/Footerbottom";

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
