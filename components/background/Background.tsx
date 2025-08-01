"use client"

type Variant = keyof typeof imageMap;

const imageMap = {
    seinen : "/images/category/seinen.jpg",
    isekai: "/images/category/isekai.jpg",
    shonen : "/images/category/shonen.jpg",
    shojo: "/images/category/shojo.jpg",
    sponko: "/images/category/spokon.jpg",
    home: "/images/background/home.png",
    index: "/images/background/index.png",
    blog: "/images/background/jesus_blog"

}
interface BackgroundProps{
    variant?: Variant;
    children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({variant = "home", children}) => {
    const background = imageMap[variant];
    return(
        <div
      className="w-full h-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
    <div className="bg-blue-200/50 bg-opacity-50 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )

};
export default Background;