import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const HomeMain = () => {
  return (
    <div className="py-5 px-5">
        <Card className="w-[360px] h-48">
          <div className="ml-28 text-lg mt-3">
          <CardTitle>Project 1</CardTitle>
          <span>2 chapters</span>
          <span>25 extras</span>
          </div>
        </Card>
    </div>
  )
}

export default HomeMain