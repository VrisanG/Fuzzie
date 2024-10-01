'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
function MenuOptions(){
    const PathName= usePathname()
    return (
        <nav className="dark:bg-black h-screen overflow-scroll justify-between items-center flex-col gap-10 py-6 px-2">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link className="flex font-semibold flex-row" href="/">Fuzzie</Link>
                
            </div>
        </nav>
    )
}

export default MenuOptions