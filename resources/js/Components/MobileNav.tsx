"use client";

import { Icons } from "@/Components/Icons";
import { Button } from "@/Components/ui/button";
// node_modules/@radix-ui/react-scroll-area/dist/index.d.mts:96:11 - error TS2320: Interface 'ScrollAreaScrollbarImplProps' cannot simultaneously extend types 'Pick<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | ... 2 more ... | undefined; } & { ...; }, "key" | ... 1 more ... | "asChild">' and 'ScrollAreaScrollbarImplPrivateProps'.
// import { ScrollArea } from "@/Components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { cn } from "@/lib/utils";
import { Navigation } from "@/types/index";

import { Link, usePage } from "@inertiajs/react";
import { SidebarOpen } from "lucide-react";
import * as React from "react";

interface MobileLinkProps {
    children: React.ReactNode;
    className?: string;
    external?: boolean;
    href: string;
    onOpenChange?: (open: boolean) => void;
}

function MobileLink({
    children,
    className,
    external,
    href,
    onOpenChange,
}: MobileLinkProps) {
    if (external) {
        return (
            <a
                href={href}
                className={cn(className)}
                target="_blank"
                rel="noreferrer noopener"
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={href}
            onClick={() => {
                // router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(className)}
        >
            {children}
        </Link>
    );
}

export function MobileNav({ navigation }: { navigation: Navigation }) {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <SidebarOpen className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent size="xl" position="left" className="pr-0">
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setOpen}
                >
                    <Icons.logo className="mr-2 h-4 w-4" />
                    <span className="font-bold">
                        {
                            // @ts-expect-error
                            usePage().props.app.name
                        }
                    </span>
                </MobileLink>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                        {navigation.main.map(
                            (item) =>
                                item.href && (
                                    <MobileLink
                                        key={item.href}
                                        href={item.href}
                                        onOpenChange={setOpen}
                                        external={item.external}
                                    >
                                        {item.name}
                                    </MobileLink>
                                )
                        )}
                    </div>
                    <div className="flex flex-col space-y-2">
                        {navigation.sidebar.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col space-y-3 pt-6"
                            >
                                <h4 className="font-medium">{item.title}</h4>
                                {item?.items?.length &&
                                    item.items.map((item) => (
                                        <React.Fragment key={item.href}>
                                            {!item.disabled &&
                                                (item.href ? (
                                                    <MobileLink
                                                        href={item.href}
                                                        onOpenChange={setOpen}
                                                    >
                                                        {item.name}
                                                    </MobileLink>
                                                ) : (
                                                    item.name
                                                ))}
                                        </React.Fragment>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
