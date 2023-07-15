import Layout from "@/components/Layout";
import Landing from "@/components/Insights/Landing";
import Topnews from "@/components/Insights/Topnews";
import Latestposts from "@/components/Insights/Latestposts";
import Values from "@/components/Insights/Values";

export default function Insights() {
  return (
    <Layout>
      <Landing />
      <Topnews />
      <Latestposts />
      <Values />
    </Layout>
  );
}
