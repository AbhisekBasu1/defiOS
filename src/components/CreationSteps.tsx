import React from 'react'
import Link from 'next/link'

interface CreationStepsProps {
    step: number;
}

const CreationSteps: React.FC<CreationStepsProps> = ({step}) => {

    const fontsizer = 'text-[calc(98vh/54)]';
    const fontsizer2 = 'text-[calc(98vh/60)]';
    return (
        <div 
        className='w-1/6 h-1/3 bg-[#121418] rounded-xl text-[#F8ECDE]'
        >
            <div className={`w-full  text-center ${fontsizer} border-b border-[#9D9D9D] py-[5%] mb-[8%] font-semibold`} >DAO Creation Steps</div>
            <div className='flex flex-row items-center justify-start w-full'>
                <Link href='/creation/1'>
                    <div className={`w-[calc(98vh/24)] h-[calc(98vh/24)] mx-[8%] ${fontsizer2} border rounded-full flex items-center justify-center ${(step>=1)?'bg-[#A7B9FC] border-[#A7B9FC]':null}`}>1</div>
                </Link>
                <div className={`${fontsizer2} font-semibold ${(step>=1)?'text-[#A7B9FC]':null}`}>
                    Choose your repository 
                </div>
            </div>
            <div className={`w-[calc(98vh/48)] h-[calc(98vh/54)] mx-[8%] border-r ${(step>=1)?'border-solid border-[#A7B9FC]':'border-dashed'}`}></div>
            <div className='flex flex-row items-center justify-start w-full'>
                <Link href='/creation/2'>
                    <div className={`w-[calc(98vh/24)] h-[calc(98vh/24)] mx-[8%] ${fontsizer2} border rounded-full flex items-center justify-center ${(step>=2)?'bg-[#A7B9FC] border-[#A7B9FC]':null}`}>2</div>
                </Link>
                <div className={`${fontsizer2} font-semibold ${(step>=2)?'text-[#A7B9FC]':null}`}>
                    Customize your token
                </div>
            </div>
            <div className={`w-[calc(98vh/48)] h-[calc(98vh/54)] mx-[8%] border-r ${(step>=1)?'border-solid border-[#A7B9FC]':'border-dashed'}`}></div>
            <div className='flex flex-row items-center justify-start w-full'>
                <Link href='/creation/3'>
                    <div className={`w-[calc(98vh/24)] h-[calc(98vh/24)] mx-[8%] ${fontsizer2} border rounded-full flex items-center justify-center ${(step>=3)?'bg-[#A7B9FC] border-[#A7B9FC]':null}`}>3</div>
                </Link>
                <div className={`${fontsizer2} font-semibold ${(step>=3)?'text-[#A7B9FC]':null}`}>
                    Set initial distribution
                </div>
            </div>
            <div className={`w-[calc(98vh/48)] h-[calc(98vh/54)] mx-[8%] border-r ${(step>=1)?'border-solid border-[#A7B9FC]':'border-dashed'}`}></div>
            <div className='flex flex-row items-center justify-start w-full'>
                <Link href='/creation/4'>
                    <div className={`w-[calc(98vh/24)] h-[calc(98vh/24)] mx-[8%] ${fontsizer2} border rounded-full flex items-center justify-center ${(step>=4)?'bg-[#A7B9FC] border-[#A7B9FC]':null}`}>4</div>
                </Link>
                <div className={`${fontsizer2} font-semibold ${(step>=4)?'text-[#A7B9FC]':null}`}>
                    Confirm DAO Creation 
                </div>
            </div>
        </div>
    );
}

export default CreationSteps;