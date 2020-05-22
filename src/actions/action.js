export const ADD_FEATURE = 'ADD_FEATURE'

export const addFeature = item => {
    console.log('Action triggered:', item);
    return {
        type: ADD_FEATURE,
        payload: item
    };
}