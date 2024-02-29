import { LayoutProps } from '@/types/types'
import React from 'react'
import ProjectNav from './_components/ProjectNav'


const ProjectLayout = ({children}: LayoutProps) => {
  return (
    <div>
      <ProjectNav />
      {children}
    </div>
  )
}
export default ProjectLayout