import IndexView from './page/index'
import Enterprise from './page/enterprise'
import Product from './page/product'
import Recruit from './page/recruit'
import Login from './page/login'

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
  { path: '/recruit',
    sidebar: () => <div>shoelaces!</div>,
    main: Recruit
  }
]