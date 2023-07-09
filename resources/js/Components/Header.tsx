import { CommandMenu } from "@/Components/CommandMenu";
import { Icons } from "@/Components/Icons";
import { MainNav } from "@/Components/MainNav";
import { MobileNav } from "@/Components/MobileNav";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { buttonVariants } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import { Navigation } from "@/types/index";

export default function Header({ navigation }: { navigation: Navigation }) {
    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center">
                <MainNav links={navigation.main} />

                <MobileNav navigation={navigation} />

                <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <CommandMenu navigation={navigation} />
                    </div>

                    <nav className="flex items-center space-x-1">
                        <a
                            href="https://github.com/faustbrian/laravel-lighty"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        size: "sm",
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0"
                                )}
                            >
                                <Icons.gitHub className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </a>

                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
