function findItemsOver(list, threshold) {
    var itemsOver = [];

    for (var i = 0; i < list.length; i++) {

        var item = list[i].qty;

        if (item > threshold) {
            itemsOver.push(list[i]);
        }
    }
    return itemsOver;
}

var list = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];