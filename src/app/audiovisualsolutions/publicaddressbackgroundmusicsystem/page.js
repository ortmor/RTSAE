import Layout from "@/components/Layout";
import Landing from "@/components/AudioVisualSolutions/Public Address (PA) & Background Music System (BGM)/Landing";
import Landingheading from "@/components/AudioVisualSolutions/Public Address (PA) & Background Music System (BGM)/Landingheading";
import Main from "@/components/AudioVisualSolutions/Public Address (PA) & Background Music System (BGM)/Main";
import Footerheading from "@/components/AudioVisualSolutions/Public Address (PA) & Background Music System (BGM)/Footerheading";
import Footerslider from "@/components/AudioVisualSolutions/Public Address (PA) & Background Music System (BGM)/Footerbottom";

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
