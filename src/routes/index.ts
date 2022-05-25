import { Express } from 'express'
import { cartRoutes } from './cart.route'
import { productRoutes } from './product.route'
import { userRoutes } from './user.route'

export const appRoutes = (app: Express) => {

    app.use('/users', userRoutes())
    app.use('/products', productRoutes())
    app.use('/cart', cartRoutes())
}