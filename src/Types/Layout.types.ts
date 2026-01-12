import type { AppBarProps as MuiAppBarProps } from '@mui/material';

export type MenuItems = "home" | "playlists" | "subscriptions" | "settings";

export interface MenuItemBase {
    id: MenuItems;
    menu_name: string;
    path: string;
    icon: React.ElementType | null;
}

export interface HeaderProps {
    open: boolean;
    handleDrawerOpen: () => void;
}

export interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
