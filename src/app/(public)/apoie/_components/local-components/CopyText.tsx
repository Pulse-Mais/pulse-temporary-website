'use client'
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Copy } from '@phosphor-icons/react';

export const CopyText = () => {
    const qrcode = '48.621.188/0001-11';
    const input = useRef<HTMLInputElement>(null);

    const [copied, setCopied] = useState(false)

    async function copyCode() {


        if (input.current) {
            input.current.select();
            input.current.setSelectionRange(0, 99999999);

            try {
                await navigator.clipboard.writeText(qrcode);
                console.log('Texto copiado');
                display()
                return;

            } catch (err) {
                console.warn('Falha ao copiar');
            }
        }
    }

    function display() {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }

    return (
        <>
            <Image src="/assents/images/qrcodedonate.svg" alt="QR Code de doações" width={393} height={393} quality={100} className='py-5 cursor-pointer' />
            <label htmlFor='CNPJ' className='py-3 text-lg'>Copiar chave PIX</label>
            <div className='flex bg-white w-full max-w-[12rem] px-1 gap-1 py-1 rounded-xl'>
                <button onClick={copyCode}><Copy size={32} weight='fill' className='text-green-custom' /></button>
                <input name="CNPJ" id="CNPJ" ref={input} value={qrcode} readOnly className="w-full max-w-[] outline-0 flex-1 bg-transparent border-none text-black read-only:opacity-60 disabled:cursor-not-allowed " />
            </div>
            <aside className={`py-3 h-10 max-w-[12rem] font-semibold text-white rounded-xl text-center`}>
                {copied && (<span className='bg-[#009EE6] w-full rounded-xl px-5'>PIX copiado!</span>)}
            </aside>
        </>
    );
};
