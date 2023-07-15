import Layout from "@/components/Layout";
import Landing from "@/components/AudioVisualSolutions/Smart Automation Solutions/Landing";
import Landingheading from "@/components/AudioVisualSolutions/Smart Automation Solutions/Landingheading";
import Main from "@/components/AudioVisualSolutions/Smart Automation Solutions/Main";
import Footerheading from "@/components/AudioVisualSolutions/Smart Automation Solutions/Footerheading";
import Footerslider from "@/components/AudioVisualSolutions/Smart Automation Solutions/Footerbottom";

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
