import React from 'react'
import styles from './navigation.module.css'
export const Navigation = () => {
  return (
    <div className ={styles.naviWrapper}>
      <ul className={"flex gap-3 "}>
        <li>HOME</li>
        <li>Favorite</li>
        <li>Search</li>
        <li>Additem</li>
        <li>Mypage</li>
      </ul>
    </div>
  )
}