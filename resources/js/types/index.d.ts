export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    app: {
        name: string;
    };
    auth: {
        user: User;
    };
};

export interface NavItem {
    name: string;
    href: string;
    disabled?: boolean;
    external?: boolean;
    label?: string;
}

export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem {
    title: string;
    items: NavItem[];
}

export interface Navigation {
    main: MainNavItem[];
    sidebar: SidebarNavItem[];
}

export interface TableOfContentsItem {
    level: number;
    name: string;
    href: string;
    children: TableOfContentsItem[];
}

export type TableOfContents = TableOfContentsItem[];
