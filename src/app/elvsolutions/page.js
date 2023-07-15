import Layout from "@/components/Layout";
import Landing from "@/components/ElvSolutions/Landing";
import Main from "@/components/ElvSolutions/Main";
import Footerslider from "@/components/ElvSolutions/Footerslider";

export default function Page() {
  return (
    <Layout>
      <Landing />
      <Main />
      <Footerslider />
    </Layout>
  );
}
