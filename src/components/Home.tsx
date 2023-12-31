import React from 'react';
import { useStateStore } from 'src/store/state-store';
import styles from '../styles/login.module.css';

function Home({ pageData }: HomeProps) {
  
  const [count] = useStateStore('CART', 0);
  const title = pageData?.title || '...';

  return (
    <>
      <h1 className={styles.headingText}>React Login Mfe</h1>
      <div>Title: {title}</div>
      <div>Cart: {count}</div>
    </>
  );
}

export default Home;

interface HomeProps {
  pageData?: any;
}
