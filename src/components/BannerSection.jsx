import BannerImage from '../images/BannerImage.jpg'

export default function BannerSection() {
     return (
          <div className='!py-10'>
               <div className="container">
                    <div className="flex items-center justify-center gap-10">
                         <div className='w-1/3 flex justify-end'>
                              <div className=' w-90 h-90'>
                                   <img src={BannerImage} className='object-cover rounded-full border-15 border-[var(--fade-gray)] shadow-[var(--fade-gray)]' alt="Banner Image" />
                              </div>
                         </div>
                         <div className='w-1/3'>
                              <div>
                                   <p className='text-lg font-normal tracking-wider text-[#aaa]'>Frontend Developer</p>
                              </div>
                              <div className='!my-4'>
                                   <h1 className='text-6xl font-semibold text-[var(--text-color)]'>Alex Smith</h1>
                              </div>
                              <div>
                                   <p className='text-sm text-[var(--text-color)] leading-7'>The great time is mine, not the flexibility heavily raised. The convulsions, not condiment growth, hateful bathed feline, from the harmless poisonous, out of me. A certain instability, a place of enjoyable price.</p>
                              </div>
                              <div className='flex gap-5 !mt-7'>
                                   <div>
                                        <button className='text-white !py-2 !px-5 rounded-full border-2 border-white cursor-pointer text-sm'>Download CV</button>
                                   </div>
                                   <div>
                                        <button className='text-white !py-2 !px-5 rounded-full border-2 border-white cursor-pointer text-sm'>Contact</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
}