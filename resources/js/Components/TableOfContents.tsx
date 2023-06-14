import { useActiveItem } from "@/hooks.js";
import { cn } from "@/lib/utils.js";
import { TableOfContents, TableOfContentsItem } from "@/types/index";

function Item(item: TableOfContentsItem, activeItem?: string) {
    return (
        <li className="mt-0 pt-2" key={item.href}>
            <a
                href={`#${item.href}`}
                className={cn(
                    "inline-block no-underline transition-colors hover:text-foreground",
                    item.href === activeItem
                        ? "font-medium text-foreground"
                        : "text-muted-foreground",
                    item.level === 3 ? "pl-4" : "",
                    item.level === 4 ? "pl-8" : "",
                    item.level === 5 ? "pl-12" : "",
                    item.level === 6 ? "pl-16" : ""
                )}
            >
                {item.name}
            </a>
        </li>
    );
}

export default function ToC({ items }: { items: TableOfContents }) {
    const itemIds: string[] = items.map((item) => item.href);
    const activeHeading = useActiveItem(itemIds);

    return (
        <div className="hidden text-sm xl:block">
            <div className="sticky top-16 h-[calc(100vh-3.5rem)] overflow-hidden">
                <div className="relative overflow-hidden pb-10">
                    <div className="h-full w-full rounded-[inherit]">
                        <div style={{ minWidth: "100%", display: "table" }}>
                            <div className="space-y-2">
                                <p className="py-1 font-semibold">
                                    On This Page
                                </p>
                                <ul className="m-0 list-none">
                                    {items.map((item) =>
                                        Item(item, activeHeading)
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
