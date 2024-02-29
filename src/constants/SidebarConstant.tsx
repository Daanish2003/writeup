import { Folder, HomeIcon, Image, LayoutDashboard, Library, NotebookPenIcon, Settings, Trash2, User } from "lucide-react";

export const SIDEBAR_ITEMS = [ {
     name: "dashboard",
     href: "/dashboard/home",
     icon: <LayoutDashboard />
    }, {
     name: "Project",
     href: "/dashboard/projects",
    icon: <Folder />
    }, {
    name: "Teams",
    href: "/dashboard/teams",
    icon: <User />
    }, {
    name: "Works",
    href: "/dashboard/works",
    icon: <NotebookPenIcon />
    }, {
    name: "Trash",
    href: "/dashboard/trash",
    icon: <Trash2 />
    }, {
    name: "Setting",
    href: "/dashboard/setting",
    icon: <Settings />
    },
    ]