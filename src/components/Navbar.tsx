import { useState } from "react"

import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { AlignJustify, SquarePen } from "lucide-react"



import MaxWidthWrapper from "./MaxWidthWrapper"
import Logo from "./header/Logo"
import Category from "./header/Category"
import SearchBar from "./header/SearchBar"
import UserIcon from "./header/UserIcon"
import ModeToggle from "./header/mode-toggle"

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [authorized, setAuthorized] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);



  return (
    <nav className="sticky z-[10] h-14 inset-x-0 top-0 w-full border-b border-gray-20 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="flex-1 flex flex-row items-center gap-8">
        {/* 데스크탑 화면 전용 - 전체 항목 */}
        <div className="hidden md:flex flex-1 items-center gap-8">
          <Logo />
          <Category />
          <SearchBar />
          <Link to={'/create-list'}>
            <Button>
              <p>Add List</p>
              <SquarePen />
            </Button>
          </Link>
          <ModeToggle />
          {/* {authorized ? (
            <Link to={'/@user'}>
              <UserIcon />
            </Link>
          ) : (
            <div className="flex gap-4">
              <Link to={'/signin'}>
                <Button variant={"outline"}>
                  <p>Sign In</p>
                </Button>
              </Link>
              <Link to={'/signup'}>
                <Button variant={"default"}>
                  <p>Sign Up</p>
                </Button>
              </Link>
            </div>
          )} */}
        </div>
        {/* 모바일 전용 - Logo, Menu Icon, UserIcon */}
        <div className="flex items-center md:hidden w-full justify-between">
          <Logo />
          <Button onClick={toggleMenu}>
            <AlignJustify />
          </Button>
          <Link to={'/@user'}>
            <UserIcon />
          </Link>
        </div>
      </MaxWidthWrapper>
      {/* 모바일 메뉴 - 슬라이드다운 애니메이션 적용 */}
      <div
        className={`md:hidden transition-max-height duration-700 ease-in-out overflow-hidden bg-white dark:bg-zinc-950 bg-opacity-75 dark:bg-opacity-75 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <MaxWidthWrapper className="flex flex-col items-center gap-4 px-4 py-2">
          <Link to={'/category'}>
            <button onClick={() => setIsMenuOpen(false)}>
              <p>Category</p>
            </button>
          </Link>
          <Link to={'/search'}>
            <button onClick={() => setIsMenuOpen(false)}>
              <p>Search</p>
            </button>
          </Link>
          {/* <SearchBar /> */}
          <Link to={'/create-list'}>
            <button onClick={() => setIsMenuOpen(false)}>
              <p>Add List</p>
            </button>
          </Link>
          <Link to={'/light-dark'}>
            <button onClick={() => setIsMenuOpen(false)}>
              <p>Light / Dark Mode</p>
            </button>
          </Link>
        </MaxWidthWrapper>
      </div>
    </nav>
  )
}
