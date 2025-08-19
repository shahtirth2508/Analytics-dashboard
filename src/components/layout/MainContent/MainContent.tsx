import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronUpIcon,
  ClockIcon,
  ExternalLinkIcon,
  EyeIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  UserPlusIcon,
} from "../../icons";
import {
  statsCards,
  workTasks,
  employeeData,
  overdueTasksData,
  workflowsData,
  notepadItems,
} from "../../../data/dashboardData";

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#fafbfc] md:ml-[200px] xl:ml-[260px] min-w-0">
      <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6 max-w-full">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#212121]">
            Good Evening ! Ajay
          </h1>

          <Button
            variant="outline"
            className="h-8 flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#ebebeb] hover:bg-gray-50 flex-shrink-0 w-full sm:w-auto justify-center sm:justify-start"
          >
            <img
              className="w-4 h-4"
              alt="Dashboard"
              src="https://c.animaapp.com/mehdckjb0AcQbl/img/dashboard.svg"
            />
            <span className="text-sm font-medium text-[#212121] whitespace-nowrap">
              Add Widget
            </span>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {statsCards.map((card, index) => (
            <Card
              key={index}
              className="p-3 sm:p-4 bg-white rounded-lg border border-[#ebebeb] shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0 w-full">
                <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] mb-3">
                  {card.iconBg ? (
                    <div
                      className={`inline-flex items-center justify-center gap-2.5 p-3 relative flex-[0_0_auto] ${card.iconBg} rounded-lg`}
                    >
                      <img
                        className="relative w-9 h-9"
                        alt="Icon"
                        src={card.icon}
                      />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center gap-2.5 p-3 relative flex-[0_0_auto] bg-gray-50 rounded-lg">
                      <img
                        className="relative w-9 h-9"
                        alt="Icon"
                        src={card.icon}
                      />
                    </div>
                  )}
                  <div className="relative w-fit text-sm sm:text-base font-semibold text-[#212121] break-words">
                    {card.title}
                  </div>
                </div>

                <div className="flex flex-wrap items-start gap-x-2 sm:gap-x-3 gap-y-2 relative self-stretch w-full">
                  {card.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
                    >
                      <div className="relative w-fit text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                        {stat.label}
                      </div>
                      <Badge
                        className={`flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 px-[2px] sm:px-[3px] py-0 relative ${stat.bgColor} rounded-full border-0`}
                      >
                        <div
                          className={`relative text-xs ${stat.textColor} text-center`}
                        >
                          {stat.count}
                        </div>
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Work Allocated Section */}
        <Card className="bg-white rounded-lg border border-[#f0f0f0] shadow-sm overflow-hidden">
          <CardHeader className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-3 sm:p-4 border-b border-[#f0f0f0]">
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              <h3 className="text-base sm:text-lg font-semibold text-[#212121]">
                Work Allocated
              </h3>

              <div className="flex flex-wrap items-start gap-4 sm:gap-6 lg:gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <span className="text-xs sm:text-sm font-medium text-brandprimary">
                      Tasks
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-brandprimary">
                      10
                    </span>
                  </div>
                  <div className="w-full h-0.5 bg-brandprimary rounded-full" />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <span className="text-xs sm:text-sm font-medium text-gray-600">
                      Issues
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-600">
                      10
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <span className="text-xs sm:text-sm font-medium text-gray-600">
                      Forms
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-600">
                      10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full lg:w-auto">
              <Select>
                <SelectTrigger className="w-full sm:w-[140px] h-8 bg-gray-50 border border-gray-200 text-xs sm:text-sm rounded-lg">
                  <SelectValue placeholder="Select Employee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employee1">Employee 1</SelectItem>
                  <SelectItem value="employee2">Employee 2</SelectItem>
                  <SelectItem value="all">All Employees</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 hover:bg-gray-100 rounded-lg"
              >
                <MoreHorizontalIcon className="w-6 h-6 text-gray-500" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-64 overflow-y-auto">
              {workTasks.slice(0, 6).map((task, taskIndex) => (
                <Card
                  key={taskIndex}
                  className={`p-3 bg-white rounded-lg border border-[#f0f0f0] hover:shadow-md transition-shadow ${
                    task.isHighlighted ? "shadow-md border-brandprimary/20" : ""
                  }`}
                >
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <ChevronUpIcon className="w-5 h-5 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            ID {task.id}
                          </span>
                        </div>
                        <h4 className="text-sm font-medium text-[#212121] line-clamp-2">
                          {task.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1">
                        <MessageCircleIcon className="w-5 h-5 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {task.comments}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-5 h-5 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            {task.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-5 h-5 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            {task.time}
                          </span>
                        </div>
                      </div>

                      <div className="w-6 h-6 bg-brandprimary rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-white">
                          A
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-gray-100 rounded">
                          <img
                            className="w-4 h-4"
                            alt="Layout"
                            src="https://c.animaapp.com/mehdckjb0AcQbl/img/layout-alt-02.svg"
                          />
                        </div>

                        <Badge className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-md border border-orange-200">
                          {task.status}
                        </Badge>
                      </div>

                      <Badge className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg flex items-center gap-1">
                        <BriefcaseIcon className="w-3 h-3" />
                        {task.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Employee wise progress Section */}
        <Card className="bg-white rounded-lg border border-[#f0f0f0] shadow-sm overflow-hidden">
          <CardHeader className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 border-b border-[#f0f0f0]">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-[#212121]">
                Employee wise progress
              </h3>

              <div className="flex items-start gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <span className="text-sm font-medium text-brandprimary">
                      Tasks
                    </span>
                    <span className="text-sm font-medium text-brandprimary">
                      10
                    </span>
                  </div>
                  <div className="w-full h-0.5 bg-brandprimary rounded-full" />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-600">
                      Issues
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      10
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-600">
                      Workflows
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger className="w-[140px] h-8 bg-gray-50 border border-gray-200 text-sm rounded-lg">
                  <SelectValue placeholder="Select Employee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employee1">Employee 1</SelectItem>
                  <SelectItem value="employee2">Employee 2</SelectItem>
                  <SelectItem value="all">All Employees</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-500 hover:text-gray-700"
              >
                <ExternalLinkIcon className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-500 hover:text-gray-700"
              >
                <MoreHorizontalIcon className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="max-h-64 overflow-y-auto overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader className="sticky top-0 bg-white z-10">
                  <TableRow className="bg-gray-50 border-b border-gray-200">
                    <TableHead className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[100px]">
                      Name
                    </TableHead>
                    <TableHead className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[120px]">
                      Department
                    </TableHead>
                    <TableHead className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[80px]">
                      Assigned
                    </TableHead>
                    <TableHead className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[80px]">
                      Ongoing
                    </TableHead>
                    <TableHead className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[80px]">
                      Overdue
                    </TableHead>
                    <TableHead className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[90px]">
                      Completed
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeeData.map((employee, index) => (
                    <TableRow
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900">
                        {employee.name}
                      </TableCell>
                      <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900">
                        {employee.department}
                      </TableCell>
                      <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 text-center">
                        {employee.assigned}
                      </TableCell>
                      <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 text-center">
                        {employee.ongoing}
                      </TableCell>
                      <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 text-center">
                        {employee.overdue}
                      </TableCell>
                      <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 text-center">
                        {employee.completed}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* 4-Section Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Personal Notepad */}
          <Card className="bg-white rounded-lg border border-[#f0f0f0] shadow-sm h-[280px] sm:h-[320px] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4 border-b border-[#f0f0f0] flex-shrink-0">
              <h3 className="text-base sm:text-lg font-semibold text-[#212121]">
                Personal Notepad
              </h3>
              <div className="flex items-center gap-1 sm:gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700"
                >
                  <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700"
                >
                  <MoreHorizontalIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-3 sm:p-4 space-y-3 sm:space-y-4 flex-1 overflow-y-auto">
              {notepadItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-300 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-medium text-[#212121] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed break-words">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Department wise allocation */}
          <Card className="bg-white rounded-lg border border-[#f0f0f0] shadow-sm h-[280px] sm:h-[320px] flex flex-col">
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border-b border-[#f0f0f0] flex-shrink-0">
              <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-auto">
                <h3 className="text-base sm:text-lg font-semibold text-[#212121]">
                  Department wise allocation
                </h3>

                <div className="flex flex-wrap items-start gap-4 sm:gap-6 lg:gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <span className="text-xs sm:text-sm font-medium text-brandprimary">
                        Tasks
                      </span>
                    </div>
                    <div className="w-full h-0.5 bg-brandprimary rounded-full" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <span className="text-xs sm:text-sm font-medium text-gray-600">
                        Issues
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                      <span className="text-xs sm:text-sm font-medium text-gray-600">
                        Forms
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700"
                ></Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700"
                >
                  <MoreHorizontalIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-3 sm:p-4 lg:p-6 flex-1 overflow-hidden">
              {/* Chart Legend */}
              <div className="flex justify-end items-center gap-2 sm:gap-4 text-xs mb-4 sm:mb-6">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#7dd3c0] rounded" />
                  <span className="text-gray-600 text-xs">Tasks</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#ffd966] rounded" />
                  <span className="text-gray-600 text-xs">Overdue Tasks</span>
                </div>
              </div>

              {/* Chart */}
              <div className="flex gap-2 sm:gap-4 h-full max-h-[150px] sm:max-h-[180px]">
                {/* Y-axis */}
                <div className="flex flex-col justify-between h-full text-xs text-gray-500 pt-2">
                  <span>100%</span>
                  <span>80%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                </div>

                {/* Chart bars */}
                <div className="flex-1 flex items-end justify-center gap-1 sm:gap-2 lg:gap-3 h-full">
                  <div
                    className="w-4 sm:w-5 lg:w-6 bg-[#7dd3c0] rounded-t-sm"
                    style={{ height: "20%" }}
                  >
                    <div
                      className="w-full bg-[#ffd966] rounded-t-sm"
                      style={{ height: "25%" }}
                    ></div>
                  </div>
                  <div
                    className="w-4 sm:w-5 lg:w-6 bg-[#7dd3c0] rounded-t-sm"
                    style={{ height: "35%" }}
                  >
                    <div
                      className="w-full bg-[#ffd966] rounded-t-sm"
                      style={{ height: "23%" }}
                    ></div>
                  </div>
                  <div
                    className="w-4 sm:w-5 lg:w-6 bg-[#7dd3c0] rounded-t-sm"
                    style={{ height: "50%" }}
                  >
                    <div
                      className="w-full bg-[#ffd966] rounded-t-sm"
                      style={{ height: "24%" }}
                    ></div>
                  </div>
                  <div
                    className="w-4 sm:w-5 lg:w-6 bg-[#7dd3c0] rounded-t-sm"
                    style={{ height: "65%" }}
                  >
                    <div
                      className="w-full bg-[#ffd966] rounded-t-sm"
                      style={{ height: "23%" }}
                    ></div>
                  </div>
                  <div
                    className="w-4 sm:w-5 lg:w-6 bg-[#7dd3c0] rounded-t-sm"
                    style={{ height: "75%" }}
                  >
                    <div
                      className="w-full bg-[#ffd966] rounded-t-sm"
                      style={{ height: "24%" }}
                    ></div>
                  </div>
                  <div
                    className="w-4 sm:w-5 lg:w-6 bg-[#7dd3c0] rounded-t-sm"
                    style={{ height: "85%" }}
                  >
                    <div
                      className="w-full bg-[#ffd966] rounded-t-sm"
                      style={{ height: "24%" }}
                    ></div>
                  </div>
                  <div
                    className="w-4 sm:w-5 lg:w-6 bg-[#7dd3c0] rounded-t-sm"
                    style={{ height: "90%" }}
                  >
                    <div
                      className="w-full bg-[#ffd966] rounded-t-sm"
                      style={{ height: "24%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* X-axis label */}
              <div className="text-center text-xs text-gray-600 mt-2 sm:mt-4">
                Departments
              </div>
            </CardContent>
          </Card>

          {/* Overdue tasks */}
          <Card className="bg-white rounded-lg border border-[#f0f0f0] shadow-sm h-[280px] sm:h-[320px] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4 border-b border-[#f0f0f0] flex-shrink-0">
              <div className="flex items-center gap-1 sm:gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-[#212121]">
                  Overdue tasks
                </h3>
                <Badge className="bg-gray-100 text-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs">
                  10
                </Badge>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700"
                >
                  <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700"
                >
                  <MoreHorizontalIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex-1 overflow-hidden">
              <div className="overflow-y-auto overflow-x-auto h-full">
                <Table className="min-w-full">
                  <TableHeader className="sticky top-0 bg-gray-50 z-10">
                    <TableRow className="border-b border-gray-200">
                      <TableHead className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[120px]">
                        Task Name
                      </TableHead>
                      <TableHead className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[100px]">
                        Assigned to
                      </TableHead>
                      <TableHead className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[80px]">
                        Status
                      </TableHead>
                      <TableHead className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[90px]">
                        Due date
                      </TableHead>
                      <TableHead className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 min-w-[80px]">
                        Reassign
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {overdueTasksData.slice(0, 4).map((task, index) => (
                      <TableRow
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900">
                          {task.task}
                        </TableCell>
                        <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900">
                          {task.assignedTo}
                        </TableCell>
                        <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                          <Badge className="bg-orange-100 text-orange-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                            {task.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 text-center">
                          {task.dueDate}
                        </TableCell>
                        <TableCell className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 hover:text-gray-700"
                          >
                            <UserPlusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Workflows */}
          <Card className="bg-white rounded-lg border border-[#f0f0f0] shadow-sm h-[280px] sm:h-[320px] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between p-3 sm:p-4 border-b border-[#f0f0f0] flex-shrink-0">
              <h3 className="text-base sm:text-lg font-semibold text-[#212121]">
                Workflows
              </h3>
              <div className="flex items-center gap-1 sm:gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700"
                >
                  <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-gray-700"
                >
                  <MoreHorizontalIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-3 sm:p-4 flex-1 overflow-hidden">
              <div className="overflow-y-auto h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {workflowsData.slice(0, 4).map((workflow, index) => (
                    <div
                      key={index}
                      className="p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200 flex flex-col justify-between min-h-[80px] sm:min-h-[100px]"
                    >
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <h4 className="text-xs sm:text-sm font-medium text-[#212121] flex-1 pr-1 sm:pr-2 break-words">
                          {workflow.title}
                        </h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded flex-shrink-0"
                        >
                          <EyeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <span className="text-xs">Responses</span>
                            <Badge className="bg-white text-gray-700 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              {workflow.responses}
                            </Badge>
                          </div>
                          <div className="w-px h-3 sm:h-4 bg-gray-300"></div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs">Tasks</span>
                            <Badge className="bg-white text-gray-700 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                              {workflow.tasks}
                            </Badge>
                          </div>
                        </div>
                        <Badge className="w-5 h-5 sm:w-6 sm:h-6 bg-brandprimary text-white rounded-full flex items-center justify-center text-xs ml-1 sm:ml-2">
                          A
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
