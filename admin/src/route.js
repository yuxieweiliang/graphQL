import IndexView from './page/index'
import Enterprise from './page/enterprise'
import Product from './page/product'
import AddProduct from './page/product/add'
import Recruit from './page/recruit'

export default [
  { path: '/',
    exact: true,
    sidebar: IndexView,
    main: IndexView
  },
  { path: '/enterprise',
    sidebar: () => <div>bubblegum!</div>,
    main: Enterprise
  },
  { path: '/product',
    sidebar: () => <div>shoelaces!</div>,
    main: Product
  },
  { path: '/product-add/:id',
    sidebar: () => <div>shoelaces!</div>,
    main: AddProduct
  },
  { path: '/recruit',
    sidebar: () => <div>shoelaces!</div>,
    main: Recruit
  }
]