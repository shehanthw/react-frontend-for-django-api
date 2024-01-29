import { Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {

  return (
    <div>
        <header>Header</header>
        <div>
        <Outlet />
        </div>
        
    </div>
  )
}

export default Layout