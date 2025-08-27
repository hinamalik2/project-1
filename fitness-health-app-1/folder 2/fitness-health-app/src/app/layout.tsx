import React from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fitness & Health App',
  description: 'Track your fitness and health goals effectively.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;