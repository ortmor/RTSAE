import Layout from "@/components/Layout";
import Landing from "@/components/DigitalTransformation/Enterprise Mobile Application & Website Hosting/Landing";
import Landingheading from "@/components/DigitalTransformation/Enterprise Mobile Application & Website Hosting/Landingheading";
import Main from "@/components/DigitalTransformation/Enterprise Mobile Application & Website Hosting/Main";
import Footerheading from "@/components/DigitalTransformation/Enterprise Mobile Application & Website Hosting/Footerheading";
import Footerslider from "@/components/DigitalTransformation/Enterprise Mobile Application & Website Hosting/Footerbottom";

export default function Page() {
  return (
    <Layout>
      <Landing />
      <Landingheading />
      <Main />
      <Footerheading />
      <Footerslider />
    </Layout>
  );
}
