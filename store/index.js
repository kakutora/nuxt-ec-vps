export const state = () => ({
  testItems: [{
    id: 1,
    itemname: 'Item_Desc_1',
    itemimage: 'Item_Image_1'
  }, {
    id: 2,
    itemname: 'Item_Desc_2',
    itemimage: 'Item_Image_2'
  }, {
    id: 3,
    itemname: 'Item_Desc_3',
    itemimage: 'Item_Image_3'
  }, {
    id: 4,
    itemname: 'Item_Desc_4',
    itemimage: 'Item_Image_4'
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