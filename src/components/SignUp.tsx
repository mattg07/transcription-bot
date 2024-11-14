import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SignUp() {
  return (
    <Card className="flex flex-row w-screen bg-gray-900 py-4 border-none">
      <div className="w-2/5 p-2 bg-transparent flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <img src="/Logo.png" className="w-16 h-16"></img>
          <h2 className="text-5xl font-semibold bg-gradient-to-b from-blueGradient to-pinkGradient bg-clip-text text-transparent Nasaz">
            TSB
          </h2>
        </div>
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-1xl font-semibold bg-gradient-to-b from-blueGradient to-pinkGradient bg-clip-text text-transparent">
            A transcript summarization bot powered by
          </h3>
          <img
            src="/openAi.png"
            width={90}
            height={90}
            className="drop-shadow-lg contrast-50"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between gap-2 ">
          <img width={15} height={20} src="/starsSm.png" alt="" />
          <img
            width={15}
            height={20}
            className="self-end mr-10"
            src="/starsSm.png"
            alt=""
          />
          <img
            width={15}
            height={20}
            className="self-end mr-44"
            src="/StarsXl.png"
            alt=""
          />
          <img className="self-center" src="/StarSm.png" alt="" />
          <img className="" width={120} height={90} src="/Earth.png" alt="" />
          <img width={15} height={20} src="/starsSm.png" alt="" />
          <img
            width={15}
            height={20}
            className="self-center mr-10"
            src="/starsSm.png"
            alt=""
          />
          <img
            className="self-center mr-10"
            width={100}
            height={90}
            src="/Satelite.png"
            alt=""
          />
          <img
            className="self-end mr-10"
            width={80}
            height={90}
            src="/Comet.png"
            alt=""
          />
          <img
            width={15}
            height={20}
            className="self-center mr-44"
            src="/StarsXl.png"
            alt=""
          />
          <img
            width={15}
            height={20}
            className="self-start ml-14"
            src="/StarsXl.png"
            alt=""
          />
          <img
            width={15}
            height={20}
            className="self-end mr-44"
            src="/StarsXl.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-[870px] mx-auto h-[650px] flex items-center justify-center bg-darksky  py-3 rounded-md">
      <Card className="w-full max-w-lg max-h flex items-center flex-col p-3">
          <CardHeader className="flex items-center space-x-2">
            <img
              className="w-[50px] h-[45px]"
              src="/PlanetIcon.png"
              alt="Icon"
            />
            <CardTitle className="text-3xl">Sign Up</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2 w-96">
              <Label htmlFor="full-name">Name</Label>
              <Input id="full-name" placeholder="Paul Atreides" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Paul2024"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            {/* <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div> */}
            <Button className="w-full rounded-lg">Create Account</Button>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}

export default SignUp;
