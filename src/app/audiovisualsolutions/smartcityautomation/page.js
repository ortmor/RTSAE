import Layout from "@/components/Layout";
import Landing from "@/components/AudioVisualSolutions/Smart City Automation/Landing";
import Landingheading from "@/components/AudioVisualSolutions/Smart City Automation/Landingheading";
import Main from "@/components/AudioVisualSolutions/Smart City Automation/Main";
import Footerheading from "@/components/AudioVisualSolutions/Smart City Automation/Footerheading";
import Footerslider from "@/components/AudioVisualSolutions/Smart City Automation/Footerbottom";

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
