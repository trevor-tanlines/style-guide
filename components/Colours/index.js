import styles from "@/components/Colours/Colour.module.css"

export default function Colours() {
    return (
        <>
        <colours className={styles.Colours}>
            <colours className={styles.white}>
            <p>Dutch White</p>
            </colours>
            <colours className={styles.whiteHex}>
                <p>#ECD9B9</p>
            </colours>
            <colours className={styles.coral}>
            <p>Coral</p>
            </colours>
            <colours className={styles.coralHex}>
                <p>#E78A61</p>
            </colours>  <colours className={styles.liliac}>
            <p>Liliac</p>
            </colours>
            <colours className={styles.liliacHex}>
                <p>#B0A2C7</p>
            </colours>

            <colours className={styles.description}>
                <colours className={styles.whiteDes}>
                    <p>lorem ipsem</p>
                </colours>
                <colours className={styles.coralDes}>
                    <p>lorem ipsem</p>
                </colours>
                <colours className={styles.liliacDes}>
                    <p>lorem ipsem</p>
                </colours>
            </colours>
        </colours>
        </>

    );
}