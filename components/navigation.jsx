import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <header className="flex justify-between h-14 items-center pt-5 relative z-100">
            <div className="mx-10">
                <Image src="/logo.png" alt="logo" width={180} height={100} />
            </div>
            <nav>
                <ul className="flex gap-6 mx-10 text-lg">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/clientcomp">ClientComp</Link>
                    </li>
                    <li>
                        <Link href="/servercomp">ServerComp</Link>
                    </li>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}