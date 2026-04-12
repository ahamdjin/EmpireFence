import { permanentRedirect } from "next/navigation";

export default function LegacyServiceAreasPage() {
  permanentRedirect("/areas");
}
