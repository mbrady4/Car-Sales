export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const removeFeature = item => {
    console.log('Action triggered:', item);
    return {
        type: REMOVE_FEATURE,
        payload: item
    };
}