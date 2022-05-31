export const ACTION_SET_LOADING = 'SET_LOADING'
export const ACTION_REMOVE_LOADING = 'REMOVE_LOADING'
export const ACTION_SET_ALERT = 'SET_ALERT'
export const ACTION_REMOVE_ALERT = 'REMOVE_ALERT'

export const ACTION_INIT_CART = 'INIT_CART'
export const ACTION_ADD_TO_CART = 'ADD_TO_CART'
export const ACTION_REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ACTION_INCREMENT_CART_PRODUCT = 'INCREMENT_CART_PRODUCT'
export const ACTION_DECREMENT_CART_PRODUCT = 'DECREMENT_CART_PRODUCT'

export const ACTION_RESET_FILTER = 'RESET'
export const ACTION_UPDATE_PRICE = 'UPDATE_PRICE'
export const ACTION_UPDATE_SORTORDER = 'UPDATE_SORTORDER'
export const ACTION_ADD_GENDER = 'ADD_GENDER'
export const ACTION_REMOVE_GENDER = 'REMOVE_GENDER'
export const ACTION_ADD_BRAND = 'ADD_BRAND'
export const ACTION_REMOVE_BRAND = 'REMOVE_BRAND'
export const ACTION_ADD_SIZE = 'ADD_SIZE'
export const ACTION_REMOVE_SIZE = 'REMOVE_SIZE'
export const ACTION_ADD_RATING = 'ADD_RATING'
export const ACTION_REMOVE_RATING = 'REMOVE_RATING'

export const ACTION_INIT_FORM = 'INIT_FORM'
export const ACTION_UPDATE_EMAIL = 'UPDATE_EMAIL'
export const ACTION_UPDATE_FIRSTNAME = 'UPDATE_FIRST_NAME'
export const ACTION_UPDATE_LASTNAME = 'UPDATE_LAST_NAME'
export const ACTION_UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const ACTION_UPDATE_CONFIRMED_PASSWORD = 'UPDATE_CONFIRMED_PASSWORD'
export const ACTION_TOGGLE_PASSWORD_TYPE = 'TOGGLE_PASSWORD_TYPE'
export const ACTION_SET_EMAIL_ERROR = 'SET_EMAIL_ERROR'
export const ACTION_REMOVE_EMAIL_ERROR = 'REMOVE_EMAIL_ERROR'
export const ACTION_SET_FIRSTNAME_ERROR = 'SET_FIRST_NAME_ERROR'
export const ACTION_REMOVE_FIRSTNAME_ERROR = 'REMOVE_FIRST_NAME_ERROR'
export const ACTION_SET_LASTNAME_ERROR = 'SET_LAST_NAME_ERROR'
export const ACTION_REMOVE_LASTNAME_ERROR = 'REMOVE_LAST_NAME_ERROR'
export const ACTION_SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR'
export const ACTION_REMOVE_PASSWORD_ERROR = 'REMOVE_PASSWORD_ERROR'
export const ACTION_SET_CONFIRMEDPASSWORD_ERROR = 'SET_CONFIRMED_PASSWORD_ERROR'
export const ACTION_REMOVE_CONFIRMEDPASSWORD_ERROR = 'REMOVE_CONFIRMED_PASSWORD_ERROR'

export const ACTION_INIT_PRODUCTS = 'INIT_PRODUCTS'
export const ACTION_FILTER_PRODUCTS = 'FILTER_PRODUCTS'

export const ACTION_INIT_WISHLIST = 'INIT_WISHLIST'
export const ACTION_ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const ACTION_REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

export const ACTION_REMOVE_ADDRESS = 'REMOVE_ADDRESS'
export const ACTION_ADD_ADDRESS = 'ADD_ADDRESS'
export const ACTION_UPDATE_ADDRESS = 'UPDATE_ADDRESS'

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'

export const API_LOGIN = '/api/auth/login'
export const API_SIGNUP = '/api/auth/signup'
export const API_CART = '/api/user/cart'
export const API_WISHLIST = '/api/user/wishlist'
export const API_PRODUCTS = '/api/products'
export const API_CATEGORIES = '/api/categories'

export const ALERT_DISPLAY_TIME = 1500
export const INPUT_ERROR_DISPLAY_TIME = 3000

export const ALERT_TYPE_ERROR = 'error'
export const ALERT_TYPE_SUCCESS = 'success'

export const ROUTE_HOME = '/'
export const ROUTE_PRODUCTS = '/products'
export const ROUTE_CART = '/cart'
export const ROUTE_WISHLIST = '/wishlist'
export const ROUTE_LOGIN = '/login'
export const ROUTE_SIGNUP = '/signup'
export const ROUTE_PROFILE = '/profile'
export const ROUTE_CHECKOUT = '/checkout'
export const ROUTE_ADDRESS_FORM = '/profile/addresses/form'
export const ROUTE_ADDRESSES = '/profile/addresses'
export const ROUTE_ACCOUNT = '/profile/account'
export const ROUTE_PRODUCT = '/products/:productId'