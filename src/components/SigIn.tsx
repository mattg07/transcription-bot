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
  
  function SignIn() {
    return (
      <Card className="flex flex-col items-center mt-4 justify-center w-screen md:flex-row md:w-full lg:max-w-full xl:w-screen bg-transparent py-4 border-none">
        <div className="w-full md:w-screen xl:w-2/5 p-2 bg-transparent flex flex-col items-center md:justify-between justify-center gap-2 xl:items-stretch">
          <div className="flex flex-row xl:flex-row items-center gap-2">
            <img src="/Logo.png" className="w-16 h-16" alt="Logo" />
            <h2 className="text-5xl font-semibold bg-gradient-to-b from-blueGradient to-pinkGradient bg-clip-text text-transparent Nasaz">
              TSB
            </h2>
          </div>
          <div className="flex flex-row items-center ">
            <h3 className="text-sm md:text-sm font-semibold bg-gradient-to-b from-blueGradient to-pinkGradient bg-clip-text text-transparent">
              A transcript summarization bot powered by
            </h3>
            <img
              src="/openAi.png"
              width={90}
              height={90}
              className="drop-shadow-lg contrast-50"
              alt="OpenAI"
            />
          </div>
          <div className="hidden md:flex flex-col justify-between gap-2">
            <img width={15} height={20} src="/starsSm.png" alt="Stars" />
            <img
              width={15}
              height={20}
              className="self-end mr-10"
              src="/starsSm.png"
              alt="Stars"
            />
            <img
              width={15}
              height={20}
              className="self-end mr-44"
              src="/StarsXl.png"
              alt="Stars"
            />
            <img className="" width={120} height={90} src="/Earth.png" alt="Earth" />
            <img width={15} height={20} src="/starsSm.png" alt="Stars" />
            <img
              width={15}
              height={20}
              className="self-center mr-10"
              src="/starsSm.png"
              alt="Stars"
            />
            <img
              className="self-center mr-10"
              width={100}
              height={90}
              src="/Satelite.png"
              alt="Satellite"
            />
            <img
              className="self-end mr-10"
              width={80}
              height={90}
              src="/Comet.png"
              alt="Comet"
            />
            <img
              width={15}
              height={20}
              className="self-center mr-44"
              src="/StarsXl.png"
              alt="Stars"
            />
            <img
              width={15}
              height={20}
              className="self-start ml-14"
              src="/StarsXl.png"
              alt="Stars"
            />
            <img
              width={15}
              height={20}
              className="self-end mr-44"
              src="/StarsXl.png"
              alt="Stars"
            />
          </div>
        </div>
        <div className="w-full sm:max-w-xs md:max-w-md lg:max-w-3xl xl:max-w-2xl mx-auto h-auto xl:h-[620px] flex items-center justify-center bg-darksky py-2 rounded-md">
          <Card className="w-full max-w-md md:max-w-lg flex items-center flex-col p-3">
            <CardHeader className="flex items-center space-x-2">
              <img
                className="w-[45px] h-[63px]"
                src="/Astronaut.png"
                alt="Icon"
              />
              <CardTitle className="text-3xl">Sign In</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="JohnDoe24"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button className="w-full rounded-lg">Sign In</Button>
            </CardContent>
          </Card>
        </div>
      </Card>
    );
  }
  
  export default SignIn;
  