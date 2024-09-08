import {  MoreHorizontal } from "lucide-react";
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
  DropdownMenuContent,
  DropdownMenuItem,
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
import { fetchUsers, updateUserStatus } from "../Servers/API";
import { useUserContext } from "./contexts/UserContext";
import UserDetailsDialog from "./AllDetailsDialog";
import ConfirmationDialog from "./ConfirmationDialog";


function getBadgeClass(status: string) {
  switch (status) {
    case "approved":
      return "bg-green-500 text-white hover:ring-1 hover:ring-green-500 hover:bg-transparent hover:text-green-500";
    case "pending":
      return "bg-yellow-500 text-white hover:ring-1 hover:ring-yellow-500 hover:bg-transparent hover:text-yellow-500";
    case "rejected":
      return "bg-red-500 text-white hover:ring-1 hover:ring-red-500 hover:bg-transparent hover:text-red-500";
    default:
      return "bg-gray-500 text-white hover:ring-1 hover:ring-gray-500 hover:bg-transparent hover:text-gray-500";
  }
}

export default function DetailsTable() {
  const [darkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [users, setUsers] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<'approved' | 'rejected' | 'duplicated' |null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isReloadLoading, setIsReloadLoading] = useState(false);
  const [status, setStatus] = useState('all');
  const { setSelectedUser } = useUserContext();

  const handleViewDetails = (user: any) => {
    console.log("user", user);
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setIsStatusDialogOpen(false);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    setCurrentPage(1); 
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers(currentPage, itemsPerPage, status);
        console.log("Fetched users:", status);
        setUsers(data.users);
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, status]);


  const handleConfirm = async () => {
    if (selectedUserId === null || selectedAction === null) return;
    
    try {
      if (selectedAction === 'approved') {
        await updateUserStatus(selectedUserId, 'approved');
        console.log(`User ${selectedUserId} confirmed as approved`);
      } else if (selectedAction === 'rejected') {
        await updateUserStatus(selectedUserId, 'rejected');
        console.log(`User ${selectedUserId} marked as rejected`);
      } 
      
      setUsers(prevUsers => 
        prevUsers.map(user =>
          user._id === selectedUserId ? { ...user, ticketStatus: selectedAction } : user
        )
      );
      handleCloseDialog();
    } catch (error) {
      console.error(`Failed to perform action on user ${selectedUserId}:`, error);
    }
  };

  const handleActionClick = (action: 'approved' | 'rejected' | 'duplicated', id: number) => {
    setSelectedAction(action);
    setSelectedUserId(id);
    setIsStatusDialogOpen(true);
  };
  
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getActionsForStatus = (status: string, id: number) => {
    switch (status) {
      case "pending":
        case "duplicated":
        return (
          <div className="flex justify-end gap-[2rem]">
            <GiConfirmed
              size="1.2rem"
              className="cursor-pointer text-green-500"
              onClick={() => handleActionClick('approved',id)}
            />
            <RiDeleteBin6Fill
              size="1.2rem"
              className="cursor-pointer text-red-500"
              onClick={() => handleActionClick('rejected',id)}
            />
          </div>
        );
      case "approved":
        return (
          <div className="flex justify-end">
            <span className="text-green-600 font-semibold">Account verified.</span>
          </div>
        );
      case "rejected":
        return (
          <div className="flex justify-end">
            <span className="text-red-600 font-semibold">Account rejected</span>
          </div>
        );
      default:
        return null;
    }
  };

  const handleReload = async () => {
    setIsReloadLoading(true); 
    try {
      const response = await fetch('https://dreo2l35cd.execute-api.ap-southeast-1.amazonaws.com/backend/user/load');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      console.log('API response:', data);

      window.location.reload();
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setIsReloadLoading(false); 
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
            </Card>
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>Total Attendance</CardDescription>
                <CardTitle className="text-[1.2rem]">40</CardTitle>
              </CardHeader>
            </Card>
            <div className="flex justify-end items-center col-span-full">
              <Button
                variant="outline"
                className="w-[8rem]"
                onClick={handleReload}
                disabled={isReloadLoading}
              >
                {isReloadLoading ? "Loading..." : "Reload"}
              </Button>
            </div>
          </div>
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all" onClick={() => handleStatusChange('all')}>All</TabsTrigger>
                <TabsTrigger value="pending" onClick={() => handleStatusChange('pending')}>Pending</TabsTrigger>
                <TabsTrigger value="approved" onClick={() => handleStatusChange('approved')}>Approved</TabsTrigger>
                <TabsTrigger value="rejected" onClick={() => handleStatusChange('rejected')}>Rejected</TabsTrigger>
              </TabsList>
              
            </div>
            <TabsContent value={status}>
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
                    {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-4">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
                      users.map((user, index) => (
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
                            {user.nic}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {user.career}
                          </TableCell>
                          <TableCell className="">
                            <Badge
                              className={`text-xs ${getBadgeClass(
                                user.ticketStatus
                              )}`}
                            >
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
                                <DropdownMenuItem
                                  onClick={() => handleViewDetails(user)}
                                >
                                  View All Details
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                          <TableCell className="text-right">
                            {getActionsForStatus(user.ticketStatus, user._id)}
                          </TableCell>
                        </TableRow>
                      )))}
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
      <ConfirmationDialog
        isOpen={isStatusDialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleConfirm}
        action={selectedAction || "approved"}
      />
    </div>
  );
}
