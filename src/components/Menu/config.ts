import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://bscclassic.org/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://bscclassic.org/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //  label: 'Pools',
  //  icon: 'PoolIcon',
  //  href: '/nests',
  // },
  // {
  // label: 'IFO',
  // icon: 'IfoIcon',
  // href: '/ifo',
  // },
  // {
  // label: 'Lottery',
  // icon: 'TicketIcon',
  // href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //  label: 'Info',
  //  icon: 'InfoIcon',
  //  items: [
  //    {
  //      label: 'PancakeSwap',
  //      href: 'https://pancakeswap.info/',
  //    },
  //    {
  //      label: 'CoinGecko',
  //      href: 'https://www.coingecko.com/en/coins/',
  //    },
  //    {
  //      label: 'CoinMarketCap',
  //      href: 'https://coinmarketcap.com/currencies/',
  //    },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/BscClassic',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://goosedefi.gitbook.io/goose-finance/',
      // },
      //  {
      //  label: 'Blog',
      //  href: 'https://goosefinance.medium.com/',
      // },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://farm.bscclassic.org',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: '.',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/',
  },
]

export default config
