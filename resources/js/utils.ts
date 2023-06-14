import { usePage } from "@inertiajs/react";

export function urlWithPrefix(url: string) {
    const {
        props: { viewing },
    } = usePage();

    // @ts-expect-error
    return `/${viewing.project}/${viewing.version}/${url}`;
}
