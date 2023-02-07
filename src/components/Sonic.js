import styles from './Sonic.module.scss'

const Sonic = () => {
    return(
        <div className={styles.root}>
            <div className={styles.arms}>
                <div className={styles.left}>
                    <div className={styles.arm}>
                        <div className={styles.inner}></div>
                    </div>
                    <div className={styles.hand}>
                        <div className={styles.leftShadows}></div>
                        <div className={styles.glove}>
                            <div className={styles.inner}></div>
                        </div>
                        <div className={styles.rightShadows}>
                            <div className={styles.inner}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.arm}></div>
                    <div className={styles.hand}></div>
                </div>
            </div>
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
                    <div className={styles.leg}></div>
                    <div className={styles.socks}>
                        <div className={styles.inner}></div>
                    </div>
                    <div className={styles.laces}>
                        <div className={styles.upperRed}></div>
                        <div className={styles.inner}></div>
                        <div className={styles.inner2}></div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.inner}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sonic