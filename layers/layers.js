var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_poligon_2 = new ol.format.GeoJSON();
var features_poligon_2 = format_poligon_2.readFeatures(json_poligon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligon_2.addFeatures(features_poligon_2);
var lyr_poligon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligon_2, 
                style: style_poligon_2,
                popuplayertitle: 'poligon',
                interactive: true,
                title: '<img src="styles/legend/poligon_2.png" /> poligon'
            });
var format_titik_koperasi_3 = new ol.format.GeoJSON();
var features_titik_koperasi_3 = format_titik_koperasi_3.readFeatures(json_titik_koperasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_koperasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_koperasi_3.addFeatures(features_titik_koperasi_3);
var lyr_titik_koperasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_koperasi_3, 
                style: style_titik_koperasi_3,
                popuplayertitle: 'titik_koperasi',
                interactive: true,
                title: '<img src="styles/legend/titik_koperasi_3.png" /> titik_koperasi'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_poligon_2.setVisible(true);lyr_titik_koperasi_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_poligon_2,lyr_titik_koperasi_3];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_poligon_2.set('fieldAliases', {'id': 'id', 'batas area': 'batas area', });
lyr_titik_koperasi_3.set('fieldAliases', {'id': 'id', 'Nama_Gerai': 'Nama_Gerai', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Status': 'Status', 'Persentase': 'Persentase', 'Nama_ketua': 'Nama_ketua', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_poligon_2.set('fieldImages', {'id': '', 'batas area': '', });
lyr_titik_koperasi_3.set('fieldImages', {'id': '', 'Nama_Gerai': '', 'Kelurahan': '', 'Kecamatan': '', 'Longitude': '', 'Latitude': '', 'Status': '', 'Persentase': '', 'Nama_ketua': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_poligon_2.set('fieldLabels', {'id': 'no label', 'batas area': 'no label', });
lyr_titik_koperasi_3.set('fieldLabels', {'id': 'no label', 'Nama_Gerai': 'no label', 'Kelurahan': 'no label', 'Kecamatan': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Status': 'no label', 'Persentase': 'no label', 'Nama_ketua': 'no label', });
lyr_titik_koperasi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});