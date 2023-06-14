import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { DocsPager } from "@/Components/Pager";
import Sidebar from "@/Components/Sidebar";
import ToC from "@/Components/TableOfContents";
import { Navigation, PageProps, TableOfContents } from "@/types";

import { Head } from "@inertiajs/react";
import { Fragment, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

function BreadcrumbArrow() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    );
}

function BreadcrumbItem(
    title: string,
    currentIndex: number,
    finalIndex: number
) {
    if (currentIndex !== finalIndex - 1) {
        return (
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                {title}
            </div>
        );
    }

    return <div className="font-medium text-foreground">{title}</div>;
}

export default function Documentation({
    content,
    document,
    navigation,
    tableOfContents,
}: PageProps<{
    content: string;
    document: {
        title: string;
        description: string;
        breadcrumbs: string[];
    };
    navigation: Navigation;
    tableOfContents: TableOfContents;
}>) {
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        if (isDarkMode) {
            window.document.body.classList.add("dark");
        }
    }, [isDarkMode]);

    return (
        <>
            <Head title="Welcome" />

            <div className="relative flex min-h-screen flex-col">
                <Header navigation={navigation} />

                <div className="flex-1">
                    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                        <Sidebar sections={navigation.sidebar} />

                        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                            <div className="mx-auto w-full min-w-0">
                                <div className="mb-4 flex items-center space-x-1 py-1 text-sm text-muted-foreground">
                                    {document.breadcrumbs.map(
                                        (breadcrumb, index) => (
                                            <Fragment key={breadcrumb}>
                                                {index > 0 && (
                                                    <BreadcrumbArrow />
                                                )}
                                                {BreadcrumbItem(
                                                    breadcrumb,
                                                    index,
                                                    document.breadcrumbs.length
                                                )}
                                            </Fragment>
                                        )
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                                        {document.title}
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        <span>{document.description}</span>
                                    </p>
                                </div>

                                <div
                                    role="none"
                                    className="my-4 h-[1px] w-full shrink-0 bg-border md:my-6"
                                ></div>

                                <div
                                    className="max-w-full prose dark:prose-invert"
                                    dangerouslySetInnerHTML={{
                                        __html: content,
                                    }}
                                ></div>

                                <div
                                    role="none"
                                    className="my-4 h-[1px] w-full shrink-0 bg-border md:my-6"
                                ></div>

                                <DocsPager items={navigation.sidebar} />
                            </div>

                            {tableOfContents.length > 0 && (
                                <ToC items={tableOfContents} />
                            )}
                        </main>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
