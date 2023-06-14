import { Button } from "@/Components/ui/button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/Components/ui/command";
import { cn } from "@/lib/utils";
import { Navigation } from "@/types/index.js";

import { router } from "@inertiajs/react";
import { Circle, File, Moon, SunMedium } from "lucide-react";
import * as React from "react";
import { useDarkMode } from "usehooks-ts";

export function CommandMenu({ navigation }: { navigation: Navigation }) {
    const [open, setOpen] = React.useState(false);
    const { enable, disable } = useDarkMode();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
                )}
                onClick={() => setOpen(true)}
            >
                <span className="hidden lg:inline-flex">
                    Search documentation...
                </span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Links">
                        {navigation.main
                            .filter((navitem) => !navitem.external)
                            .map((navItem) => (
                                <CommandItem
                                    key={navItem.href}
                                    value={navItem.name}
                                    onSelect={() => {
                                        runCommand(() =>
                                            router.get(navItem.href as string)
                                        );
                                    }}
                                >
                                    <File className="mr-2 h-4 w-4" />
                                    {navItem.name}
                                </CommandItem>
                            ))}
                    </CommandGroup>
                    {navigation.sidebar.map((group) => (
                        <CommandGroup key={group.title} heading={group.title}>
                            {group.items.map((navItem) => (
                                <CommandItem
                                    key={navItem.href}
                                    value={navItem.name}
                                    onSelect={() => {
                                        runCommand(() =>
                                            router.get(navItem.href as string)
                                        );
                                    }}
                                >
                                    <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                        <Circle className="h-3 w-3" />
                                    </div>
                                    {navItem.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
                    <CommandSeparator />
                    <CommandGroup heading="Theme">
                        <CommandItem
                            onSelect={() => runCommand(() => disable())}
                        >
                            <SunMedium className="mr-2 h-4 w-4" />
                            Light
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => enable())}
                        >
                            <Moon className="mr-2 h-4 w-4" />
                            Dark
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
