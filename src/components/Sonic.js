import styles from './Sonic.module.scss'

const Sonic = () => {
    return(
        <div className={styles.root}>
            <div className={styles.boots}>
                <div className={styles.left}>
                    <div className={styles.leg}></div>
                    <div className={styles.extraItems}></div>
                    <div className={styles.socks}>
                        <div></div>
                    </div>
                    <div className={styles.laces}>
                        <div></div>
                    </div>
                    <div className={styles.bottom}>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.socks}></div>
                    <div className={styles.laces}></div>
                    <div className={styles.bottom}></div>
                </div>
            </div>
        </div>
    )
}

export default Sonic