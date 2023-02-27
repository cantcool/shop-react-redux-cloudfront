import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "Active Monitor",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 1898,
    title: "Genelec 1032 CPM",
    img: "https://thumbs.static-thomann.de/thumb/bdbmagic/pics/bdb/421121/12622061_800.jpg",
  },
  {
    description: "Active Monitor",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 839,
    title: "Genelec 8040 BPM",
    img: "https://thumbs.static-thomann.de/thumb/bdbmagic/pics/bdb/311111/11529834_800.jpg",
  },
  {
    description: "Active Monitor",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 855,
    title: "Genelec 8040 RAW",
    img: "https://thumbs.static-thomann.de/thumb/bdbmagic/pics/bdb/495455/15468535_800.jpg",
  },
  {
    description: "Active Monitor",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 958,
    title: "Neumann KH 310 A",
    img: "https://thumbs.static-thomann.de/thumb/bdbmagic/pics/bdb/304990/7533412_800.jpg",
  },
  {
    description: "Active Monitor",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 1077,
    title: "Adam A77H",
    img: "https://thumbs.static-thomann.de/thumb/bdbmagic/pics/bdb/540698/17698393_800.jpg",
  },
  {
    description: "Active Monitor",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 1799,
    title: "Focal Twin6",
    img: "https://thumbs.static-thomann.de/thumb/bdbmagic/pics/bdb/544597/17698599_800.jpg",
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Short Product Description1",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "ProductOne",
      img: "https://thumbs.static-thomann.de/thumb/bdbmagic/pics/bdb/544597/17698599_800.jpg",
    },
    count: 2,
  },
  {
    product: {
      description: "Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "ProductName",
      img: "https://thumbs.static-thomann.de/thumb/bdbmagic/pics/bdb/544597/17698599_800.jpg",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [
      {
        productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        count: 3,
      },
    ],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
