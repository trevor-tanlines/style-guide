import styles from "@/components/Typography/Typography.module.css"

export default function Typography() {
    return (
        <>
        <typography className={styles.typography}>
            
            <typography className={styles.title}>
                <p>Typography</p>
            </typography>

            <typography className={styles.typeScale}>
                <p>Type Scale</p>
            </typography>

            <typography className={styles.scaleDes}>
                <p>We follow a 6px baseline grid for achieving a vertical rhythm on all block-level elements in the app.</p>
            </typography>

            <typography className={styles.heading}>
                <p>Header</p>
            </typography>

            <typography className={styles.headingDes}>
                <p>Heading bold 40/Auto</p>
            </typography>

            <typography className={styles.subheading}>
                <p>Subheader</p>
            </typography>

            <typography className={styles.subheadingDes}>
                <p>Subheading extra bold 16/auto</p>
            </typography>
        </typography>
        </>
    )
}