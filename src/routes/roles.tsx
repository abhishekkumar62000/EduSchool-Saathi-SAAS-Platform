import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/roles")({
  beforeLoad: () => {
    throw redirect({ href: "/#roles" });
  },
});