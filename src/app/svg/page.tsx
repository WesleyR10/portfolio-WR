'use client'
import { Cursor } from '@/components/cursor'
import { JavascriptSvg } from '@/components/svg_animation/javascript'

export default function SVG() {
  return (
    <div className="flex h-screen w-screen gap-3 bg-[#1E293B] p-8">
      <Cursor />
      <JavascriptSvg className="h-20 w-20" />
      <JavascriptSvg className="h-20 w-20" />
    </div>
  )
}
