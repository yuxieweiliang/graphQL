import IndexView from './page/index'
import Enterprise from './page/enterprise'
import Product from './page/product'
import AddProduct from './page/product-add'
import Recruit from './page/recruit'
import Login from './page/login'
import Register from './page/register'

export default [
  { path: '/',
    exact: true,
    sidebar: IndexView,
    main: IndexView
  },
  { path: '/login',
    sidebar: () => <div>bubblegum!</div>,
    main: Login
  },
  { path: '/register',
    sidebar: () => <div>bubblegum!</div>,
    main: Register
  },
  { path: '/enterprise',
    sidebar: () => <div>bubblegum!</div>,
    main: Enterprise
  },
  { path: '/product',
    sidebar: () => <div>shoelaces!</div>,
    main: Product
  },
  { path: '/product-add',
    sidebar: () => <div>shoelaces!</div>,
    main: AddProduct
  },
  { path: '/recruit',
    sidebar: () => <div>shoelaces!</div>,
    main: Recruit
  }
]