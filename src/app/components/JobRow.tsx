import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const JobRow = () => {
    return ( 
        <>
            <div className="bg-white p-4 rounded-lg shadow-sm relative">
                <div className="absolute cursor-pointer top-4 right-4">
                    <FontAwesomeIcon className='size-4 text-gray-300' icon={faHeart}/>
                </div>
                <div className="flex grow gap-4">
                    <div className="content-center">
                        <img 
                            className="size-12"
                            alt=""
                            src="data:image/png;base64,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"
                            />
                    </div>
                    <div className="grow sm:flex">
                        <div className="grow">
                            <div className="text-gray-600 text-sm">Spotify</div>
                            <div className="font-bold text-lg mb-1" >Product designer</div>
                            <div className="text-gray-500 text-xs">
                                Remote &middot;  United States &middot; 
                                New York, US &middot; Full-time
                            </div>
                        </div>
                        <div className="content-end text-gray-600 text-xs">
                            2 weeks ago
                        </div>
                    </div>     
                </div>
              
            </div>
          
        </>
     
     );
}
 
export default JobRow;