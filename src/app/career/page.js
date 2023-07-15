import Layout from "@/components/Layout";
import Landing from "@/components/Careers/Landing";
import Middlesection from "@/components/Careers/Middlesection";
import Job from "@/components/Careers/Job";
import Main from "@/components/Careers/Main";
import Footercareer from "@/components/Careers/Footercareer";

export default function Careers() {
  return (
    <Layout>
      <Landing />
      <Main />
      <Middlesection />
      <Job />

      <Footercareer />
    </Layout>
  );
}
