export default function Content() {
    return (
        <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 py-1 text-sm text-muted-foreground">
                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                    Docs
                </div>
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
                <div className="font-medium text-foreground">Introduction</div>
            </div>
            <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                    Introduction
                </h1>
                <p className="text-lg text-muted-foreground">
                    <span>
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                    </span>
                </p>
            </div>
            <div
                role="none"
                className="my-4 h-[1px] w-full shrink-0 bg-border md:my-6"
            ></div>
            <div className="prose">
                <div
                    role="alert"
                    className="not-prose relative w-full rounded-lg border bg-background p-4 text-foreground [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground"
                >
                    <div className="text-sm [&_p]:leading-relaxed">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            <strong>Prerequisites</strong>: Components are
                            styled using
                            <a
                                className="font-medium underline underline-offset-4"
                                href="https://tailwindcss.com"
                            >
                                Tailwind CSS
                            </a>
                            . You need to install Tailwind CSS in your project.
                            Follow the
                            <a
                                className="font-medium underline underline-offset-4"
                                href="https://tailwindcss.com/docs/installation"
                            >
                                Tailwind CSS installation instructions
                            </a>
                            to get started.
                        </p>
                    </div>
                </div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    This is
                    <strong>NOT</strong>a component library. It's a collection
                    of re-usable components that you can copy and paste into
                    your apps.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    <strong>
                        What do you mean by not a component library?
                    </strong>
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    I mean you do not install it as a dependency. It is not
                    available or distributed via npm. I have no plans to publish
                    it as an npm package (for now).
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Pick the components you need. Copy and paste the code into
                    your project and customize to your needs. The code is yours.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    <em>
                        Use this as a reference to build your own component
                        libraries.
                    </em>
                </p>
                <h2
                    className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
                    id="credits"
                >
                    <a
                        className="subheading-anchor font-medium underline underline-offset-4"
                        href="#credits"
                    >
                        <span className="icon icon-link"></span>
                    </a>
                    Credits
                </h2>
                <ul className="my-6 ml-6 list-disc">
                    <li className="mt-2">
                        <a
                            className="font-medium underline underline-offset-4"
                            href="https://radix-ui.com"
                        >
                            Radix UI
                        </a>
                        - For the primitives.
                    </li>
                    <li className="mt-2">
                        <a
                            className="font-medium underline underline-offset-4"
                            href="https://vercel.com"
                        >
                            Vercel
                        </a>
                        - Where I host all my projects.
                    </li>
                    <li className="mt-2">
                        <a
                            className="font-medium underline underline-offset-4"
                            href="https://shud.in"
                        >
                            Shu Ding
                        </a>
                        - The typography style is adapted from his work on
                        Nextra.
                    </li>
                    <li className="mt-2">
                        <a
                            className="font-medium underline underline-offset-4"
                            href="https://cal.com"
                        >
                            Cal
                        </a>
                        - Where I copied the styles for the first component: the
                        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                            Button
                        </code>
                        .
                    </li>
                    <li className="mt-2">
                        <a
                            className="font-medium underline underline-offset-4"
                            href="https://cmdk.paco.me"
                        >
                            cmdk
                        </a>
                        - For the
                        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                            &lt;Command /&gt;
                        </code>
                        component.
                    </li>
                </ul>
            </div>
            <div
                role="none"
                className="my-4 h-[1px] w-full shrink-0 bg-border md:my-6"
            ></div>
            <div className="flex flex-row items-center justify-between">
                <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    href="/docs"
                >
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
                        className="mr-2 h-4 w-4"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    Introduction
                </a>
                <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    href="/docs/theming"
                >
                    Theming
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
                        className="ml-2 h-4 w-4"
                    >
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    );
}
