import type { NextPage } from 'next'
import styles from '../styles/home.module.css'

const Input: NextPage = () => {
  return (
    <div className={styles.container}>
      <input type="text" value="" />
    </div>
  )
}

export default Input