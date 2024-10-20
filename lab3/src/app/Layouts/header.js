export default function Header() {
        return (
            <div>
            <header>
    <nav
        class="relative flex w-full items-center justify-between bg-white shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start"
        data-twe-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div class="flex items-center">
            <button
            class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span
                class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </span>
            </button>
        </div>

        <div
            class="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
            id="navbarSupportedContentY"
            data-twe-collapse-item>
            <ul
            class="me-auto flex flex-col lg:flex-row"
            data-twe-navbar-nav-ref>
            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                class="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#!"
                data-twe-nav-link-ref
                data-twe-ripple-init
                data-twe-ripple-color="light"
                >Home</a
                >
            </li>
            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                class="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#!"
                data-twe-nav-link-ref
                data-twe-ripple-init
                data-twe-ripple-color="light"
                >Features</a
                >
            </li>
            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                class="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#!"
                data-twe-nav-link-ref
                data-twe-ripple-init
                data-twe-ripple-color="light"
                >Pricing</a
                >
            </li>
            <li class="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                class="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#!"
                data-twe-nav-link-ref
                data-twe-ripple-init
                data-twe-ripple-color="light"
                >About</a
                >
            </li>
            </ul>
        </div>
        </div>
    </nav>

    <div
        class="bg-zinc-50 px-6 py-20 text-center text-surface dark:bg-neutral-700 dark:text-white">
        <h1 class="mb-6 text-5xl font-bold">Heading</h1>
        <h3 class="mb-8 text-3xl font-bold">Subeading</h3>
        <a
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        href="#!"
        role="button"
        >Call to action</a
        >
    </div>
    </header>
    </div>
        )
}
