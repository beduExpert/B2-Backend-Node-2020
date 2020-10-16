import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseLayout = ({ children }) => (
  <>
    <Header />
    <main className="py-10">
      <div className="container mx-auto max-w-screen-lg">
        {children}
      </div>
    </main>
    <Footer />
  </>
);

export default BaseLayout;