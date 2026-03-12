import { ArrowUp } from "lucide-react";
import FloatingActionButton from "@/components/FloatingActionButton";
import { SITE_PATHS } from "@/lib/routes";

const FloatingBackHomeButton = () => (
  <FloatingActionButton ariaLabel="Go to homepage" to={SITE_PATHS.home}>
    <ArrowUp size={18} />
  </FloatingActionButton>
);

export default FloatingBackHomeButton;
