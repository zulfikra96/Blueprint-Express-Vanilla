
class viewsHome {

    main()
    {
        return views(/*html*/ `
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in nesciunt recusandae molestias, ullam ea quasi, corporis corrupti pariatur optio unde voluptas, inventore reiciendis eos. Vero, repellat voluptatem? Quae, vel?</h1>
            <button onclick="eventListener('',function (params) {
                router.navigateTo('/about')
            })">Tambah</button>
        `)
    }
}


