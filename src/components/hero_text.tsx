
import { cn } from "@/lib/utils"
export const HeroText = () => {

  return (
    <div className="flex py-4 border border-white">
      {Text.map((item, index) => {
        return (
          <span className="text-hero font-extrabold tracking-tighter" key={index}>{item.letter}</span>
        )
      })}

    </div>
  )
}


const Text = [
  {
    letter: "P",
    change: false,
  },
  {
    letter: "U",
    change: true,
  },
  {
    letter: "L",
    change: false,
  },
  {
    letter: "S",
    change: false,
  },
  {
    letter: "E",
    change: false,
  }
]
