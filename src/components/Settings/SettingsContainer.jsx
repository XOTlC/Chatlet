import { useEffect } from "react";
import styles from "@styles";

export default function SettingsContainer({ header, children, ...props }) {
    useEffect(() => {
        if (typeof header !== "object") throw new Error("header must be typeof object");
        if (header && !header.title) throw new Error("header title is required");
    }, []);

    return (
        <div className={styles.settings.container} {...props}>
            {header && <><div className={styles.settings.containerHeader}>
                {header.icon && <i className={`${styles.settings.containerHeaderIcon} ${header.icon}`} />}
                <div className={styles.settings.containerHeaderTitle}>{header.title}</div>
            </div>

                <div className={styles.settings.containerDivider} />
            </>}

            {children}
        </div>
    )
}
