import { ListFilter } from "lucide-react";

import { Badge } from "../@/components/ui/badge";
import { Button } from "../@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../@/components/ui/tabs";
import { useEffect, useState } from "react";
import Header from "./Header";

const staticData = [
    {
      id: 1,
      name: "Liam Johnson",
      email: "liam@example.com",
      status: "Fulfilled",
      statusType: "secondary" as "secondary" | "outline" | "default" | "destructive", // Adjust as needed
      date: "2023-06-23",
      amount: "$250.00",
      isconfirmed:true,
    },
    {
      id: 2,
      name: "Emma Brown",
      email: "emma@example.com",
      status: "Fulfilled",
      statusType: "secondary" as "secondary" | "outline" | "default" | "destructive", // Adjust as needed
      date: "2023-06-26",
      amount: "$450.00",
      isconfirmed:false,
    },
    {
      id: 3,
      name: "Olivia Smith",
      email: "olivia@example.com",
      status: "Declined",
      statusType: "outline" as "secondary" | "outline" | "default" | "destructive", // Adjust as needed
      date: "2023-06-24",
      amount: "$150.00",
      isconfirmed:true,
    },
  ];

export default function DetailsTable() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleConfirm = (id: number) => {
    console.log(`Confirm clicked for ID ${id}`);
    // Add your confirm logic here
  };

  const handleDecline = (id: number) => {
    console.log(`Decline clicked for ID ${id}`);
    // Add your decline logic here
  };

  return (
    <div className="flex h-screen w-full flex-col bg-muted/40">
      <Header/>
      <div className="flex flex-col m-8 pt-20">
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
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                    {staticData.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell className="hidden sm:table-cell">{index + 1}</TableCell>
                          <TableCell>
                            <div className="font-medium">{item.name}</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              {item.email}
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">{item.status}</TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant={item.statusType}>
                              {item.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{item.date}</TableCell>
                          <TableCell className="text-right">{item.amount}</TableCell>
                          <TableCell className="text-right">
                            {item.isconfirmed ? (
                              <Badge variant="default">Confirmed</Badge>
                            ) : (
                              <>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleConfirm(item.id)}
                                >
                                  Confirm
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="ml-2"
                                  onClick={() => handleDecline(item.id)}
                                >
                                  Decline
                                </Button>
                              </>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
