// import { Button } from "../../@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../../@/components/ui/card";
// import { Input } from "../../@/components/ui/input";
// import { Label } from "../../@/components/ui/label";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "pageComponents/contexts/AuthContext";
// import { login } from "Servers/API";

// export default function LoginForm() {
//     const {setToken} = useAuth();
//   const [username, setUserName] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string | null>(null)
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await login(username, password);
//         console.log("hi",response);
//       // Check if the response contains a token
//       if (response && response.token) {
//         // If login is successful, set the token and navigate to the home page
//         setToken(response.token);
//         navigate("/");
//       } else {
//         // If the response does not contain a token, treat it as an error
//         setError('Failed to login. Please check your username and password.');
//       }
//     } catch (error: any) {
//       // If an unexpected error occurs, set a general error message
//       setError('Failed to login. Please check your username and password.');
//     }
//   };

//   return (
//     <div className="h-screen content-center">
//       <Card className="mx-auto max-w-sm rounded-md rounded-[0.5rem]">
//         <CardHeader>
//           <CardTitle className="text-2xl text-[#09090B]">Login</CardTitle>
//           <CardDescription className="text-[#71717A]">
//             Enter your user name below to login to your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit}>
//             <div className="grid gap-4">
//               <div className="grid gap-2 ">
//                 <Label htmlFor="email" className="text-[#09090B]">
//                   User Name
//                 </Label>
//                 <Input
//                   id="username"
//                   type="text"
//                   placeholder="m@example.com"
//                   className="border-inherit text-[#71717A] rounded-[0.5rem]"
//                   value={username}
//                   onChange={(e) => setUserName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <div className="flex items-center">
//                   <Label htmlFor="password" className="text-[#09090B]">
//                     Password
//                   </Label>
//                 </div>
//                 <Input
//                   id="password"
//                   type="password"
//                   required
//                   className="border-inherit rounded-[0.5rem]"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full rounded-[0.5rem] bg-[#18181B] text-[#FAFAFA] hover:bg-[#2F2F32] hover:text-[#E4E4E7]"
//               >Login</Button>
//             </div>
//             <div className="text-red-500 text-sm mt-2">
//             {error && <p>{error}</p>}
//             </div>
            
//             {/* <div className="mt-4 text-center text-sm text-[#09090B]">
//               Don&apos;t have an account?{" "}
//               <Link to="/signup" className="underline">
//                 Sign up
//               </Link>
//             </div> */}
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
