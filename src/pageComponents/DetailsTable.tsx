import { ListFilter, MoreHorizontal } from "lucide-react";

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
  DropdownMenuItem,
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
import { useUserContext } from "./contexts/UserContext";
import UserDetailsDialog  from './AllDetailsDialog'

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

function getBadgeClass(status: string) {
  switch (status) {
    case "approved":
      return "bg-green-500 text-white hover:ring-1 hover:ring-green-500 hover:bg-transparent hover:text-green-500"; 
    case "pending":
      return "bg-yellow-500 text-white hover:ring-1 hover:ring-yellow-500 hover:bg-transparent hover:text-yellow-500"; 
    case "rejected":
      return "bg-red-500 text-white hover:ring-1 hover:ring-red-500 hover:bg-transparent hover:text-red-500"; 
    default:
      return "bg-gray-500 text-white"; 
  }
}

export default function DetailsTable() {
  const [darkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [users, setUsers] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { setSelectedUser } = useUserContext(); 

  const handleViewDetails = (user: any) => {
    console.log("user",user)
    setSelectedUser(user); 
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  

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
                <CardHeader className="px-7"></CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Contact Number
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          NIC
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Career
                        </TableHead>
                        <TableHead className="">Ticket Status</TableHead>
                        <TableHead className=" hidden sm:table-cell">
                          Gender
                        </TableHead>
                        <TableHead className=""></TableHead>
                        <TableHead className="text-right">
                          Verify the member
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user, index) => (
                        <TableRow key={user._id}>
                          <TableCell>
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{user.name}</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              {user.email}
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {user.contactNumber}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {user.address}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {user.career}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                          <Badge className={`text-xs ${getBadgeClass(user.ticketStatus)}`}>
        {user.ticketStatus}
      </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {user.gender}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                                <DropdownMenuItem
                                  onClick={() => handleViewDetails(user)}
                                >
                                  View All Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  View the Slipt
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                          <TableCell className="text-right">
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
                          </TableCell>
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
      <UserDetailsDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}
