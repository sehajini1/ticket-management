import { useAuth } from "pageComponents/contexts/AuthContext";
import { Button } from "../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as apiLogin } from "Servers/API";

export default function LoginForm() {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate();
    const {login} = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 
    try {
      const response = await apiLogin(username, password);
      console.log("Login successful:", response);

      if (response && response.token) {
            console.log("login token",response.token)
            localStorage.setItem('token', response.token);
            navigate("/");
          } else {
            setError('Failed to login. Please check your username and password.');
          }

    } catch (error: any) {
      setError("Failed to login. Please check your username and password.");
    }
  };

  return (
    <div className="h-screen content-center">
      <Card className="mx-auto max-w-sm rounded-md rounded-[0.5rem]">
        <CardHeader>
          <CardTitle className="text-2xl text-[#09090B]">Login</CardTitle>
          <CardDescription className="text-[#71717A]">
            Enter your user name below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2 ">
                <Label htmlFor="email" className="text-[#09090B]">
                  User Name
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="m@example.com"
                  className="border-inherit text-[#71717A] rounded-[0.5rem]"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-[#09090B]">
                    Password
                  </Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="border-inherit rounded-[0.5rem]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-[0.5rem] bg-[#18181B] text-[#FAFAFA] hover:bg-[#2F2F32] hover:text-[#E4E4E7]"
              >Login</Button>
            </div>
            <div className="text-red-500 text-sm mt-2">
            {error && <p>{error}</p>}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
