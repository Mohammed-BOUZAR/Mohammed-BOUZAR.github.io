"use client";
import { cn } from "@/lib/utils";
import { use, useState } from "react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "./ui/navbar-menu";
import { FloatingNav } from "./ui/floating-navbar";
import { navItems } from "@/data";

function Navbar({ className }: { className?: string }) {
	
	return (
		<div
			className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
		>
			<FloatingNav navItems={navItems} />
		</div>
	);
}

export default Navbar;