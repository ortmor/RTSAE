import Layout from "@/components/Layout";
import Landing from "@/components/apc/Landing";
import Main from "@/components/apc/Main";
import Footerslider from "@/components/apc/Footerslider";

export default function Page() {
  return (
    <Layout>
      <Landing />
      <Main />
      <Footerslider />
    </Layout>
  );
}
