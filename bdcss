cd ~/.config/BetterDiscord/data/ptb
echo '@import url("https://css.wmeluna.com/discord.css");/**/' > custom.css
echo '{
    "general": {
        "emotes": false,
        "publicServers": false,
        "voiceDisconnect": false,
        "showToasts": true,
        "mediaKeys": false
    },
    "addons": {
        "addonErrors": true,
        "autoReload": true,
        "editAction": "system"
    },
    "customcss": {
        "customcss": true,
        "liveUpdate": true,
        "openAction": "settings"
    },
    "developer": {
        "debugLogs": false,
        "devTools": true,
        "debuggerHotkey": false,
        "reactDevTools": false,
        "inspectElement": false,
        "devToolsWarning": true
    },
    "window": {
        "transparency": false,
        "removeMinimumSize": false,
        "frame": false
    }
}' > settings.json


#begin plugin section

cd ~/.config/BetterDiscord/plugins
curl -LOJ https://github.com/QbDesu/BetterDiscordAddons/raw/potato/Plugins/BetterBotTags/BetterBotTags.plugin.js &
curl -LOJ https://github.com/HypedDomi/BetterDiscordStuff/raw/main/Plugins/BetterInvites/BetterInvites.plugin.js &
curl -LOJ https://github.com/TheGreenPig/BetterDiscordPlugins/raw/main/BetterMessageLinks/BetterMessageLinks.plugin.js &
curl -LOJ https://github.com/mwittrien/BetterDiscordAddons/raw/master/Plugins/BetterNsfwTag/BetterNsfwTag.plugin.js &
curl -LOJ https://github.com/rauenzi/BetterDiscordAddons/raw/master/Plugins/BetterRoleColors/BetterRoleColors.plugin.js &
curl -LOJ https://github.com/1Lighty/BetterDiscordPlugins/raw/master/Plugins/CrashRecovery/CrashRecovery.plugin.js &
curl -LOJ https://github.com/rauenzi/BetterDiscordAddons/raw/master/Plugins/DoNotTrack/DoNotTrack.plugin.js &
curl -LOJ https://github.com/QWERTxD/BetterDiscordPlugins/raw/main/TypingUsersAvatars/TypingUsersAvatars.plugin.js &
curl -LOJ https://github.com/l0c4lh057/BetterDiscordStuff/raw/master/Plugins/TypingIndicator/TypingIndicator.plugin.js &
curl -LOJ https://github.com/Inve1951/BetterDiscordStuff/raw/master/plugins/discordexperiments.plugin.js &

#LIBS
curl -LOJ https://github.com/mwittrien/BetterDiscordAddons/raw/master/Library/0BDFDB.plugin.js &
curl -LOJ https://github.com/rauenzi/BDPluginLibrary/raw/master/release/0PluginLibrary.plugin.js &
curl -LOJ https://github.com/1Lighty/BetterDiscordPlugins/raw/master/Plugins/1XenoLib.plugin.js &

wait
#set typingindicator 
echo '{
    "didShowIssueHelperPopup": true,
    "currentVersionInfo": {
        "hasShownChangelog": true
    }

}' > TypingIndicator.config.json
#set betterrolecolors
echo '{
    "currentVersionInfo": {
        "hasShownChangelog": true
    },
    "settings": {
        "modules": {
            "chat": false
        }
    }
}' > BetterRoleColors.config.json
#set all other plugins
echo '{
    "currentVersionInfo": {
        "hasShownChangelog": true
    }
}' | tee XenoLib.config.json ZeresPluginLibrary.config.json BetterBotTags.config.json BetterInvites.config.json BetterMessageLinks.config.json CrashRecovery.config.json DoNotTrack.config.json > TypingUsersAvatars.config.json

cd ~/.config/BetterDiscord/data/ptb
echo '{
    "BDFDB": false,
    "XenoLib": false,
    "ZeresPluginLibrary": false,
    "CrashRecovery": true,
    "TypingUsersAvatars": true,
    "TypingIndicator": true,
    "BetterNsfwTag": true,
    "DoNotTrack": true,
    "discordExperiments": true,
    "BetterBotTags": true,
    "BetterInvites": true,
    "BetterMessageLinks": true,
    "BetterRoleColors": true
}' > plugins.json
