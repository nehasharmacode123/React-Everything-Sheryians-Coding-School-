import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.logo}>Sheryians</h3>
      <button className={styles.btn}>Click me</button>
    </div>
  )
}

export default Header