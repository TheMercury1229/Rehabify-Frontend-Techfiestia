
const Footer = () => {
    
  return (
    <footer className="mt-10 p-4 w-full border-t border-t-muted">
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rehabify. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer