
function calculateDistance(card,user) {
    const [lat1, long1] = [(Math.PI/180)*card.data[0].lat, (Math.PI/180)*card.data[0].long]
    const [lat2, long2] = [(Math.PI/180)*user.data[0].lat, (Math.PI/180)*user.data[0].long]
    const distlat = (lat2 - lat1) // distance in rads
    const distlong = (long2 - long1) // also dist in rads
    const r = 6370
    const totalDist = 2*r*Math.asin(Math.sqrt(Math.sin(distlat/2)**2 
    + Math.cos(lat1)*Math.cos(lat2)*Math.sin(distlong/2)**2));
    return (totalDist*3280.84) // converts km to feet
}

export default calculateDistance;