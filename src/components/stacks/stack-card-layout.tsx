import { BsJavascript } from "react-icons/bs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

export default function StacksCardLayout() {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <BsJavascript className="size-8" />
        <Badge>Badge</Badge>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">Card Title</CardTitle>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
