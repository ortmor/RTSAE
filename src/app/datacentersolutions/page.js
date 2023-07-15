import Layout from "@/components/Layout";
import Landing from "@/components/DataCenterSolutions/Landing";
import Main from "@/components/DataCenterSolutions/Main";
import Footerslider from "@/components/DataCenterSolutions/Footerslider";

export default function Page() {
  return (
    <Layout>
      <Landing />
      <Main />
      <Footerslider />
    </Layout>
  );
}
