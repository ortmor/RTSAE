import Layout from "@/components/Layout";
import Landing from "@/components/DigitalTransformation/Landing";
import Main from "@/components/DigitalTransformation/Main";
import Footerslider from "@/components/DigitalTransformation/Footerslider";

export default function Page() {
  return (
    <Layout>
      <Landing />
      <Main />
      <Footerslider />
    </Layout>
  );
}
