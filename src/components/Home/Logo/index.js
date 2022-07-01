import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/H_3D.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20,
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript,  Developer"
            />
            <svg width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg">
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                {/* <path d="M129.539 10.1456V9.64563H129.039H93.0279H92.5279V10.1456V67.5658H37.5109V10.1456V9.64563H37.0109H1H0.5V10.1456V158V158.5H1H37.0109H37.5109V158V97.6312H92.5279V158V158.5H93.0279H129.039H129.539V158V10.1456Z" stroke="black" /> */}
                <path 
                ref={outlineLogoRef}
                d="M138.684 1V0.5H138.184H102.174H101.674V1V58.4202H46.6566V1V0.5H46.1566H10.1456H9.64563V1V148.854V149.354H10.1456H46.1566H46.6566V148.854V88.4855H101.674V148.854V149.354H102.174H138.184H138.684V148.854V1Z" stroke="black" />
                </g>
            </svg>
            {/* <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                    <path
                        ref={outlineLogoRef}
                        d=""
                    />
                </g>
            </svg> */}
        </div>
    )
}

export default Logo