import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appConfig = JSON.parse(await readFile("mobile/app.json", "utf8")).expo;
const mobilePackage = JSON.parse(await readFile("mobile/package.json", "utf8"));
const appSource = await readFile("mobile/App.tsx", "utf8");
const androidManifest = await readFile("mobile/android/app/src/main/AndroidManifest.xml", "utf8");

const androidPermissions = new Set(appConfig.android?.permissions || []);
const infoPlist = appConfig.ios?.infoPlist || {};

for (const permission of ["ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION", "ACTIVITY_RECOGNITION"]) {
  assert(androidPermissions.has(permission), `mobile/app.json sem permissao Android ${permission}.`);
}

for (const permission of ["ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION", "ACTIVITY_RECOGNITION"]) {
  assert(androidManifest.includes(`android.permission.${permission}`), `AndroidManifest sem permissao ${permission}.`);
}

for (const key of ["NSLocationWhenInUseUsageDescription", "NSMotionUsageDescription", "NSUserNotificationUsageDescription"]) {
  assert(typeof infoPlist[key] === "string" && infoPlist[key].length > 20, `mobile/app.json sem descricao iOS ${key}.`);
}

assert(mobilePackage.dependencies?.["react-native-webview"], "mobile/package.json sem react-native-webview.");
assert(appSource.includes('label: "Caminhada"') && appSource.includes('path: "/app/movimento/caminhada"'), "App mobile sem atalho de Caminhada.");
assert(appSource.includes("function webBaseUrlFromExpoHost") && appSource.includes("Constants.expoConfig?.hostUri"), "App mobile deveria derivar o host web a partir do hostUri do Expo.");
assert(appSource.includes("geolocationEnabled"), "WebView mobile sem geolocationEnabled.");
assert(appSource.includes("sharedCookiesEnabled"), "WebView mobile sem cookies compartilhados.");
assert(typeof appConfig.extra?.defaultWebBaseUrl === "string" && /^https?:\/\//.test(appConfig.extra.defaultWebBaseUrl), "defaultWebBaseUrl mobile precisa ser URL http/https.");

console.log("Mobile GPS checks passaram: permissoes Android/iOS, WebView com geolocationEnabled e atalho de Caminhada.");
