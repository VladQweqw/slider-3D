export function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`w-full ${className} 
    px-4 tablet:px-8 laptop:px-12`}>
      {children}
    </div>
  )
}