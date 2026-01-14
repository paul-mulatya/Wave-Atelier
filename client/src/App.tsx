import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import OffersPage from "@/pages/offers";

function Router() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // If we are at root, let default browser behavior handle it
      if (window.location.pathname === "/") {
        return;
      }
      
      // If we're on a subpage, we want back to always go to "/"
      setLocation("/");
      event.preventDefault();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [location, setLocation]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/offers" component={OffersPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
