import router from './routes'
import store from "../store/index"

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAdmin)) {
        if (!store.state.user.user.id) {
            store.dispatch("getUser").then(() => {
                if (store.state.user.user.admin) {
                    next()
                    console.log("is admin")
                } else {
                    console.log("not Admin")
                    next({
                        name: 'bugs'
                    })
                }
            })
        } else if (store.state.user.user.admin) {
            next()
            console.log("is admin")
        } else {
            next({
                name: 'bugs'
            })
            console.log("not admin")
        }
    } else {
        next() // make sure to always call next()!
    }
})
