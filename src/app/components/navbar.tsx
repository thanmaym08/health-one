import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-col">
            {/* Navbar */}
            <header className="bg-blue-500 p-2 fixed top-0 w-full z-50">
                <nav className="container mx-auto flex justify-between items-center">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-3 rounded-full">
                        <Image
                            src="/assets/logo.png"
                            alt="HealthOne Logo"
                            className="rounded-3xl"
                            width={50}
                            height={50}
                        />
                        <div className="text-white text-xl font-semibold">Health One</div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex space-x-6 text-white">
                        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link href="#about" className="hover:text-gray-300">About Us</Link></li>
                        <li><Link href="#features" className="hover:text-gray-300">Features</Link></li>
                        <li><Link href="#team" className="hover:text-gray-300">Team</Link></li>
                        <li><Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-white hover:text-gray-300 text-2xl">
                            ☰ {/* Hamburger icon */}
                        </button>
                    </div>

                    {/* Clerk Authentication Buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md">Sign In</button>
                        <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">Sign Up</button>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Menu */}
            <div className="md:hidden bg-blue-600 space-y-2 p-4 hidden">
                <Link href="/" className="block text-white hover:text-gray-300">Home</Link>
                <Link href="#about" className="block text-white hover:text-gray-300">About Us</Link>
                <Link href="#features" className="block text-white hover:text-gray-300">Features</Link>
                <Link href="#team" className="block text-white hover:text-gray-300">Team</Link>
                <Link href="/dashboard" className="block text-white hover:text-gray-300">Dashboard</Link>
                <div className="space-y-4">
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-transform transform duration-200">
                        Sign In
                    </button>
                    <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-transform transform duration-200">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Add margin to push content below the navbar */}
            <div className="pt-16"></div> {/* Adjust based on your navbar height */}
        </div>
    );
}
