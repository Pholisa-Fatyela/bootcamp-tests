describe ('findItemsOver20 function', function(){
  it('print all items price over 20', function(){
    assert.deepEqual(findItemsOver20(list),[ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ])
  })
})