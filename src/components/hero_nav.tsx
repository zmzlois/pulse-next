import { BrainIcon } from "./icons/brain"
import { ChevronRight } from "./icons/chevron_right"
import { Button } from "./ui/button"

export const HeroNav = () => {
  return (
    <div className="flex w-full justify-between">
      <BrainIcon className="w-10 h-10" />
      <a href="#">
        <Button className="bg-ternary rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none flex items-center gap-2" variant="download">

          <span className="">Download now</span>
          <ChevronRight />
        </Button>
      </a>

    </div>
  )
}
