﻿Fire.TextAsset = (function () {
    var TextAsset = Fire.define("Fire.TextAsset", Fire.Asset, function () {
        Fire.Asset.call(this);
    });

    TextAsset.prop('text', '', Fire.RawType('text'));

    return TextAsset;
})();
