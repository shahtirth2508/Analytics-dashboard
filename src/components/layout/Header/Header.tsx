import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import {
  BellIcon,
  BuildingIcon,
  CalendarIcon,
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
} from "../../icons";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex items-center gap-2 lg:gap-6 px-3 lg:px-6 py-3 bg-white border-b border-[#ebebeb] flex-shrink-0 md:ml-[200px] xl:ml-[260px] min-w-0">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden flex w-8 h-8 items-center justify-center hover:bg-gray-100 rounded-lg"
      >
        <MenuIcon className="w-6 h-6 text-[#212121]" />
      </Button>

      <div className="flex items-center justify-between flex-1 min-w-0">
        <div className="flex items-center">
          <div className="flex items-center gap-1">
            <HomeIcon className="w-6 h-6 text-[#212121]" />
            <span className="text-sm font-medium text-[#212121] whitespace-nowrap">
              Home
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 lg:gap-4 relative flex-[0_0_auto]">
          {/* Search Bar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-2 bg-neutralbg rounded-lg w-[280px]">
            <img
              className="relative w-4 h-4"
              alt="Search"
              src="https://c.animaapp.com/mehdckjb0AcQbl/img/frame-1410091207.svg"
            />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-[#212121] placeholder:text-neutralsub-content"
            />
          </div>

          {/* Mobile Search Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden flex w-8 h-8 items-center justify-center gap-2.5 relative hover:bg-gray-100 rounded-full"
          >
            <img
              className="relative w-4 h-4"
              alt="Search"
              src="https://c.animaapp.com/mehdckjb0AcQbl/img/frame-1410091207.svg"
            />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="flex w-8 h-8 items-center justify-center gap-2.5 relative hover:bg-gray-100 rounded-full"
          >
            <BellIcon className="relative w-6 h-6 text-[#212121]" />
          </Button>

          {/* Desktop Date/Outlet selectors */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-2 bg-neutralbg rounded-lg">
            <CalendarIcon className="relative w-5 h-5 text-[#212121]" />
            <div className="text-[#212121] relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
              24-03-2001
            </div>
          </div>

          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-2 bg-neutralbg rounded-lg cursor-pointer hover:bg-gray-100">
            <BuildingIcon className="relative w-5 h-5 text-[#212121]" />
            <div className="text-[#212121] relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
              Outlet name
            </div>
            <ChevronDownIcon className="relative w-5 h-5 text-[#212121]" />
          </div>

          <Separator
            orientation="vertical"
            className="hidden lg:relative h-6 w-px bg-[#ebebeb]"
          />

          <Button className="bg-brandprimary inline-flex h-8 lg:h-9 items-center justify-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 relative rounded-lg hover:bg-brandprimary/90 transition-colors shadow-sm">
            <PlusIcon className="relative w-5 h-5" />
            <span className="hidden lg:inline relative font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-white text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
              Create
            </span>
          </Button>

          {/* User Profile */}
          <div className="inline-flex items-center gap-2 px-2 py-1 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-brandprimary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <ChevronDownIcon className="hidden lg:relative w-5 h-5 text-[#212121]" />
          </div>
        </div>
      </div>
    </header>
  );
};
