import { cn } from "@/lib/utils";
import { NavItem, SidebarNavItem } from "@/types/index";

import { usePage } from "@inertiajs/react";

function SidebarArea(section: SidebarNavItem) {
    return (
        <div className="pb-4" key={section.title}>
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                {section.title}
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
                {section.items.map((item) => SidebarItem(item))}
            </div>
        </div>
    );
}

function SidebarItem(item: NavItem) {
    const { url } = usePage();

    return (
        <a
            href={item.href}
            key={item.name}
            className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                url === item.href
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
            )}
        >
            {item.name}
        </a>
    );
}

export default function Sidebar({ sections }: { sections: SidebarNavItem[] }) {
    return (
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
            <div className="relative overflow-hidden py-6 pr-6 lg:py-8">
                <div className="h-full w-full rounded-[inherit]">
                    <div style={{ minWidth: "100%", display: "table" }}>
                        <div className="w-full">
                            {sections.map((area) => SidebarArea(area))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
