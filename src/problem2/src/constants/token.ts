import BLUR from '@assets/images/token/BLUR.svg';
import bNEO from '@assets/images/token/bNEO.svg';
import BUSD from '@assets/images/token/BUSD.svg';
import USD from '@assets/images/token/USD.svg';
import ETH from '@assets/images/token/ETH.svg';
import GMX from '@assets/images/token/GMX.svg';
import STEVMOS from '@assets/images/token/STEVMOS.svg';
import LUNA from '@assets/images/token/LUNA.svg';
import RATOM from '@assets/images/token/RATOM.svg';
import STRD from '@assets/images/token/STRD.svg';
import EVMOS from '@assets/images/token/EVMOS.svg';
import IBCX from '@assets/images/token/IBCX.svg';
import IRIS from '@assets/images/token/IRIS.svg';
import ampLUNA from '@assets/images/token/ampLUNA.svg';
import KUJI from '@assets/images/token/KUJI.svg';
import STOSMO from '@assets/images/token/STOSMO.svg';
import USDC from '@assets/images/token/USDC.svg';
import axlUSDC from '@assets/images/token/axlUSDC.svg';
import ATOM from '@assets/images/token/ATOM.svg';
import STATOM from '@assets/images/token/STATOM.svg';
import OSMO from '@assets/images/token/OSMO.svg';
import rSWTH from '@assets/images/token/rSWTH.svg';
import STLUNA from '@assets/images/token/STLUNA.svg';
import LSI from '@assets/images/token/LSI.svg';
import OKB from '@assets/images/token/OKB.svg';
import OKT from '@assets/images/token/OKT.svg';
import SWTH from '@assets/images/token/SWTH.svg';
import USC from '@assets/images/token/USC.svg';
import WBTC from '@assets/images/token/WBTC.svg';
import wstETH from '@assets/images/token/wstETH.svg';
import YieldUSD from '@assets/images/token/YieldUSD.svg';
import ZIL from '@assets/images/token/ZIL.svg';

const tokenIcons: Record<string, string> = {
  'BLUR': BLUR,
  'bNEO': bNEO,
  'BUSD': BUSD,
  'USD': USD,
  'ETH': ETH,
  'GMX': GMX,
  'STEVMOS': STEVMOS,
  'LUNA': LUNA,
  'RATOM': RATOM,
  'STRD': STRD,
  'EVMOS': EVMOS,
  'IBCX': IBCX,
  'IRIS': IRIS,
  'ampLUNA': ampLUNA,
  'KUJI': KUJI,
  'STOSMO': STOSMO,
  'USDC': USDC,
  'axlUSDC': axlUSDC,
  'ATOM': ATOM,
  'STATOM': STATOM,
  'OSMO': OSMO,
  'rSWTH': rSWTH,
  'STLUNA': STLUNA,
  'LSI': LSI,
  'OKB': OKB,
  'OKT': OKT,
  'SWTH': SWTH,
  'USC': USC,
  'WBTC': WBTC,
  'wstETH': wstETH,
  'YieldUSD': YieldUSD,
  'ZIL': ZIL
};

export const getTokenIcon = (currency: string): string | null => {
  return tokenIcons[currency] ?? null;
};

export type TCurrency = {
  currency: string;
  date: Date;
  price: number;
};