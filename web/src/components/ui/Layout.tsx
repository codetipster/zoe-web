import Head from 'next/head';

export default function Layout({title, keywords, description, children}:any) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <div className='container mx-auto '>
                {children}
            </div>
        </div>
    )

}

Layout.defaultProps = {
    title: 'Chijioke Uzoma-onuoha | Portfolio',
    description: 'Product Designer, and UX/UI Engineer',
    keywords: 'design, product design, ux design, ui design, web design, mobile design, graphics design'
}