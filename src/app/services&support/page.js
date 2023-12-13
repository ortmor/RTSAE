import Layout from "@/components/Layout";
import Landing from "@/components/Services/Landing";
import Main from "@/components/Services/Main";
import Managedservice from "@/components/Services/Managedservices";
import Circle from "@/components/Services/Circle";
import Approch from "@/components/Services/Approch";
import Bottombox from "@/components/Services/bottombox";
import MiddleCard from "@/components/Services/Middlecard";

export default function Services() {
  return (
    <Layout>
      <Landing />
      <Main />
      <Managedservice />
      <MiddleCard />
      <Circle />
      <Approch />
      <Bottombox />
    </Layout>
  );
}
