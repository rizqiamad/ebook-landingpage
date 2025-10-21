export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground px-4">
      <div className="border-t border-primary-foreground/20 py-8 text-center text-sm text-primary-foreground/70">
        <p>&copy; {new Date().getFullYear()} wanderlife. All rights reserved.</p>
      </div>
    </footer>
  )
}
