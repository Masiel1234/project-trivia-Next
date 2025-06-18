import React from "react";

interface MainHeadingProps{
    title : string;
};

const MainHeading: React.FC<MainHeadingProps> = ({title}) =>{
    return(
        <h1 className="text-7xl mb-6 pb-10 font-bold">{title}</h1>
    );
}
export default MainHeading;