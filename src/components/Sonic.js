import styles from './Sonic.module.scss'

const Sonic = () => {
    return(
        <div className={styles.root}>
            <div className={styles.head}>
                <div className={styles.hair}>
                    <div className={styles.hears}>
                        <div className={styles.left}></div>
                        <div className={styles.right}></div>
                    </div>
                    <div className={styles.eyes}>
                        <div className={styles.left}></div>
                        <div className={styles.right}></div>
                    </div>
                    <div className={styles.thorn1}></div>
                    <div className={styles.thorn2}><div></div></div>
                    <div className={styles.thorn3}></div>
                </div>
                <div className={styles.mouth}>
                    <div className={styles.glow}></div>
                    <div className={styles.nose}></div>
                    <div className={styles.smile}></div>
                    <div className={styles.borderBottom}></div>
                </div>
            </div>
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
                <div className={styles.body}>
                    <div className={styles.chest}>
                        <div className={styles.light}>
                            <div></div>
                        </div>
                        <div className={styles.shadow}>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.arm}></div>
                    <div className={styles.hand}>
                        <div className={styles.glove}>
                            <div className={styles.inner}></div>
                            <div className={styles.shadows}>
                                <div className={styles.innerShadow}>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
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