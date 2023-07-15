import Layout from "@/components/Layout";
import Landing from "@/components/AudioVisualSolutions/Large Format Indoor & Outdoor Signage/Landing";
import Landingheading from "@/components/AudioVisualSolutions/Large Format Indoor & Outdoor Signage/Landingheading";
import Main from "@/components/AudioVisualSolutions/Large Format Indoor & Outdoor Signage/Main";
import Footerheading from "@/components/AudioVisualSolutions/Large Format Indoor & Outdoor Signage/Footerheading";
import Footerslider from "@/components/AudioVisualSolutions/Large Format Indoor & Outdoor Signage/Footerbottom";

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
