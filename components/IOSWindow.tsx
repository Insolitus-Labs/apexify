import type React from "react"

interface IOSWindowProps {
  children: React.ReactNode
  title: string
}

const IOSWindow: React.FC<IOSWindowProps> = ({ children, title }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-2xl bg-[#1D1D1D] bg-opacity-50 backdrop-filter backdrop-blur-sm mt-[-5rem] relative group">
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))] opacity-0 group-hover:opacity-100"
        style={{
          "--size": "300",
          "--duration": "10s",
          "--anchor": "90",
          "--border-width": "1.5",
          "--color-from": "#ffaa40",
          "--color-to": "#9c40ff",
          "--delay": "-0s",
        }}
      />
      <div className="bg-[#181818] bg-opacity-75 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-white text-sm font-medium ml-4">{title}</div>
      </div>
      <div className="p-4 bg-[#1D1D1D] bg-opacity-50">{children}</div>
    </div>
  )
}

export default IOSWindow

