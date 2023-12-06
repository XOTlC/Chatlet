import { useContext } from "react";
import { SettingsContext } from "@stores/settings";
import SettingsContainer from "@components/Settings/SettingsContainer";
import Input from "@components/Settings/Input";
import styles from "@styles";

export default function Settings() {
    const { settings, setSettings } = useContext(SettingsContext);

    return (
        <>
            <div className={styles.settings.settingsText}>Settings</div>

            <SettingsContainer header={{
                title: "Main",
                icon: "fas fa-cog"
            }}>

                Server URL
                <Input placeholder="Example: https://blacket.org"
                    value={settings.main.server_url}
                    onChange={e => setSettings({ ...settings, main: { ...settings.main, server_url: e.target.value } })}
                />

            </SettingsContainer>
        </>
    )
}