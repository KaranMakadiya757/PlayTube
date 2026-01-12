import { Home, PlaylistAdd, Settings, Subscriptions } from "@mui/icons-material";
import type { MenuItemBase } from "../../Types/Layout.types";

/*

{
  "id": "",                 // Unique identifier for the menu item, used during rendering and processing
  "menu_name": "",          // Display name of the menu
  "menu_key": "",           // Internationalization (i18n) key for translating the menu name
  "path": "",               // Route or URL path associated with the menu
  "icon": null,             // Icon representing the menu item
}


*/

// Home menu configuration
export const homeMenu: MenuItemBase = {
    id: "home",
    menu_name: "Home",
    path: "/",
    icon: Home
};

// Subscriptions menu configuration
export const subscriptionsMenu: MenuItemBase = {
    id: "subscriptions",
    menu_name: "Subscriptions",
    path: "/subscriptions",
    icon: Subscriptions
};

// Playlists menu configuration
export const playlistsMenu: MenuItemBase = {
    id: "playlists",
    menu_name: "Playlists",
    path: "/playlists",
    icon: PlaylistAdd
};

// Settings menu configuration
export const settingsMenu: MenuItemBase = {
    id: "settings",
    menu_name: "Settings",
    path: "/settings",
    icon: Settings
};