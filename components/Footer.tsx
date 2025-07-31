export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">OS</span>
            </div>
            <span className="font-medium">Oka Satoshi</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 Oka Satoshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}