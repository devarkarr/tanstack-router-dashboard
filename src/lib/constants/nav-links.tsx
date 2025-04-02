import { BaggageClaim, ListTodo, Users } from "lucide-react";

export const navLinks = [
  {
    label: "Managements",
    links: [
      {
        label: "Products",
        href: "/products",
        icon: ListTodo,
      },
      {
        label: "Users",
        href: "/users",
        icon: Users,
      },
    ],
  },
  {
    label: "Carts",
    links: [
      {
        label: "Carts",
        href: "/carts",
        icon: BaggageClaim,
      },
    ],
  },
];
