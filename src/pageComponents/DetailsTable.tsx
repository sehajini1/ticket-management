
import { Link } from "react-router-dom"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"

import { Badge } from "../@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../@/components/ui/breadcrumb"
import { Button } from "../@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu"
import { Input } from "../@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../@/components/ui/pagination"
import { Progress } from "../@/components/ui/progress"
import { Separator } from "../@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "../@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../@/components/ui/tooltip"

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information."

export default function DetailsTable() {
  return (
    <div className="flex h-screen w-full flex-col bg-muted/40">
      
      <div className="flex flex-col m-8">
        
        
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>Registered Members</CardDescription>
                  <CardTitle className="text-4xl">50</CardTitle>
                </CardHeader>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>Confirmed Members</CardDescription>
                  <CardTitle className="text-4xl">42</CardTitle>
                </CardHeader>
                {/* <CardContent>
                  <div className="text-xs text-muted-foreground">
                    42
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label="12% increase" />
                </CardFooter> */}
              </Card>
            </div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">All</TabsTrigger>
                  <TabsTrigger value="month">Confirmed</TabsTrigger>
                  <TabsTrigger value="year">Completed</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center ">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Fulfilled
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Declined
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Refunded
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="h-7 gap-1 text-sm"
                  >
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button> */}
                </div>
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    {/* <CardTitle>Orders</CardTitle>
                    <CardDescription>
                      Recent orders from your store.
                    </CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                        <TableHead>S No</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Contact Number
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Email Address
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        
                        
                        
                        
                        <TableRow>
                        <TableCell className="hidden sm:table-cell">
                            01
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="hidden sm:table-cell">
                            02
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="hidden sm:table-cell">
                            03
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Refund
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="hidden sm:table-cell">
                            04
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
        
      </div>
    </div>
  )
}
