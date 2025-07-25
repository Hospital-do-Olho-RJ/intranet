
import Head from 'next/head';
import { useState } from 'react';

import { ramais, cards } from '../lib/data';
import Header from '../components/Header';
import Card from '../components/Card';
import RamalModal from '../components/RamalModal';

export default function Home() {
  const [ramalCardVisible, setRamalCardVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const abrirRamais = (e) => {
    e.preventDefault();
    setRamalCardVisible(true);
  };

  const fecharRamais = () => {
    setRamalCardVisible(false);
    setSearchQuery('');
  };

  return (
    <>
      <Head>
        <title>Intranet - Hospital do Olho</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <div className="container mt-5 mb-10" style={{ display: ramalCardVisible ? 'none' : 'block' }}>
        <div className="row g-4">
          {cards.map((item, index) => (
            <Card 
              key={index} 
              item={item} 
              onClick={item.title === 'Ramais Internos' ? abrirRamais : null} 
            />
          ))}
        </div>
      </div>

      <RamalModal 
        visible={ramalCardVisible}
        onClose={fecharRamais}
        ramais={ramais}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}
