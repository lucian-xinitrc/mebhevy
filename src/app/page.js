import Navbar from '../components/navbar';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <section className="app">
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </section>
    </>
  );
}
