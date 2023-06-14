import { Icons } from "@/Components/Icons";
import { buttonVariants } from "@/Components/ui/button";
import { NavItem, SidebarNavItem } from "@/types/index";

import { Link, usePage } from "@inertiajs/react";

function flatten(links: SidebarNavItem[]): NavItem[] {
    return links
        .reduce<NavItem[]>(
            (flat, link) =>
                // @ts-expect-error
                flat.concat(link.items?.length ? flatten(link.items) : link),
            []
        )
        .filter((link) => !link?.disabled);
}

function getPagerForDoc(items: SidebarNavItem[]) {
    const { url: currentUrl } = usePage();

    const flattenedLinks = [null, ...flatten(items), null];
    const activeIndex = flattenedLinks.findIndex(
        (link) => currentUrl === link?.href
    );

    return {
        prev: activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null,
        next:
            activeIndex !== flattenedLinks.length - 1
                ? flattenedLinks[activeIndex + 1]
                : null,
    };
}

export function DocsPager({ items }: { items: SidebarNavItem[] }) {
    const pager = getPagerForDoc(items);

    if (!pager) {
        return null;
    }

    return (
        <div className="flex flex-row items-center justify-between">
            {pager?.prev?.href ? (
                <Link
                    href={pager.prev.href}
                    className={buttonVariants({ variant: "outline" })}
                >
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    {pager.prev.name}
                </Link>
            ) : (
                <span></span>
            )}
            {pager?.next?.href && (
                <Link
                    href={pager.next.href}
                    className={buttonVariants({ variant: "outline" })}
                >
                    {pager.next.name}
                    <Icons.chevronRight className="ml-2 h-4 w-4" />
                </Link>
            )}
        </div>
    );
}
