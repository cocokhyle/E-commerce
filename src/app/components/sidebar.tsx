import Link from "next/link";
export default function SideBar() {
  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Create", href: "/contact" },
    { name: "Update", href: "/pricing" },
    { name: "Delete", href: "/services" },
    { name: "Done", href: "/about" },
  ];
  return (
    <div className="">
      <aside
        id="logo-sidebar"
        className=" min-h-screen overflow-y-hidden w-64 top-0 left-0 pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className=" px-3 pb-4 bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
