import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='text-white pt-20 pb-8 text-center bg-[#244D3F] space-y-4'>

            <div className='space-y-2'>
                <h2 className='text-3xl'><span className='font-bold'>Keen</span>Keeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <div className='space-y-2 pb-4'>
                <p>Social Links</p>
                <ul className='flex justify-center gap-4'>
                    <Image src="/instagram.png" alt="instagram" width={40} height={40} />
                    <Image src="/facebook.png" alt="facebook" width={40} height={40} />
                    <Image src="/twitter.png" alt="twitter" width={40} height={40} />
                </ul>
            </div>
            <div className="border-t border-[#1A8862] container mx-auto py-4 text-[#FAFAFA] flex justify-between items-center">
                <p>Copyright © 2023 KeenKeeper</p>
                <div className='flex gap-8'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;