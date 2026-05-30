import { DotPattern } from "../ui/dot-pattern";

export default function AppBackground() {
  return (
    <DotPattern className="-z-50 opacity-20 fixed inset-0 pointer-events-none" />
  );
}
