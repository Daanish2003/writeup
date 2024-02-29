"use client"
import { Button } from '@/components/ui/button'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProjectNavMenu } from '@/constants/ProjectNavConstant'

import { BookOpenTextIcon, ChevronDown, GanttChartSquare, Home, LucidePenBox } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { LiaSitemapSolid } from 'react-icons/lia'


const ProjectNav = () => {
  return (
    <div className="h-12 sticky flex flex-row border-b-[1px] border-b-foreground/10">
        <div className="flex items-center justify-center px-3 border-r-[1px] border-r-foreground/10">
        <div className="text-xl flex items-center">WriteUp</div>
        </div>
        <div className="flex items-center">
        <Button variant="link"><Link href="/dashboard/home" className="flex gap-3 text-md items-center"><Home  size="16"/>Home</Link></Button>
        </div>
        <Separator orientation='vertical'/>
        <div className="w-screen flex items-center justify-between">
            <Menubar className="border-none shadow-none">
               {ProjectNavMenu.map((menu, index) => {
                return (
                    <MenubarMenu key={index}>
                        <MenubarTrigger className="gap-2">
                            <span>{menu.title}</span>
                            <ChevronDown size="14"/>
                        </MenubarTrigger>
                        <MenubarContent>
                            {menu.items.map((item, index) => {
                                return (
                                    <MenubarItem key={index} className="py-2 px-3 flex justify-between">
                                        <div className="flex text-md font-normal items-center gap-2">
                                                <span >{item.icon}</span>
                                                <span>{item.title}</span>
                                        </div>
                                        <div>
                                            <span>{item.shortcut}</span>
                                        </div>
                                    </MenubarItem>
                                )
                            })}
                        </MenubarContent>
                    </MenubarMenu>
                )
               }) }
            </Menubar>
            <Tabs defaultValue='whiteboard'>
                <TabsList className="flex items-center gap-2">
                    <TabsTrigger value="whiteboard">
                        <Link href="/whiteboard">
                            <LucidePenBox />
                        </Link>
                    </TabsTrigger>
                    <TabsTrigger value="outline">
                        <Link href="/outline">
                            <GanttChartSquare />
                        </Link>
                    </TabsTrigger>
                    <TabsTrigger value="mindmaps">
                        <Link href="mindmaps">
                            <LiaSitemapSolid size="21"/>
                        </Link>
                    </TabsTrigger>
                    <TabsTrigger value="manuscript">
                        <Link href="manuscript">
                            <BookOpenTextIcon />
                        </Link>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    </div>
  )
}

export default ProjectNav