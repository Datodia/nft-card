import React from 'react'
import styles from './Creator.module.css'

export const Creator = () => {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src='assets/image-avatar.png' />
            <h1 className={styles.text}>Creation of <span className={styles.span}>Jules Wyvern</span></h1>
        </div>
    )
}
