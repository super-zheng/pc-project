/**
 * Created by web-01 on 2018/1/24.
 */
$(function () {

    var nodes  = document.querySelectorAll('li'),
        _nodes = [].slice.call(nodes, 0);

    var getDirection = function (ev, obj) {
        var w = obj.offsetWidth,
            h = obj.offsetHeight,
            x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
            y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
            d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
        //console.log('atan2:' + Math.atan2(y, x) / 1.57079633 + 5);
        // console.log("X:"+x);
        // console.log("y:"+y);
        // console.log("d:"+d);
        return d;
    };

    var addClass = function ( ev, obj, state ) {
        var direction = getDirection( ev, obj ),
            class_suffix = "";

        obj.className = "";

        switch ( direction ) {
            case 0 : class_suffix = '-top';    break;
            case 1 : class_suffix = '-right';  break;
            case 2 : class_suffix = '-bottom'; break;
            case 3 : class_suffix = '-left';   break;
        }

        obj.classList.add( state + class_suffix );
    };

// bind events
    _nodes.forEach(function (el) {
        el.addEventListener('mouseover', function (ev) {
            addClass( ev, this, 'in' );
        }, false);

        el.addEventListener('mouseout', function (ev) {
            addClass( ev, this, 'out' );
        }, false);
    });

    // 地图
    var map = new BMap.Map("map");
    // 创建地图实例
    var point = new BMap.Point(114.387732,30.511549);
    // 创建点坐标
    map.centerAndZoom(point, 19);//
    //导航控件
    map.addControl(new BMap.NavigationControl());
    //缩放控件
    map.addControl(new BMap.ScaleControl());
    //概览图控件
    map.addControl(new BMap.OverviewMapControl());
    //类型控件
    map.addControl(new BMap.MapTypeControl());
    var marker = new BMap.Marker(point);        // 创建标注
    map.addOverlay(marker);                     // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);


})
