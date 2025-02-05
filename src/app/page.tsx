// import Image from "next/image";
import Footer from './components/footer';
import Navbar from './components/Navbar'
import TopfourHappy from './components/TopfourHappy';
import Topone from './components/Topone';
import TopThreeBrowse from './components/TopthreeBrowse';
import TopTwoVersace from './components/Toptwoversace';


export default function Home() {
  return (
   <div>
    <Navbar />
    <Topone />
    <TopTwoVersace />
    <TopThreeBrowse />
    <TopfourHappy />
    <Footer />


   </div>
  );
}
