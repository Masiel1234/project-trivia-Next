import LanguageSelector from "@/components/button/LanguageSelector"
import Button from "@/components/button/Buttons/Button";

export default function layoutBlog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
    <div>
       <header className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button variant="return" to="/home"/>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <LanguageSelector/>
          </div>
          
          </nav>
          </header>
        
        <main>
        {children}
       </main>
    </div>
       
    )
}