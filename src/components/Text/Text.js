import React from 'react'
import styles from './Text.module.css'

export const Text = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Equilibrium #3429</h1>
            <p className={styles.desc}>Our Equilibrium collection promotes balance and calm.</p>
            <div className={styles.flex}>
                <div className={styles.eth}>
                    <img src='assets/icon-ethereum.svg' />
                    <h1 className={styles.ethTxt}>0.041 ETH</h1>
                </div>
                <div className={styles.eth}>
                    <img src='assets/icon-clock.svg' />
                    <h1 className={styles.day}>3 days left</h1>
                </div>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}
