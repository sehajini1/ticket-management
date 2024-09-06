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
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../@/components/ui/pagination";
import { fetchUsers } from "../Servers/API";

interface User {
  _id: string;
  name: string;
  addres: string;
  nic:string;
  gender:string;
  career:string;
  email: string;
  serialNumber:string;
  docLink:string;
  contactNumber: string;
  ticketStatus:string;
  natureOfBusiness:string;
  sheetRowNumber:number;
}

const staticData = [
  {
    id: 1,
    name: "Liam Johnson",
    email: "liam@example.com",
    status: "Fulfilled",
    statusType: "secondary" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-23",
    amount: "$250.00",
    isconfirmed: true,
  },
  {
    id: 2,
    name: "Emma Brown",
    email: "emma@example.com",
    status: "Fulfilled",
    statusType: "secondary" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-26",
    amount: "$450.00",
    isconfirmed: false,
  },
  {
    id: 3,
    name: "Olivia Smith",
    email: "olivia@example.com",
    status: "Declined",
    statusType: "outline" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-24",
    amount: "$150.00",
    isconfirmed: true,
  },
  {
    id: 4,
    name: "Olivia Smith",
    email: "olivia@example.com",
    status: "Declined",
    statusType: "outline" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-24",
    amount: "$150.00",
    isconfirmed: true,
  },
  {
    id: 5,
    name: "Olivia Smith",
    email: "olivia@example.com",
    status: "Declined",
    statusType: "outline" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-24",
    amount: "$150.00",
    isconfirmed: true,
  },
  {
    id: 6,
    name: "Olivia Smith",
    email: "olivia@example.com",
    status: "Declined",
    statusType: "outline" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-24",
    amount: "$150.00",
    isconfirmed: true,
  },
  {
    id: 7,
    name: "Emma Brown",
    email: "emma@example.com",
    status: "Fulfilled",
    statusType: "secondary" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-26",
    amount: "$450.00",
    isconfirmed: false,
  },
  {
    id: 8,
    name: "Emma Brown",
    email: "emma@example.com",
    status: "Fulfilled",
    statusType: "secondary" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-26",
    amount: "$450.00",
    isconfirmed: false,
  },
  {
    id: 9,
    name: "Emma Brown",
    email: "emma@example.com",
    status: "Fulfilled",
    statusType: "secondary" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-26",
    amount: "$450.00",
    isconfirmed: false,
  },
  {
    id: 10,
    name: "Emma Brown",
    email: "emma@example.com",
    status: "Fulfilled",
    statusType: "secondary" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-26",
    amount: "$450.00",
    isconfirmed: false,
  },
  {
    id: 11,
    name: "Emma Brown",
    email: "emma@example.com",
    status: "Fulfilled",
    statusType: "secondary" as
      | "secondary"
      | "outline"
      | "default"
      | "destructive", // Adjust as needed
    date: "2023-06-26",
    amount: "$450.00",
    isconfirmed: false,
  },
];

export default function DetailsTable() {
  const [darkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [users, setUsers] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers(currentPage, itemsPerPage);
        setUsers(data.users);
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleConfirm = (id: number) => {
    console.log(`Confirm clicked for ID ${id}`);
  };

  const handleDecline = (id: number) => {
    console.log(`Decline clicked for ID ${id}`);
  };

  // Get the total number of pages
  // const totalPages = Math.ceil(staticData.length / itemsPerPage);

  // Slice the data to only show items for the current page
  // const currentData = staticData.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col bg-muted/40">
      <Header />
      <div className="flex flex-col m-8 pt-[3rem]">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>Registered Members</CardDescription>
                <CardTitle className="text-[1.2rem]">50</CardTitle>
              </CardHeader>
            </Card>
            <Card x-chunk="dashboard-05-chunk-2">
              <CardHeader className="pb-2">
                <CardDescription>Confirmed Members</CardDescription>
                <CardTitle className="text-[1.2rem]">42</CardTitle>
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
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>Total Attendance</CardDescription>
                <CardTitle className="text-[1.2rem]">40</CardTitle>
              </CardHeader>
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
              </div>
            </div>
            <TabsContent value="week">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
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
                      {users.map((user, index) => (
                        <TableRow key={user._id}>
                          <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                          <TableCell>
                            <div className="font-medium">{user.name}</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              {user.email}
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {user.contactnumber}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant={user.name}>
                              {user.ticketStatus}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {user.name}
                          </TableCell>
                          <TableCell className="text-right">
                            {user.name}
                          </TableCell>
                          {/* <TableCell className="text-right">
                            {user.isconfirmed ? (
                              <Badge variant="default">Confirmed</Badge>
                            ) : (
                              <div className="flex justify-end gap-[2rem]">
                                <GiConfirmed
                                  size="1.2rem"
                                  className="cursor-pointer text-green-500"
                                  onClick={() => handleConfirm(user._id)}
                                />
                                <RiDeleteBin6Fill
                                  size="1.2rem"
                                  className="cursor-pointer text-red-500"
                                  onClick={() => handleDecline(user._id)}
                                />
                              </div>
                            )}
                          </TableCell> */}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <div className="flex justify-center mt-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          if (currentPage === 1) {
                            e.preventDefault();
                          } else {
                            handlePageChange(currentPage - 1);
                          }
                        }}
                        className={`${
                          currentPage === 1
                            ? "pointer-events-none text-gray-400"
                            : ""
                        }`}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink
                          href="#"
                          onClick={() => handlePageChange(index + 1)}
                          className={`${
                            currentPage === index + 1 ? "text-bold" : ""
                          }`}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          if (currentPage === totalPages) {
                            e.preventDefault();
                          } else {
                            handlePageChange(currentPage + 1);
                          }
                        }}
                        className={`${
                          currentPage === totalPages
                            ? "pointer-events-none text-gray-400"
                            : ""
                        }`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
