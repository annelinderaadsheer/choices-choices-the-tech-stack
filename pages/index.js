import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import ArtikelInfoframe from '../components/artikel-infoframe';
// import ArtikelKlein from '../components/Artikelklein';

const PostList = ({ posts }) => {
  const dateFormat = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
}

export default function Home() {
  return (
    <div>
      <Header />
      <main>
       {/* <ArtikelKlein/> */}
       {/* <ArtikelInfoframe /> */}
      </main>
      <Footer />
    </div>
  );
}