"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@heroui/react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const NavbarPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession?.() || {};
  const user = session?.user;

  const menuItems = [
    { path: "/", label: "Home", auth: false },
    { path: "/ideas", label: "Ideas", auth: false },
    { path: "/add-idea", label: "Add Idea", auth: true },
    { path: "/my-ideas", label: "My Ideas", auth: true },
    { path: "/my-interactions", label: "My Interactions", auth: true },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    setOpen(false);
    toast.success("Logout successFully")
    router.push("/");
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#020817]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-lg">
            I
          </div>

          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              IdeaVault
            </h1>
            <p className="text-[10px] uppercase tracking-[4px] text-slate-500">
              Creative Platform
            </p>
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-full backdrop-blur-xl">
          {menuItems
            .filter((item) => (item.auth ? user : true))
            .map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-violet-500/10 hover:text-violet-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 relative">
          {/* USER LOGGED IN */}
          {user ? (
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="p-[2px] rounded-full bg-gradient-to-r from-violet-500 to-blue-500 cursor-pointer"
              >
                <Avatar className="w-11 h-11 border-2 border-[#020817]">
                  <Avatar.Image
                    alt="User"
                    src={
                      user?.image ||
                      "https://img.heroui.chat/image/avatar?w=200&h=200&u=3"
                    }
                  />
                  <Avatar.Fallback>U</Avatar.Fallback>
                </Avatar>
              </div>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-44 bg-[#0b1020] border border-white/10 rounded-xl shadow-lg overflow-hidden">
                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/10"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* USER NOT LOGGED IN */
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-violet-500/10"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
