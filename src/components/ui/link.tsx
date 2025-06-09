function Link ({
  href,
  children,
  className = '',
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      href={href}
      className={`text-blue-600 hover:text-blue-800 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}