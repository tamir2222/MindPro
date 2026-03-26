import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleReader from "./pages/ArticleReader";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/articles"} component={Articles} />
      <Route path={"/articles/:slug"} component={ArticleReader} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

/*
Design philosophy for this file: keep the global app shell aligned with MindPro's dark editorial visual system.
The default theme must remain dark so semantic colors resolve correctly across the Hebrew RTL landing page.
*/

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
