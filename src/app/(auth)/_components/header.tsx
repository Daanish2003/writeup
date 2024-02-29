import { cn } from '@/lib/utils';
import React from 'react'

interface HeaderProps {
    label: string;
}

const Header = ({label}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <h1 className={cn("text-4xl font-bold")}>WriteUp</h1>
        <p className="text-muted-foreground text-md font-semibold">{label}</p>
    </div>
  )
}

export default Header