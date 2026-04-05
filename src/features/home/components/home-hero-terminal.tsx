import SpanAnimation from "@/shared/components/animated/span-animation";
import TypingAnimation from "@/shared/components/animated/typing-animation";
import AppTerminal from "@/shared/components/ui/app-terminal";

const HomeHeroTerminal = () => {
  return (
    <AppTerminal>
      <TypingAnimation
        text="./gradlew clean build"
        className="mb-4"
        duration={0.01}
      />

      <SpanAnimation delay={1.5} spanText="> Task :compileJava" />
      <SpanAnimation delay={2.5} spanText="> Task :classes" />
      <SpanAnimation delay={3.5} spanText="> Task :jar" />
      <SpanAnimation delay={4.5} spanText="> Task :build" />

      <SpanAnimation delay={5.5} spanText="BUILD SUCCESSFUL" className="mt-4" />
    </AppTerminal>
  );
};

export default HomeHeroTerminal;
