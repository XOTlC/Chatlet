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
                <Input placeholder="Server URL"
                    value={settings.serverURL}
                    onChange={e => setSettings({ ...settings, server_url: e.target.value })}
                />

            </SettingsContainer>
        </>
    )
}