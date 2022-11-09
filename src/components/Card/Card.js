import React from 'react'
import { Creator } from '../Creator/Creator'
import { Equ } from '../Eqeuilibrium/Equ'
import { Text } from '../Text/Text'
import styles from './Card.module.css'

export const Card = () => {
    return (
        <div className={styles.container}>
            <Equ />
            <Text />
            <Creator />
        </div>
    )
}
