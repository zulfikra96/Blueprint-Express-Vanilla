// init router
var router = new Router({
    mode: 'history',
    page404: function (path) {
        console.log('"/' + path + '" Page not found');
    }
});

// router js
router.add('', function () {
    let home = new viewsHome()
    home.main()
});

router.add('/about', function (name) {
    let about = new viewsAbout()
    about.main()
});

router.addUriListener();
router.check()