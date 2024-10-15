import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Navbar() {
    return (
        <div className="flex flex-col">
            {/* Navbar */}
            <header style={{ backgroundColor: '#1a2238' }} className="bg-blue-600 p-3">
                <nav className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                        <div className="text-white text-xl font-semibold">HealthOne</div>
                    </div>
                    <ul className="flex space-x-6 text-white">
                        {/* Replace <a> with <Link> */}
                         <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
                        <li><Link href="/features" className="hover:text-gray-300">Features</Link></li>
                        <li><Link href="/team" className="hover:text-gray-300">Team</Link></li>
                    </ul>

                    {/* Clerk Authentication */}
                    <div className="flex items-center space-x-4">
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav>
            </header>
        </div>
    );
}
