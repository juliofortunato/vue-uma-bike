<template>
  <gmap-map
    :center="{ lat: -23.5015, lng: -47.4526 }"
    :zoom="13"
    :options="{disableDefaultUI: true}"
  >
    <gmap-marker
      :key="station.id"
      v-for="station in stations"
      :position="{ lat: station.latitude, lng: station.longitude }"
      :clickable="true"
      :icon="{scaledSize: {width: 50, height: 50 }, url: 'https://i1.wp.com/www.bikeswelcome.org/wp-content/uploads/2016/12/bike_map_marker_225-Icon.png'}"
      @click="onStationClick(station)"
    />
</gmap-map>
</template>

<script>
export default {
  props: ['onStationClick'],

  data () {
    return {
      stations: [
        {
          empty_slots: 8,
          extra: {
            bike_uids: [
              281,
              169,
              92,
              216,
              193,
              11,
              104,
              56
            ],
            number: 6,
            open: true,
            uid: 13
          },
          free_bikes: 3,
          id: 'dec31b0d60602ee928d914dd1ea70ed9',
          latitude: -23.50078,
          longitude: -47.50812,
          name: 'Ipiranga',
          timestamp: '2018-06-27T01:37:18.461000Z'
        },
        {
          empty_slots: 11,
          extra: {
            bike_uids: [
              31,
              50,
              218,
              201,
              173,
              235
            ],
            number: 23,
            open: true,
            uid: 30
          },
          free_bikes: 2,
          id: 'b5d90b60309dc1f4a5f6b1b05ea36796',
          latitude: -23.52238,
          longitude: -47.46501,
          name: 'Campolim',
          timestamp: '2018-06-27T01:37:18.475000Z'
        },
        {
          empty_slots: 10,
          extra: {
            bike_uids: [
              189,
              153
            ],
            number: 4,
            open: true,
            uid: 11
          },
          free_bikes: 2,
          id: '512ca308111951d7c178965d8978cf42',
          latitude: -23.50309,
          longitude: -47.46828,
          name: 'P\u00e7a Nove de Julho',
          timestamp: '2018-06-27T01:37:18.459000Z'
        },
        {
          empty_slots: 10,
          extra: {
            bike_uids: [
              152,
              236
            ],
            number: 24,
            open: true,
            uid: 31
          },
          free_bikes: 2,
          id: '91988e0dbc598ee0f9f4e01288e4ebc6',
          latitude: -23.51638,
          longitude: -47.48307,
          name: 'Pra\u00e7a Los Angeles',
          timestamp: '2018-06-27T01:37:18.476000Z'
        },
        {
          empty_slots: 11,
          extra: {
            bike_uids: [
              220
            ],
            number: 8,
            open: true,
            uid: 15
          },
          free_bikes: 1,
          id: 'd70ebb58680e694beed513fe1ae73642',
          latitude: -23.49181,
          longitude: -47.50672,
          name: 'Wanel Ville',
          timestamp: '2018-06-27T01:37:18.462000Z'
        },
        {
          empty_slots: 7,
          extra: {
            bike_uids: [
              55,
              208,
              195,
              245,
              253
            ],
            number: 17,
            open: true,
            uid: 24
          },
          free_bikes: 5,
          id: '5a119117ccf0bc714c6db4196c5ac110',
          latitude: -23.4771,
          longitude: -47.44195,
          name: 'Ponte Pinga Pinga',
          timestamp: '2018-06-27T01:37:18.470000Z'
        },
        {
          empty_slots: 10,
          extra: {
            bike_uids: [
              262,
              61,
              250,
              198,
              248
            ],
            number: 16,
            open: true,
            uid: 23
          },
          free_bikes: 4,
          id: '0b02062b788cad6fa4deef7927b6e6bd',
          latitude: -23.50606,
          longitude: -47.45158,
          name: 'Poupatempo',
          timestamp: '2018-06-27T01:37:18.469000Z'
        },
        {
          empty_slots: 5,
          extra: {
            bike_uids: [
              54,
              42,
              188,
              90,
              160,
              207,
              102,
              16,
              97,
              22,
              25,
              44,
              20,
              221,
              146,
              171,
              176,
              69
            ],
            number: 18,
            open: true,
            uid: 25
          },
          free_bikes: 13,
          id: 'ec3a19367117c377beda18b608046e61',
          latitude: -23.46913,
          longitude: -47.44739,
          name: 'Parque das \u00c1guas',
          timestamp: '2018-06-27T01:37:18.471000Z'
        },
        {
          empty_slots: 11,
          extra: {
            bike_uids: [
              26,
              209,
              255
            ],
            number: 2,
            open: true,
            uid: 9
          },
          free_bikes: 3,
          id: '02c86b5b8767bdd28e3a45d264e77d5c',
          latitude: -23.50038,
          longitude: -47.4577,
          name: 'Pra\u00e7a Fernando Prestes',
          timestamp: '2018-06-27T01:37:18.457000Z'
        },
        {
          empty_slots: 5,
          extra: {
            bike_uids: [
              12,
              172,
              161,
              66,
              78
            ],
            number: 13,
            open: true,
            uid: 20
          },
          free_bikes: 6,
          id: '6ab7512d17de94a122ef4d3fec71caea',
          latitude: -23.46719,
          longitude: -47.49433,
          name: 'Avenida Ipanema',
          timestamp: '2018-06-27T01:37:18.467000Z'
        },
        {
          empty_slots: 11,
          extra: {
            bike_uids: [
              185,
              252,
              238,
              36
            ],
            number: 5,
            open: true,
            uid: 12
          },
          free_bikes: 1,
          id: '12cffff73f54d2889245b20c58dbadb0',
          latitude: -23.51493,
          longitude: -47.48941,
          name: 'Armando Pannunzio',
          timestamp: '2018-06-27T01:37:18.460000Z'
        },
        {
          empty_slots: 9,
          extra: {
            bike_uids: [
              106,
              259,
              166,
              274,
              240,
              13,
              96,
              179
            ],
            number: 3,
            open: true,
            uid: 10
          },
          free_bikes: 3,
          id: 'f850edcb030a60146829730051e771ad',
          latitude: -23.51575,
          longitude: -47.465,
          name: 'Pq Kasatu Maru',
          timestamp: '2018-06-27T01:37:18.458000Z'
        },
        {
          empty_slots: 5,
          extra: {
            bike_uids: [
              149,
              91,
              49,
              83,
              265,
              159,
              241
            ],
            number: 12,
            open: true,
            uid: 19
          },
          free_bikes: 7,
          id: '9929af550d4d368dd5c5beb5318683c6',
          latitude: -23.48504,
          longitude: -47.46877,
          name: 'P\u00e7a Adolpho Hanickel',
          timestamp: '2018-06-27T01:37:18.466000Z'
        },
        {
          empty_slots: 8,
          extra: {
            bike_uids: [
              283,
              108,
              59,
              168
            ],
            number: 25,
            open: true,
            uid: 32
          },
          free_bikes: 4,
          id: '011231e8f18f7bb9996f10ad819ec3c9',
          latitude: -23.46335,
          longitude: -47.47928,
          name: 'Maria Eug\u00eania',
          timestamp: '2018-06-27T01:37:18.477000Z'
        },
        {
          empty_slots: 10,
          extra: {
            bike_uids: [
              280,
              277
            ],
            number: 20,
            open: true,
            uid: 27
          },
          free_bikes: 2,
          id: '0a35a7928f890c34b9510be77ea3dc13',
          latitude: -23.50807,
          longitude: -47.44037,
          name: 'Nogueira Padilha',
          timestamp: '2018-06-27T01:37:18.472000Z'
        },
        {
          empty_slots: 10,
          extra: {
            bike_uids: [],
            number: 9,
            open: true,
            uid: 16
          },
          free_bikes: 0,
          id: 'f3d85de70f61c4e5140b1a2f1fb1781a',
          latitude: -23.48814,
          longitude: -47.47838,
          name: 'Unitem',
          timestamp: '2018-06-27T01:37:18.463000Z'
        },
        {
          empty_slots: 11,
          extra: {
            bike_uids: [
              272
            ],
            number: 15,
            open: true,
            uid: 22
          },
          free_bikes: 1,
          id: '80d879554eb49055364ea0b10bc7769d',
          latitude: -23.48155,
          longitude: -47.47806,
          name: 'Vila Ang\u00e9lica',
          timestamp: '2018-06-27T01:37:18.468000Z'
        },
        {
          empty_slots: 12,
          extra: {
            bike_uids: [
              48,
              63,
              251,
              192
            ],
            number: 11,
            open: true,
            uid: 18
          },
          free_bikes: 3,
          id: '9e42ffd03732c979d4725f69c3a355bc',
          latitude: -23.4956,
          longitude: -47.46259,
          name: 'P\u00e7a da Bandeira',
          timestamp: '2018-06-27T01:37:18.465000Z'
        },
        {
          empty_slots: 13,
          extra: {
            bike_uids: [
              194,
              93,
              46
            ],
            number: 19,
            open: true,
            uid: 26
          },
          free_bikes: 3,
          id: '9368f3df79243678b21c73d198cace6e',
          latitude: -23.479146,
          longitude: -47.422941,
          name: 'Biblioteca Municipal',
          timestamp: '2018-06-27T01:37:18.472000Z'
        },
        {
          empty_slots: 10,
          extra: {
            bike_uids: [
              29,
              98
            ],
            number: 21,
            open: true,
            uid: 28
          },
          free_bikes: 2,
          id: '370ea86d3805b4f2b038587a14f68097',
          latitude: -23.49131,
          longitude: -47.44318,
          name: 'Dom Aguirre',
          timestamp: '2018-06-27T01:37:18.473000Z'
        },
        {
          empty_slots: 10,
          extra: {
            bike_uids: [
              32,
              224,
              228,
              142
            ],
            number: 1,
            open: true,
            uid: 8
          },
          free_bikes: 4,
          id: '1136ae5de904ca2c73d08499ccfe99bd',
          latitude: -23.50257,
          longitude: -47.46114,
          name: 'Pra\u00e7a Frei Bara\u00fana',
          timestamp: '2018-06-27T01:37:18.455000Z'
        },
        {
          empty_slots: 2,
          extra: {
            bike_uids: [
              53,
              275,
              30,
              178,
              163,
              87,
              234,
              229
            ],
            number: 22,
            open: true,
            uid: 29
          },
          free_bikes: 10,
          id: 'cf5e6b8fb041f9e4bc649b218a5c3827',
          latitude: -23.51528,
          longitude: -47.44558,
          name: 'Parque dos Espanh\u00f3is',
          timestamp: '2018-06-27T01:37:18.474000Z'
        },
        {
          empty_slots: 9,
          extra: {
            bike_uids: [
              158,
              43,
              17
            ],
            number: 7,
            open: true,
            uid: 14
          },
          free_bikes: 3,
          id: 'b570cbe9dbb1a4d4d14510294950763f',
          latitude: -23.5019,
          longitude: -47.45276,
          name: 'Ponte da rua XV',
          timestamp: '2018-06-27T01:37:18.462000Z'
        },
        {
          empty_slots: 7,
          extra: {
            bike_uids: [
              144,
              100,
              199,
              211,
              223
            ],
            number: 14,
            open: true,
            uid: 21
          },
          free_bikes: 5,
          id: 'ba3dcab4d82fd9babf097319db9b14b0',
          latitude: -23.45538,
          longitude: -47.48231,
          name: 'Avenida Itavuvu',
          timestamp: '2018-06-27T01:37:18.467000Z'
        },
        {
          empty_slots: 11,
          extra: {
            bike_uids: [
              233
            ],
            number: 10,
            open: true,
            uid: 17
          },
          free_bikes: 1,
          id: '707515eebaa703294a0933dfa51eb1fc',
          latitude: -23.49845,
          longitude: -47.45968,
          name: 'P\u00e7a do Rel\u00f3gio',
          timestamp: '2018-06-27T01:37:18.464000Z'
        }
      ]
    }
  }
}
</script>
