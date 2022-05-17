export const state = () => ({
  testItems: [{
    id: 1,
    itemDesc: 'Item_Desc_1',
    itemImageSrc: 'Recommended_Item_1'
  }, {
    id: 2,
    itemDesc: 'Item_Desc_2',
    itemImageSrc: 'Recommended_Item_2'
  }, {
    id: 3,
    itemDesc: 'Item_Desc_3',
    itemImageSrc: 'Recommended_Item_3'
  }, {
    id: 4,
    itemDesc: 'Item_Desc_4',
    itemImageSrc: 'Recommended_Item_4'
  }],
  hooperSets: {
    autoPlay: true,
    playSpeed: 5000,
    infiniteScroll: true,
    mouseDrag: false,
    touchDrag: false,
    wheelControl: false
  }
})