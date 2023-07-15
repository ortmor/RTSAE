import Layout from "@/components/Layout";
import Landing from "@/components/Services/Landing";
import Main from "@/components/Services/Main";
import Managedservice from "@/components/Services/Managedservices";
import Circle from "@/components/Services/Circle";
import Approch from "@/components/Services/Approch";
import Bottombox from "@/components/Services/bottombox";

export default function Services() {
  return (
    <Layout>
      <Landing />
      <Main />
      <Managedservice />
      <Circle />
      <Approch />
      <Bottombox />
    </Layout>
  );
}
