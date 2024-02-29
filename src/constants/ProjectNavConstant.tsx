import { QuestionMarkIcon, ResetIcon } from "@radix-ui/react-icons";
import { AtSign, BookOpenTextIcon, BookPlus, Bug, Copy, Download, EditIcon, Eye, FileDownIcon, Filter, Focus, GanttChartSquare, HelpCircleIcon, Import, Link, LucidePenBox, Map, MessageSquareMoreIcon, PaletteIcon, Pen, Redo, Scissors, Share, Share2, Text, Trash2, Undo, Undo2 } from "lucide-react";
import { ReactElement } from "react";
import { FcFaq } from "react-icons/fc";
import { LiaSitemapSolid } from "react-icons/lia";
import { IconType } from "react-icons/lib";
import { MdContentPaste, MdPublish, MdSelectAll } from "react-icons/md";
import { MdContentPasteOff } from "react-icons/md";

interface ProjectNavMenuItem {
     title: string,
     icon: ReactElement,
     shortcut?: string,
     subitems?: ProjectNavMenuItem[]
}

interface ProjectNavMenuProps {
     id: string,
     title: string,
     items: ProjectNavMenuItem[],
     itemstwo?: ProjectNavMenuItem[],
     itemthree?: ProjectNavMenuItem[]
}


export const ProjectNavConstant = [{
     id: "whiteboard",
     title: "Whiteboard",
     icon: <LucidePenBox />,
     layout: "/whiteboard"
    }, {
     id: "outline",
     title: "Outline",
     icon: <GanttChartSquare />,
     layout: "/outline"
    }, {
     id : "mindmaps",
     title : "Mindmaps",
     icon: <LiaSitemapSolid size="21"/> ,
     layout: "/mindmaps"
    }, {
     id: "manuscript",
     title: "Manuscript",
     icon: <BookOpenTextIcon />,
     layout: "/manuscript"
}]

export const ProjectNavMenu: ProjectNavMenuProps[] = [{ // Added square brackets to make it an array
     id: "file",
     title: "File",
     items: [{
          title: "Rename Project",
          icon: <Pen size="18"/>
     }, {
          title: "Share Project",
          icon: <Share2 size="18"/>
     }, {
          title:"Import Document",
          icon: <Download size="18"/>
     }, {
          title: "Export Elements",
          icon: <Import size="18"/>
     }, {
           title: "Add Element to Project",
           icon: <Link size="18"/>
     }, {
          title: "Delete Project",
          icon: <Trash2 size="18"/>
     }]
     }, {
     id: "edit",
     title: "Edit",
     items: [{
          title: "Undo",
          icon: <Undo size="18"/>,
          shortcut: "Ctrl+Z"
     }, {
          title: "Redo",
          icon: <Redo size="18"/>,
          shortcut: "Ctrl+Y"
     }, {
          title: "Cut Text",
          icon: <Scissors size="18"/>,
          shortcut: "Ctrl+X"
     }, {
          title: "Copy Text",
          icon: <Copy size="18"/>,
          shortcut: "Ctrl+C"
     }, {
          title: "Paste Text",
          icon: <MdContentPaste size="18"/>,
          shortcut: "Ctrl+V"
     }],
     itemstwo : [
          {
               title: "Paste Without Formatting",
               icon: <MdContentPasteOff size="18"/>,
               shortcut: "Ctrl+Shift+V",
          }, {
               title: "Select All text",
               icon: <MdSelectAll size="18"/>,
          }, {
               title: "Add Word from Language",
               icon: <BookPlus size="18"/>
          }, {
               title: "Insert Element Tag",
               icon: <AtSign size="18"/>,
               shortcut: "@"
          }
     ]
     }, {
     id: "view",
     title: "View",
     items: [{
          title: "View Mode",
          icon: <Eye />,
          subitems: [{
               title: "Editing",
               icon: <EditIcon size="18"/>
          }, {
               title: "View Only",
               icon: <Eye size="18"/>
          }]
     }, {
          title: "Focus Mode",
          icon: <Focus size="18"/>
     }],
     itemstwo: [{
         title: "Manage Themes",
         icon: <PaletteIcon size="18"/>
     }],
     itemthree: [{
          title: "Module Filters",
          icon: <Filter size="18"/>
     }]
     }, {
     id: "publish",
     title: "Publish",
     items: [{
          title: "Publishing Dashboard",
          icon: <MdPublish size="18"/>
     }, {
          title: "Compile Manuscript",
          icon: <FileDownIcon size="18"/>
     }],
     itemstwo: [{
          title: "Self-Publishing",
          icon: <HelpCircleIcon size="18"/>
     }, {
          title: "Publishing Guidelines",
          icon: <HelpCircleIcon size="18"/>
     }]
     }, {
     id: "help",
     title: "Help",
     items: [{
          title: "FAQ",
          icon: <HelpCircleIcon size="18"/>
     }, {
          title: "Reset",
          icon: <ResetIcon />
     }, {
          title: "Report Bug",
          icon: <Bug size="18"/>
     }, {
          title: "Give Feedback",
          icon: <MessageSquareMoreIcon size="18"/>
     }],
     }]