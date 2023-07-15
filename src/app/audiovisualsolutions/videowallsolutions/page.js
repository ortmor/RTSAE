import Layout from "@/components/Layout";
import Landing from "@/components/AudioVisualSolutions/Video Wall Solutions/Landing";
import Landingheading from "@/components/AudioVisualSolutions/Video Wall Solutions/Landingheading";
import Main from "@/components/AudioVisualSolutions/Video Wall Solutions/Main";
import Footerheading from "@/components/AudioVisualSolutions/Video Wall Solutions/Footerheading";
import Footerslider from "@/components/AudioVisualSolutions/Video Wall Solutions/Footerbottom";

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
