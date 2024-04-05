export function convert(lat, lng) {
    
    var latDegree = Math.floor(Math.abs(lat));
    var latMinute = Math.floor((Math.abs(lat) - latDegree) * 60);
    var latSecond = ((Math.abs(lat) - latDegree - (latMinute / 60)) * 3600).toFixed(2);
    var latDirection = lat >= 0 ? 'N' : 'S';

    var lngDegree = Math.floor(Math.abs(lng));
    var lngMinute = Math.floor((Math.abs(lng) - lngDegree) * 60);
    var lngSecond = ((Math.abs(lng) - lngDegree - (lngMinute / 60)) * 3600).toFixed(2);
    var lngDirection = lng >= 0 ? 'E' : 'W';

    return {
        latitude: latDegree + '° ' + latMinute + "' " + latSecond + '" ' + latDirection,
        longitude: lngDegree + '° ' + lngMinute + "' " + lngSecond + '" ' + lngDirection
    };
}