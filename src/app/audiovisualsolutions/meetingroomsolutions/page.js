import Layout from "@/components/Layout";
import Landing from "@/components/AudioVisualSolutions/Meeting Room Solutions/Landing";
import Landingheading from "@/components/AudioVisualSolutions/Meeting Room Solutions/Landingheading";
import Main from "@/components/AudioVisualSolutions/Meeting Room Solutions/Main";
import Footerheading from "@/components/AudioVisualSolutions/Meeting Room Solutions/Footerheading";
import Footerslider from "@/components/AudioVisualSolutions/Meeting Room Solutions/Footerbottom";

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
