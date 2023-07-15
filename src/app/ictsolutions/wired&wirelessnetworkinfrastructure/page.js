import Layout from "@/components/Layout";
import Landing from "@/components/Ict/Wired & Wireless Network Infrastructure/Landing";
import Landingheading from "@/components/Ict/Wired & Wireless Network Infrastructure/Landingheading";
import Main from "@/components/Ict/Wired & Wireless Network Infrastructure/Main";
import Footerheading from "@/components/Ict/Wired & Wireless Network Infrastructure/Footerheading";
import Footerslider from "@/components/Ict/Wired & Wireless Network Infrastructure/Footerbottom";

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
