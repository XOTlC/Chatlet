import styles from "@styles";

export default function Input({ ...props }) {
    return (
        <input className={styles.settings.input} {...props} />
    )
}