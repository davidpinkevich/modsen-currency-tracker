import australianDollar from "@assets/icons/australian-dollar.svg";
import bitcoin from "@assets/icons/bitcoin.svg";
import bovindex from "@assets/icons/bov-index.svg";
import canadianDollar from "@assets/icons/canadian-dollar.svg";
import dollar from "@assets/icons/dollar.svg";
import euro from "@assets/icons/euro.svg";
import ifix from "@assets/icons/ifix.svg";
import libra from "@assets/icons/libra.svg";
import peso from "@assets/icons/peso.svg";
import yan from "@assets/icons/yan.svg";
import yen from "@assets/icons/yen.svg";
import { type TypeCurrencyItems } from "@src/types";

const CURRENCY_ITEMS: TypeCurrencyItems = {
  STOKS: [
    {
      title: "Bovespa Index",
      img: bovindex
    },
    {
      title: "IFIX",
      img: ifix
    }
  ],
  QUOTES: [
    {
      title: "Commercial Dollar",
      iso: "USD",
      img: dollar
    },
    {
      title: "Argentine Peso",
      iso: "ARS",
      img: peso
    },
    {
      title: "Canadian Dollar",
      iso: "CAD",
      img: canadianDollar
    },
    {
      title: "Yen",
      iso: "JPY",
      img: yen
    },
    {
      title: "Australian Dollar",
      iso: "AUD",
      img: australianDollar
    },
    {
      title: "Yuan",
      iso: "CNY",
      img: yan
    },
    {
      title: "Euro",
      iso: "EUR",
      img: euro
    },
    {
      title: "Bitcoin",
      iso: "BTC",
      img: bitcoin
    },
    {
      title: "Libra",
      iso: "GBP",
      img: libra
    }
  ]
};

const SELECT_QUOTES = [
  {
    title: "Commercial Dollar",
    iso: "USD"
  },
  {
    title: "Canadian Dollar",
    iso: "CAD"
  },
  {
    title: "Yen",
    iso: "JPY"
  },
  {
    title: "Australian Dollar",
    iso: "AUD"
  },
  {
    title: "Euro",
    iso: "EUR"
  },
  {
    title: "Bitcoin",
    iso: "BTC"
  },
  {
    title: "Libra",
    iso: "GBP"
  }
];

export { CURRENCY_ITEMS, SELECT_QUOTES };
