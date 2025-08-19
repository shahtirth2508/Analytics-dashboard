import { useState } from "react";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { Button } from "../../ui/button";
import {
  AlertCircleIcon,
  CalendarIcon,
  CheckSquareIcon,
  FileTextIcon,
  HomeIcon,
  LayoutIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  TrendingUpIcon,
  UsersIcon,
} from "../../icons";

const navigationItems = [
  {
    id: "home",
    label: "Home",
    icon: HomeIcon,
    isActive: true,
  },
  {
    id: "tasks1",
    label: "Tasks",
    icon: CheckSquareIcon,
    isActive: false,
  },
  {
    id: "tasks2",
    label: "Tasks",
    icon: CheckSquareIcon,
    isActive: false,
  },
  {
    id: "issues",
    label: "Issues",
    icon: AlertCircleIcon,
    isActive: false,
  },
  {
    id: "forms",
    label: "Forms",
    icon: FileTextIcon,
    isActive: false,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: CalendarIcon,
    isActive: false,
  },
  {
    id: "browse-templates",
    label: "Browse Templates",
    icon: LayoutIcon,
    isActive: false,
  },
  {
    id: "template-library",
    label: "Temlate Library",
    icon: LayoutIcon,
    isActive: false,
  },
  {
    id: "user-management",
    label: "User Management",
    icon: UsersIcon,
    isActive: false,
  },
  {
    id: "reports",
    label: "Reports",
    icon: TrendingUpIcon,
    isActive: false,
  },
  {
    id: "settings",
    label: "Settings",
    icon: SettingsIcon,
    isActive: false,
  },
  {
    id: "logout",
    label: "Log Out",
    icon: LogOutIcon,
    isActive: false,
  },
];

export const NavigationMenuSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <nav className="hidden md:flex flex-col w-[200px] xl:w-[260px] bg-white border-r border-[#f0f0f0] flex-shrink-0 fixed top-0 left-0 h-screen overflow-y-auto z-10">
      {/* Logo Section */}
      <div className="p-4 border-b border-[#f0f0f0]">
        <img
          className="w-28 lg:w-32 h-6 lg:h-7"
          alt="Logo"
          src="https://c.animaapp.com/mehdckjb0AcQbl/img/top.svg"
        />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col p-4 space-y-1 overflow-y-auto">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeItem === item.id;

          return (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full h-10 flex items-center gap-3 px-3 py-2 rounded-lg justify-start hover:bg-brandlight transition-all duration-200 ${
                isActive ? "bg-brandlight text-brandprimary" : "text-[#6b7280]"
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              <IconComponent
                className={`w-5 h-5 flex-shrink-0 ${
                  isActive ? "text-brandprimary" : "text-[#6b7280]"
                }`}
              />
              <span
                className={`text-sm font-medium text-left ${
                  isActive ? "text-brandprimary" : "text-[#374151]"
                }`}
              >
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>

      {/* Bottom section */}
      <div className="mt-auto p-4 border-t border-[#f0f0f0]">
        <Button
          variant="ghost"
          className="w-full h-10 flex items-center gap-3 px-3 py-2 rounded-lg justify-start hover:bg-gray-50 transition-colors mb-3"
        >
          <MessageCircleIcon className="w-5 h-5 text-[#6b7280]" />
          <span className="text-sm font-medium text-[#374151]">Chat</span>
        </Button>

        <div className="flex items-center gap-3 p-3 bg-[#f8f9fa] rounded-lg">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-brandprimary text-white text-sm font-medium">
              A
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col flex-1">
            <div className="text-sm font-medium text-[#212121]">Ajay</div>
            <div className="text-xs text-[#6b7280]">Manager</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
