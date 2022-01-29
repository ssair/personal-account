export default {
    state: {
        items: [],
        beers: []
    },
    actions: {
        async fetchItems(ctx) {
            const [res, res_1] = await Promise.all([
                fetch('https://random-data-api.com/api/users/random_user'),
                fetch('https://random-data-api.com/api/beer/random_beer ')
                ]);
            const items =await res.json()
            const beers =await res_1.json()
            ctx.commit('updateItems', items)
            ctx.commit('updateBeers', beers)
            return [items, beers];

        },

    },

    mutations: {

        updateItems(state, items) {
            state.items = items

        },
        updateBeers(state, beers) {
            state.beers = beers

        }
    },
    getters: {
        allItems(state) {
            return state.items
        },
        allBeers(state) {
            return state.beers
        }

    },
}
