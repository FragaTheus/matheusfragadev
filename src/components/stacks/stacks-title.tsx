import { TextAnimate } from "../ui/text-animate";

export default function StacksTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center relative">
      <div className="w-full h-px bg-white/10" />
      <TextAnimate className="text-3xl font-bold tracking-tighter absolute left-0 bg-background pr-4 mb-1">
        {title}
      </TextAnimate>
    </div>
  );
}
