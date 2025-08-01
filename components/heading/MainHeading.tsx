'use client'

interface MainHeadingProps{
    title : string;
};

const MainHeading: React.FC<MainHeadingProps> = ({title}) =>{
    return(
        <h1 className="text-7xl text-black mb-6 text-center mx-auto font-bold">{title}</h1>
    );
}
export default MainHeading;