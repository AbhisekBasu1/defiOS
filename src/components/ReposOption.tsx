import React from 'react'

import {StarIcon, LinkIcon} from '@heroicons/react/outline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

interface ReposOptionProps {

}

const ReposOption: React.FC<ReposOptionProps> = ({}) => {

    // const fontsizer = 'text-[calc(98vh/54)]';
    const fontsizer2 = 'text-[calc(98vh/60)]';
    const fontsizer3 = 'text-[calc(98vh/85)]';
    const fontsizer4 = 'text-[calc(98vh/110)]';

    return (
        <div className='bg-[#121418] w-full h-[16%] px-[2%] py-[2%] mt-[2%] text-xs font-semibold rounded-md border-[#2E2E2F] border relative' >
            {/* repo visibility */}
            <div className={`absolute top-[10%] right-[2%] border border-[#3A4E70] rounded px-[4%] py-[0.5%] ${fontsizer3} text-[#B5C3DB] `} >Public</div>
            {/* repo name */}
            <div className='flex flex-row'>
                <div className='w-[2.5vh] h-[2.5vh] bg-white rounded-full'></div>
                <div className={`ml-[1.5%] text-[#D7D7D7] ${fontsizer2}`}>never2average/defios-contracts</div>
            </div>
            {/* repo description */}
            <div className={`w-[90%] ${fontsizer4} mt-[1.5%] text-[#BFBFBF]`}>
                2 line repository description 2 line repository description 2 line repository description 2 line repository description 2 line repository description 2 line repository description 2 line repository description
            </div>
            {/* repo stat info */}
            <div className={`flex flex-row mt-[1.5%] items-center text-[#B5C3DB] ${fontsizer2} `}>
                <StarIcon className='w-[1.5vh] h-[1.5vh] mr-[1%]'/>
                <div className='mr-[4%]'>11</div>
                <FontAwesomeIcon className='w-[1.5vh] h-[1.5vh] mr-[1%]' icon={faCodeFork} aria-hidden="true" />
                <div className='mr-[4%]'>22</div>
                <LinkIcon className='w-[1.5vh] h-[1.5vh] mr-[1%]'/>
            </div>
            {/* repo choosen*/}
            <div className="w-[2.5vh] h-[2.5vh] absolute bottom-[10%] right-[2%]">
                <input type="radio" name="RepoForDAO" className='peer absolute opacity-0 w-full h-full cursor-pointer' />
                <span className="rounded-full border-[#91A8ED] border w-full h-full bg-[#121418] 
                flex justify-center items-center
                peer-checked:after:block
                after:w-3/5 after:h-3/5 after:bg-[#91A8ED] after:rounded-full after:hidden"></span>
            </div>
        </div>
    );
}

export default ReposOption;