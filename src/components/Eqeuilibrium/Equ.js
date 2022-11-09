import React from 'react'
import styles from './Equ.module.css'

export const Equ = () => {
    return (
        <div className={styles.imgDiv}>
            <img className={styles.img} src='assets/equ.jpg' />
            <div className={styles.hover}>
                <img src='assets/icon-view.svg' />
            </div>
        </div >
    )
}
