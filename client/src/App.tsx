import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const KinderTaekwondo = lazy(() => import("./pages/KinderTaekwondo"));
const Jugendliche = lazy(() => import("./pages/Jugendliche"));
const Erwachsene = lazy(() => import("./pages/Erwachsene"));
const Probetraining = lazy(() => import("./pages/Probetraining"));
const StandortHeimenkirch = lazy(() => import("./pages/StandortHeimenkirch"));
const StandortKisslegg = lazy(() => import("./pages/StandortKisslegg"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const Mitgliedsbeitraege = lazy(() => import("./pages/Mitgliedsbeitraege"));
const Downloads = lazy(() => import("./pages/Downloads"));
const Schulprojekte = lazy(() => import("./pages/Schulprojekte"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Danke = lazy(() => import("./pages/Danke"));
const Aktuelles = lazy(() => import("./pages/Aktuelles"));
const AktuellesDetail = lazy(() => import("./pages/AktuellesDetail"));
const Lernvideos = lazy(() => import("./pages/Lernvideos"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tkd-navy">
      <div className="w-10 h-10 border-3 border-tkd-cyan/30 border-t-tkd-cyan rounded-full animate-spin" />
    </div>
  );
}
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/kinder-taekwondo" component={KinderTaekwondo} />
        <Route path="/jugendliche" component={Jugendliche} />
        <Route path="/erwachsene" component={Erwachsene} />
        <Route path="/jugendliche-erwachsene" component={Jugendliche} />
        <Route path="/probetraining" component={Probetraining} />
        <Route path="/taekwondo-heimenkirch" component={StandortHeimenkirch} />
        <Route path="/taekwondo-kisslegg" component={StandortKisslegg} />
        <Route path="/ueber-uns" component={UeberUns} />
        <Route path="/mitgliedsbeitraege" component={Mitgliedsbeitraege} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/schulprojekte" component={Schulprojekte} />
        <Route path="/faq" component={FAQ} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        <Route path="/danke" component={Danke} />
        <Route path="/aktuelles" component={Aktuelles} />
        <Route path="/aktuelles/:id" component={AktuellesDetail} />
        <Route path="/lernvideos" component={Lernvideos} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Navigation />
          <main>
            <Router />
          </main>
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
