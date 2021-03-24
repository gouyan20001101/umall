import { getCart } from "../utils/request"

export default {
    userActions(context, user) {
        context.commit('changeUser', user)
    },
    cartListActions(context, uid) {
        getCart({ uid }).then(res => {
            context.commit('changeCartList', res.data.list)
        })
    }

}