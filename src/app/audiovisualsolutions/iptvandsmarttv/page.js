import Layout from "@/components/Layout";
import Landing from "@/components/AudioVisualSolutions/IPTV and Smart TV/Landing";
import Landingheading from "@/components/AudioVisualSolutions/IPTV and Smart TV/Landingheading";
import Main from "@/components/AudioVisualSolutions/IPTV and Smart TV/Main";
import Footerheading from "@/components/AudioVisualSolutions/IPTV and Smart TV/Footerheading";
import Footerslider from "@/components/AudioVisualSolutions/IPTV and Smart TV/Footerbottom";

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
