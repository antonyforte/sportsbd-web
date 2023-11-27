"use client";
import { Button, buttonVariants } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow   } from '@/components/ui/table'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaFutbol } from 'react-icons/fa'
import { LiaPassportSolid } from 'react-icons/lia'
import { MdOutlineSportsScore } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import TransfersTable from "@/components/transferencias"
import AnimatedGradientComponent from '@/components/magic-card2';


export default function Transferencias() {
  return (
    <div className='min-h-screen flex flex-col rows'>
      <div className='text-xsm tracking-wider italic px-2 bg-zinc-900 flex'>
        <h1>Acompanhe as noticias e resultados do maior campeonato de futebol do mundo(Trabalho feito por: )</h1>
      </div>
      {/*HEADER PRINCIPAL - BOTOES JOGOS CLASSIFICAÇÃO TRANSFERENCIAS JOGADORES LOGIN */}
      <div className='py-2 flex h-20 bg-cover bg-center columns-2 gap-24' style={{backgroundImage: `url('black-bg.jpg')`}}>
          <div className='w-2/12 py-4 px-2 flex'>
            <Button className='w-36' style={{backgroundImage: `url(icon-theme.png)`, backgroundSize: '100% 100%',backgroundRepeat: 'no-repeat',backgroundPosition: 'center center'}} asChild>
                <Link href="/"></Link>
            </Button>
          </div>
        <div className='flex h-full flex-1 columns-5 gap-5'>
          <div className='group'>
            <Button className='text-black gap-3 flex-grow h-full hover:text-red-950 text-lg tracking-wider ' variant={'none'}>
              <FaFutbol size={20}/>
              <Link href="/classificacao" className="text-orange-600 group-hover:text-red-950">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent rounded-lg blur-sm mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  CLASSIFICAÇÃO
                </span>
              </Link>
            </Button>
          </div>
          <div className='group'>
            <Button className='text-black gap-3 flex-grow h-full hover:text-red-950 text-lg tracking-wider' variant={'none'}>
              <MdOutlineSportsScore size={30}/>
              <Link href="/rodadas" className="text-orange-600 group-hover:text-red-950">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent rounded-lg blur-sm mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  RODADAS
                </span>
              </Link>
            </Button>
          </div>
          <div className='group' style={{ filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.9))' }}>
          <Button className='text-red-600 gap-3 flex-grow h-full text-lg tracking-wider ' variant={'none'} disabled>
            <LiaPassportSolid size={25} style={{ filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.9))' }} />
            <span className="relative inline-block" style={{ textShadow: '0 0 10px rgba(255, 0, 0, 0.9)' }}>
              TRANSFERENCIAS
            </span>
          </Button>
        </div>
          <div className='group'>
            <Button className='text-black gap-3 flex-grow h-full hover:text-red-950 text-lg tracking-wider' variant={'none'}>
              <RiUser3Line size={25}/>
              <Link href="/jogadores" className="text-orange-600 group-hover:text-red-950">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-transparent rounded-lg blur-sm mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  JOGADORES
                </span>
              </Link>
            </Button>
          </div>
            <div className='flex-grow h-full flex'>
              <p className='flex align-middle justify-center items-center w-full'>Login</p>
            </div>
        </div>
      </div>
      <div className='flex-grow bg-zinc-900'>
        <TransfersTable></TransfersTable>
      </div>
      <div className='flex' style={{backgroundImage: `url('black-bg.jpg')`}}>
        <div className='columns-3 flex-1'>
          <div>
            <img className='h-20 px-10 py-2' src='ufsj-logo.png' alt='UFsj Logo'></img>
          </div>
          <div className='py-1'>
            <AnimatedGradientComponent/>
          </div>
          <div>
            <img className='h-20 px-36 py-2' src='ufsj-ccomp-logo.png' alt='UFsj Ccomp Logo'></img>
          </div>
        </div>
      </div>
    </div>
  )
}
