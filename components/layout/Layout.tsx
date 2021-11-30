import Footer from './Footer'
import Meta from './Meta'
import styles from '../_styles/index.module.scss'

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
    return (
        <>
            <Meta/>
            <div className={styles.mainContainer}>{children}</div>
            <Footer/>
        </>
    )
}

export default Layout
