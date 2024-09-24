"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    return (
        <div className="container mx-auto p-4">
            <ul className="flex gap-4">
                <li>
                    <Link
                        className={
                            pathname === "/products/food" ? "font-bold" : ""
                        }
                        href="/products/food"
                    >
                        Fashion
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            pathname === "/products/sports" ? "font-bold" : ""
                        }
                        href="/products/sports"
                    >
                        Sports
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            pathname === "/products/technology"
                                ? "font-bold"
                                : ""
                        }
                        href="/products/technology"
                    >
                        Technology
                    </Link>
                </li>
            </ul>
            {children}
        </div>
    );
}
