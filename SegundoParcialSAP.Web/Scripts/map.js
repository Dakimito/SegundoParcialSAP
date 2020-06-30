let myMap = L.map('myMap').setView([-34.61, -58.50], 5)

L.tileLayer(`https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png`, {
    maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([-32.517823, -62.974913]).addTo(myMap)
let marker3 = L.marker([-26.585463, -58.553888]).addTo(myMap)

let iconMarker = L.icon({
    iconUrl: 'https://image.flaticon.com/icons/svg/2937/2937000.svg',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})
let marker4 = L.marker([-32.517823, -62.974913], { icon: iconMarker }).addTo(myMap)
let marker2 = L.marker([-26.585463, -58.553888], { icon: iconMarker }).addTo(myMap)
let marker5 = L.marker([-39.016176, -67.794647], { icon: iconMarker }).addTo(myMap)
let marker6 = L.marker([-29.515837, -66.807686], { icon: iconMarker }).addTo(myMap)


myMap.doubleClickZoom.disable()
myMap.on('dblclick', e => {
    let latLng = myMap.mouseEventToLatLng(e.originalEvent);

    L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap)
})

navigator.geolocation.getCurrentPosition(
    (pos) => {
        const { coords } = pos
        const { latitude, longitude } = coords
        L.marker([latitude, longitude], { icon: iconMarker }).addTo(myMap)

        setTimeout(() => {
            myMap.panTo(new L.LatLng(latitude, longitude))
        }, 5000)
    },
    (error) => {
        console.log(error)
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    })