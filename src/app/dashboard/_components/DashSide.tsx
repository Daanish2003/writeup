"use client"
import { Button } from '@/components/ui/button'
import { Command, CommandInput } from '@/components/ui/command'
import { Separator } from '@/components/ui/separator'
import { SIDEBAR_ITEMS } from '@/constants/SidebarConstant'
import { Bell } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const DashSide = () => {
  const pathname = usePathname()


  return (
    <aside className="min-w-60 h-screen fixed top-0 bottom-0 bg-background border-border border-r-[1px] space-y-1">
       <div className="h-12 px-3 py-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl py-[0.5px]">WriteUp</span>
          <Button variant="outline" className="border-0 shadow-none ">
          <Bell size={20} />
          </Button>
        </div>
       </div>
       <Separator />
       <div>
        <Command>
          <CommandInput placeholder ="search for projects"/>
        </Command>
       </div>
       <Separator />
       <div>
        <div className="font-normal text-md space-y-2 px-3 py-2">
          {SIDEBAR_ITEMS.map((items, index) => {
            const isActive = pathname.startsWith(items.href)
            return (
              <div className={`${isActive ? "bg-foreground/5": "bg-background"} "flex flex-row items-center hover:bg-foreground/5 rounded-lg cursor-pointer"`} key={index}>
              <div className="py-1"><Button variant="link" className="w-full justify-start"><Link href={items.href} className="flex flex-row gap-4 items-center font-normal text-lg w-full">{items.icon}{items.name}</Link></Button></div>
              </div>
            )
          }) }
        </div>
       </div>
    </aside>
  )
}

export default DashSide