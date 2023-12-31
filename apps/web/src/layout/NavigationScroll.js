'use client'

import { usePathname } from 'next/navigation'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

const NavigationScroll = ({ children }) => {
    const pathname = usePathname()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [pathname])

    return children || null
}

NavigationScroll.propTypes = {
    children: PropTypes.node
}

export default NavigationScroll
