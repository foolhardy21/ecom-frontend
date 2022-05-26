import { formatDate, requiresAuth } from "backend/utils/authUtils";

/**
 * This handler handles getting items to user's orders.
 * send GET Request at /api/user/orders
 * */
export const getOrders = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    if (!userId) {
        new Response(
            404,
            {},
            {
                errors: ["The email you entered is not Registered. Not Found error"],
            }
        );
    }
    const userOrders = schema.users.findBy({ _id: userId }).orders;
    return new Response(200, {}, { orders: userOrders });
};


/**
 * This handler handles adding items to user's orders.
 * send POST Request at /api/user/orders
 * body contains {product}
 * */
export const addProductToOrders = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: ["The email you entered is not Registered. Not Found error"],
                }
            );
        }
        const userOrders = schema.users.findBy({ _id: userId }).orders;
        const { product } = JSON.parse(request.requestBody);
        userOrders.push({
            ...product,
            createdAt: formatDate(),
            updatedAt: formatDate(),
        });
        this.db.users.update({ _id: userId }, { orders: userOrders });
        return new Response(201, {}, { orders: userOrders });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
}