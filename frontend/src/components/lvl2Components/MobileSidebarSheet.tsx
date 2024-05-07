import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Menu, Package2 } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const MobileSidebarSheet = () => {
  const router = useRouterState();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <SheetClose asChild>
            <Link
              to="/"
              className={`mx-[-0.65rem] flex ${router.location.pathname === "/" ? "bg-muted text-foreground " : "text-muted-foreground "}  items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/about"
              className={`mx-[-0.65rem] flex ${router.location.pathname === "/about" ? "bg-muted text-foreground " : "text-muted-foreground "}  items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}
            >
              <Home className="h-5 w-5" />
              About
            </Link>
          </SheetClose>
        </nav>
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebarSheet;
