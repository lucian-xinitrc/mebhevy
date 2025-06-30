import Navbar from '../components/navbar';
import Header from '../components/header';
//import Main from '../components/navbar';
//import Footer from '../components/navbar';
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <section className="app">
        <Navbar />
        <Header />
      </section>
    </>
  );
}
