import styles from './Canvas.module.scss'
import Sonic from './Sonic'

const Canvas = () => {
    return(
        <div className={styles.root}>
          <img src='./sonic-3.png' alt='sprites sonic reference'/>  
          <div className={styles.canvas}>
            <Sonic />
          </div>
        </div>
    )
}

export default Canvas