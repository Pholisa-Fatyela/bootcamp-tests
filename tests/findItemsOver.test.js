describe('The findItemsOver function',function(){
    it('should take in a list of objects and return how many items over the threshold',function(){
      assert.deepEqual(findItemsOver(list,10),[ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ]);
    });

    it('should take in a list of objects and return how many items over the threshold',function(){
      assert.deepEqual(findItemsOver(list,4),[{name : 'apples', qty : 10}, {name : 'pears', qty : 37}, {name : 'bananas', qty : 27},]);
    });
  });