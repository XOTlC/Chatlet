import Button from "@components/Button";
import styles from "@styles";

export default function Home() {
    return (
        <>
            <div className={styles.landing.imageContainer}>
                <img className={styles.landing.image} src="/assets/landing.png" alt="Blook Messaging on Mobile Device" />
            </div>

            <div className={styles.landing.welcomeContainer}>
                <div className={styles.landing.welcomeText}>
                    Welcome to Chatlet
                </div>
                <div className={styles.landing.welcomeSubtext}>
                    The best way to chat with people in any Blacket server using your {window.innerWidth >= 768 ? "tablet" : "phone"}.
                </div>

                <div className={styles.landing.buttonContainer}>
                    <Button>Register</Button>
                    <Button>Login</Button>
                </div>
            </div>
        </>
    )
}