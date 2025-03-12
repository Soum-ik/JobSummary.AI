'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold animated-text-gradient bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600">
                        JobSummary.AI
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`transition-colors duration-200 ${isActive(item.href)
                                    ? 'text-blue-600 font-medium'
                                    : 'text-gray-600 hover:text-blue-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/tool"
                            className="shimmer-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-200"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 py-2 space-y-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block transition-colors duration-200 py-2 ${isActive(item.href)
                                    ? 'text-blue-600 font-medium'
                                    : 'text-gray-600'
                                    }`}
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/tool"
                            className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-md font-medium mt-3"
                            onClick={toggleMenu}
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;