import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../public/css/pixel.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Plexo - Open Mart</title>
                <link rel="icon" href="/favicon.ico" />

                <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/img/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#ffffff" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
                <link type="text/css" href="/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet" />

                <script src="/vendor/jquery/dist/jquery.min.js"></script>
                <script src="/vendor/popper.js/dist/umd/popper.min.js"></script>
                <script src="/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
                <script src="/vendor/headroom.js/dist/headroom.min.js"></script>

                <script src="/vendor/onscreen/dist/on-screen.umd.min.js"></script>
                <script src="/vendor/nouislider/distribute/nouislider.min.js"></script>
                <script src="/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
                <script src="/vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"></script>
                <script src="/vendor/waypoints/lib/jquery.waypoints.min.js"></script>
                <script src="/vendor/jarallax/dist/jarallax.min.js"></script>
                <script src="/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
                <script src="/vendor/vivus/dist/vivus.min.js"></script>

                <script async defer src="https://buttons.github.io/buttons.js"></script>
                <script type="text/javascript" src='/js/pixel.js'></script>
            </Head>
            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}