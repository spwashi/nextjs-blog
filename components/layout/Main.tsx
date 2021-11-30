import {ReactNode} from 'react'

type Props = {
    children?: ReactNode;
    className?: any
}

const Main = ({className, children}: Props) => {
    return <main className={className}>{children}</main>
}

export default Main
