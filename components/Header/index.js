import styles from "@/components/Header/Header.module.css"


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.list}>
                <ul>
                    <li>Home</li>
                    <li>Logos</li>
                    <li>Typography</li>
                    <li>Colours</li>
                    <li>Iconography</li>
                </ul>
            </div>
        </div>
    )
}