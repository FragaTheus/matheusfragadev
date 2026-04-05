import { AppTerminalProps } from "../type/app-terminal.type";

const AppTerminal = ({ className, children }: AppTerminalProps) => {
  return (
    <article
      className={`bg-surface shadow-2xl rounded-md w-full border hover:shadow-primary/10 transition-all duration-300 ${className}`}
    >
      <div className="border-b h-10 flex items-center justify-start px-4">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <div className="p-4 md:p-6 flex flex-col">{children}</div>
    </article>
  );
};

export default AppTerminal;
