function findItemsOver20(list) {
    var itemsOver20 = [];

    for (var i = 0; i < list.length; i++) {

        var item = list[i].qty;

        if (item > 20) {
            itemsOver20.push(list[i]);
        }
    }
    return itemsOver20;
}

var list = [
    {name : 'apples', qty : 30},
    {name : 'guavas', qty : 9},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'grapes', qty : 30},
    {name : 'oranges', qty : 21},
    {name : 'kiwi', qty : 32},
    {name : 'plum', qty : 13}
];