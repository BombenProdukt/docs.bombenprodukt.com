import { Icons } from "@/Components/Icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/index";

import { Link, usePage } from "@inertiajs/react";

function LinkInternal(link: NavItem, currentUrl: string) {
    return (
        <Link
            key={link.href}
            href={link.href}
            className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                link.disabled && "cursor-not-allowed opacity-80",
                currentUrl === link.href
                    ? "text-foreground"
                    : "text-foreground/60"
            )}
        >
            {link.name}
        </Link>
    );
}

function LinkExternal(link: NavItem) {
    return (
        <a
            key={link.href}
            href={link.href}
            className="flex items-center text-sm font-medium text-muted-foreground"
            target="_blank"
            rel="noreferrer noopener"
        >
            {link.name}
        </a>
    );
}

export function MainNav({ links }: { links?: NavItem[] }) {
    const { url, props } = usePage();

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block">
                    {
                        // @ts-expect-error
                        props.app.name
                    }
                </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                {links?.map((link) =>
                    link.external ? LinkExternal(link) : LinkInternal(link, url)
                )}
            </nav>
        </div>
    );
}
