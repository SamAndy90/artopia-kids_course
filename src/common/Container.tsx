import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("container max-w-screen-xl mx-auto px-4", className)}>
      {children}
    </div>
  );
}
