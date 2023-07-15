import Layout from "@/components/Layout";
import Landing from "@/components/Home/Landing";
import Homemain from "@/components/Home/Homemain";
import Middlehomeselection from "@/components/Home/Middlehomeselection";
import Getthesupport from "@/components/Home/Getthesupport";
import Homeclientslider from "@/components/Home/Homeclientslider";
import Testimonialshome from "@/components/Home/Testimonialshome";
import Gethomedata from "@/components/Home/Gethomedata";
import Bloglandingpage from "@/components/Home/Bloglandingpage";

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Homemain />
      <Middlehomeselection />
      <Getthesupport />
      <Homeclientslider />
      <Testimonialshome />
      <Gethomedata />
      <Bloglandingpage />
    </Layout>
  );
}
