import Layout from "@/components/Layout";
import Landing from "@/components/About/Aboutlanding";
import Whoweare from "@/components/About/Whoweare";
import Valueabout from "@/components/About/Value";
// import Aboutclientslider from "@/components/About/Aboutclientslider";
import Industries from "@/components/About/Industries";
import Ourclient from "@/components/About/Ourclients";
import Partners from "@/components/About/Partners";
import Certifications from "@/components/About/Certifications";
// import Jointeam from "@/components/About/Jointeam";

export default function About() {
  return (
    <Layout>
      <Landing />
      <Whoweare />
      <Valueabout />
     {/* <Aboutclientslider /> */}
      <Industries /> 
      <Ourclient /> 
      <Partners />
      <Certifications />
      {/* <Jointeam /> */}
    </Layout>
  );
}
