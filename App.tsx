
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Audience } from './components/Audience';
import { Reasons } from './components/Reasons';
import { Coordination } from './components/Coordination';
import { Location } from './components/Location';
import { Speakers } from './components/Speakers';
import { Schedule } from './components/Schedule';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { BackgroundElements } from './components/BackgroundElements';
import { TapeDivider } from './components/TapeDivider';
import { MouseGlow } from './components/MouseGlow';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue selection:text-white overflow-x-hidden relative text-gray-100 bg-tactical-midnight">
      
      {/* Brilho que segue o Mouse */}
      <MouseGlow />

      {/* 
        AMBIENT LIGHTING SYSTEM 
        Camada de fundo (Luzes e Atmosfera)
      */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Luz Superior Central (O "Holofote" do Hero) - Azul Claro (#04194E) */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] rounded-[100%]"
          style={{
            background: 'radial-gradient(circle at center, rgba(4, 25, 78, 0.4) 0%, rgba(0, 1, 14, 0) 70%)',
            filter: 'blur(60px)',
          }}
        ></motion.div>

        {/* Luz Lateral Direita (Meio da página) - Azul Escuro (#021035) */}
        <motion.div 
          animate={{ opacity: [0.4, 0.7, 0.4], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] right-[-10%] w-[50vw] h-[80vh] rounded-[100%]"
          style={{
            background: 'radial-gradient(circle at center, rgba(2, 16, 53, 0.6) 0%, rgba(0, 1, 14, 0) 70%)',
            filter: 'blur(80px)',
          }}
        ></motion.div>

        {/* Luz Lateral Esquerda (Fundo) - Azul Claro (#04194E) - Mais intensa */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] left-[-10%] w-[60vw] h-[60vh] rounded-[100%]"
          style={{
            background: 'radial-gradient(circle at center, rgba(4, 25, 78, 0.25) 0%, rgba(0, 1, 14, 0) 60%)',
            filter: 'blur(70px)',
          }}
        ></motion.div>

        {/* Noise Texture Overlay para dar aspecto "Tático/Filme" */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        {/* 
          CAMADA TÁTICA (HUD / ELEMENTS)
          Renderizado APÓS as luzes para ficar nítido no topo.
        */}
        <BackgroundElements />
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main>
          <Hero />
          
          <TapeDivider 
            text="COMPRASEG 2026 COMPRAS DA SEGURANÇA PÚBLICA" 
            angle={2} 
            color="gold" 
            className="-mt-10 mb-10"
          />

          <About />
          <Gallery />
          
          <TapeDivider 
            text="LICITAÇÕES E CONTRATOS GESTÃO EFICIENTE PROTEÇÃO JURÍDICA" 
            angle={-1.5} 
            color="blue"
            direction="right"
          />

          <Audience />
          <Reasons />
          <Coordination />
          
          <TapeDivider 
            text="FLORIANÓPOLIS SC 12 A 14 DE MAIO CENTRO DE EVENTOS SQUARE SC" 
            angle={1} 
            color="gold"
          />

          <Speakers />
          <Location />
          <Schedule />
          <Pricing />
          <Contact />
        </main>

        <Footer />
      </div>
      
      <FloatingWhatsapp />
      <AudioPlayer />
    </div>
  );
}
