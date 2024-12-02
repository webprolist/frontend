import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <div className="flex h-14 items-center justify-between">
      <Link to="/main" className="flex z-40 font-semibold">
        WebPro<span className="text-green-600">list</span>
      </Link>
    </div>
  )
}
