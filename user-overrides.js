//NRDSTRM's Arkenfox Overrides



//Section 1: Disabled Features



user_pref("extensions.pocket.enabled", false); //fully disable pocket
user_pref("identity.fxaccounts.enabled", false); //disable sync
user_pref("places.history.enabled", false); // disables history entirely
user_pref("javascript.options.ion", false); //javascript "hardening", might cause slowdowns/breakage
user_pref("javascript.options.asmjs", false); //same as above
user_pref("javascript.options.wasm", false); //WebAssembly support. Completly disables WASM, for the security gain and speed loss
user_pref("javascript.options.baselinejit", false); //Disabled Just In Time compilation - usually breaks sites with a lot of javascript but is a huge security gain
user_pref("dom.webaudio.enabled",false); //old api used for fingerprinting probably, hasn't broken anything FOR ME
user_pref("browser.safebrowsing.downloads.remote.enabled", false); //disabled safebrowsing (data sent to google)
user_pref("browser.safebrowsing.phishing.enabled", false); //same as above
user_pref("browser.safebrowsing.malware.enabled", false); // -||-
user_pref("dom.webnotifications.enabled", false); // fully disabled notifications
user_pref("browser.urlbar.suggest.history", false); //no suggestions from history
user_pref("browser.urlbar.suggest.openpage", false); //no suggestions deom open pages
user_pref("browser.urlbar.suggest.topsites", false); //no top sites in the suggestions
user_pref("signon.management.page.breach-alerts.enabled",false); //no breach alerts
user_pref("layout.spellcheckDefault", 0); //no spell-check
user_pref("signon.rememberSignons", false); //never ask to save passwords
user_pref("permissions.default.microphone", 2); // same but with microphone
user_pref("permissions.default.desktop-notification", 2); //same but with notifications
user_pref("permissions.default.geo", 2); //deny location access
user_pref("geo.enabled", false); //fullly disable location acces
user_pref("media.navigator.enabled", false); //disabled some media features



//Section 2: Re-enabled features
user_pref("keyword.enabled", true); //search from the urlbar
user_pref("browser.startup.page", 1); //Browser starts on the Homepage
user_pref("browser.startup.homepage", "about:home"); //Sets homepage
user_pref("browser.newtabpage.enabled", true); //enabled non-empty ntp-s
user_pref("browser.download.useDownloadDir", true); //always download files to the System Download Directory
user_pref("browser.download.dir", "D:\Downloads");
user_pref("browser.search.suggest.enabled", true); //enables search suggestions
user_pref("browser.urlbar.suggest.searches", true);//enables search suggestions in the url-bar



//Section 3: Misc changes (mostly personal prefrence)
user_pref("browser.compactmode.show", true); //compact mode is displayed by default
user_pref("browser.uidensity", 1); //enables compact mode by default
user_pref("privacy.spoof_english", 2); //spoofs english by default
user_pref("browser.download.useDownloadDir", true); //always download files to the System Download Directory
user_pref("browser.download.dir", "replace me with custom download dir");
user_pref("network.trr.mode", 2); //set DoH to custom adress
user_pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query"); //custom adress 
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query"); //custom adress 

