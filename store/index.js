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
  }/*, {
    id: 5,
    itemDesc: 'Item_Desc_5',
    itemImageSrc: 'Recommended_Item_5'
  }, {
    id: 6,
    itemDesc: 'Item_Desc_6',
    itemImageSrc: 'Recommended_Item_6'
  }, {
    id: 7,
    itemDesc: 'Item_Desc_7',
    itemImageSrc: 'Recommended_Item_7'
  }, {
    id: 8,
    itemDesc: 'Item_Desc_8',
    itemImageSrc: 'Recommended_Item_8'
  }*/],
  hooperSets: {
    autoPlay: true,
    playSpeed: 5000,
    infiniteScroll: true,
    mouseDrag: false,
    touchDrag: false,
    wheelControl: false
  },
  value: 0
});

export const mutations = {
  increment (state) {
    state.value = 1
  },
  increment2 (state) {
    state.value = 0
  }
}