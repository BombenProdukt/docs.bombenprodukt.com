import { Icons } from "@/Components/Icons";
import { Button } from "@/Components/ui/button";

import { useDarkMode } from "usehooks-ts";

export function ThemeToggle() {
    const { isDarkMode, enable, disable } = useDarkMode();

    const toggleTheme = () => {
        if (isDarkMode) {
            disable();

            document.body.classList.remove("dark");
        } else {
            enable();

            document.body.classList.add("dark");
        }
    };

    return (
        <Button variant="ghost" size="sm" onClick={() => toggleTheme()}>
            <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}
