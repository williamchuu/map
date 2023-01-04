import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {
    const position = [49.286312103271484, -123.11234283447266]; // waterfront

    const blueOption = { color: '#1a73e8' };
    const pinkOption = { color: '#e838d6' };
    const redOption = { color: 'red' };

    const polyline = [
        [49.286312103271484, -123.11234283447266], // waterfront
        [49.2856364, -123.1198152], // burrard
        [49.283302307128906, -123.11593627929688], //grandville
        [49.279537200927734, -123.10968017578125], //stadium-chinatown
        [49.27312088012695, -123.100341796875], // main street-science world
        [49.26260757446289, -123.06910705566406], //commercial-broadway
        [49.248374, -123.0560202], // nanaimo
        [49.24420166015625, -123.0459213256836], //29th avenue
        [49.2384033203125, -123.03174591064453], //joyce-collingwood
        [49.2298294, -123.012788], //patterson
        [49.2258524, -123.0038944], //metrotown
        [49.2200742, -122.988416], //royal oak
        [49.2121286, -122.959233], //edmonds
        [49.200096130371094, -122.94883728027344], //22nd street
        [49.201446533203125, -122.9125747680664], //new westminster
        [49.205135345458984, -122.90621948242188], //columbia
        [49.20444869995117, -122.8740234375], //scott road
        [49.1991139, -122.850605], //gateway
        [49.18951416015625, -122.84786224365234], //surrey central
        [49.18256759643555, -122.84412384033203], //king george
    ];

    const polyline2 = [
        [49.205135345458984, -122.90621948242188], //columbia
        [49.224860238697396, -122.88949270294468], //sapperton
        [49.23268213068468, -122.88456287225554], //braid
        [49.24875892482227, -122.89717730665], //lougheed town centre
        [49.25367827613695, -122.91868207173422], //production way-university
    ]

    return (
        <MapContainer className={style.map} center={position} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Waterfront
                </Popup>
            </Marker>
            <Marker position={polyline[1]}>
                <Popup>
                    Burrard
                </Popup>
            </Marker>
            <Marker position={polyline[2]}>
                <Popup>
                    Grandville
                </Popup>
            </Marker>
            <Marker position={polyline[3]}>
                <Popup>
                    Stadium-Chinatown
                </Popup>
            </Marker>
            <Marker position={polyline[4]}>
                <Popup>
                    Main Street-Science World
                </Popup>
            </Marker>
            <Marker position={polyline[5]}>
                <Popup>
                    Commercial-Broadway
                </Popup>
            </Marker>
            <Marker position={polyline[6]}>
                <Popup>
                    Nanaimo
                </Popup>
            </Marker>
            <Marker position={polyline[7]}>
                <Popup>
                    29th Avenue
                </Popup>
            </Marker>
            <Marker position={polyline[8]}>
                <Popup>
                    Joyce-Collingwood
                </Popup>
            </Marker>
            <Marker position={polyline[9]}>
                <Popup>
                    Patterson
                </Popup>

            </Marker>
            <Marker position={polyline[10]}>
                <Popup>

                    Metrotown
                </Popup>
            </Marker>
            <Marker position={polyline[11]}>
                <Popup>
                    Royal Oak
                </Popup>
            </Marker>
            <Marker position={polyline[12]}>
                <Popup>
                    Edmonds
                </Popup>
            </Marker>
            <Marker position={polyline[13]}>
                <Popup>
                    22nd Street
                </Popup>
            </Marker>
            <Marker position={polyline[14]}>
                <Popup>
                    New Westminster
                </Popup>
            </Marker>
            <Marker position={polyline[15]}>
                <Popup>
                    Columbia
                </Popup>
            </Marker>
            <Marker position={polyline[16]}>
                <Popup>
                    Scott Road
                </Popup>
            </Marker>
            <Marker position={polyline[17]}>
                <Popup>
                    Gateway
                </Popup>
            </Marker>
            <Marker position={polyline[18]}>
                <Popup>
                    Surrey Central
                </Popup>
            </Marker>
            <Marker position={polyline[19]}>
                <Popup>
                    King George
                </Popup>
            </Marker>

            <Marker position={polyline2[1]}>
                <Popup>
                    Sapperton
                </Popup>
            </Marker>
            <Marker position={polyline2[2]}>
                <Popup>
                    Braid
                </Popup>
            </Marker>
            <Marker position={polyline2[3]}>
                <Popup>
                    Lougheed Town Centre
                </Popup>
            </Marker>
            <Marker position={polyline2[4]}>
                <Popup>
                    Production Way-University
                </Popup>
            </Marker>

            <CircleMarker center={polyline[0]} pathOptions={redOption} radius={10}></CircleMarker>
            <CircleMarker center={polyline[19]} pathOptions={redOption} radius={10}></CircleMarker>
            <CircleMarker center={polyline2[4]} pathOptions={redOption} radius={10}></CircleMarker>
            <Polyline pathOptions={blueOption} positions={polyline} />
            <Polyline pathOptions={pinkOption} positions={polyline2} />
        </MapContainer>
    )

}