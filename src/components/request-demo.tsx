'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Target, ArrowRight } from "lucide-react"

export function RequestDemoButton() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="relative group flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-4 xl:px-6 py-2 md:py-2.5 lg:py-2.5 xl:py-3 bg-[#008753] text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-base rounded-full text-white font- transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2 xl:gap-3 relative z-10">
            <Target className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            <span>Request a Demo</span>
            <ArrowRight className="hidden md:block w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 transition-transform group-hover:translate-x-1" />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <h2 className="text-lg font-semibold">Schedule a Demo</h2>
        <p className="text-sm text-muted-foreground mb-4">Please fill in your preferred time and contact info.</p>
        {/* Add form inputs or calendar logic here */}
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="datetime-local"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="bg-[#008753] text-white w-full py-2 rounded-md hover:bg-[#007147]"
          >
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
