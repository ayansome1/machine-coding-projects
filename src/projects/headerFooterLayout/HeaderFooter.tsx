import styles from './HeaderFooter.module.scss';

const HeaderFooter = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>header</header>
      <div className={styles.content}>
        <nav className={styles.nav}>nav</nav>
        <main className={styles.main}>
          main main main main main main main mainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmain
        </main>
        <aside className={styles.aside}>aside</aside>
      </div>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default HeaderFooter;
