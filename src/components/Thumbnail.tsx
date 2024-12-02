import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "./ui/badge"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"


interface ThumbNailProps {
  src: string | null
  mode: 'light' | 'dark' | any
}

const Thumbnail: React.FC<ThumbNailProps> = ({ src, mode }) => {
  const starFillColor = mode === 'light' ? 'black' : 'white'


  return (
    <Link to={"/list/@user/1"}>
      <Card className="w-[350px] cursor-pointer">
        <CardHeader>
          <img className="rounded-md" src={`/images/${src}.png`} alt="thumbnail" />
        </CardHeader>
        <CardContent>
          <CardTitle>AI 디자인 가이드</CardTitle>
          <div className="pb-3" />
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">@koworkd250</Label>
            </div>
          </div>
          <div className="pb-3" />
          <div id="thumbnail-badge" className="flex gap-2">
            <Badge variant="outline" >#디자인</Badge>
            <Badge variant="outline" >#협업</Badge>
            <Badge variant="outline" >#UI/UX</Badge>
          </div>
          <div className="pb-2" />
          <div className="flex flex-row gap-2 items-center">
            <p className="text-sm">4.3</p>
            <div className="flex flex-row gap-1 justify-start">
              <Star fill={starFillColor} width={"16px"} />
              <Star fill={starFillColor} width={"16px"} />
              <Star fill={starFillColor} width={"16px"} />
              <Star fill={starFillColor} width={"16px"} />
              <Star width={"16px"} />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default Thumbnail;