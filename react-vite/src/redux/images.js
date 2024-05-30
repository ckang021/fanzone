const PRODUCT_IMAGES_ALL = 'images/PRODUCT_IMAGES_ALL'

const allProductImages = (productId, images) => ({
  type: PRODUCT_IMAGES_ALL,
  productId,
  images
})

export const allProdImages = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}/images`);
  const data = await res.json()
  if (res.ok) {
    dispatch(allProductImages(productId, data))
  }
  return data;
}

const initState = {}
const imagesReducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_IMAGES_ALL:
      return { ...state, [action.productId]: action.images }
    default:
      return state;
  }
}

export default imagesReducer
