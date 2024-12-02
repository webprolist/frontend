import {
  Card,
  // CardContent,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";

const WebCard = () => {
  return (
    <>
      <Link to={"/card"}>
        <Card className="w-[350px] cursor-pointer">

        </Card>
      </Link>
    </>
  );
}

export default WebCard;