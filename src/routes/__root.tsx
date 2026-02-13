import Header from "@/components/Header";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}

function ErrorComponent({ error }: { error: Error }) {
  return (
    <div className="container">
      <Header />
      <p>Oh no, an error!</p>
      <p>{error.message}</p>{" "}
    </div>
  );
}

function NotFoundComponent() {
  return (
    <div>
      <Header />
      <p>Page not found</p>
    </div>
  );
}
