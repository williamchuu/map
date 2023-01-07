import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {
    const position = [49.2863121, -123.1123428]; //waterfront
    const blueOption = { color: '#1a73e8' };
    const pinkOption = { color: '#e838d6' };
    const redOption = { color: 'red' };

    const polyline = [
        [49.2863121, -123.1123428], //waterfront
        [49.2856364, -123.1198152], //burrard
        [49.2833023, -123.1159362], //grandville
        [49.2795372, -123.1096801], //stadium-chinatown
        [49.2731208, -123.1003417], //main street-science world
        [49.2626075, -123.0691070], //commercial-broadway
        [49.2483741, -123.0560202], //nanaimo
        [49.2442016, -123.0459213], //29th avenue
        [49.2384033, -123.0317459], //joyce-collingwood
        [49.2298294, -123.0127881], //patterson
        [49.2258524, -123.0038944], //metrotown
        [49.2200742, -122.9884164], //royal oak
        [49.2121286, -122.9592333], //edmonds
        [49.2000961, -122.9488372], //22nd street
        [49.2014465, -122.9125747], //new westminster
        [49.2051353, -122.9062194], //columbia
        [49.2044486, -122.8740234], //scott road
        [49.1991139, -122.8506051], //gateway
        [49.1895141, -122.8478622], //surrey central
        [49.1825675, -122.8441238], //king george
    ];

    const polyline2 = [
        [49.2051353, -122.9062194], //columbia
        [49.2248602, -122.8894927], //sapperton
        [49.2326821, -122.8845628], //braid
        [49.2487589, -122.8971773], //lougheed town centre
        [49.2536782, -122.9186820], //production way-university
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