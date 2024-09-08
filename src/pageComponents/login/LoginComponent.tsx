import { Link } from "react-router-dom";
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

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="h-screen content-center">
      <Card className="mx-auto max-w-sm rounded-md rounded-[0.5rem]">
        <CardHeader>
          <CardTitle className="text-2xl text-[#09090B]">Login</CardTitle>
          <CardDescription className="text-[#71717A]">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2 ">
                <Label htmlFor="email" className="text-[#09090B]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="border-inherit text-[#71717A] rounded-[0.5rem]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-[#09090B]">
                    Password
                  </Label>
                  <Link
                    to="#"
                    className="ml-auto inline-block text-sm underline text-[#09090B]"
                  >
                    Forgot your password?
                  </Link>
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
              ></Button>
            </div>
            <div className="mt-4 text-center text-sm text-[#09090B]">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
