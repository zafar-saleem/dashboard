import styles from "./summary.module.css";

export const Summary = () => {
  return (
    <aside className={`${styles.items} p-400`}>
      <h4 className={styles.summaryTitle}>Where your money go?</h4>
      <div className={styles.grid}>
        <h6 className={styles.itemTitle}>Food and Drinks</h6>
        <p className={styles.cost}>872.400</p>
      </div>
      <div className={styles.progressBar}>
        <span className={`${styles.filledFood} ${styles.filled}`}></span>
      </div>

      <div className={styles.grid}>
        <h6 className={styles.itemTitle}>Shopping</h6>
        <p className={styles.cost}>1.378.200</p>
      </div>
      <div className={styles.progressBar}>
        <span className={`${styles.filledShopping} ${styles.filled}`}></span>
      </div>

      <div className={styles.grid}>
        <h6 className={styles.itemTitle}>Housing</h6>
        <p className={styles.cost}>928.500</p>
      </div>
      <div className={styles.progressBar}>
      <span className={`${styles.filledHousing} ${styles.filled}`}></span>
      </div>

      <div className={styles.grid}>
        <h6 className={styles.itemTitle}>Transportation</h6>
        <p className={styles.cost}>420.700</p>
      </div>
      <div className={styles.progressBar}>
      <span className={`${styles.filledTransportation} ${styles.filled}`}></span>
      </div>

      <div className={styles.grid}>
        <h6 className={styles.itemTitle}>Vehicle</h6>
        <p className={styles.cost}>520.000</p>
      </div>
      <div className={styles.progressBar}>
        <span className={`${styles.filledVehicle} ${styles.filled}`}></span>
      </div>
    </aside>
  )
}