var db = new PouchDB('otto3');


// db.bulkDocs([{
//         "adm_cod" : {
//             "-Ka2UNIks3RttGkh_eBX" : "HhVHAQRGxxe6btoLg9722cINgFP2"
//         },
//         "categories_en" : {
//             "-Ka2UNIks3RttGkh_eBU" : {
//                 "catId" : "-Ka2UNFN94bAZPuCEeyX",
//                 "description" : "Restaurants, Dining, Cafeterias, Bars, etc.",
//                 "logo" : "ion-android-restaurant",
//                 "name" : "Restaurants and Cafeterias"
//             },
//             "-Ka2UOtSCmWUf3XqfIpK" : {
//                 "catId" : "-Ka2UOq5KWvoPImZGkUL",
//                 "description" : "Hotels, Lodges, Haciendas, Hostals",
//                 "logo" : "ion-ios-home",
//                 "name" : "Lodging"
//             },
//             "-Ka2UReDAdgirMnrGCiH" : {
//                 "catId" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "description" : "Museums, Historic Houses and Buildings",
//                 "logo" : "ion-android-map",
//                 "name" : "Museums"
//             },
//             "-Ka2UStF_zXobIGLJtHE" : {
//                 "catId" : "-Ka2USq-iNVVKcH3mtXg",
//                 "description" : "Handcraft shops, Galleries, Supermarkets",
//                 "logo" : "ion-tshirt",
//                 "name" : "Shopping"
//             },
//             "-KdSVTsxwKPaUzSh1dDZ" : {
//                 "catId" : "-KdSVTqazsDFtSBxBXT6",
//                 "description" : "Bus stops, Bus Stations, Airports, Taxis, Tourist Transportation, Touristic Train",
//                 "logo" : "ion-android-bus",
//                 "name" : "Transportation"
//             },
//             "-KdSXli2WAOKdikTf51j" : {
//                 "catId" : "-KdSXlfksmLUHuRyU5fm",
//                 "description" : "Hospitals, Police Office, Red Cross, Drug Stores",
//                 "logo" : "ion-navigate",
//                 "name" : "Emergencies"
//             },
//             "-KdSYxqAiBSMhiLMe29w" : {
//                 "catId" : "-KdSYxnr5Xw2q47YdQqt",
//                 "description" : "Public Parks, Streets, Monuments, View Points",
//                 "logo" : "ion-android-compass",
//                 "name" : "Plazas and Monuments"
//             },
//             "-KdSZC6KbkdvxecHxeVe" : {
//                 "catId" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "description" : "Churches, Chapels, Convents ",
//                 "logo" : "ion-android-map",
//                 "name" : "Churches and Convents"
//             },
//             "-Ke9YHyXR3WIgI46zuEU" : {
//                 "catId" : "-Ke9YHvulx1-Gj6lHsqw",
//                 "description" : "Tours, Jungle Tours, Galapagos Islands, Daily Tours, Transportation",
//                 "logo" : "ion-android-contacts",
//                 "name" : "Travel Agencies"
//             }
//         },
//         "categories_es" : {
//             "-Ka2UNFN94bAZPuCEeyX" : {
//                 "description" : "Restaurantes, Comedores, Cafeterías, Bares, etc.",
//                 "logo" : "ion-android-restaurant",
//                 "name" : "Restaurantes y Cafeterías"
//             },
//             "-Ka2UOq5KWvoPImZGkUL" : {
//                 "description" : "Hoteles, Lodges, Haciendas, Hostales, Hosterías",
//                 "logo" : "ion-ios-home",
//                 "name" : "Hospedaje"
//             },
//             "-Ka2URayd8Y9sBoGTO0Z" : {
//                 "description" : "Museos, Casas y Edificios Históricos ",
//                 "logo" : "ion-ios-home",
//                 "name" : "Museos"
//             },
//             "-Ka2USq-iNVVKcH3mtXg" : {
//                 "description" : "Tiendas de artesanías, Galerías, Supermercados",
//                 "logo" : "ion-tshirt",
//                 "name" : "Shopping"
//             },
//             "-KdSVTqazsDFtSBxBXT6" : {
//                 "description" : "Paradas y Terminales de Buses, Aeropuertos, Taxis, Transporte Turístico, Tren Turistico",
//                 "logo" : "ion-android-bus",
//                 "name" : "Transporte"
//             },
//             "-KdSXlfksmLUHuRyU5fm" : {
//                 "description" : "Hospitales, Estaciones de Policía, Cruz Roja, Farmacias",
//                 "logo" : "ion-navigate",
//                 "name" : "Emergencias"
//             },
//             "-KdSYxnr5Xw2q47YdQqt" : {
//                 "description" : "Parques Públicos, Calles, Monumentos, Miradores",
//                 "logo" : "ion-ios-camera-outline",
//                 "name" : "Plazas y Monumentos"
//             },
//             "-KdSZC3w2K-R6ZHSxTnL" : {
//                 "description" : "Iglesias, Capillas, Conventos ",
//                 "logo" : "ion-android-map",
//                 "name" : "Iglesias y Conventos"
//             },
//             "-Ke9YHvulx1-Gj6lHsqw" : {
//                 "description" : "Venta de Tours, Selva, Galápagos, Tours Diarios, Transporte",
//                 "logo" : "ion-android-contacts",
//                 "name" : "Agencias de Viaje"
//             }
//         },
//         "category_icons" : [ {
//             "name" : "ion-android-restaurant"
//         }, {
//             "name" : "ion-ios-home"
//         }, {
//             "name" : "ion-information-circled"
//         }, {
//             "name" : "ion-android-map"
//         }, {
//             "name" : "ion-tshirt"
//         }, {
//             "name" : "ion-navigate"
//         }, {
//             "name" : "ion-music-note"
//         }, {
//             "name" : "ion-plane"
//         }, {
//             "name" : "ion-ios-cart"
//         }, {
//             "name" : "ion-ios-email-outline"
//         }, {
//             "name" : "ion-ios-camera-outline"
//         }, {
//             "name" : "ion-ios-football"
//         }, {
//             "name" : "ion-android-compass"
//         }, {
//             "name" : "ion-android-bicycle"
//         }, {
//             "name" : "ion-android-bar"
//         }, {
//             "name" : "ion-android-camera"
//         }, {
//             "name" : "ion-android-contacts"
//         }, {
//             "name" : "ion-android-bus"
//         }, {
//             "name" : "ion-android-subway"
//         } ],
//         "coupon_use" : {
//             "-KbNX5q67HTceuD86k0T" : {
//                 "code" : "3xa8rhIPBdwL",
//                 "coupon_desc" : "Prueba del cupon",
//                 "coupon_id" : "-KbKsw8gzFTYva-KkB67",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "prod_name" : "El Mesón del Tren",
//                 "uid" : "DqRJaqZ1GoQ5qEaF0qRVNVMW9P82",
//                 "use_date" : "25/01/2017",
//                 "use_time" : "9:08:55 PM",
//                 "user_name" : "Raficolito Matitolito"
//             },
//             "-Kc-i3nPcN1eLsUmbhQN" : {
//                 "code" : "97ACCB",
//                 "coupon_desc" : "De lunes a viernes siempre que venga con l;a am,iga guapa",
//                 "coupon_id" : "-Kc-h6xJPu49M3WWdG94",
//                 "prod_id" : "-Kc-fhZ9v43BjpbGzmJ2",
//                 "prod_name" : "Prueba",
//                 "uid" : "5LuK29uWKuRP7qwKyHYlQvvA17q2",
//                 "use_date" : "02/02/2017",
//                 "use_time" : "4:25:31 PM",
//                 "user_name" : "Panda Clasic"
//             },
//             "-KenxmI8Dl2KQnhpch-v" : {
//                 "code" : "871964",
//                 "coupon_desc" : "Prueba del cupon",
//                 "coupon_id" : "-KbKsw8gzFTYva-KkB67",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "prod_name" : "Restaurante Tikal",
//                 "uid" : "DqRJaqZ1GoQ5qEaF0qRVNVMW9P82",
//                 "use_date" : "09/03/2017",
//                 "use_time" : "11:46:47 AM",
//                 "user_name" : "Raficolito Matitolito"
//             },
//             "-Kf4LQi4xEDWzHhgEkBu" : {
//                 "code" : "4D2182",
//                 "coupon_desc" : "Prueba del cupon",
//                 "coupon_id" : "-KbKsw8gzFTYva-KkB67",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "prod_name" : "Restaurante Tikal",
//                 "uid" : "DqRJaqZ1GoQ5qEaF0qRVNVMW9P82",
//                 "use_date" : "12/03/2017",
//                 "use_time" : "8:47:57 PM",
//                 "user_name" : "Raficolito Matitolito"
//             },
//             "-KfXauCJlOea32WE78AU" : {
//                 "code" : "920580",
//                 "coupon_desc" : "Prueba del cupon",
//                 "coupon_id" : "-KbKsw8gzFTYva-KkB67",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "prod_name" : "Restaurante Tikal",
//                 "uid" : "DqRJaqZ1GoQ5qEaF0qRVNVMW9P82",
//                 "use_date" : "18/03/2017",
//                 "use_time" : "1:08:54 PM",
//                 "user_name" : "Raficolito Matitolito"
//             },
//             "-Kfqh7ZDekw-V7cR7tSB" : {
//                 "code" : "0079B7",
//                 "coupon_desc" : "Prueba del cupon",
//                 "coupon_id" : "-KbKsw8gzFTYva-KkB67",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "prod_name" : "Restaurante Tikal",
//                 "uid" : "DqRJaqZ1GoQ5qEaF0qRVNVMW9P82",
//                 "use_date" : "22/03/2017",
//                 "use_time" : "10:48:34 AM",
//                 "user_name" : "Raficolito Matitolito"
//             },
//             "-KhbrmRR05QSFTV8OzYs" : {
//                 "code" : "91B3B4",
//                 "coupon_desc" : "Prueba del cupon",
//                 "coupon_id" : "-KbKsw8gzFTYva-KkB67",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "prod_name" : "Restaurante Tikal",
//                 "uid" : "DqRJaqZ1GoQ5qEaF0qRVNVMW9P82",
//                 "use_date" : "13/04/2017",
//                 "use_time" : "10:12:09 AM",
//                 "user_name" : "Raficolito Matitolito"
//             },
//             "-KhbtJsFHZFEc_15h5fO" : {
//                 "code" : "36C4B6",
//                 "coupon_desc" : "Prueba del cupon",
//                 "coupon_id" : "-KbKsw8gzFTYva-KkB67",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "prod_name" : "Restaurante Tikal",
//                 "uid" : "DqRJaqZ1GoQ5qEaF0qRVNVMW9P82",
//                 "use_date" : "13/04/2017",
//                 "use_time" : "10:18:52 AM",
//                 "user_name" : "Raficolito Matitolito"
//             },
//             "-Ki2PVbDss7maK_J-5iD" : {
//                 "code" : "93C33D",
//                 "coupon_desc" : "Prueba del cupon",
//                 "coupon_id" : "-KbKsw8gzFTYva-KkB67",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "prod_name" : "Restaurante Tikal",
//                 "uid" : "DqRJaqZ1GoQ5qEaF0qRVNVMW9P82",
//                 "use_date" : "18/04/2017",
//                 "use_time" : "6:33:37 PM",
//                 "user_name" : "Raficolito Matitolito"
//             }
//         },
//         "coupons_en" : {
//             "-KbKswAi6dHL8asz3j20" : {
//                 "active" : true,
//                 "coupId" : "-KbKsw8gzFTYva-KkB67",
//                 "description" : "Prueba del cupon",
//                 "end_date" : "25-02-2017",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "start_date" : "25-01-2017",
//                 "title" : "Primer Cupon 10%"
//             },
//             "-Kc-h72HAeqTd_qUVU8d" : {
//                 "active" : true,
//                 "coupId" : "-Kc-h6xJPu49M3WWdG94",
//                 "description" : "De lunes a viernes siempre que venga con l;a am,iga guapa",
//                 "end_date" : "28-02-2017",
//                 "prod_id" : "-Kc-fhZ9v43BjpbGzmJ2",
//                 "start_date" : "02-02-2017",
//                 "title" : "10% de descuento"
//             }
//         },
//         "coupons_es" : {
//             "-KbKsw8gzFTYva-KkB67" : {
//                 "active" : true,
//                 "description" : "Prueba del cupon",
//                 "end_date" : "25-02-2017",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "start_date" : "25-01-2017",
//                 "title" : "Primer Cupon 10%"
//             },
//             "-Kc-h6xJPu49M3WWdG94" : {
//                 "active" : true,
//                 "description" : "De lunes a viernes siempre que venga con l;a am,iga guapa",
//                 "end_date" : "28-02-2017",
//                 "prod_id" : "-Kc-fhZ9v43BjpbGzmJ2",
//                 "start_date" : "02-02-2017",
//                 "title" : "10% de descuento"
//             }
//         },
//         "prod_latlng_en" : {
//             "-KbzZmdHTpvuZhaAdjq8" : {
//                 "address" : "Ricaurte & Eloy Alfaro (Esq) Junto a la Estación del Tren, Alausí",
//                 "cat_id" : "-Ka2UNIks3RttGkh_eBU",
//                 "city" : "Alausí",
//                 "latlong" : "-1.066346, -80.907348",
//                 "name" : "El Mesón del Tren",
//                 "phone" : "(03) 302 - 7544;0987291923;0993434081",
//                 "prod_id" : "-Ka2WpFX7a_kibaZQ9Nm",
//                 "region" : "Chimborazo"
//             },
//             "-KbzZrP5_hsTSKTbLE-a" : {
//                 "address" : "J. de Dios Morales OE 389 y Venezuela",
//                 "cat_id" : "-Ka2UNIks3RttGkh_eBU",
//                 "city" : "Quito",
//                 "latlong" : "-0.224066, -78.514536",
//                 "name" : "Chez Tiff",
//                 "phone" : "02 22 900 20",
//                 "prod_id" : "-KbgotBM5F0tKboBd9mT",
//                 "region" : "Pichincha"
//             },
//             "-KbzZuZRvIGvcFkVjR6G" : {
//                 "address" : "Plaza de San Francisco, bajos del atrio",
//                 "cat_id" : "-Ka2UNIks3RttGkh_eBU",
//                 "city" : "",
//                 "latlong" : "-0.220254, -78.514974",
//                 "name" : "Cafeteria Tianguez",
//                 "phone" : "02 2230609",
//                 "prod_id" : "-KbkQjhOYiM0FQo4JNYj",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_1wJiM3R_ARam0cd" : {
//                 "address" : "Garcia Moreno Street between Chile and Espejo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.219869, -78.512124",
//                 "name" : "Government Palace",
//                 "phone" : "02 3827000",
//                 "prod_id" : "-KbQKjb63jtA8yYvestm",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_4tv7YRd6v-EHs5_" : {
//                 "address" : "Chile Street and Venezuela",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.219679, -78.511677",
//                 "name" : "Archbishop Palace",
//                 "phone" : "02 228 7748 - 02 295 9632",
//                 "prod_id" : "-KbVP3vXv99x7suElMW3",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_7ogKiL3URq6f8In" : {
//                 "address" : "Venezuela Street between Chile and Espejo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.220562, -78.511624",
//                 "name" : "City Hall",
//                 "phone" : "02 3952300",
//                 "prod_id" : "-KbVbjf6WOxTGBlLxYjP",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_AreeVmg_T9O_K-f" : {
//                 "address" : "Garcia Moreno Street and Espejo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.220396, -78.513160",
//                 "name" : "Metropolitan Cultural Center",
//                 "phone" : "02 395 2300",
//                 "prod_id" : "-Kbfm-ChgvdGC6215Txf",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_ERT8TtSh_RgAIeJ" : {
//                 "address" : "Venezuela y Espejo 715",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.220471, -78.512503",
//                 "name" : "Catedral Primada de Quito",
//                 "phone" : "no",
//                 "prod_id" : "-KbfvbUQOHizXF0jVCJV",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_sxOLQsDJfEXpRWE" : {
//                 "address" : "Garcia Moreno y Sucre - Esq",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.220974, -78.513687",
//                 "name" : "Iglesia de la Compañia de Jesus",
//                 "phone" : "02 2584175",
//                 "prod_id" : "-KbkY3kkJtsH9FUE0gZL",
//                 "region" : "Pichincha"
//             },
//             "-Ke6HMyuOc-4asyyFfHv" : {
//                 "address" : "Sucre Street and Garcia Moreno",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221175, -78.513841",
//                 "name" : "Former Central Bank of Ecuador",
//                 "phone" : "02 258 9284",
//                 "prod_id" : "-Ke6HMwODh0skly8LLi1",
//                 "region" : "Pichincha"
//             },
//             "-Ke6UQDTEiCnrRnXo0py" : {
//                 "address" : "Calle Bolívar y Cuenca",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221288, -78.515417",
//                 "name" : "Casa Gangotena",
//                 "phone" : "02 400 8000",
//                 "prod_id" : "-Ke1kbFTwxyJqVpg-Dg5",
//                 "region" : "Pichincha"
//             },
//             "-Ke9ZmgUkzy0f34mWY11" : {
//                 "address" : "Juan León Mera N 24-67 y J.Pinto",
//                 "cat_id" : "-Ke9YHvulx1-Gj6lHsqw",
//                 "city" : "Quito",
//                 "latlong" : "-0.20224350416094528, -78.49186956882477",
//                 "name" : "LUIS TIPAN TRAVEL",
//                 "phone" : "022557453",
//                 "prod_id" : "-Ke9ZmaCCv9dicGDkPhW",
//                 "region" : "Pichincha"
//             },
//             "-KeB1VA8uaguR_yueVb7" : {
//                 "address" : "Bolivar Street and Garcia Moreno",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221948, -78.514169",
//                 "name" : "Agricultural and Industrial Credit Company",
//                 "phone" : "02 294 6100 - 02 228 7478",
//                 "prod_id" : "-KeB1V5Lr_5G9yvp4hli",
//                 "region" : "Pichincha"
//             },
//             "-KeBF3-HR7iapSm7DPd4" : {
//                 "address" : "Cuenca St. and Bolívar",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221270, -78.515823",
//                 "name" : "Alabado House Museum",
//                 "phone" : "02 228 0772",
//                 "prod_id" : "-KeBF2rYnYIjjkdUR7lp",
//                 "region" : "Pichincha"
//             },
//             "-KeC29_2x1YOt17MBnW9" : {
//                 "address" : "Los Ríos St. and Gandara",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.215995, -78.500421",
//                 "name" : "Cordovez Palace",
//                 "phone" : "02 255 7721",
//                 "prod_id" : "-KeC298-agDNPjcDT7lI",
//                 "region" : "Pichincha"
//             },
//             "-KeC3jdCvro1GPhS4vwK" : {
//                 "address" : "Luis Vargas Torres Street and Francisco de Caldas",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.215364, -78.506365",
//                 "name" : "Landazuri Palace",
//                 "phone" : "",
//                 "prod_id" : "-KeC3jZeG9dNwAte5dy1",
//                 "region" : "Pichincha"
//             },
//             "-KeC4d2x0jpCGOtFvOVV" : {
//                 "address" : "12 de Octubre Avenue and Baquerizo Moreno",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.205474, -78.486463",
//                 "name" : "Larrea Chateau",
//                 "phone" : "02 290 2764 - 02 290 2765 - 0988436764",
//                 "prod_id" : "-KeC4d0Q0CieAenu9Y8D",
//                 "region" : "Pichincha"
//             },
//             "-KeC5uGCDIO-AB1O6qZk" : {
//                 "address" : "6 de Diciembre Avenue and Clemente Ponce",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.211852, -78.499200",
//                 "name" : "Lasso-Conto Villa",
//                 "phone" : "02 399 1000",
//                 "prod_id" : "-KeC5uB5DHK-WuospMDh",
//                 "region" : "Pichincha"
//             },
//             "-KeFyqrP7vs-HR42tqLt" : {
//                 "address" : "Tarqui Avenue, between 6 de Diciembre and Gran Colombia",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.211603, -78.497866",
//                 "name" : "Freile-Larrea Mansion",
//                 "phone" : "02 222 5240",
//                 "prod_id" : "-KeFyqpF_w5rdJxepWDp",
//                 "region" : "Pichincha"
//             },
//             "-KeFzwuGqBLgmq_pfLAa" : {
//                 "address" : "Gran Colombia Avenue and Briceño",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.216761, -78.504506",
//                 "name" : "Arteta House",
//                 "phone" : "02 297 6800",
//                 "prod_id" : "-KeFzws4ZiNskYndMKbW",
//                 "region" : "Pichincha"
//             },
//             "-KePbjmRDNSbrBicRvz1" : {
//                 "address" : "Calle García Moreno y Sucre",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221398, -78.513660",
//                 "name" : "Casa Gangotena Posse",
//                 "phone" : ".",
//                 "prod_id" : "-KePbjitW6oQfhFdXJ6a",
//                 "region" : "Pichincha"
//             },
//             "-KePdHDIKDWmhbZeb5iT" : {
//                 "address" : "Guayaquil Street and Espejo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221177, -78.511189",
//                 "name" : "Chiriboga Palace",
//                 "phone" : "",
//                 "prod_id" : "-KePdH7gOYVeZv5ve2FF",
//                 "region" : "Pichincha"
//             },
//             "-KePf6cgJTcdaBhV_DIH" : {
//                 "address" : "6 de diciembre Avenue and Roca",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.206655, -78.493124",
//                 "name" : "La Alhambra Palace",
//                 "phone" : "02 290 7433",
//                 "prod_id" : "-KePf6_W1P81w_b24vOX",
//                 "region" : "Pichincha"
//             },
//             "-KePkyEPwXdp3yc27lAA" : {
//                 "address" : "Gran Colombia Avenue and Julio Castro",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.215565, -78.501531",
//                 "name" : "Samaniego Palace (Capitol Theatre)",
//                 "phone" : "02 395 2300",
//                 "prod_id" : "-KePkyBOPAOWu5ohJeTI",
//                 "region" : "Pichincha"
//             },
//             "-KePnF8VEYg7d3dBBMaF" : {
//                 "address" : "Garcia Moreno Street, between Sucre and Bolivar",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221602, -78.513914",
//                 "name" : "Urrutia Barba House Museum",
//                 "phone" : "02 258 0103 - 02 258 4174",
//                 "prod_id" : "-KePnF3gL0Gh5Ufb-Ds_",
//                 "region" : "Pichincha"
//             },
//             "-KePquF6C1NvhWgnr6sM" : {
//                 "address" : "10 de Agosto Avenue and Colón",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.198094, -78.496940",
//                 "name" : "La Circasiana Palace",
//                 "phone" : "02 222 7927",
//                 "prod_id" : "-KePquB8jR1wd1WHHfaK",
//                 "region" : "Pichincha"
//             },
//             "-KeU6Yw7Qvffn7DWYMy_" : {
//                 "address" : "6 de Diciembre Avenue and Patria",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.209810, -78.496484",
//                 "name" : "Benjamin Carrion Palace",
//                 "phone" : "02 222 0967",
//                 "prod_id" : "-KeU6YtUp9xAWsOBi2W9",
//                 "region" : "Pichincha"
//             },
//             "-KeU7pTF8AQemiASb6sA" : {
//                 "address" : "Chile Street and Guayaquil",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.220291, -78.510925",
//                 "name" : "Guerrero Mora Building",
//                 "phone" : "",
//                 "prod_id" : "-KeU7pDjGB6G02MqwjID",
//                 "region" : "Pichincha"
//             },
//             "-KeUA2s2plNSlL_c52Bm" : {
//                 "address" : "Guayaquil Street and Rocafuerte",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.223742, -78.513360",
//                 "name" : "Garcia Moreno House",
//                 "phone" : "",
//                 "prod_id" : "-KeUA2oxJKi_x-r-9ooo",
//                 "region" : "Pichincha"
//             },
//             "-KeUCqNrzaJF_PfwdjP1" : {
//                 "address" : "Garcia Moreno and Galapagos",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.215424, -78.508804",
//                 "name" : "De La Peña House",
//                 "phone" : "",
//                 "prod_id" : "-KeUCqKWLVSMMz9qtTeX",
//                 "region" : "Pichincha"
//             },
//             "-KeUFtm_7EXMgaiBLP1n" : {
//                 "address" : "Mariano Calvache and Lorenzo Chavez",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.190100, -78.469231",
//                 "name" : "Guayasamin House and Foundation",
//                 "phone" : "02 244 6455 – 02 245 2938 – 02 246 5266",
//                 "prod_id" : "-KeUFtjGFLbhZzAu8hHS",
//                 "region" : "Pichincha"
//             },
//             "-Keo0iL_-F9RfVeljTHP" : {
//                 "address" : "Venezuela Street and Chile",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.220047, -78.511449",
//                 "name" : "Perez Pallares House",
//                 "phone" : "02 299 3300",
//                 "prod_id" : "-KdIxtX11xE0axijAaVF",
//                 "region" : "Pichincha"
//             },
//             "-Keo3P55oyQusPwsOCeO" : {
//                 "address" : "Garcia Moreno Street and Chile",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.219612, -78.512127",
//                 "name" : "Pizarro Palace - Plaza Grande Hotel",
//                 "phone" : "02 251 0777",
//                 "prod_id" : "-KdXaHOytVukfjFodyCn",
//                 "region" : "Pichincha"
//             },
//             "-Keo5glVhoswz4zDnu9E" : {
//                 "address" : "Chile St. between Garcia Moreno and Venezuela",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.219711, -78.511955",
//                 "name" : "House of Mayors",
//                 "phone" : "no",
//                 "prod_id" : "-KdfZsQF5A0JZW_9fBx7",
//                 "region" : "Pichincha"
//             },
//             "-Keo8c215mrsgC3Tdu_L" : {
//                 "address" : "Venezuela Street and Mejia",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.219215, -78.510611",
//                 "name" : "Former Military Headquarters",
//                 "phone" : "02 257 0123",
//                 "prod_id" : "-KdmFLWVUy7bExvomOU2",
//                 "region" : "Pichincha"
//             },
//             "-KeoAGnCfXw9GUrR5ZbH" : {
//                 "address" : "Briceño Street and 10 de Agosto",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.21591195026414478, -78.50458860397339",
//                 "name" : "Central Bank of Ecuador",
//                 "phone" : "02 393 8600",
//                 "prod_id" : "-KdmHcMGvotwG7W33QxE",
//                 "region" : "Pichincha"
//             },
//             "-KeoNPFqnl8AzGXhhRlq" : {
//                 "address" : "Garcia Moreno Street and Sucre",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221204, -78.513533",
//                 "name" : "Cornejo Cevallos House",
//                 "phone" : ".",
//                 "prod_id" : "-KdmJaW2UE8FlqPorqSc",
//                 "region" : "Pichincha"
//             },
//             "-KeoPRFatTs552JRCdce" : {
//                 "address" : "Benalcazar Street and Chile",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.218733, -78.512549",
//                 "name" : "Vicepresidency House",
//                 "phone" : "02 258 4574 - 02 258 4575",
//                 "prod_id" : "-Ke1d6LASRTBpJefXVXs",
//                 "region" : "Pichincha"
//             },
//             "-KeoR-G7q7fzqYHfYdEt" : {
//                 "address" : "Garcia Moreno Street and Espejo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.220149, -78.512843",
//                 "name" : "Real Barracks of Lima",
//                 "phone" : "02 395 2300 - ext. 15535 – 15528 - 15507",
//                 "prod_id" : "-Ke1imS41oySYw-i8_tP",
//                 "region" : "Pichincha"
//             },
//             "-KeoSZpp1qC0Ku9VIjBM" : {
//                 "address" : "Simon Bolivar Street and Cuenca",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221288, -78.515417",
//                 "name" : "Gangotena House",
//                 "phone" : "02 400 8000",
//                 "prod_id" : "-Ke1kbLLOiE_nZlAD56b",
//                 "region" : "Pichincha"
//             },
//             "-KeoTYMVWxgeN1O2bm2_" : {
//                 "address" : "Guayaquil Street between Bolivar and Rocafuerte",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.223402, -78.513165",
//                 "name" : "Santa Helena House",
//                 "phone" : "",
//                 "prod_id" : "-Ke5nTjKvJuw8WzApcgs",
//                 "region" : "Pichincha"
//             },
//             "-Keot0H2HI-JKmsprnSU" : {
//                 "address" : "Guayaquil Street and Espejo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221190, -78.511353",
//                 "name" : "La Previsora Building",
//                 "phone" : "",
//                 "prod_id" : "-Ke6FLs3OnLdXohIp6i3",
//                 "region" : "Pichincha"
//             },
//             "-KeouaFa_KFvQoHGndb5" : {
//                 "address" : "Benalcazar St. and Olmedo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.217719, -78.511754",
//                 "name" : "Benalcazar House",
//                 "phone" : ".",
//                 "prod_id" : "-Ke9CvGIt9DcAv-0dfXO",
//                 "region" : "Pichincha"
//             },
//             "-KeozKiMcj_r0REUyiSa" : {
//                 "address" : "Venezuela St. and Mejía",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.219370, -78.511043",
//                 "name" : "Eguiguren Mansion ",
//                 "phone" : ".",
//                 "prod_id" : "-Ke9FG0MX32C72rt3ECa",
//                 "region" : "Pichincha"
//             },
//             "-Kep1CF0QAy1rw1hxaMV" : {
//                 "address" : "Colon Avenue and Jose Maria Urbina",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.201740, -78.487641",
//                 "name" : "Mantilla Villa",
//                 "phone" : "02 222 4035",
//                 "prod_id" : "-Ke9H_SrlknE2AeXhldb",
//                 "region" : "Pichincha"
//             },
//             "-KepH3SEjswNKT2kw4X4" : {
//                 "address" : "6 de Diciembre Avenue and Wilson",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.204821, -78.490498",
//                 "name" : "Plaza Lasso Mansion",
//                 "phone" : "02 254 9817 - 02 900 6653",
//                 "prod_id" : "-Ke9J-ZmSupphcfoT9VU",
//                 "region" : "Pichincha"
//             },
//             "-KepJPqt-_F_-a6jVvHi" : {
//                 "address" : "Plaza Street and 18 de Septiembre",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.208951, -78.494484",
//                 "name" : "Mansion of the National Symphony Orchestra",
//                 "phone" : "02 382 2642",
//                 "prod_id" : "-Ke9MPL6W8qhM0Sf0zQU",
//                 "region" : "Pichincha"
//             },
//             "-KftUaMeLc8kTlifHHy1" : {
//                 "address" : "Calle Gonsalo Vega y Bolaños",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.214287, -78.518232",
//                 "name" : "Cementerio del Tejar",
//                 "phone" : ".",
//                 "prod_id" : "-KftUaGf02igGlcpfPKx",
//                 "region" : "Pichincha"
//             },
//             "-KftXql9_EgQ2QEh3Kv-" : {
//                 "address" : "Garcia Moreno Street and Rocafuerte",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.223060, -78.515149",
//                 "name" : "City Museum - San Juan de Dios Hospital",
//                 "phone" : "02 228 3883",
//                 "prod_id" : "-KftXqinZBPiYsQ8UYoH",
//                 "region" : "Pichincha"
//             },
//             "-KftZE2fLLk-0pgBCCGN" : {
//                 "address" : "Venezuela Street and Sucre",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221860, -78.513095",
//                 "name" : "Sucre House Museum",
//                 "phone" : "02 295 2860",
//                 "prod_id" : "-KftZE0DFYBWL5PVrnQe",
//                 "region" : "Pichincha"
//             },
//             "-Kg0UK57fBtfQLX5BxmB" : {
//                 "address" : "Espejo Alleyay and Guayaquil",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221494, -78.510992",
//                 "name" : "Bolivar Theatre",
//                 "phone" : "02 257 1911",
//                 "prod_id" : "-Kg0UK36FD_te_fu4MpQ",
//                 "region" : "Pichincha"
//             },
//             "-Kg0VgnppBfFRJqtV8s9" : {
//                 "address" : "Sucre Street and Guayaquil",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.222425, -78.512371",
//                 "name" : "Pasaje Tobar",
//                 "phone" : "",
//                 "prod_id" : "-Kg0VglSK2KiyF6KziDQ",
//                 "region" : "Pichincha"
//             },
//             "-Kg0YnPXqpSUe3wvYDZF" : {
//                 "address" : "Manabí Street, between Guayaquil and Flores",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.219124, -78.508873",
//                 "name" : "Sucre National Theatre",
//                 "phone" : "02 295 1661 - 02 257 0299 - 02 228 0982",
//                 "prod_id" : "-Kg0YnNTUJJ-qLr_whhi",
//                 "region" : "Pichincha"
//             },
//             "-Kg0_RzvnGWMYZo1jzMg" : {
//                 "address" : "LaExposición Street and Benigno Vela",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.230886, -78.512442",
//                 "name" : "La Recoleta Palace",
//                 "phone" : "02 298 3200 - 02 295 1951",
//                 "prod_id" : "-Kg0_RxukOp7a0PhzBlX",
//                 "region" : "Pichincha"
//             },
//             "-Kg1cKUNJKoHsBwH2Twe" : {
//                 "address" : "Patria Avenue, between 6 de Diciembre and 12 de Octubre",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.209850, -78.494928",
//                 "name" : "Building of the Mirrors",
//                 "phone" : "02 222 0967",
//                 "prod_id" : "-Kg1cKSEulsuayzUb-3E",
//                 "region" : "Pichincha"
//             },
//             "-Kg5CUlgIK10qOpP7kX2" : {
//                 "address" : "Luis Felipe Borja Street, between Luis Sodiro and Hermanos Pazmiño",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.212782, -78.501529",
//                 "name" : "Espejo Girls School",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5CUaWSzO_VxNNyru_",
//                 "region" : "Pichincha"
//             },
//             "-Kg5G3QxcAxk-iAwWM6P" : {
//                 "address" : "Carrion Street and 10 de Agosto",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.202616, -78.497528",
//                 "name" : "Najas Palace (Chancellery)",
//                 "phone" : "02 299 3200",
//                 "prod_id" : "-Kg5G3OuctC13g9SXlMW",
//                 "region" : "Pichincha"
//             },
//             "-Kg5HvrDFQKX59IoiMX6" : {
//                 "address" : "Plaza de Santo Domingo, Calle Guayaquil y Rocafuerte",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.223719, -78.512174",
//                 "name" : "Monumento a Sucre",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5Hvm1cZ2W-LCrmVtB",
//                 "region" : "Pichincha"
//             },
//             "-Kg5Kd_zFGcCHSOTBWtF" : {
//                 "address" : "Junin Street and Montufar",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.222881, -78.510452",
//                 "name" : "Manuela Saenz House Museum",
//                 "phone" : "02 228 3908",
//                 "prod_id" : "-Kg5KdYtw6-Zsul_o6Bn",
//                 "region" : "Pichincha"
//             },
//             "-Kg5OvWhWLsGXXmBRPU6" : {
//                 "address" : "Avenida 6 de Diciembre y Patria",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.208219, -78.497865",
//                 "name" : "Parque El Ejido",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5OvUjK1ghMMDynBTt",
//                 "region" : "Pichincha"
//             },
//             "-Kg5QZ9ekgGacN0u_JIG" : {
//                 "address" : "Avenida Patria, entre 10 de Agosto y 6 de Diciembre",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.208106, -78.497317",
//                 "name" : "Puerta de la Circasiana",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5QZ7fZAyhEU2f04zV",
//                 "region" : "Pichincha"
//             },
//             "-Kg5UQw0uV8AWOd9KgYh" : {
//                 "address" : "Avenida Patria, entre 10 de Agosto y 6 de Diciembre",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.207949, -78.497180",
//                 "name" : "La Lucha Eterna",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5UQtg-vBEsYB8pfRP",
//                 "region" : "Pichincha"
//             },
//             "-Kg5XJnnNq7L_d6NIpWj" : {
//                 "address" : "Parque El Ejido",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.208489, -78.498116",
//                 "name" : "La Llama Eterna",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5XJliyUYzJeogoLGi",
//                 "region" : "Pichincha"
//             },
//             "-Kg5_L9rxGA8cSLXq75C" : {
//                 "address" : "Avenida Patria y 12 de Octubre",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.210367, -78.493892",
//                 "name" : "La Insidia",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5_L7Y9iBNdB6_6doW",
//                 "region" : "Pichincha"
//             },
//             "-Kg5di08uXyHzoZRuvnd" : {
//                 "address" : "Sodiro Street and Valparaiso",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.215953, -78.498728",
//                 "name" : "Former Eugenio Espejo Civil Hospital",
//                 "phone" : "02 299 3300 - 02 290 1333",
//                 "prod_id" : "-Kg5dhz2QDu7AB2Lq9eX",
//                 "region" : "Pichincha"
//             },
//             "-Kg5hm-oR4xnvYRreAQJ" : {
//                 "address" : "Montevideo Street and Luis Davila",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.211353, -78.506996",
//                 "name" : "Former Military Hospital",
//                 "phone" : "02 394 6990",
//                 "prod_id" : "-Kg5hlyj0-fxVMqguf8-",
//                 "region" : "Pichincha"
//             },
//             "-Kg5lGHTy9DcQOenA-55" : {
//                 "address" : "Calle Espejo y Flores",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.221974, -78.510512",
//                 "name" : "Iglesia y Monasterio de Santa Catalina",
//                 "phone" : "02 228 4000",
//                 "prod_id" : "-Kg5lGFQQSD6DHM8UVWl",
//                 "region" : "Pichincha"
//             },
//             "-KgRuqhyMkKz5nXUwoJg" : {
//                 "address" : "Venezuela Street and Sucre",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.221229, -78.512919",
//                 "name" : "Pasaje Amador",
//                 "phone" : "",
//                 "prod_id" : "-KgRupz5lhE_8sgJL1Pm",
//                 "region" : "Pichincha"
//             },
//             "-KgRyfV2UAdlMqNzGWz0" : {
//                 "address" : "Imbabura Street and Manabi",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.215625, -78.513334",
//                 "name" : "La Chilena Laundry",
//                 "phone" : "",
//                 "prod_id" : "-KgRyfSL85fXgW38-heO",
//                 "region" : "Pichincha"
//             },
//             "-KgyB3uIVqejJDuWkRMS" : {
//                 "address" : "Aguarico Street",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.219142, -78.527270",
//                 "name" : "Liberty Hill - Temple of the Nation",
//                 "phone" : "02 228 8733",
//                 "prod_id" : "-KgyB3pCqlfnqZJEYfZN",
//                 "region" : "Pichincha"
//             },
//             "-KgyCXJ2q52CR16OwPzU" : {
//                 "address" : "Rocafuerte Street and Cumanda",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.217614, -78.520782",
//                 "name" : "Former Garcia Moreno Penitentiary",
//                 "phone" : ".",
//                 "prod_id" : "-KgyCXGwSAZbQK_ZEeoz",
//                 "region" : "Pichincha"
//             },
//             "-KgyHGOaPx15uW4qgYc3" : {
//                 "address" : "Calle General Melchor Aymerich",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.228556, -78.518368",
//                 "name" : "Fortines del Panecillo",
//                 "phone" : ".",
//                 "prod_id" : "-KgyHGMK5-zm-LAEMf72",
//                 "region" : "Pichincha"
//             },
//             "-KgyKkwtwouRTLyF0kXe" : {
//                 "address" : "Ambato Street and Mazo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.227398, -78.514900",
//                 "name" : "Former Geographic Institute Building",
//                 "phone" : ".",
//                 "prod_id" : "-KgyKkuhW2-kljR4NI5F",
//                 "region" : "Pichincha"
//             },
//             "-KgyMU4nUNXpNq3393y8" : {
//                 "address" : "Calle Iquique, sector La Tola",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.220086, -78.501635",
//                 "name" : "El Itchimbía",
//                 "phone" : "02 322 6363 - 02 322 8470 - 02 322 8471",
//                 "prod_id" : "-KgyMU1T_ytP-xS6TV7q",
//                 "region" : "Pichincha"
//             },
//             "-KgyOeFBEMX4hnEWgPmB" : {
//                 "address" : "Pichincha Avenue, between Esmeraldas and Manabi",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.220009, -78.507040",
//                 "name" : "Central Market",
//                 "phone" : "",
//                 "prod_id" : "-KgyOe9q6mJUcpBV3gck",
//                 "region" : "Pichincha"
//             },
//             "-KgySHzWnqu-7S3dQdkN" : {
//                 "address" : "Los Rios Street and Don Bosco",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.222738, -78.505026",
//                 "name" : "Don Bosco Institute and Chapel ",
//                 "phone" : ".",
//                 "prod_id" : "-KgySHn5F6G-ZjJaCM8G",
//                 "region" : "Pichincha"
//             },
//             "-KgyTT1cqRozZBaqb6A7" : {
//                 "address" : "Luis Vargas Torres Street and Francisco de Caldas",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.216002, -78.506490",
//                 "name" : "Former La Salle School",
//                 "phone" : ".",
//                 "prod_id" : "-KgyTT-M7pe_C1EEWQkj",
//                 "region" : "Pichincha"
//             },
//             "-Kh2nqa2J0Pwh25_2wAN" : {
//                 "address" : "Calle Luis Vargas y Antonio Ante",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.212241, -78.505361",
//                 "name" : "Instituto Nacional Mejía",
//                 "phone" : "02 256 2841",
//                 "prod_id" : "-Kh2nqYuZkpNqGFJQAv6",
//                 "region" : "Pichincha"
//             },
//             "-Kh2pQePNSJESsfTXi2q" : {
//                 "address" : "Entre avenidas Gran Colombia y 10 de Agosto",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.214640, -78.502553",
//                 "name" : "Parque de La Alameda",
//                 "phone" : ".",
//                 "prod_id" : "-Kh2pQbTyhAyn4A9IvWk",
//                 "region" : "Pichincha"
//             },
//             "-Kh2siOMKpVSzaNMOmA5" : {
//                 "address" : "Entre avenidas Gran Colombia y 10 de Agosto, Parque La Alameda",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.214888, -78.502480",
//                 "name" : "Observatorio Astronómico",
//                 "phone" : "02 257 0765 - 02 258 3451",
//                 "prod_id" : "-Kh2siMKRfv52rpwC5Jh",
//                 "region" : "Pichincha"
//             },
//             "-Kh2uROYkJfsRxF6XXOT" : {
//                 "address" : "Piedrahita Street and Avenida 6 de Diciembre",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.213092, -78.498814",
//                 "name" : "Legislative Palace",
//                 "phone" : "02 399 1000",
//                 "prod_id" : "-Kh2uRLrU9agedQDvvi7",
//                 "region" : "Pichincha"
//             },
//             "-Kh2wSXPG07P1-Dn2SUm" : {
//                 "address" : "Entre avenidas Shyris y Amazonas",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.183010, -78.484584",
//                 "name" : "Parque La Carolina",
//                 "phone" : ".",
//                 "prod_id" : "-Kh2wSVDtl0k4wPePqXF",
//                 "region" : "Pichincha"
//             },
//             "-Kh2zZwMDcjAWcn5gQ-6" : {
//                 "address" : "6 de Diciembre Avenue and Naciones Unidas",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.177520, -78.476683",
//                 "name" : "Atahualpa Olimpic Stadium",
//                 "phone" : "02 255 0075 - 02 255 0085 - 02 255 0175",
//                 "prod_id" : "-Kh2zZuKefLn4iI9fjIJ",
//                 "region" : "Pichincha"
//             },
//             "-Kh350Yzguyj2FrugwoO" : {
//                 "address" : "Mariano Calvache Street and Lorenzo Chavez",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.190719, -78.469455",
//                 "name" : "Chapel of the Man",
//                 "phone" : "02 244 6455 – 02 245 2938 – 02 246 5266",
//                 "prod_id" : "-Kh350Ws_Vtuvkpl-429",
//                 "region" : "Pichincha"
//             },
//             "-Kh38AFKmq0S6SD2SFBU" : {
//                 "address" : "Calle Guanguiltahua, sector Batán Alto.",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.177574, -78.460586",
//                 "name" : "Parque Metropolitano",
//                 "phone" : "02 290 7005 - 02 290 4884",
//                 "prod_id" : "-Kh38ADDUvSZMHTPGH67",
//                 "region" : "Pichincha"
//             },
//             "-Kh3A4aqxXai8r0iOAEp" : {
//                 "address" : "Gonzales Suarez Avenue",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.202558, -78.480464",
//                 "name" : "Hotel Quito",
//                 "phone" : "02 396 4900",
//                 "prod_id" : "-Kh3A4ZlpgveHLTzHuRI",
//                 "region" : "Pichincha"
//             },
//             "-Kh3F74_ZcBjEIRzHRnz" : {
//                 "address" : "Ladron de Guevara Avenue and Velasco Ibarra",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.213410, -78.490232",
//                 "name" : "Rumiñahui Coliseum",
//                 "phone" : "02 255 0075 - 02 255 0085 - 02 255 0175 - 02 255 0185",
//                 "prod_id" : "-Kh3F72_dBZq2DazEUZM",
//                 "region" : "Pichincha"
//             },
//             "-Kh3IEK89kyQJplkbThE" : {
//                 "address" : "Ladron de Guevara Avenue",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.210325, -78.488612",
//                 "name" : "National Polytechnic School",
//                 "phone" : "02 297 6300",
//                 "prod_id" : "-Kh3IEHzJc3fSHgDs_yC",
//                 "region" : "Pichincha"
//             },
//             "-Kh3LN2uzQ84c-jxY9KB" : {
//                 "address" : "Avenida 12 de Octubre",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.209239, -78.491414",
//                 "name" : "Campus Pontificia Universidad Católica del Ecuador",
//                 "phone" : "02 299 1700",
//                 "prod_id" : "-Kh3LN0ewS5ss1oLmLs4",
//                 "region" : "Pichincha"
//             },
//             "-Kh3Mdg5lz2Iy2C3aeu0" : {
//                 "address" : "Entre Avenidas 12 de Octubre y 10 de Agosto",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.202900, -78.491041",
//                 "name" : "Barrio La Mariscal",
//                 "phone" : ".",
//                 "prod_id" : "-Kh3MddzMPj4KGPj1oz2",
//                 "region" : "Pichincha"
//             },
//             "-Kh3OOlbcaGBRImwSrUU" : {
//                 "address" : "Universitaria Avenue",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "latlong" : "-0.200846, -78.501984",
//                 "name" : "Central University of Ecuador",
//                 "phone" : "098 338 4758",
//                 "prod_id" : "-Kh3OOjZYydx4U01mXth",
//                 "region" : "Pichincha"
//             },
//             "-KiMmMnEABk1GmptlONP" : {
//                 "address" : "Olmedo Street and Benalcazar",
//                 "cat_icon" : "ion-android-compass",
//                 "cat_id" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "latlong" : "-0.217720, -78.511929",
//                 "name" : "Foundation Square",
//                 "phone" : "",
//                 "prod_id" : "-KdfjK5kwYOrfmYapLyL",
//                 "region" : "Pichincha"
//             },
//             "-KiMmr3kw3gdCpqczHky" : {
//                 "address" : "Garcia Moreno Street and Chile",
//                 "cat_icon" : "ion-android-compass",
//                 "cat_id" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "latlong" : "-0.220170, -78.512172",
//                 "name" : "Independence Square",
//                 "phone" : "",
//                 "prod_id" : "-KdflYnV6WqrzZl6wQlk",
//                 "region" : "Pichincha"
//             },
//             "-KiMnZVjSxiMVxOYslw-" : {
//                 "address" : "Garcia Moreno Street and Chile",
//                 "cat_icon" : "ion-android-compass",
//                 "cat_id" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "latlong" : "-0.220071, -78.512076",
//                 "name" : "Monument to the Independence",
//                 "phone" : "",
//                 "prod_id" : "-KdfomDdPCDwMkI2AqUz",
//                 "region" : "Pichincha"
//             }
//         },
//         "prod_latlng_es" : {
//             "-KbzZjv0szzzo_20oyBs" : {
//                 "address" : "Ricaurte & Eloy Alfaro (Esq) Junto a la Estación del Tren, Alausí",
//                 "cat_id" : "-Ka2UNFN94bAZPuCEeyX",
//                 "city" : "Alausí",
//                 "latlong" : "-2.201845, -78.848447",
//                 "name" : "El Mesón del Tren",
//                 "phone" : "(03) 302 - 7544;0987291923;0993434081",
//                 "prod_id" : "-Ka2WpCCLh2AETdBuJgB",
//                 "region" : "Chimborazo"
//             },
//             "-KbzZq9wjQz-oKmhStPI" : {
//                 "address" : "J. de Dios Morales OE 389 y Venezuela",
//                 "cat_id" : "-Ka2UNFN94bAZPuCEeyX",
//                 "city" : "Quito",
//                 "latlong" : "-0.224066, -78.514536",
//                 "name" : "Chez Tiff",
//                 "phone" : "02 22 900 20",
//                 "prod_id" : "-Kbgot6xpYNBW06X6EoM",
//                 "region" : "Pichincha"
//             },
//             "-KbzZsjTh-5Lylkq-2x1" : {
//                 "address" : "Plaza de San Francisco, bajos del atrio",
//                 "cat_id" : "-Ka2UNFN94bAZPuCEeyX",
//                 "city" : "",
//                 "latlong" : "-0.220254, -78.514974",
//                 "name" : "Cafeteria Tianguez",
//                 "phone" : "02 2230609",
//                 "prod_id" : "-KbkQjUa50-_sKUHbpjf",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_-uU9U34M1cEULbK" : {
//                 "address" : "Calle García Moreno entre Chile y Espejo",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.219736, -78.512642",
//                 "name" : "Palacio de Gobierno",
//                 "phone" : "02 3827000",
//                 "prod_id" : "-KbQKjZF2ZB3rTnXU-1e",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_3T90fSHdOSHUyPJ" : {
//                 "address" : "Calle Chile y Venezuela",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.219679, -78.511677",
//                 "name" : "Palacio Arzobispal",
//                 "phone" : "02 228 7748 - 02 295 9632",
//                 "prod_id" : "-KbVP3seKopD5DzNQBZh",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_6GddWPcMHdg4k5r" : {
//                 "address" : "Calle Venezuela entre Chile y Espejo",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.220562, -78.511624",
//                 "name" : "Palacio Municipal",
//                 "phone" : "02 395 2300",
//                 "prod_id" : "-KbVbjcCJb7vpYhHN_kx",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_9EIpF-cISPiwWJH" : {
//                 "address" : "Calle García Moreno y Espejo",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.220396, -78.513160",
//                 "name" : "Centro Cultural Metropolitano",
//                 "phone" : "02 395 2300",
//                 "prod_id" : "-Kbfm-8eZTXPyeIaoM9y",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_DHKYgkcVJ2GxSRR" : {
//                 "address" : "Venezuela y Espejo 715",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.220471, -78.512503",
//                 "name" : "Catedral Primada de Quito",
//                 "phone" : "no",
//                 "prod_id" : "-KbfvbR8CeZI0Cs5huW7",
//                 "region" : "Pichincha"
//             },
//             "-Kbz_qgl8eIN8abNCze-" : {
//                 "address" : "Garcia Moreno y Sucre - Esq",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.220974, -78.513687",
//                 "name" : "Iglesia de la Compañia de Jesus",
//                 "phone" : "02 2584175",
//                 "prod_id" : "-KbkY3VcpH83Zz-fLaqN",
//                 "region" : "Pichincha"
//             },
//             "-Ke6EQeaDhxYgsjC34we" : {
//                 "address" : "Calle García Moreno y Espejo",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.220149, -78.512843",
//                 "name" : "Real Cuartel de Lima",
//                 "phone" : "02 395 2300 - ext. 15535 – 15528 - 15507",
//                 "prod_id" : "-Ke1imM0v-usGd-WyIyH",
//                 "region" : "Pichincha"
//             },
//             "-Ke6HMu8JBtqwwf87VM_" : {
//                 "address" : "Calle Sucre y Garcia Moreno",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221175, -78.513841",
//                 "name" : "Antiguo Banco Central del Ecuador",
//                 "phone" : "02 258 9284",
//                 "prod_id" : "-Ke6HMpwX9sPak_0yjez",
//                 "region" : "Pichincha"
//             },
//             "-Ke6UQDTEiCnrRnXo0py" : {
//                 "address" : "Calle Bolívar y Cuenca",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221288, -78.515417",
//                 "name" : "Casa Gangotena",
//                 "phone" : "02 400 8000",
//                 "prod_id" : "-Ke1kbFTwxyJqVpg-Dg5",
//                 "region" : "Pichincha"
//             },
//             "-Ke9ZmZ9lg4xFWI2dXV4" : {
//                 "address" : "Juan León Mera N 24-67 y J.Pinto",
//                 "cat_icon" : "ion-android-contacts",
//                 "cat_id" : "-Ke9YHvulx1-Gj6lHsqw",
//                 "city" : "Quito",
//                 "latlong" : "-0.20224350416094528, -78.49186956882477",
//                 "name" : "LUIS TIPAN TRAVEL",
//                 "phone" : "022557453",
//                 "prod_id" : "-Ke9ZmMvTPtyyv3NeFWt",
//                 "region" : "Pichincha"
//             },
//             "-KeAy_P0BAe1g6XT37pK" : {
//                 "address" : "Convento del Buen Pastor - Benigno Vela 731 y Av. Maldonado, sector La Recoleta",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.231095, -78.513330",
//                 "name" : "Convento del Buen Pastor",
//                 "phone" : "099 839 7714 - 02 228 0616",
//                 "prod_id" : "-KdgFT2TiriswcPjbqQA",
//                 "region" : "Pichincha"
//             },
//             "-KeB1V2wdWZYQ5iGFaO-" : {
//                 "address" : "Calle Bolívar y García Moreno",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221948, -78.514169",
//                 "name" : "Compañía de Crédito Agrícola e Industrial",
//                 "phone" : "02 294 6100 - 02 228 7478",
//                 "prod_id" : "-KeB1UxtNilnmGKob1MR",
//                 "region" : "Pichincha"
//             },
//             "-KeB3WBJA0WqvYXFzkHP" : {
//                 "address" : "Calle Venezuela y Mejía",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.219370, -78.511043",
//                 "name" : "Mansión Eguiguren ",
//                 "phone" : ".",
//                 "prod_id" : "-Ke9FFpk2wkJqJB_JS90",
//                 "region" : "Pichincha"
//             },
//             "-KeBCwhCyX_w4FYP9ak4" : {
//                 "address" : "Avenida 6 de Diciembre y Wilson",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.204951, -78.490664",
//                 "name" : "Mansión Plaza Lasso",
//                 "phone" : "02 254 9817 - 02 900 6653",
//                 "prod_id" : "-Ke9J-N5rCJPS7Jv7Zen",
//                 "region" : "Pichincha"
//             },
//             "-KeBF2pC6WbmMgjJ9NUV" : {
//                 "address" : "Calle Cuenca y Bolívar",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221270, -78.515823",
//                 "name" : "Museo Casa del Alabado",
//                 "phone" : "02 228 0772",
//                 "prod_id" : "-KeBF2f5yXMKtzwpvSy4",
//                 "region" : "Pichincha"
//             },
//             "-KeC29-Vw5A5Eh06OJbI" : {
//                 "address" : "Calle Los Ríos y Gandara",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.215995, -78.500421",
//                 "name" : "Palacio Cordovez",
//                 "phone" : "02 255 7721",
//                 "prod_id" : "-KeC28iUj0atLyi09l9F",
//                 "region" : "Pichincha"
//             },
//             "-KeC3jUxUKEjeDM_qOGW" : {
//                 "address" : "Calle Luis Vargas Torres y Francisco de Caldas, esquina",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.215364, -78.506365",
//                 "name" : "Palacio Landázuri",
//                 "phone" : "",
//                 "prod_id" : "-KeC3jC2uvdI78K3IOqd",
//                 "region" : "Pichincha"
//             },
//             "-KeC4cyJqTM9iGnV5E2W" : {
//                 "address" : "Avenida 12 de Octubre y Baquerizo Moreno",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.205616, -78.486890",
//                 "name" : "Castillo Larrea",
//                 "phone" : "02 290 2764 - 02 290 2765 - 0988436764",
//                 "prod_id" : "-KeC4clsp-qPe-_VQeVo",
//                 "region" : "Pichincha"
//             },
//             "-KeC5u8P1hVM8kHX36H1" : {
//                 "address" : "Avenida 6 de Diciembre y Tarqui",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.211852, -78.499200",
//                 "name" : "Villa Lasso - Conto",
//                 "phone" : "02 399 1000",
//                 "prod_id" : "-KeC5u-x_o_-4EEfXXWb",
//                 "region" : "Pichincha"
//             },
//             "-KeFyqn6WVo2y3MSE1gZ" : {
//                 "address" : "Avenida Tarqui, entre 6 de Diciembre y Gran Colombia",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.211603, -78.497866",
//                 "name" : "Palacete Freile-Larrea",
//                 "phone" : "02 222 5240",
//                 "prod_id" : "-KeFyq_Po6SWaQa8KvG6",
//                 "region" : "Pichincha"
//             },
//             "-KeFzwq0bEIaMo6ZD_F6" : {
//                 "address" : "Avenida Gran Colombia y Briceño",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.216761, -78.504506",
//                 "name" : "Casa Arteta",
//                 "phone" : "02 297 6800",
//                 "prod_id" : "-KeFzwiFly2M0KCqIE4g",
//                 "region" : "Pichincha"
//             },
//             "-KeMICA1gIeQgLFBSNAk" : {
//                 "address" : "Calle Olmedo y Benalcazar",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.217720, -78.511929",
//                 "name" : "Plazoleta de la Fundación",
//                 "phone" : "",
//                 "prod_id" : "-KdfjJya_VsB96w0vVBd",
//                 "region" : "Pichincha"
//             },
//             "-KePbjfLzFrJqaYMAIPO" : {
//                 "address" : "Calle García Moreno y Sucre",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221398, -78.513660",
//                 "name" : "Casa Gangotena Posse",
//                 "phone" : "",
//                 "prod_id" : "-KePbjVxHDtKYoKe6dsb",
//                 "region" : "Pichincha"
//             },
//             "-KePdH1s_2cAXrznKpDR" : {
//                 "address" : "Calle Guayaquil y Espejo",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221177, -78.511189",
//                 "name" : "Palacio Chiriboga",
//                 "phone" : "",
//                 "prod_id" : "-KePdGuNWJXIMJeuZWbU",
//                 "region" : "Pichincha"
//             },
//             "-KePf6XY_HORBuBIKnXZ" : {
//                 "address" : "Avenida 6 de diciembre y Roca",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.206640, -78.493050",
//                 "name" : "Palacio de la Alhambra",
//                 "phone" : "02 290 7433",
//                 "prod_id" : "-KePf6RHxG30yoobQf4L",
//                 "region" : "Pichincha"
//             },
//             "-KePky8RFSuKy33DP3Gk" : {
//                 "address" : "Avenida Gran Colombia y Julio Castro",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.215565, -78.501531",
//                 "name" : "Palacio Samaniego (Teatro Capitol)",
//                 "phone" : "02 395 2300",
//                 "prod_id" : "-KePkxz0n5E078HK76oa",
//                 "region" : "Pichincha"
//             },
//             "-KePkyEPwXdp3yc27lAA" : {
//                 "address" : "Avenida Gran Colombia y Julio Castro",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.215565, -78.501531",
//                 "name" : "Palacio Samaniego (Teatro Capitol)",
//                 "phone" : ".",
//                 "prod_id" : "-KePkyBOPAOWu5ohJeTI",
//                 "region" : "Pichincha"
//             },
//             "-KePnEos0NWa3sTXnjHy" : {
//                 "address" : "Calle García Moreno entre Sucre y Bolívar",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221602, -78.513914",
//                 "name" : "Museo Casa Urrutia Barba",
//                 "phone" : "02 258 0103 - 02 258 4174",
//                 "prod_id" : "-KePnEgBUov3ReeVTaO5",
//                 "region" : "Pichincha"
//             },
//             "-KePqu7XZL0UTbCI4rJL" : {
//                 "address" : "Avenida 10 de Agosto y Colón",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.198094, -78.496940",
//                 "name" : "Palacio de la Circasiana",
//                 "phone" : "02 222 7927",
//                 "prod_id" : "-KePqtgVGjdw0EdrocVE",
//                 "region" : "Pichincha"
//             },
//             "-KeU6YqZB1vd2lNqw8wA" : {
//                 "address" : "Avenida 6 de Diciembre y Patria",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.209810, -78.496484",
//                 "name" : "Palacio Benjamín Carrión",
//                 "phone" : "02 222 0967",
//                 "prod_id" : "-KeU6YewBAqtqvahcM-G",
//                 "region" : "Pichincha"
//             },
//             "-KeU7oz18XrYBRopSQUv" : {
//                 "address" : "Calle Chile y Guayaquil",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.220291, -78.510925",
//                 "name" : "Edificio Guerrero Mora",
//                 "phone" : ".",
//                 "prod_id" : "-KeU7noTp-r6AUwUiJ0H",
//                 "region" : "Pichincha"
//             },
//             "-KeUA2m3XF0b-ZJoCUJa" : {
//                 "address" : "Calle Guayaquil y Rocafuerte",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.223742, -78.513360",
//                 "name" : "Casa de García Moreno",
//                 "phone" : "",
//                 "prod_id" : "-KeUA2bqfSLLmylid2Hj",
//                 "region" : "Pichincha"
//             },
//             "-KeUCqGHq1QZBBrBJCzz" : {
//                 "address" : "Calle García Moreno y Galápagos",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.215424, -78.508804",
//                 "name" : "Casa de la Peña",
//                 "phone" : "",
//                 "prod_id" : "-KeUCq93R80A78tjoJMd",
//                 "region" : "Pichincha"
//             },
//             "-KeUFtfbpE9nrQvw4BQv" : {
//                 "address" : "Calle Mariano Calvache y Lorenzo Chávez",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.190100, -78.469231",
//                 "name" : "Casa y Fundación Guayasamín",
//                 "phone" : "02 244 6455 – 02 245 2938 – 02 246 5266",
//                 "prod_id" : "-KeUFtPVOMe64RvvQsJP",
//                 "region" : "Pichincha"
//             },
//             "-KekmDUC_Xu1jpsTYxII" : {
//                 "address" : "Calle García Moreno y Chile",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.220170, -78.512172",
//                 "name" : "Plaza de la Independencia",
//                 "phone" : ".",
//                 "prod_id" : "-KdflYZOvUfZMA_sbMjq",
//                 "region" : "Pichincha"
//             },
//             "-KekoMinJzZP0h1HQc1c" : {
//                 "address" : "Calle García Moreno y Chile",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.220071, -78.512076",
//                 "name" : "Monumento a la Independencia",
//                 "phone" : "",
//                 "prod_id" : "-Kdfols99HVUbU2mS4X8",
//                 "region" : "Pichincha"
//             },
//             "-KekrWHbHhF_9ub87R1R" : {
//                 "address" : "Calle Venezuela y Chile",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.220047, -78.511449",
//                 "name" : "Casa Perez Pallares",
//                 "phone" : "02 299 3300",
//                 "prod_id" : "-KdIxtRhqsLKvPI9HtRI",
//                 "region" : "Pichincha"
//             },
//             "-Keks-UzXlwGwA-PlC8E" : {
//                 "address" : "Calle García Moreno y Chile",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.219612, -78.512127",
//                 "name" : "Palacio de Pizarro - Hotel Plaza Grande",
//                 "phone" : "02 251 0777",
//                 "prod_id" : "-KdXaHLGDUs5aiG9r4Kb",
//                 "region" : "Pichincha"
//             },
//             "-KekvBspEY__5Z84RcmD" : {
//                 "address" : "Calle Garcia Moreno entre Espejo y Chile",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.219801, -78.512511",
//                 "name" : "Granaderos de Tarqui",
//                 "phone" : ".",
//                 "prod_id" : "-Kdh2U7-9o7DnKw5nhf3",
//                 "region" : "Pichincha"
//             },
//             "-KekwYYHNA4SmYKHycSa" : {
//                 "address" : "Catedral Metropolitana - Venezuela y Espejo 715",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.220471, -78.512503",
//                 "name" : "Catedral Primada de Quito",
//                 "phone" : "no",
//                 "prod_id" : "-KdWodxYRzh6SIzWdaqE",
//                 "region" : "Pichincha"
//             },
//             "-Kekygobuwhhh4AThta7" : {
//                 "address" : "Calle Benalcázar y Chile",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.218733, -78.512549",
//                 "name" : "Palacio de la Vicepresidencia",
//                 "phone" : "02 258 4574 - 02 258 4575",
//                 "prod_id" : "-Ke1d6FQzFU9IUcnomhB",
//                 "region" : "Pichincha"
//             },
//             "-KekzNzVf9GRNbQWGoB2" : {
//                 "address" : "Iglesia El Sagrario",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.220571, -78.512876",
//                 "name" : "Iglesia El Sagrario",
//                 "phone" : "02 2284 398",
//                 "prod_id" : "-KdXPsirh-j6GUGFJ3JW",
//                 "region" : "Pichincha"
//             },
//             "-KekzsFwC4AEDPxtgJdc" : {
//                 "address" : "Convento de la Inmaculada Concepción",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.219474, -78.512233",
//                 "name" : "Monasterio de la Inmaculada Concepción",
//                 "phone" : "03 295 9632",
//                 "prod_id" : "-KdfcRJHtE8FOO02G7z7",
//                 "region" : "Pichincha"
//             },
//             "-Kel1sEYC63q8kz6DEY-" : {
//                 "address" : "Iglesia de la Companía de Jesús - Garcia Moreno y Sucre - Esquina",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.220974, -78.513687",
//                 "name" : "Iglesia de la Companía de Jesús",
//                 "phone" : "02 2584175",
//                 "prod_id" : "-KdWq3srZivK3gccoCZW",
//                 "region" : "Pichincha"
//             },
//             "-Kel2Qd3k1lhLmQktZ82" : {
//                 "address" : "Calle Garcia Moreno y Sucre",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221204, -78.513533",
//                 "name" : "Casa Cornejo Cevallos",
//                 "phone" : ".",
//                 "prod_id" : "-KdmJaQdGc5rWtyHx2QL",
//                 "region" : "Pichincha"
//             },
//             "-Keo5XFWqBSyKVHnzfFB" : {
//                 "address" : "Calle Chile entre Venezuela y García Moreno",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.219711, -78.511955",
//                 "name" : "Casa de los Alcaldes",
//                 "phone" : "no",
//                 "prod_id" : "-KdfZsJvwrU8J34CSfm8",
//                 "region" : "Pichincha"
//             },
//             "-Keo8WV90XxlT1MCvea7" : {
//                 "address" : "Calle Venezuela y Mejia",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.219215, -78.510611",
//                 "name" : "Antiguo Circulo Militar",
//                 "phone" : "02 257 0123",
//                 "prod_id" : "-KdmFLRPujMBf2jjree4",
//                 "region" : "Pichincha"
//             },
//             "-KeoA4vKxJvbOWpUMxEL" : {
//                 "address" : "Calle Briceño y 10 de Agosto",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.21591195026414478, -78.50458860397339",
//                 "name" : "Banco Central del Ecuador",
//                 "phone" : "02 393 8600",
//                 "prod_id" : "-KdmHcHUFAqdGbeZVCss",
//                 "region" : "Pichincha"
//             },
//             "-KeoTO6wzsGB4H6IPvyM" : {
//                 "address" : "Calle Guayaquil, entre Bolívar y Rocafuerte",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.223402, -78.513165",
//                 "name" : "Casa de Santa Helena",
//                 "phone" : "",
//                 "prod_id" : "-Ke5nTSUmDH8aSb84Hm2",
//                 "region" : "Pichincha"
//             },
//             "-KeosuHFgRvyfpZe1o_v" : {
//                 "address" : "Calle Guayaqui y Espejo",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221190, -78.511353",
//                 "name" : "Edificio de la Previsora",
//                 "phone" : "",
//                 "prod_id" : "-Ke6FLkPi9t7TCbEJc9W",
//                 "region" : "Pichincha"
//             },
//             "-KeouRkHSRk-XhE3yR_T" : {
//                 "address" : "Calle Benalcázar y Olmedo",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.217719, -78.511754",
//                 "name" : "Casa de Benalcázar",
//                 "phone" : "02 228 8102 - 02 295 5219 - 098 199 6826",
//                 "prod_id" : "-Ke9CulgFHCumS0C8Sqj",
//                 "region" : "Pichincha"
//             },
//             "-Kep0yCOUi5gmZKGjV73" : {
//                 "address" : "Avenida Colón y José María Urbina",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.201929, -78.487361",
//                 "name" : "Villa Mantilla",
//                 "phone" : "02 222 4035",
//                 "prod_id" : "-Ke9H_CPWccqDZ1DTmQd",
//                 "region" : "Pichincha"
//             },
//             "-KepJBsEKmyICjKAoXj_" : {
//                 "address" : "Calle Plaza y 18 de Septiembre",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.208970, -78.494440",
//                 "name" : "Orquesta Sinfónica Nacional",
//                 "phone" : "02 382 2642",
//                 "prod_id" : "-Ke9MP9lmxSIq35HsmYK",
//                 "region" : "Pichincha"
//             },
//             "-KepWIFDaMrhWvJ7UdX5" : {
//                 "address" : "Avenida José de Sucre y Benalcázar",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.220705, -78.514792",
//                 "name" : "Plaza de San Francisco",
//                 "phone" : ".",
//                 "prod_id" : "-Kdg2rqRcjfFcBix6fsr",
//                 "region" : "Pichincha"
//             },
//             "-KepWpvWeKduGj6WQDg1" : {
//                 "address" : "Iglesia y Convento de San Francisco",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.220445, -78.515273",
//                 "name" : "Iglesia y Convento de San Francisco",
//                 "phone" : "02 2281-124",
//                 "prod_id" : "-KdXOwupt9jts1zNAvos",
//                 "region" : "Pichincha"
//             },
//             "-KepZ4CwQvKh1K48eTpD" : {
//                 "address" : "Iglesia y Convento de Santa Clara",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.222226, -78.516473",
//                 "name" : "Iglesia y Convento de Santa Clara",
//                 "phone" : "02 286 9730",
//                 "prod_id" : "-Kdfg1p5j3tq_OqDISwM",
//                 "region" : "Pichincha"
//             },
//             "-KepZXrVmA1eIjlchsP4" : {
//                 "address" : "Iglesia y Monasterio del Carmen Alto",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.222813, -78.515229",
//                 "name" : "Iglesia y Monasterio del Carmen Alto",
//                 "phone" : "02 288 1513 - 02 295 5817",
//                 "prod_id" : "-KdfglQScR0wUaMAbYw_",
//                 "region" : "Pichincha"
//             },
//             "-Kep_p2EkOSO143LUpgA" : {
//                 "address" : "Capilla del Robo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.222051, -78.517509",
//                 "name" : "Capilla del Robo",
//                 "phone" : "no",
//                 "prod_id" : "-KdfhMcMaHFA73Ln82gH",
//                 "region" : "Pichincha"
//             },
//             "-KepiCGtP1Ff54FNl7UN" : {
//                 "address" : "Iglesia y Convento de Santo Domingo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.224181, -78.512536",
//                 "name" : "Iglesia y Convento de Santo Domingo",
//                 "phone" : "02 228 2695 - 02 228 0518",
//                 "prod_id" : "-Kdfi4GkUlZ6QBBhENcV",
//                 "region" : "Pichincha"
//             },
//             "-Keplkocd6x0pyZ0YCIH" : {
//                 "address" : "Calle Guayaquil y Espejo",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.220981, -78.511376",
//                 "name" : "Plaza Chica",
//                 "phone" : ".",
//                 "prod_id" : "-Kdg6LYExWLk0EJeAZkQ",
//                 "region" : "Pichincha"
//             },
//             "-Kepq-4Gx0cxm2PKsY7V" : {
//                 "address" : "Iglesia y Convento de San Agustín",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.220514, -78.510623",
//                 "name" : "Iglesia y Convento de San Agustín",
//                 "phone" : "02 295 5525",
//                 "prod_id" : "-KdflWPOB8Gs4ncIS7wu",
//                 "region" : "Pichincha"
//             },
//             "-KepszfFmtQunfL2otuB" : {
//                 "address" : "Basílica del Voto Nacional",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.214833, -78.507529",
//                 "name" : "Basílica del Voto Nacional",
//                 "phone" : "02 258 3891 - 02 228 9428",
//                 "prod_id" : "-KdfijXTdIvPhXpgOwiK",
//                 "region" : "Pichincha"
//             },
//             "-Keptt3sz_nohsbJDsHH" : {
//                 "address" : "Iglesia de Santa Teresita",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.20478622226637824, -78.49623620510101",
//                 "name" : "Iglesia de Santa Teresita",
//                 "phone" : "02 223 0502 - 02 252 8184",
//                 "prod_id" : "-KdfjL--MNtOemzkzas_",
//                 "region" : "Pichincha"
//             },
//             "-KepuYpJKaPDYaYbln-y" : {
//                 "address" : "Loma del Panecillo",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.228748, -78.518716",
//                 "name" : "Loma del Panecillo",
//                 "phone" : ".",
//                 "prod_id" : "-Kdg7y42YVpJNjHJ0y_8",
//                 "region" : "Pichincha"
//             },
//             "-Kepv4ohG8VWc02jkVqT" : {
//                 "address" : "Loma del Panecillo",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.228926, -78.518605",
//                 "name" : "Virgen del Panecillo",
//                 "phone" : ".",
//                 "prod_id" : "-KdgvAKvJCyreqOZUjDZ",
//                 "region" : "Pichincha"
//             },
//             "-KepyDXjIj2JJTPh6RI2" : {
//                 "address" : "Avenida Gran Colombia y Guayaquil",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.21607824604139975, -78.50395023822784",
//                 "name" : "Monumento a Simon Bolivar",
//                 "phone" : ".",
//                 "prod_id" : "-KdgAeuoc5ttkpeMZPvX",
//                 "region" : "Pichincha"
//             },
//             "-Keuh_geR1EMXyENVIm4" : {
//                 "address" : "Iglesia de Santa Bárbara",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.217536, -78.510454",
//                 "name" : "Iglesia de Santa Bárbara",
//                 "phone" : "02 228 8637",
//                 "prod_id" : "-KdfnRx26i9tlQpduik9",
//                 "region" : "Pichincha"
//             },
//             "-Keuj5rAQPUE1UmT0sxA" : {
//                 "address" : "Calle Guayaquil y Rocafuerte",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.223516, -78.512875",
//                 "name" : "Plaza de Santo Domingo",
//                 "phone" : ".",
//                 "prod_id" : "-KdfunL5eE1mRS1bBK--",
//                 "region" : "Pichincha"
//             },
//             "-Keukh43zwRKrYqFCpSq" : {
//                 "address" : "Capilla de los Milagros",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.227394, -78.510056",
//                 "name" : "Capilla de los Milagros",
//                 "phone" : "098 921 7961 (mobile) - 02 295 5691",
//                 "prod_id" : "-KdfoeNUNgasDzB1XiaU",
//                 "region" : "Pichincha"
//             },
//             "-KeuzKOuUsKDc0oq-I3s" : {
//                 "address" : "Iglesia de San Sebastián",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.228716, -78.513374",
//                 "name" : "Iglesia de San Sebastían",
//                 "phone" : "no",
//                 "prod_id" : "-KdfqlH3tthWNwEcvQbY",
//                 "region" : "Pichincha"
//             },
//             "-Kev-m0Yv92mfmKPzrp6" : {
//                 "address" : "Iglesia de San Blas",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.218035, -78.505128",
//                 "name" : "Iglesia de San Blas",
//                 "phone" : "02 228 1893",
//                 "prod_id" : "-KdgGdrOLAYkGvSCMz6z",
//                 "region" : "Pichincha"
//             },
//             "-Kev0JsND_0vBt5wjwQB" : {
//                 "address" : "Calle Guayaquil y Manabí",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.218899, -78.508560",
//                 "name" : "Plaza del Teatro",
//                 "phone" : ".",
//                 "prod_id" : "-KdftQ18PPNbq8yEK-3n",
//                 "region" : "Pichincha"
//             },
//             "-Kfh2z67GTyiJr9WLDDq" : {
//                 "address" : "Templo de la Dolorosa",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.185826, -78.496320",
//                 "name" : "Templo Nacional de la Dolorosa",
//                 "phone" : "02 245 0826 - 02 224 5550",
//                 "prod_id" : "-KdgJLihF6jKOafD4aPu",
//                 "region" : "Pichincha"
//             },
//             "-KfhA3Q6kVyhVimBDL5L" : {
//                 "address" : "Calle Morales entre Maldonado y García  Moreno",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.22443594756911092, -78.51377248764036",
//                 "name" : "Calle La Ronda",
//                 "phone" : "02 2 570 786",
//                 "prod_id" : "-Kdh523OYQ2Fs4Ma96MG",
//                 "region" : "Pichincha"
//             },
//             "-KfhAkMLy9AyCJsTsKMY" : {
//                 "address" : "Santuario de Guápulo",
//                 "cat_icon" : "ion-android-map",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.200288, -78.475402",
//                 "name" : "Santuario de Guápulo",
//                 "phone" : "02 256 5652",
//                 "prod_id" : "-KdgIMVFSa7MeEhUA_yv",
//                 "region" : "Pichincha"
//             },
//             "-KftUa9QJYiu7eWL-B2k" : {
//                 "address" : "Calle Gonsalo Vega y Bolaños",
//                 "cat_icon" : "ion-ios-camera-outline",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.214287, -78.518232",
//                 "name" : "Cementerio del Tejar",
//                 "phone" : ".",
//                 "prod_id" : "-KftU_s9dcadf4gNtVp3",
//                 "region" : "Pichincha"
//             },
//             "-KftXqdCFWLDOUnY0pFf" : {
//                 "address" : "Calle García Moreno y Rocafuerte",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.223060, -78.515149",
//                 "name" : "Museo de la Ciudad - Hospital San Juan de Dios",
//                 "phone" : "02 228 3883",
//                 "prod_id" : "-KftXqBiyO-CfyQSFG1O",
//                 "region" : "Pichincha"
//             },
//             "-KftZDyVMyCyJ19RPLx7" : {
//                 "address" : "Calle Venezuela y Sucre",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221860, -78.513095",
//                 "name" : "Casa Museo de Sucre",
//                 "phone" : "02 295 2860",
//                 "prod_id" : "-KftZDsP3wNhca8fcIP2",
//                 "region" : "Pichincha"
//             },
//             "-Kg0UJzdJh9R_vHtH9DY" : {
//                 "address" : "Pasaje Espejo y Guayaquil",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221494, -78.510992",
//                 "name" : "Teatro Bolívar",
//                 "phone" : "02 257 1911",
//                 "prod_id" : "-Kg0UJlMSy_NEm05zlrc",
//                 "region" : "Pichincha"
//             },
//             "-Kg0VgfgBUXXfrT5bla8" : {
//                 "address" : "Calle Sucre y Guayaquil esquina",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.222425, -78.512371",
//                 "name" : "Pasaje Tobar",
//                 "phone" : "",
//                 "prod_id" : "-Kg0VgZ3Zz2OI8eigJru",
//                 "region" : "Pichincha"
//             },
//             "-Kg0YnKxPrA1JPSis7du" : {
//                 "address" : "Calle Manabí, entre Guayaquil y Flores",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.219124, -78.508873",
//                 "name" : "Teatro Nacional Sucre",
//                 "phone" : "02 295 1661 - 02 257 0299 - 02 228 0982",
//                 "prod_id" : "-Kg0Yn9vGhMP8SgVYO0g",
//                 "region" : "Pichincha"
//             },
//             "-Kg0_RvMOUbhTqIXdSqZ" : {
//                 "address" : "Calle la Exposición y Benigno Vela",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.230886, -78.512442",
//                 "name" : "Palacio de la Recoleta",
//                 "phone" : "02 298 3200 - 02 295 1951",
//                 "prod_id" : "-Kg0_RnLELEkzVSdA7SY",
//                 "region" : "Pichincha"
//             },
//             "-Kg1cKPUVKhHDhzSQgw6" : {
//                 "address" : "Avenida Patria, entre 6 de Diciembre y 12 de Octubre",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.209850, -78.494928",
//                 "name" : "Edificio de los Espejos",
//                 "phone" : "02 222 0967",
//                 "prod_id" : "-Kg1cK3Heq7tcVojpHk8",
//                 "region" : "Pichincha"
//             },
//             "-Kg5CUXgy5JNlcSPvZYh" : {
//                 "address" : "Calle Luis Felipe Borja, entre Luis Sodiro y Hermanos Pazmiño",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.212782, -78.501529",
//                 "name" : "Colegio Femenino Espejo",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5CUKBt54kVC5xBbEh",
//                 "region" : "Pichincha"
//             },
//             "-Kg5G3Mpj-562HO3kmj_" : {
//                 "address" : "Calle Carrión y 10 de Agosto",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.202616, -78.497528",
//                 "name" : "Palacio de Najas (Cancillería)",
//                 "phone" : "02 299 3200",
//                 "prod_id" : "-Kg5G373st5uDxoMIC5f",
//                 "region" : "Pichincha"
//             },
//             "-Kg5HviFO0CkdHIdfr7w" : {
//                 "address" : "Plaza de Santo Domingo, Calle Guayaquil y Rocafuerte",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.223719, -78.512174",
//                 "name" : "Monumento a Sucre",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5HvcOb7sHeAqm0bxm",
//                 "region" : "Pichincha"
//             },
//             "-Kg5KdWnj75pedpkV8UT" : {
//                 "address" : "Calle Junín y Montúfar",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.222881, -78.510452",
//                 "name" : "Casa Museo Manuela Sáenz",
//                 "phone" : "02 228 3908",
//                 "prod_id" : "-Kg5KdFM4TKuTygxtjJ1",
//                 "region" : "Pichincha"
//             },
//             "-Kg5OvSR3v_cSDql26xc" : {
//                 "address" : "Avenida 6 de Diciembre y Patria",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.208219, -78.497865",
//                 "name" : "Parque El Ejido",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5OvAL7zcIa9r9IiH2",
//                 "region" : "Pichincha"
//             },
//             "-Kg5QZ5WUrCSW7EH73hR" : {
//                 "address" : "Avenida Patria, entre 10 de Agosto y 6 de Diciembre",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.208106, -78.497317",
//                 "name" : "Puerta de la Circasiana",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5QYvdeKERYgHCjw2E",
//                 "region" : "Pichincha"
//             },
//             "-Kg5UQrY95ufhURC6Day" : {
//                 "address" : "Avenida Patria, entre 10 de Agosto y 6 de Diciembre",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.207949, -78.497180",
//                 "name" : "La Lucha Eterna",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5UQgrJi9QcRLxta4O",
//                 "region" : "Pichincha"
//             },
//             "-Kg5XJjc5aRf8mKAVAb4" : {
//                 "address" : "Parque El Ejido",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.208489, -78.498116",
//                 "name" : "La Llama Eterna",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5XJaR3DwnNtM4X92v",
//                 "region" : "Pichincha"
//             },
//             "-Kg5_L4yCNsGo2FE8_T0" : {
//                 "address" : "Avenida Patria y 12 de Octubre",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.210367, -78.493892",
//                 "name" : "La Insidia",
//                 "phone" : ".",
//                 "prod_id" : "-Kg5_L-BonA_5zNg7rPp",
//                 "region" : "Pichincha"
//             },
//             "-Kg5dhwp8nAKC1HsVqcf" : {
//                 "address" : "Calle Sodiro y Valparaíso",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.215953, -78.498728",
//                 "name" : "Antiguo Hospital  Eugenio Espejo",
//                 "phone" : "02 299 3300 - 02 290 1333",
//                 "prod_id" : "-Kg5dhklZSrF-Be__S29",
//                 "region" : "Pichincha"
//             },
//             "-Kg5hlvBhtYSbCcBM21L" : {
//                 "address" : "Calle Montevideo y Luis Dávila",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.211353, -78.506996",
//                 "name" : "Antiguo Hospital Militar",
//                 "phone" : "02 394 6990",
//                 "prod_id" : "-Kg5hlkdAkw6RD2pQ4n8",
//                 "region" : "Pichincha"
//             },
//             "-Kg5lGD5_Uv4XnXmLiNY" : {
//                 "address" : "Calle Espejo y Flores",
//                 "cat_id" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "latlong" : "-0.221974, -78.510512",
//                 "name" : "Iglesia y Monasterio de Santa Catalina",
//                 "phone" : "02 228 4000",
//                 "prod_id" : "-Kg5lFhD3kYGFo-cUI2Y",
//                 "region" : "Pichincha"
//             },
//             "-KgRupjXyAybIGgx_DjP" : {
//                 "address" : "Calle Venezuela y Sucre",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.221229, -78.512919",
//                 "name" : "Pasaje Amador",
//                 "phone" : "",
//                 "prod_id" : "-KgRuojxwM7s5oARLb7l",
//                 "region" : "Pichincha"
//             },
//             "-KgRyfPUczf2xMwaM_2X" : {
//                 "address" : "Calle Imbabura y Manabí",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.215625, -78.513334",
//                 "name" : "Lavandería La Chilena",
//                 "phone" : "",
//                 "prod_id" : "-KgRyfKyY4VynS7IG1P4",
//                 "region" : "Pichincha"
//             },
//             "-KgyB3lZp40rSCbBTnzD" : {
//                 "address" : "Calle Aguarico",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.219142, -78.527270",
//                 "name" : "Cima de la Libertad - Templo de la Patria",
//                 "phone" : "02 228 8733",
//                 "prod_id" : "-KgyB3PnXkxRE-SRLFXD",
//                 "region" : "Pichincha"
//             },
//             "-KgyCXDSgLo090q4ilXV" : {
//                 "address" : "Calle Rocafuerte y Cumandá",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.217614, -78.520782",
//                 "name" : "Ex Penal García Moreno",
//                 "phone" : ".",
//                 "prod_id" : "-KgyCX912Q-XLK89Kd07",
//                 "region" : "Pichincha"
//             },
//             "-KgyHGJDMOYPFPep9_WQ" : {
//                 "address" : "Calle General Melchor Aymerich",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.228556, -78.518368",
//                 "name" : "Fortines del Panecillo",
//                 "phone" : ".",
//                 "prod_id" : "-KgyHGDOodUOgL5xFy13",
//                 "region" : "Pichincha"
//             },
//             "-KgyKksQ5AtgRTPl6MLe" : {
//                 "address" : "Calle Ambato y Mazo",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.227398, -78.514900",
//                 "name" : "Antiguo Edificio del Instituto Geográfico",
//                 "phone" : ".",
//                 "prod_id" : "-KgyKkgS0eUioHX2m2k3",
//                 "region" : "Pichincha"
//             },
//             "-KgyMTxcftLLUQXA8MbA" : {
//                 "address" : "Calle Iquique, sector La Tola",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.220086, -78.501635",
//                 "name" : "El Itchimbía",
//                 "phone" : "02 322 6363 - 02 322 8470 - 02 322 8471",
//                 "prod_id" : "-KgyMTsv4lAk2L7tVJKU",
//                 "region" : "Pichincha"
//             },
//             "-KgyOe5D-ZvYuuxay9iS" : {
//                 "address" : "Avenida Pichincha, entre Esmeraldas y Manabí",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.220009, -78.507040",
//                 "name" : "Mercado Central",
//                 "phone" : "",
//                 "prod_id" : "-KgyOe-OfIGjBa9WQYrl",
//                 "region" : "Pichincha"
//             },
//             "-KgySHiNTC53jd0pmf-3" : {
//                 "address" : "Calle Los Ríos y Don Bosco",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.222738, -78.505026",
//                 "name" : "Instituto Técnico Don Bosco y Capilla ",
//                 "phone" : ".",
//                 "prod_id" : "-KgySHcyVMkeb3RO0XRd",
//                 "region" : "Pichincha"
//             },
//             "-KgyTSyFY74p-pSr4NoY" : {
//                 "address" : "Calle Luis Vargas Torres y Francisco de Caldas",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.216002, -78.506490",
//                 "name" : "Antiguo Colegio La Salle",
//                 "phone" : ".",
//                 "prod_id" : "-KgyTStba2cYF5zEQXC1",
//                 "region" : "Pichincha"
//             },
//             "-Kh2nqW515vstl4mQWqk" : {
//                 "address" : "Calle Luis Vargas y Antonio Ante",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.212241, -78.505361",
//                 "name" : "Instituto Nacional Mejía",
//                 "phone" : "02 256 2841",
//                 "prod_id" : "-Kh2nq7nwxwls6IlRDX4",
//                 "region" : "Pichincha"
//             },
//             "-Kh2pQYjcswiUbGs4W1W" : {
//                 "address" : "Entre avenidas Gran Colombia y 10 de Agosto",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.214640, -78.502553",
//                 "name" : "Parque de La Alameda",
//                 "phone" : ".",
//                 "prod_id" : "-Kh2pQP5eCsC4MbW06aR",
//                 "region" : "Pichincha"
//             },
//             "-Kh2siIBfyjI78WDOL2m" : {
//                 "address" : "Entre avenidas Gran Colombia y 10 de Agosto, Parque La Alameda",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.214888, -78.502480",
//                 "name" : "Observatorio Astronómico",
//                 "phone" : "02 257 0765 - 02 258 3451",
//                 "prod_id" : "-Kh2siCLK5BzOcq3x9mF",
//                 "region" : "Pichincha"
//             },
//             "-Kh2uRJ3tPWWDSqDQbnV" : {
//                 "address" : "Piedrahita y Avenida 6 de Diciembre",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.213092, -78.498814",
//                 "name" : "Palacio Legislativo",
//                 "phone" : "02 399 1000",
//                 "prod_id" : "-Kh2uRDh1AyYM7-L7az6",
//                 "region" : "Pichincha"
//             },
//             "-Kh2wST41C0oz-3tFxqM" : {
//                 "address" : "Entre avenidas Shyris y Amazonas",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.183010, -78.484584",
//                 "name" : "Parque La Carolina",
//                 "phone" : ".",
//                 "prod_id" : "-Kh2wSO6sb5MHMOkzc7I",
//                 "region" : "Pichincha"
//             },
//             "-Kh2zZpmfFGIaKGIK2FC" : {
//                 "address" : "Avenida 6 de Diciembre y Naciones Unidas",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.177520, -78.476683",
//                 "name" : "Estadio Olímpico Atahualpa",
//                 "phone" : "02 255 0075 - 02 255 0085 - 02 255 0175",
//                 "prod_id" : "-Kh2zZk-i8v7mujE84HI",
//                 "region" : "Pichincha"
//             },
//             "-Kh350UhEyWYDBh_tIxz" : {
//                 "address" : "Calle Mariano Calvache y Lorenzo Chávez",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.190719, -78.469455",
//                 "name" : "Capilla del Hombre",
//                 "phone" : "02 244 6455 – 02 245 2938 – 02 246 5266",
//                 "prod_id" : "-Kh350G9-Glfcakhapu8",
//                 "region" : "Pichincha"
//             },
//             "-Kh38A8hzp7nxAxOPd7N" : {
//                 "address" : "Calle Guanguiltahua, sector Batán Alto.",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.177574, -78.460586",
//                 "name" : "Parque Metropolitano",
//                 "phone" : "02 290 7005 - 02 290 4884",
//                 "prod_id" : "-Kh38A3AcwEwriRY8z9J",
//                 "region" : "Pichincha"
//             },
//             "-Kh3A4Xbw6fqPIlPyeQ9" : {
//                 "address" : "Avenida Gonzales Suárez",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.202558, -78.480464",
//                 "name" : "Hotel Quito",
//                 "phone" : "02 396 4900",
//                 "prod_id" : "-Kh3A4SEte5VP_3EZzkI",
//                 "region" : "Pichincha"
//             },
//             "-Kh3F6z0jwbv26Fx5bRR" : {
//                 "address" : "Avenidas Ladrón de Guevara y Velasco Ibarra",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.213410, -78.490232",
//                 "name" : "Coliseo Rumiñahui",
//                 "phone" : "02 255 0075 - 02 255 0085 - 02 255 0175 - 02 255 0185",
//                 "prod_id" : "-Kh3F6stAIQBQhewqL-D",
//                 "region" : "Pichincha"
//             },
//             "-Kh3IEFkL5GtxkjU684b" : {
//                 "address" : "Avenida Ladrón de Guevara",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.210325, -78.488612",
//                 "name" : "Escuela Politécnica Nacional",
//                 "phone" : "02 297 6300",
//                 "prod_id" : "-Kh3IDr4XvXtiVziXYGR",
//                 "region" : "Pichincha"
//             },
//             "-Kh3LMzXxGWdClwKZJP2" : {
//                 "address" : "Avenida 12 de Octubre",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.209239, -78.491414",
//                 "name" : "Campus Pontificia Universidad Católica del Ecuador",
//                 "phone" : "02 299 1700",
//                 "prod_id" : "-Kh3LMv3fcNsjQIG8ias",
//                 "region" : "Pichincha"
//             },
//             "-Kh3MdbtH87xhvxRKCNS" : {
//                 "address" : "Entre Avenidas 12 de Octubre y 10 de Agosto",
//                 "cat_id" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "latlong" : "-0.202900, -78.491041",
//                 "name" : "Barrio La Mariscal",
//                 "phone" : ".",
//                 "prod_id" : "-Kh3MdXvwV_rRLJmpxA9",
//                 "region" : "Pichincha"
//             },
//             "-Kh3OOgDi5C2RRuEADAl" : {
//                 "address" : "Avenida Universitaria",
//                 "cat_icon" : "ion-ios-home",
//                 "cat_id" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "latlong" : "-0.200846, -78.501984",
//                 "name" : "Universidad Central del Ecuador",
//                 "phone" : "098 338 4758",
//                 "prod_id" : "-Kh3OOaPgdiKpcg-wrIg",
//                 "region" : "Pichincha"
//             }
//         },
//         "products_en" : {
//             "-Ka2WpFX7a_kibaZQ9Nm" : {
//                 "address" : "Ricaurte St. with Eloy Alfaro",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpFX7a_kibaZQ9Nm%2Faudio%2Fpodcast%202.ogg?alt=media&token=2e73adc4-ecc3-4c62-9a97-163cd5a2326f",
//                 "cat" : "-Ka2UNIks3RttGkh_eBU",
//                 "city" : "Alausí",
//                 "email" : "elmesondeltren@hotmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2FTikal%20cabecera.jpg?alt=media&token=d1a45f43-5966-4d2e-9755-9891bc7ddc76",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2FTikal%201.jpg?alt=media&token=2049f6e7-76e9-445e-8258-49bf8812d11e",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2Ftikal%202.jpg?alt=media&token=edcdb112-6e9a-4168-9583-aeb51946b65d",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2Ftikal%203.jpg?alt=media&token=8a459dab-55bd-476a-81b2-a9dbe29fe7e5",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2Ftikal%204.jpg?alt=media&token=10d13d48-c528-4d20-8149-d0784618b263",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-1.066346, -80.907348",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2FTikal%20Logo.jpg?alt=media&token=547d0c47-e28f-446f-b1f6-0798519c4c1d",
//                 "long_description" : "Open from Tuesday to Sunday from 8h00 to 21h00. We offer Breakfast, lunch, dinner and dishes to your choice. ",
//                 "name" : "El Mesón del Tren",
//                 "pais" : "Ecuador",
//                 "phone" : "(03) 302 - 7544;0987291923;0993434081",
//                 "prodId" : "-Ka2WpCCLh2AETdBuJgB",
//                 "region" : "Chimborazo",
//                 "short_description" : "Enjoy the best food and atmosphere in Alausí"
//             },
//             "-KbQKjb63jtA8yYvestm" : {
//                 "address" : "Garcia Moreno Street between Chile and Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbQKjb63jtA8yYvestm%2Faudio%2FGovernment%20Palace.ogg?alt=media&token=88c015f5-13ad-490c-a012-d30a66b3358c",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "http://www.presidencia.gob.ec/contacto/",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbQKjZF2ZB3rTnXU-1e%2Fcabecera%20pp.jpg?alt=media&token=f44e8764-40c8-47d9-80a3-ea73208452dd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219869, -78.512124",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbQKjZF2ZB3rTnXU-1e%2Fpal%20gob%20logo.jpg?alt=media&token=7470011e-431a-45c9-a7b0-c218e29d0a85",
//                 "long_description" : "Visiting hours: Monday from 15h00 to 18h45; Tuesday to Friday from 09h00 to 18h45; On Saturdays from 09h00 to 22h00 and on Sunday from 09h00 to 16h00. Entry: Free - Mandatory to show an identification document ",
//                 "name" : "Government Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "02 3827000",
//                 "prodId" : "-KbQKjZF2ZB3rTnXU-1e",
//                 "region" : "Pichincha",
//                 "short_description" : "The Carondelet Palace: seat of Government and official residence of the President of Ecuador",
//                 "web" : "http://www.presidencia.gob.ec"
//             },
//             "-KbVP3vXv99x7suElMW3" : {
//                 "address" : "Chile Street and Venezuela",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3vXv99x7suElMW3%2Faudio%2FArchbishop's%20Palace.ogg?alt=media&token=1c5d7981-11c4-43ce-adee-3635d03c1b52",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "info@ccpalacioarzobisal.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%20cabecera.jpg?alt=media&token=c4c56e3c-bf4e-4121-a505-e0f413cdda08",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%203.jpg?alt=media&token=a70a5196-df30-4e4d-bfa6-8f2417baa8af",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%204.jpg?alt=media&token=b43f1564-ae49-4fdf-a551-de189f32ba0e",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%205.jpg?alt=media&token=efe312e1-2cf8-4cb0-850b-7be9ab8e4252",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2FPalacio%20arzobispal%201.jpg?alt=media&token=d9d5c14d-eaae-4e96-9dfe-e9b3d1f4b711",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219679, -78.511677",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%20logo.jpg?alt=media&token=367b72da-0f50-4602-b762-7a5d7b4f35fe",
//                 "long_description" : "Visiting hours: Monday to Friday from 09h00 to 21h00; Saturdays and Sundays from 09h00 to 23h00. Free entry. In this site there are no guided tours.",
//                 "name" : "Archbishop Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 7748 - 02 295 9632",
//                 "prodId" : "-KbVP3seKopD5DzNQBZh",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Headquarters of the Quito Metropolitan Archdiocese and shopping center",
//                 "web" : "www.ccpalacioarzobispal.com"
//             },
//             "-KbVbjf6WOxTGBlLxYjP" : {
//                 "address" : "Venezuela Street between Chile and Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjf6WOxTGBlLxYjP%2Faudio%2FCity%20Hall.ogg?alt=media&token=c029769d-f47f-4ecd-953a-6ff88b6f2047",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "serviciosciudadanos@quito.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fmunicipio%20de%20quito%20cabecera.jpg?alt=media&token=3c265e6c-590c-436d-b4d6-df9984f53716",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Falcalde%20d%20Quito2.jpg?alt=media&token=2aeb87bf-ee35-48e0-b88d-274dbd9fcd57",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fmunicipio%20de%20quito%206.jpg?alt=media&token=1768e916-a8aa-4d0a-acd2-f57ff6cbe179",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fmunicipio%20de%20quito%207.jpg?alt=media&token=138be030-c643-49c5-94b8-c640333b376b",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fplaza%20interior%202.jpg?alt=media&token=b7e198bd-b2e3-485f-bb7e-92efc94d89ab",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220562, -78.511624",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fmunicipio%20de%20quito%20logo.jpg?alt=media&token=e3e0f656-3a00-410b-a63b-6e8086cd8d3a",
//                 "long_description" : "In this building operate the offices of the Metropolitan Council and those of the Mayor of the city, Mauricio Rodas, whose administration ends in 2018. There are no guided tours. Free entry",
//                 "name" : "City Hall",
//                 "pais" : "Ecuador",
//                 "phone" : "02 3952300",
//                 "prodId" : "-KbVbjcCJb7vpYhHN_kx",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Headquarters of the Municipality of the Metropolitan District of Quito",
//                 "web" : "www.quito.gob.ec"
//             },
//             "-Kbfm-ChgvdGC6215Txf" : {
//                 "address" : "Garcia Moreno Street and Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-ChgvdGC6215Txf%2Faudio%2FMetropolitan%20Cultural%20Center.ogg?alt=media&token=e9e3a5e2-9c34-4a2d-bb4a-89d3325e179b",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "comunicacion@centroculturalq.quito.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Fcentro-cultural-de-metropolitano%20cabecera%201.jpg?alt=media&token=3a86c0c6-8728-41d7-bbec-079688b45c8f",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Fcentro%20cultural%20metropoliatano%203.1.jpg?alt=media&token=7879ab9e-3644-41cd-bfcc-482b0ed25704",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Fcentro%20cult%201.1.jpg?alt=media&token=6f5aaf2b-47c0-4176-b28d-79a56c2bff78",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2FC.C.%20Metropolitano%201.1.jpg?alt=media&token=486108eb-e272-446a-84cc-58f1a0eb9c1f",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Fcentro%20cultural%20metropoliatano%202.1.jpg?alt=media&token=6cd063f5-04f6-4275-a923-1af8f8a8fda3",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220396, -78.513160",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Flogo%201%20c.c.%20metropolitano.jpg?alt=media&token=e07b9721-8eca-4194-9a13-b0a9b06270cb",
//                 "long_description" : "Visiting hours: Monday to Sunday from 08h00 to 17h00. Most temporary exhibitions are free and can be accessed from 09h00.",
//                 "name" : "Metropolitan Cultural Center",
//                 "pais" : "Ecuador",
//                 "phone" : "02 395 2300",
//                 "prodId" : "-Kbfm-8eZTXPyeIaoM9y",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 } ],
//                 "short_description" : "Saves a scene of the massacre of the heroes of independence",
//                 "web" : "www.centroculturalq.quito.gob.ec"
//             },
//             "-KbgotBM5F0tKboBd9mT" : {
//                 "address" : "Juan de Dios Morales St. OE 389 with Venezuela",
//                 "audio" : "",
//                 "cat" : "-Ka2UNIks3RttGkh_eBU",
//                 "city" : "Quito",
//                 "email" : "www.cheztiff.net",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fchez%20tiff%20%20cabecera.jpg?alt=media&token=3cfc3598-8e1b-4899-8eab-1df50db5c4af",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fchez%20tiff%201.1.jpg?alt=media&token=bc5eaecb-4398-4253-aaff-fb4bc6e876c4",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fchez%20tiff%202.1.jpg?alt=media&token=9dc8e5ee-2aa8-4045-92d9-e85897e43974",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fchez%20tiff%206.1.jpg?alt=media&token=4a47fe68-d529-431c-abed-108f2369accd",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fcheztiff%205.1.jpg?alt=media&token=23f98695-d546-4ebf-8434-daf7061a2613",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.224066, -78.514536",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Flogo%20chez%20tiff%20logo.jpg?alt=media&token=c21f1883-8f14-4b13-9ef3-92bb3a15bba4",
//                 "long_description" : "Visiting Hours: Monday to Sunday from 09h00 to 18h00. Explanation of the process for making chocolate. \"Arriba\" National Cacao Didactic Chocolate Tasting.",
//                 "name" : "Chez Tiff",
//                 "pais" : "Ecuador",
//                 "phone" : "02 22 900 20",
//                 "prodId" : "-Kbgot6xpYNBW06X6EoM",
//                 "region" : "Pichincha",
//                 "short_description" : "Pleasure in its five senses!"
//             },
//             "-KbkQjhOYiM0FQo4JNYj" : {
//                 "address" : "Jose de Sucre Ave. with Benalcazar st.",
//                 "audio" : "",
//                 "cat" : "-Ka2UNIks3RttGkh_eBU",
//                 "city" : "Quito",
//                 "email" : "www.tianguez.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%20cabecera.jpg?alt=media&token=fa8b345a-9fec-47f8-ab1e-2f8250306928",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%205.jpg?alt=media&token=3e4c47e7-0772-49ba-83a9-81ca38c4962d",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%206.jpg?alt=media&token=72ed718c-73b4-49c9-b19d-16eaf75d97dc",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%202.jpg?alt=media&token=15bd8bc6-dacf-43dd-9a68-96963072b275",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%201.jpg?alt=media&token=b189fbbc-a9de-4e88-9a7b-b99eaa740224",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220316, -78.514885",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%204.jpg?alt=media&token=74bb6b9c-5227-4199-9e9d-f94a3535ac8f",
//                 "long_description" : "Open Monday and Tuesday from 09h30 to 18h30 and Wednesday to Sunday from 09h30 to 23h30",
//                 "name" : "Tianguez Cafeteria",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2230609",
//                 "prodId" : "-KbkQjUa50-_sKUHbpjf",
//                 "region" : "Pichincha",
//                 "short_description" : "The magic of transformation invades us to cook."
//             },
//             "-KdIxtX11xE0axijAaVF" : {
//                 "address" : "Venezuela Street and Chile",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdIxtX11xE0axijAaVF%2Faudio%2FP%C3%A9rez%20Pallares%20House.ogg?alt=media&token=8b657b31-8dd7-4852-9bd4-0bfc5db79c4c",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "comunicacion@quito-turismo.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdIxtRhqsLKvPI9HtRI%2FPalacete%20Perez%20Pallares%20cabecera.jpg?alt=media&token=e7c0fa6b-0a46-4115-b9b5-5147a9803142",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220047, -78.511449",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdIxtRhqsLKvPI9HtRI%2FPerez%20pallares%20logo.jpg?alt=media&token=572987ff-15aa-4d78-a97e-6412535bd174",
//                 "long_description" : "In this building there are several rooms that have been used for important events of the city, especially those overlooking the square, a protocol office of the Mayor of the city and a room dedicated to the Beauty Queens of Quito, which exhibits the Portraits of the sovereigns of the city. This building is occupied by the General Administration and the Directorate of International Relations of the Municipality of Quito.",
//                 "name" : "Perez Pallares House",
//                 "pais" : "Ecuador",
//                 "phone" : "02 299 3300",
//                 "prodId" : "-KdIxtRhqsLKvPI9HtRI",
//                 "region" : "Pichincha",
//                 "short_description" : "Where the love story between Manuelita and Simón Bolívar was born",
//                 "web" : "http://www.quito.com.ec"
//             },
//             "-KdW1NLuBUguqwCOtoGW" : {
//                 "address" : "Rocafuerte E 381 y Zaldumbide",
//                 "audio" : "",
//                 "cat" : "-Ka2UOtSCmWUf3XqfIpK",
//                 "city" : "Quito",
//                 "email" : "casarocafuertequito@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.227908, -78.509603",
//                 "logo" : "",
//                 "long_description" : "El mejor lugar para disfrutar la historia en una casa colonial de 200 años de historia",
//                 "name" : "Casa Rocafuerte",
//                 "pais" : "Ecuador",
//                 "phone" : "022956522",
//                 "prodId" : "-KdW1NH3hUWvzps5nm9v",
//                 "region" : "Pichincha",
//                 "short_description" : "Su casa en el centro histórico"
//             },
//             "-KdWUVD7X_nzQwbQLiGf" : {
//                 "address" : "Yasuni National Park",
//                 "audio" : "",
//                 "cat" : "-Ka2UOtSCmWUf3XqfIpK",
//                 "city" : "Francisco de Orellana",
//                 "email" : "sales@napoculturalcenter.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.524903, -76.439702",
//                 "logo" : "",
//                 "long_description" : "Napo Cultural Center is a community tourism project managed and operated 100% by the Añangu, an ancestral Amazonian culture. The lodge is built on the basis of Kichwa architecture, has rigorous sustainable standards and is environmentally friendly.",
//                 "name" : "Yasuni Kichwa Lodge EN",
//                 "pais" : "Ecuador",
//                 "phone" : "(+593 2) 2547 758 - Mobile & Whatsapp: (+593 99) 3575 272",
//                 "prodId" : "-KdWUUyeiAuyB2ogryl7",
//                 "region" : "Orellana",
//                 "short_description" : "A contribution to the conservation of biodiversity and culture"
//             },
//             "-KdWoe3MxH7a1lbAuvRb" : {
//                 "address" : "Catedral Metropolitana - Venezuela y Espejo 715",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "www.catedraldequito.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWodxYRzh6SIzWdaqE%2Fcatedral%20cabecera%202.jpg?alt=media&token=2ddbca4a-aabc-4cf2-92f7-2415785baadd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220471, -78.512503",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWodxYRzh6SIzWdaqE%2FCatedral%20Logo.jpg?alt=media&token=725c98b8-c4f9-4cb6-8c61-6a88158c338e",
//                 "long_description" : "Fundada en 1535, fue una construcción de adobe, madera y techo de paja. Visitas: Lunes a sábado: de 09:30 a 17:00/ domingos cerrado  Precio: Ecuatorianos: $2,00 Adultos; $1,00 (Niños, estudiantes, adultos mayores, personas con discapacidad). Visita a Cúpulas (Iglesia + Museo + Cúpulas) $4,00. Extranjero: $3,00 Adultos; $2,00 (Niños, estudiantes, adultos mayores, personas con discapacidad). Visita a Cúpulas (Iglesia + Museo + Cúpulas) $6,00 ",
//                 "name" : "Catedral Primada de Quito",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdWodxYRzh6SIzWdaqE",
//                 "region" : "Pichincha",
//                 "short_description" : "La iglesia es considerada una de las mas hermosas de Quito"
//             },
//             "-KdWq3xOeGoRgJTlOkAS" : {
//                 "address" : "Iglesia de la Companía de Jesús - Garcia Moreno y Sucre - Esquina",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "fundacioniglesiadelacompania.org.ec/portal/",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWq3srZivK3gccoCZW%2FCompa%C3%B1ia%20cabecera.jpg?alt=media&token=f0beffdf-2764-4b01-b7e0-1853e078c9b2",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220974, -78.513687",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWq3srZivK3gccoCZW%2FLogo.jpg?alt=media&token=e18f86b6-68e3-4ca2-9717-4216976c7d6f",
//                 "long_description" : "La Iglesia de la Compañía inició su construcción en 1605 demoró 160 años en ser edificada. Para 1765 el templo finalizó la obra con la construcción de la fachada. Visitas: Lunes a Sábados de 08:00 a 16:45. Domingos: de 12h30 a 16h00. Primer domingo de cada mes la entrada es gratuita. Entrada: Ecuatorianos: $2,50 Adultos; $1 Estudiantes Universitarios; $0,50 Estudiantes; Extranjeros: $5 Adultos; $2,50 Estudiantes.",
//                 "name" : "Iglesia de la Companía de Jesús",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2584175",
//                 "prodId" : "-KdWq3srZivK3gccoCZW",
//                 "region" : "Pichincha",
//                 "short_description" : "Joya del Barroco Latinoamericano"
//             },
//             "-KdXOwxaCXVje6eF6eeM" : {
//                 "address" : "Convento de San Francisco",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "info@conventodesanfrancisco.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXOwupt9jts1zNAvos%2FSan%20Francisco%20cabecera.jpg?alt=media&token=c9a29f45-b393-489a-be72-76621e5941f2",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220445, -78.515273",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXOwupt9jts1zNAvos%2FPlaza%20San%20Francisco%20Logo.jpg?alt=media&token=5914b77c-34dc-45ff-ac36-dd565edcd76d",
//                 "long_description" : "Horarios de Visitas: De lunes a sábado de 09h00 a 17h30 y los domingos de 09h00 a 13h00. Entrada: $2.00 Adultos; $1.00 Niños y Estudiantes; $0.50 Tercera Edad.",
//                 "name" : "Convento de San Francisco",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2281-124",
//                 "prodId" : "-KdXOwupt9jts1zNAvos",
//                 "region" : "Pichincha",
//                 "short_description" : "Es el conjunto arquitectónico más grande de Iberoamérica"
//             },
//             "-KdXPslkVmW-86TyomTM" : {
//                 "address" : "Iglesia El Sagrario",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXPsirh-j6GUGFJ3JW%2FEl%20sagrario%20cabecera.jpg?alt=media&token=a69354eb-e1ff-4d59-b3f8-dc0d3e06b407",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220571, -78.512876",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXPsirh-j6GUGFJ3JW%2Fel%20sagrario%20logo.jpg?alt=media&token=fdc2f910-3d87-49f6-be17-f522501666ed",
//                 "long_description" : "Horarios de Visitas: de Lunes a Domingo 9:00 a 17:00. Costo de ingreso: Gratuito",
//                 "name" : "Iglesia El Sagrario",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2284 398",
//                 "prodId" : "-KdXPsirh-j6GUGFJ3JW",
//                 "region" : "Pichincha",
//                 "short_description" : "Dentro de esta maravillosa construcción se expresa la riqueza del barroco quiteño"
//             },
//             "-KdXaHOytVukfjFodyCn" : {
//                 "address" : "Garcia Moreno Street and Chile",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXaHOytVukfjFodyCn%2Faudio%2FPlaza%20Grande%20Hotel%20-%20The%20Palace%20of%20Pizarro.ogg?alt=media&token=68c4522e-613d-4a03-9ccc-82d5dcae1e7e",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "https://www.plazagrandequito.com/contactos",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXaHLGDUs5aiG9r4Kb%2FHtl.%20Plz.%20Grande%20cabecera.jpg?alt=media&token=b89ce94a-8e49-47ff-9149-0f6316d5dbd8",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219612, -78.512127",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXaHLGDUs5aiG9r4Kb%2FHtl%20Plz%20Grande%20logo.jpg?alt=media&token=1aa87fcf-a1f1-4daf-8312-1529e14960fd",
//                 "long_description" : "First luxury hotel in the city. Year construction: 1930, eclectic style. Current use: Boutique hotel. The building is now a hotel, so there are no guided tours.",
//                 "name" : "Pizarro Palace - Plaza Grande Hotel",
//                 "pais" : "Ecuador",
//                 "phone" : "02 251 0777",
//                 "prodId" : "-KdXaHLGDUs5aiG9r4Kb",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 } ],
//                 "short_description" : "The first belle epoque big hotel of the city",
//                 "web" : "https://www.plazagrandequito.com"
//             },
//             "-KdfZsQF5A0JZW_9fBx7" : {
//                 "address" : "Chile St. between Garcia Moreno and Venezuela",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfZsQF5A0JZW_9fBx7%2Faudio%2FHouse%20of%20Mayors.ogg?alt=media&token=46e66b18-6d42-46b4-b911-cec749619176",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfZsJvwrU8J34CSfm8%2FCasa%20de%20los%20alcaldes%20cebecera.jpg?alt=media&token=7983282c-2af0-474a-b3d7-0cd4da34f173",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219711, -78.511955",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfZsJvwrU8J34CSfm8%2FCasa%20de%20los%20alcaldes%20logo.jpg?alt=media&token=c5d0be45-8b8d-4642-bc6d-031924b79074",
//                 "long_description" : "Year of construction: circa 1560 (original), circa 1830 (current). Historic style (neoclassical). Current use: Residential, protocol. There are no guided tours on this site.",
//                 "name" : "House of Mayors",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdfZsJvwrU8J34CSfm8",
//                 "region" : "Pichincha",
//                 "short_description" : "Residence for the Mayors of the city",
//                 "web" : "."
//             },
//             "-KdfcRMRJcm5QwtBKL0p" : {
//                 "address" : "Convento de la Inmaculada Concepción",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfcRJHtE8FOO02G7z7%2FIg%20Inma.%20concepci%C3%B3n%20cabecera.jpg?alt=media&token=91fe4ec7-b11a-4fb7-87b0-5f76feb92ed5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219474, -78.512233",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfcRJHtE8FOO02G7z7%2FIg%20Inma%20Concepci%C3%B3n%20logo.jpg?alt=media&token=1541342c-8636-4ef2-a7ca-a428122d455e",
//                 "long_description" : "no",
//                 "name" : "Convento de la Inmaculada Concepción",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdfcRJHtE8FOO02G7z7",
//                 "region" : "Pichincha",
//                 "short_description" : "Primer convento de monjas de clausura en el Ecuador"
//             },
//             "-Kdfg1sLDiay2Gv6SskC" : {
//                 "address" : "Iglesia y Convento de Santa Clara",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfg1p5j3tq_OqDISwM%2Fcabecera%20cdesc.jpg?alt=media&token=eb084959-b5cc-4484-b7ed-e700730cd464",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222226, -78.516473",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfg1p5j3tq_OqDISwM%2Flogo%20cdesc.jpg?alt=media&token=20d5e471-9bab-4493-bb00-7961179bfdeb",
//                 "long_description" : "no",
//                 "name" : "Iglesia y Convento de Santa Clara",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-Kdfg1p5j3tq_OqDISwM",
//                 "region" : "Pichincha",
//                 "short_description" : "Uno de los más antiguos de Quito"
//             },
//             "-KdfglTHdnIgw2xIdW_O" : {
//                 "address" : "Iglesia y Monasterio del Carmen Alto",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfglQScR0wUaMAbYw_%2Fcabecera%20cdelca2.jpg?alt=media&token=44643ff4-f283-4d8b-bb7c-228642b60f0a",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222813, -78.515229",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfglQScR0wUaMAbYw_%2Flogo%20cdelca.jpg?alt=media&token=a4bfd195-016e-44e1-9d51-46afab945720",
//                 "long_description" : "no",
//                 "name" : "Iglesia y Monasterio del Carmen Alto",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdfglQScR0wUaMAbYw_",
//                 "region" : "Pichincha",
//                 "short_description" : "Fue establecida en la casa de la primera santa ecuatoriana, Marianita de Jesús Paredes y Flores"
//             },
//             "-KdfhMer-5iox9j9JeTt" : {
//                 "address" : "Capilla del Robo",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfhMcMaHFA73Ln82gH%2Fcapilla%20del%20robo%20cabecera.jpg?alt=media&token=d17eb1ba-4952-449f-aaf9-6d968a4c237d",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222051, -78.517509",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfhMcMaHFA73Ln82gH%2Fcapilla%20del%20robo%20logo.jpg?alt=media&token=3f5eb332-f519-4bba-b75d-bf746bb522a8",
//                 "long_description" : "no",
//                 "name" : "Capilla del Robo",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdfhMcMaHFA73Ln82gH",
//                 "region" : "Pichincha",
//                 "short_description" : "La Capilla que fue testigo de un robo muy peculiar"
//             },
//             "-Kdfi4Jk1eRQPPBSFuyw" : {
//                 "address" : "Iglesia y Convento de Santo Domingo",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfi4GkUlZ6QBBhENcV%2Fcabecera%20idesd.jpg?alt=media&token=0a6282e8-a6d4-4677-b21b-64307d551823",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.224181, -78.512536",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfi4GkUlZ6QBBhENcV%2Flogo%20idesd.jpg?alt=media&token=defe687a-968d-47bd-8d9a-f0908103d0cf",
//                 "long_description" : "no",
//                 "name" : "Iglesia y Convento de Santo Domingo",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-Kdfi4GkUlZ6QBBhENcV",
//                 "region" : "Pichincha",
//                 "short_description" : "Santo Domingo es una casa de paz y arte colonial, en medio del bullicio de la céntrica ciudad"
//             },
//             "-KdfijaJMAoDrc-HTD73" : {
//                 "address" : "Basílica del Voto Nacional",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfijXTdIvPhXpgOwiK%2FBasilica%20cabecera.jpg?alt=media&token=d41f1e3a-156c-41f4-928f-8ad81b06b395",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.214833, -78.507529",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfijXTdIvPhXpgOwiK%2Fbasilica%20logo.jpg?alt=media&token=ba0b8420-37a6-44c0-9af0-005671f2c0f7",
//                 "long_description" : "no",
//                 "name" : "Basílica del Voto Nacional",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdfijXTdIvPhXpgOwiK",
//                 "region" : "Pichincha",
//                 "short_description" : "La construcción neogótica más grande del continente, y una de las más importantes del mundo"
//             },
//             "-KdfjK5kwYOrfmYapLyL" : {
//                 "address" : "Olmedo Street and Benalcazar",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjJya_VsB96w0vVBd%2FPlz%20De%20la%20fundaci%C3%B3n%20cabecera.jpg?alt=media&token=6a6d3601-117b-4cf8-9549-8de1aa4fc48a",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.217720, -78.511929",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjJya_VsB96w0vVBd%2FPla%20de%20la%20fundaion%20Logo.jpg?alt=media&token=2b4954b0-8ae4-4dc4-a765-8f74b6b610e3",
//                 "long_description" : "In this place the Spanish foundation of the city was given by Sebastián de Benalcázar on the 6 of December of 1534. There is a statue of the Spanish founder.",
//                 "name" : "Foundation Square",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KdfjJya_VsB96w0vVBd",
//                 "region" : "Pichincha",
//                 "short_description" : "The place where the city of Quito was born",
//                 "web" : ""
//             },
//             "-KdfjL37IyHOYUo7enEe" : {
//                 "address" : "Iglesia de Santa Teresita",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjL--MNtOemzkzas_%2Fcabecera%20idest%202.jpg?alt=media&token=4e0ef29e-82ad-4838-8059-24157fb2359e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.204920, -78.496216",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjL--MNtOemzkzas_%2Fcabecera%20idest.jpg?alt=media&token=22e754d2-59c5-493f-b36c-38916a53a0c1",
//                 "long_description" : "no",
//                 "name" : "Iglesia de Santa Teresita",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdfjL--MNtOemzkzas_",
//                 "region" : "Pichincha",
//                 "short_description" : "Su estructura de hormigón armado destaca de los palacetes que lo rodean debido a su color y altura"
//             },
//             "-KdflWWHCcOxUuIloM1y" : {
//                 "address" : "Iglesia y Convento de San Agustín",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflWPOB8Gs4ncIS7wu%2Fcabecera%20idesa.jpg?alt=media&token=ba8448ac-1b54-4529-b3a3-2b2e77659520",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220514, -78.510623",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflWPOB8Gs4ncIS7wu%2Flogo%20idesa.jpg?alt=media&token=1af12977-9ddb-49e3-93b4-d00899779e5f",
//                 "long_description" : "no",
//                 "name" : "Iglesia y Convento de San Agustín",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdflWPOB8Gs4ncIS7wu",
//                 "region" : "Pichincha",
//                 "short_description" : "En su sala Capitular, el pueblo de Quito ratificó la voluntad de independizarse de España"
//             },
//             "-KdflYnV6WqrzZl6wQlk" : {
//                 "address" : "Garcia Moreno Street and Chile",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflYZOvUfZMA_sbMjq%2FPlz%20Grande%20cabecera%201.jpg?alt=media&token=a6e95ece-cd49-4082-bc59-adf0809c9865",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220170, -78.512172",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflYZOvUfZMA_sbMjq%2FPlz%20grande%20logo.jpg?alt=media&token=95268171-a846-4196-add0-be6a874e21a5",
//                 "long_description" : "This plaza has undergone many changes since its construction and has witnessed historical events, political and citizen actions in even assassination of a president.",
//                 "name" : "Independence Square",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KdflYZOvUfZMA_sbMjq",
//                 "region" : "Pichincha",
//                 "short_description" : "Also known as Main Square",
//                 "web" : ""
//             },
//             "-KdfnS1BZzHUcMZsWHly" : {
//                 "address" : "Iglesia de Santa Bárbara",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfnRx26i9tlQpduik9%2Fcabecera%20ide%20sb.jpg?alt=media&token=05caae82-fc43-4d47-894b-81326168948e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.217536, -78.510454",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfnRx26i9tlQpduik9%2Flogo%20idesb.jpg?alt=media&token=e5573a20-1b3f-45fe-8204-94ee521b7f95",
//                 "long_description" : "no",
//                 "name" : "Iglesia de Santa Bárbara",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdfnRx26i9tlQpduik9",
//                 "region" : "Pichincha",
//                 "short_description" : "La parroquia fue residencia temporal de los primeros jesuitas llegados a Quito"
//             },
//             "-KdfoeStPGLMRyvwjQQs" : {
//                 "address" : "Capilla de los Milagros",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfoeNUNgasDzB1XiaU%2Fcabecera%20cdlm.jpg?alt=media&token=60ec312b-5e03-4729-b348-3a54faedf1f0",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.227394, -78.510056",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfoeNUNgasDzB1XiaU%2Flogo%20cdlm.jpg?alt=media&token=7b73d1ed-35e6-4879-b819-2eb469b3942a",
//                 "long_description" : "no",
//                 "name" : "Capilla de los Milagros",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdfoeNUNgasDzB1XiaU",
//                 "region" : "Pichincha",
//                 "short_description" : "Templo a la fe católica de Quito"
//             },
//             "-KdfomDdPCDwMkI2AqUz" : {
//                 "address" : "Garcia Moreno Street and Chile",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfols99HVUbU2mS4X8%2FMomumento%20a%20la%20independencia%20cabecera.jpg?alt=media&token=340b39b2-198c-4c9c-8304-bc205c85d8d1",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220071, -78.512076",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfols99HVUbU2mS4X8%2FMonumento%20independencia%20logo%20.jpg?alt=media&token=42d3e552-6361-4197-acda-46b6b636b7ae",
//                 "long_description" : "In this monument are represented the independence symbols of Quito, the Light of America.",
//                 "name" : "Monument to the Independence",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-Kdfols99HVUbU2mS4X8",
//                 "region" : "Pichincha",
//                 "short_description" : "August 10, 1809: First Call of Independence",
//                 "web" : ""
//             },
//             "-KdfqlOCH5PfFyFyZONJ" : {
//                 "address" : "Iglesia de San Sebastián",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfqlH3tthWNwEcvQbY%2FSan%20Sebastian%20cabecera.jpg?alt=media&token=b21660d8-fdd3-41c7-951a-e0d6255d4037",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "protector de las pestes y patrono de los militares",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfqlH3tthWNwEcvQbY%2FSan%20Sebastian%20logo.jpg?alt=media&token=9cb28ae2-972e-479a-aa82-fc70327592fd",
//                 "long_description" : "no",
//                 "name" : "Iglesia de San Sebastían",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdfqlH3tthWNwEcvQbY",
//                 "region" : "Pichincha",
//                 "short_description" : "San Sebastián: protector de las pestes y patrono de los militares"
//             },
//             "-KdftQ5d0h32afZkCjuH" : {
//                 "address" : "Guayaquil St. with Manabi",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdftQ18PPNbq8yEK-3n%2Fcabecera%20pdel%20t.jpg?alt=media&token=efd2c5ba-c1d1-416d-9980-06ca6fb8db1a",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.218899, -78.508560",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdftQ18PPNbq8yEK-3n%2Flogo%20pdel%20t.jpg?alt=media&token=ef17bbd6-4e4c-4f16-b47c-f001314d88dd",
//                 "long_description" : "Free public space",
//                 "name" : "Theatre Square",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KdftQ18PPNbq8yEK-3n",
//                 "region" : "Pichincha",
//                 "short_description" : "Before, a slaughterhouse; Now, a place for art"
//             },
//             "-KdfunPVrRKIr4I00cEB" : {
//                 "address" : "Guayaquil St. with Rocafuerte",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfunL5eE1mRS1bBK--%2FPlz%20Santo%20domingo%20Cabecera.jpg?alt=media&token=59e52a45-5339-48b5-ab94-2ef5d3f2f2ce",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223516, -78.512875",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfunL5eE1mRS1bBK--%2Fplz%20Santo%20domingo%20logo.jpg?alt=media&token=32d2b896-111d-444d-a813-30f64b603691",
//                 "long_description" : "Free public space",
//                 "name" : "Santo Domingo Square",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KdfunL5eE1mRS1bBK--",
//                 "region" : "Pichincha",
//                 "short_description" : "One of the three original squares of the Spanish city of the XVI century"
//             },
//             "-Kdg2rvv7E6_iz8TLxx3" : {
//                 "address" : "Jose de Sucre Av. with Benalcazar",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg2rqRcjfFcBix6fsr%2FPlz%20San%20Francisco%20cabecera.jpg?alt=media&token=41b5978d-c84a-409a-8f27-a0881cb97449",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220705, -78.514792",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg2rqRcjfFcBix6fsr%2Fplz%20San%20francisco%20logo.jpg?alt=media&token=ccd29dee-2e76-4a1f-917a-fbbaf0d79be0",
//                 "long_description" : "Free public space",
//                 "name" : "San Francisco Square",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kdg2rqRcjfFcBix6fsr",
//                 "region" : "Pichincha",
//                 "short_description" : "The square was built on ancient ruins of the Tianguiz, an Aboriginal market"
//             },
//             "-Kdg6LchGloHTxlVLXsS" : {
//                 "address" : "Guayaquil St. and Espejo",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg6LYExWLk0EJeAZkQ%2FPlaza%20chica%20cabecera.jpg?alt=media&token=1fe75901-b0db-4e7c-9537-8bde473253ca",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220981, -78.511376",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg6LYExWLk0EJeAZkQ%2Fplz%20chica%20logo.jpg?alt=media&token=e6c9b925-8895-41c2-bd02-a5b8e3f86b69",
//                 "long_description" : "Free public space",
//                 "name" : "Small Square",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kdg6LYExWLk0EJeAZkQ",
//                 "region" : "Pichincha",
//                 "short_description" : "Formerly in the space of Plaza Chica, the building of the Bank of Loans"
//             },
//             "-Kdg7y9gW0Mc8Vpk6X7x" : {
//                 "address" : "El Panecillo Hill",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg7y42YVpJNjHJ0y_8%2FPanecillo%20cabecera%201.jpg?alt=media&token=cb360460-8524-4263-bacb-3b5ece16cefd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.228748, -78.518716",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg7y42YVpJNjHJ0y_8%2Fpanecillo%20logo.jpg?alt=media&token=12c2dc7f-2861-485e-a477-bacdd9a20557",
//                 "long_description" : "Free public space",
//                 "name" : "El Panecillo Hill",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kdg7y42YVpJNjHJ0y_8",
//                 "region" : "Pichincha",
//                 "short_description" : "The natural viewpoint that divides Quito in two: North and South"
//             },
//             "-KdgAf3_ccWMvua9A9TB" : {
//                 "address" : "Gran Colombia Ave. and Guayaquil",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgAeuoc5ttkpeMZPvX%2FCabecera%20SB.jpg?alt=media&token=dd05c16f-146f-4a72-adb6-dfc6071032b5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.21607824604139975, -78.50395023822784",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgAeuoc5ttkpeMZPvX%2Flogo%20sb.jpg?alt=media&token=635722ca-4fff-45f9-bf21-81ace664600e",
//                 "long_description" : "He was one of the most outstanding figures of American emancipation against Spain. He contributed to inspire and concretely determine the independence of present-day Bolivia, Colombia, Ecuador, Panama, Venezuela and the reorganization of Peru.",
//                 "name" : "Monument to Simon Bolivar",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KdgAeuoc5ttkpeMZPvX",
//                 "region" : "Pichincha",
//                 "short_description" : "Simón José Antonio de la Santísima Trinidad Bolívar Ponte y Palacios Blanco, better know as Simón Bolívar"
//             },
//             "-KdgFT9NS3uXSpKd8yYz" : {
//                 "address" : "Convento del Buen Pastor - Benigno Vela 731 y Av. Maldonado, sector La Recoleta",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.231095, -78.513330",
//                 "logo" : "",
//                 "long_description" : "Horarios de Visita: Lunes a viernes de 10h00 a 13h00 – 15h00 a 17h00; Jueves solo en la tarde. Entrada: $3 Adultos, $1,50 (niños, tercera edad y estudiantes con carnet)",
//                 "name" : "Convento del Buen Pastor",
//                 "pais" : "Ecuador",
//                 "phone" : "0998397714 - 2280616",
//                 "prodId" : "-KdgFT2TiriswcPjbqQA",
//                 "region" : "Pichincha",
//                 "short_description" : "Fundado por el famoso religioso y pintor quiteño fray Pedro Bedón"
//             },
//             "-KdgGdvtdK3-c2qV_c7N" : {
//                 "address" : "Iglesia de San Blas",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgGdrOLAYkGvSCMz6z%2FIglesia%20San%20Blas%20cabecera.jpg?alt=media&token=d93fb63b-e8b1-4e83-9c76-8706e101e0e6",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.228716, -78.513374",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgGdrOLAYkGvSCMz6z%2FIg%20San%20Blas%20logo.jpg?alt=media&token=3bfa0f9e-60f0-4093-9313-b2334851f10e",
//                 "long_description" : "no",
//                 "name" : "Iglesia de San Blas",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdgGdrOLAYkGvSCMz6z",
//                 "region" : "Pichincha",
//                 "short_description" : "En el límite norte del Quito Colonial, la parroquia más antigua de la ciudad"
//             },
//             "-KdgIM_5YPdEgvRdquea" : {
//                 "address" : "Santuario de Guápulo",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgIMVFSa7MeEhUA_yv%2FCabecera%20sdg.jpg?alt=media&token=6502c1f3-5b17-4213-a95c-e6a4adbb2fab",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.200288, -78.475402",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgIMVFSa7MeEhUA_yv%2FLogo%20sdg.jpg?alt=media&token=05e90b4e-5df5-48e6-87c2-978fb10ab668",
//                 "long_description" : "no",
//                 "name" : "Santuario de Guápulo",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdgIMVFSa7MeEhUA_yv",
//                 "region" : "Pichincha",
//                 "short_description" : "Un santuario en honor a la Virgen María en el camino a las tierras bajas de la amazonía"
//             },
//             "-KdgJLoYv5XsJPk-byBg" : {
//                 "address" : "Templo de la Dolorosa",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgJLihF6jKOafD4aPu%2Fcabecera%20idelad.jpg?alt=media&token=7ada9e43-e36b-4fcc-84fb-81f25403f536",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.185826, -78.496320",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgJLihF6jKOafD4aPu%2Flogo%20idelad.jpg?alt=media&token=2d7d3801-1718-4374-88c8-2aff4c415eeb",
//                 "long_description" : "no",
//                 "name" : "Templo Nacional de la Dolorosa",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "prodId" : "-KdgJLihF6jKOafD4aPu",
//                 "region" : "Pichincha",
//                 "short_description" : "El templo de los devotos del Colegio San Gabriel"
//             },
//             "-KdgvAQ6Dzb1i3YyzPB8" : {
//                 "address" : "El Panecillo Hil",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgvAKvJCyreqOZUjDZ%2Fvirgen_panecillo_quito%20cabecera.jpg?alt=media&token=80b7c38b-389d-40cb-a6ad-949dc11de327",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.228926, -78.518605",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgvAKvJCyreqOZUjDZ%2Fvirgen%20del%20panecillo%20logo.jpg?alt=media&token=3f3625bf-46c4-41ce-b640-5bce58c55830",
//                 "long_description" : "With its 30 meters of height, and 11 more if the base is added, it occupies the 58th place among the highest statues in the world, surpassing even the famous Christ Redeemer of Rio de Janeiro city. It is also the highest aluminum sculpture on the planet.",
//                 "name" : "Virgin of El Panecillo",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KdgvAKvJCyreqOZUjDZ",
//                 "region" : "Pichincha",
//                 "short_description" : "The Virgin of El Panecillo, also known as Virgin of Quito "
//             },
//             "-Kdh2UCQ8nBQdITdvZ0S" : {
//                 "address" : "Garcia Moreno St. between Espejo and Chile",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh2U7-9o7DnKw5nhf3%2FGranaderos%20tarqui%20cabecera.jpg?alt=media&token=8b119802-513e-4209-8316-e05498d7d815",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219801, -78.512511",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh2U7-9o7DnKw5nhf3%2FGranaderos%20tarqui%20logo.jpg?alt=media&token=12166a8c-b726-4974-8afa-63a25b027bc0",
//                 "long_description" : "The Presidential Escort Group Grenadiers of Tarqui, is a special cavalry unit of the Ecuadorian Army, which forms the honor guard of the Presidency of the Republic and shelters the Carondelet Palace in Quito, seat of the Government of the Republic of Ecuador.",
//                 "name" : "Grenadiers of Tarqui",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kdh2U7-9o7DnKw5nhf3",
//                 "region" : "Pichincha",
//                 "short_description" : "Presidencial Guard"
//             },
//             "-Kdh529DNxmiNGrk-eM0" : {
//                 "address" : "Morales St. between Maldonado y Garcia Moreno",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : "lpozo@quito-turismo.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh523OYQ2Fs4Ma96MG%2Fcalle%20la%20ronda%20cabecera.jpg?alt=media&token=6f2ad348-9e9d-42c9-8880-4bc6c69956a7",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.22443594756911092, -78.51377248764036",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh523OYQ2Fs4Ma96MG%2FCalle%20lo%20ronda%20logo.jpg?alt=media&token=fed09b97-ed86-477b-a564-ef72800f2406",
//                 "long_description" : "La Ronda is also a street that takes us to our indigenous past, and in those ancestral times was not called La Ronda, as the Spaniards named it or as we know it today, but it is assumed that its original name was \"El Chaquiñan\", that means path. It is presumed that this small street was already established and traced around 1480, when the Incas first arrived in Quito.",
//                 "name" : "La Ronda Street",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2 570 786",
//                 "prodId" : "-Kdh523OYQ2Fs4Ma96MG",
//                 "region" : "Pichincha",
//                 "short_description" : "It is a traditional street, associated with the bohemia and the art of Quito of yesteryear"
//             },
//             "-KdmFLWVUy7bExvomOU2" : {
//                 "address" : "Venezuela Street and Mejia",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmFLWVUy7bExvomOU2%2Faudio%2FFormer%20Military%20Circle%20Palace.ogg?alt=media&token=cadedd4e-09d2-4f9f-a4b1-ecccf79ee066",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "rrpp@circulomilitar.org ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmFLRPujMBf2jjree4%2FCabecera%20acm.jpg?alt=media&token=6d7d1b7e-79a4-441f-8946-35fba32261aa",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219215, -78.510611",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmFLRPujMBf2jjree4%2Flogo%20acm.jpg?alt=media&token=6479a1d5-87ee-4131-a370-9c859ba4f0c9",
//                 "long_description" : "It represents the neoclassical style that prevailed at the time and, along with other buildings of the same line, lay the foundations of a new type of architecture, which supported the beautification of the city of Quito compared to European capitals. Entry: free.",
//                 "name" : "Former Military Headquarters",
//                 "pais" : "Ecuador",
//                 "phone" : "02 257 0123",
//                 "prodId" : "-KdmFLRPujMBf2jjree4",
//                 "region" : "Pichincha",
//                 "short_description" : "One of the monumental constructions of the Historical Center of Quito ",
//                 "web" : "http://www.museosdefensa.gob.ec/index.php/historicos/antiguo-circulo-militar"
//             },
//             "-KdmHcMGvotwG7W33QxE" : {
//                 "address" : "Briceño Street and 10 de Agosto",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmHcMGvotwG7W33QxE%2Faudio%2FCENTRAL%20BANK%20OF%20ECUADOR.ogg?alt=media&token=460c9ba6-78de-4a7d-951e-8e5e0367ee78",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "contacto@bce.ec ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmHcHUFAqdGbeZVCss%2Fcabecera%20bc.jpg?alt=media&token=e3f2b16b-b508-41a8-92bc-21de674c44d9",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.21591195026414478, -78.50458860397339",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmHcHUFAqdGbeZVCss%2Flogo.jpg?alt=media&token=10038118-945d-4625-aee1-d791407ce3b2",
//                 "long_description" : "Year of construction: 1963 - 1968. International style (rationalist). Current use: State Office",
//                 "name" : "Central Bank of Ecuador",
//                 "pais" : "Ecuador",
//                 "phone" : "02 393 8600",
//                 "prodId" : "-KdmHcHUFAqdGbeZVCss",
//                 "region" : "Pichincha",
//                 "short_description" : "It was established with the mission of promoting the economic development of the country.",
//                 "web" : "https://www.bce.fin.ec"
//             },
//             "-KdmJaW2UE8FlqPorqSc" : {
//                 "address" : "Garcia Moreno Street and Sucre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmJaW2UE8FlqPorqSc%2Faudio%2FCornejo%20Cevallos%20House.ogg?alt=media&token=5a31a3f5-f63d-4524-a8b1-977f3fc2efe4",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmJaQdGc5rWtyHx2QL%2FCabecera.jpg?alt=media&token=06c11c88-b827-4cf4-8ed3-359f619e3702",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221204, -78.513533",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmJaQdGc5rWtyHx2QL%2Flogo.jpg?alt=media&token=efb70041-c169-4cb1-8e62-db473cc247a1",
//                 "long_description" : "In the decoration on the upper floor of the balconies windows and the interior doors: the recessed window is crowned by a naked cherub sitting on the key with his erect penis, and a garland falling on the sides of the outer frame.",
//                 "name" : "Cornejo Cevallos House",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KdmJaQdGc5rWtyHx2QL",
//                 "region" : "Pichincha",
//                 "short_description" : "In the middle of XVI century the land was occupied by the first Jesuits who arrived at the city",
//                 "web" : "."
//             },
//             "-Ke1d6LASRTBpJefXVXs" : {
//                 "address" : "Benalcazar Street and Chile",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1d6LASRTBpJefXVXs%2Faudio%2FVicePresident%20Palace.ogg?alt=media&token=488e23a5-31e8-4e9f-a3fb-8bddee07b7af",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "info@vicepresidencia.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1d6FQzFU9IUcnomhB%2Fcabecerapv.jpg?alt=media&token=943860d3-f7a3-48b8-813d-3b0aa491a44e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.218733, -78.512549",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1d6FQzFU9IUcnomhB%2Flogo.jpg?alt=media&token=d32108fc-58e8-40e2-bd75-60efc8f99c7b",
//                 "long_description" : "The original name of the building was the Palace of Communications (also for housing the telegraph offices), but would end up being popularly called the \"Post Office Palace\".",
//                 "name" : "Vicepresidency House",
//                 "pais" : "Ecuador",
//                 "phone" : "02 258 4574 - 02 258 4575",
//                 "prodId" : "-Ke1d6FQzFU9IUcnomhB",
//                 "region" : "Pichincha",
//                 "short_description" : "Offices and residence of the Vice-Presidency of the Republic",
//                 "web" : "http://www.vicepresidencia.gob.ec"
//             },
//             "-Ke1imS41oySYw-i8_tP" : {
//                 "address" : "Garcia Moreno Street and Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1imS41oySYw-i8_tP%2Faudio%2FLima%20Military%20Headquarters.ogg?alt=media&token=12ce0b00-f880-45c9-8a42-9f50c1fcbcdf",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1imM0v-usGd-WyIyH%2Fcabecera%20mdc.jpg?alt=media&token=4ffc0d39-c2c6-471e-b356-35db6d37e257",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220149, -78.512843",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1imM0v-usGd-WyIyH%2Flogo%20mdc.jpg?alt=media&token=8c25285f-1627-4af7-b540-4db8b24d3b26",
//                 "long_description" : "Visiting hours: Tuesday to Saturday from 09h00 to 17h30; Sunday 10h00 to 16h00. Entry: $1,50 Adults; $0,75 Students with ID; $0,50 Children from 5 to 11 years old, Elderly and Persons with Disabilities",
//                 "name" : "Real Barracks of Lima",
//                 "pais" : "Ecuador",
//                 "phone" : "02 395 2300 - ext. 15535 – 15528 - 15507",
//                 "prodId" : "-Ke1imM0v-usGd-WyIyH",
//                 "region" : "Pichincha",
//                 "short_description" : "Today is the Wax Museum, with the famous scene of the massacre of the heroes of independence",
//                 "web" : "http://www.museosquito.gob.ec/index.php/item/44-museo-alberto-mena-caamano"
//             },
//             "-Ke1kbLLOiE_nZlAD56b" : {
//                 "address" : "Simon Bolivar Street and Cuenca",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1kbLLOiE_nZlAD56b%2Faudio%2FGangotena%20House.ogg?alt=media&token=96f71159-a4dd-4e4b-a955-00a4e76c0f6a",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "info@casagangotena.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1kbFTwxyJqVpg-Dg5%2Fcabecera%20cg.jpg?alt=media&token=da3ca3a5-36d1-4e46-8f79-32ce71e5b828",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221288, -78.515417",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1kbFTwxyJqVpg-Dg5%2Flogo%20cg.jpg?alt=media&token=c29153ed-fadd-41b8-bb25-55bc6f540940",
//                 "long_description" : "Year construction: 1914, on the 16th century mansion. Eclectic style. Current use: boutique hotel. There are no guided tours on this site.",
//                 "name" : "Gangotena House",
//                 "pais" : "Ecuador",
//                 "phone" : "02 400 8000",
//                 "prodId" : "-Ke1kbFTwxyJqVpg-Dg5",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 }, {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Built on ancient Inca settlements",
//                 "web" : "www.casagangotena.com/es/"
//             },
//             "-Ke5nTjKvJuw8WzApcgs" : {
//                 "address" : "Guayaquil Street between Bolivar and Rocafuerte",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke5nTjKvJuw8WzApcgs%2Faudio%2FSanta%20Helena%20House.ogg?alt=media&token=6021248a-782b-4d60-8b7b-942528c3bdb7",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223402, -78.513165",
//                 "logo" : "",
//                 "long_description" : "Year construction: 17th century. Historic style (neoclassical). Current use: private. In this building there are no guided tours. The building is occupied by commercial stores and household.",
//                 "name" : "Santa Helena House",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-Ke5nTSUmDH8aSb84Hm2",
//                 "region" : "Pichincha",
//                 "short_description" : "Where love was born in the Marshal Sucre",
//                 "web" : ""
//             },
//             "-Ke6FLs3OnLdXohIp6i3" : {
//                 "address" : "Guayaquil Street and Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6FLs3OnLdXohIp6i3%2Faudio%2FLa%20Previsora%20Building.ogg?alt=media&token=f12949bc-429f-4610-bea9-3037dae6463e",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6FLkPi9t7TCbEJc9W%2FEdf%20La%20previsora%20cabecera.jpg?alt=media&token=d5b6eaa1-648d-4bd1-a2a2-335d5a6e97b2",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221190, -78.511353",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6FLkPi9t7TCbEJc9W%2Fedf%20la%20previsora%20logo.jpg?alt=media&token=13a48816-9a2d-4aa1-b777-7856aa71bd55",
//                 "long_description" : "With its eleven floors in the highest block, it is the first building, in height, of the city, and therefore represents an icon of the leap into modernity that Quito lived in the mid-twentieth century. Today, this building is unoccupied.",
//                 "name" : "La Previsora Building",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-Ke6FLkPi9t7TCbEJc9W",
//                 "region" : "Pichincha",
//                 "short_description" : "The first Ecuadorian \"skyscraper\"",
//                 "web" : ""
//             },
//             "-Ke6HMwODh0skly8LLi1" : {
//                 "address" : "Sucre Street and Garcia Moreno",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6HMwODh0skly8LLi1%2Faudio%2FFormer%20Central%20Bank%20of%20Ecuador.ogg?alt=media&token=f4efb0bf-9306-44a5-a59b-7a45d042276e",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "museo@bce.ec ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6HMpwX9sPak_0yjez%2Fcabecera%20mn.jpg?alt=media&token=6a366bc1-83da-44b9-b21e-3daaccf14905",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221175, -78.513841",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6HMpwX9sPak_0yjez%2Flogo%20abc.jpg?alt=media&token=23725bec-2fb1-4b88-b1eb-d962358f0048",
//                 "long_description" : "Visiting hours: Tuesday to Friday from 09h00 to 17h00; Saturday, Sunday and holidays from 10h00 to 16h00. Free entrance for Ecuadorian tourists. Foreign tourists $1 Students / Seniors: $ 0.50. Children: $ 0.25",
//                 "name" : "Former Central Bank of Ecuador",
//                 "pais" : "Ecuador",
//                 "phone" : "02 258 9284",
//                 "prodId" : "-Ke6HMpwX9sPak_0yjez",
//                 "region" : "Pichincha",
//                 "short_description" : "Numismatic Museum",
//                 "web" : "www.bce.fin.ec/index.php/museo-numismatico1"
//             },
//             "-Ke9CvGIt9DcAv-0dfXO" : {
//                 "address" : "Benalcazar St. and Olmedo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9CvGIt9DcAv-0dfXO%2Faudio%2FBenalc%C3%A1zar%20House.ogg?alt=media&token=b6de1a12-7669-4e34-a7fb-9d51b77be74a",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9CulgFHCumS0C8Sqj%2Fcabecera%20mcdeb.jpg?alt=media&token=21d8707e-cc76-4af8-b01f-cde90161cf7b",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.217719, -78.511754",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9CulgFHCumS0C8Sqj%2Flogo%20mcdeb.jpg?alt=media&token=329c4a8e-22c3-4dee-908c-15d95105c293",
//                 "long_description" : "The mansion is one of the best examples of Spanish colonial architecture in the Andean region, with smooth walls and with no ornaments that rise on skirtings of stones that were used in the aboriginal constructions that existed previously.",
//                 "name" : "Benalcazar House",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Ke9CulgFHCumS0C8Sqj",
//                 "region" : "Pichincha",
//                 "short_description" : "Sebastian de Benalcazar did not live in this house",
//                 "web" : "."
//             },
//             "-Ke9FG0MX32C72rt3ECa" : {
//                 "address" : "Venezuela St. and Mejía",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9FG0MX32C72rt3ECa%2Faudio%2FEguiguren%20Mansion%20(former%20Chancellery).ogg?alt=media&token=8bd244db-76a0-4c01-b21c-e1d3a66fb53b",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9FFpk2wkJqJB_JS90%2FMansi%C3%B3n%20Eguiguren%20cabecera.jpg?alt=media&token=f614dcee-d051-463d-b994-d18dca3c7686",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219370, -78.511043",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9FFpk2wkJqJB_JS90%2FMansi%C3%B3n%20Eguiguren%20logo.jpg?alt=media&token=1d1929c3-3d8d-4d39-9c15-d8c0cd119d7a",
//                 "long_description" : "The land belonged, for centuries, to the Factory of the Cathedral, the financial arm of the Diocese of Quito, in charge of the administration of its funds and the construction of associated buildings and temples. The house responds, for the most part, to the art deco style, characterized by straight lines and the use of geometric figures.",
//                 "name" : "Eguiguren Mansion ",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Ke9FFpk2wkJqJB_JS90",
//                 "region" : "Pichincha",
//                 "short_description" : "Former Chancellery",
//                 "web" : "."
//             },
//             "-Ke9H_SrlknE2AeXhldb" : {
//                 "address" : "Colon Avenue and Jose Maria Urbina",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9H_SrlknE2AeXhldb%2Faudio%2FVilla%20Mantilla.ogg?alt=media&token=7e1912b3-3a58-49f3-9c2f-8b46676a5a74",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "fundinnoed@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9H_CPWccqDZ1DTmQd%2Fcabecera%20vm.jpg?alt=media&token=64dc501c-82e1-41fd-96f3-d33550e4f9a0",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.201740, -78.487641",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9H_CPWccqDZ1DTmQd%2Flogovm.jpg?alt=media&token=2184862f-536c-4957-8f59-f8507753df96",
//                 "long_description" : "One of the few mansions that can still be seen on this avenue. This remain Quito's bourgeois architecture was built as a residence for the Mantilla-Ortega family, owners of the celebrated El Comercio newspaper. Today, the building is occupied by the Foundation Innovation in Education.",
//                 "name" : "Mantilla Villa",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 4035",
//                 "prodId" : "-Ke9H_CPWccqDZ1DTmQd",
//                 "region" : "Pichincha",
//                 "short_description" : "House of great entrepreneurs.",
//                 "web" : ""
//             },
//             "-Ke9J-ZmSupphcfoT9VU" : {
//                 "address" : "6 de Diciembre Avenue and Wilson",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9J-ZmSupphcfoT9VU%2Faudio%2FMansion%20Plaza%20Lasso.ogg?alt=media&token=f7acb29c-628d-4736-8026-03c6783e5252",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "gestioncultural@fce.com.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9J-N5rCJPS7Jv7Zen%2Fcabecera%20mplz%20lasso.jpg?alt=media&token=2e9cfc35-e648-4b98-97e7-27c81c24f3b5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.204821, -78.490498",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9J-N5rCJPS7Jv7Zen%2Flogo%20mpl.jpg?alt=media&token=63c7520b-6c11-4316-b05d-0caab82af196",
//                 "long_description" : "Year construction: 1940. Historic style (neocolonial). In this house the Diplomatic Academy was installed at the beginning of the 21st century, and later it was loaned to the Union of Nations of South America (UNASUR) to install the temporary headquarters of the Permanent Secretariat of this organization. Current use: Carlos Fuentes Cultural Center that seeks to promote culture through cultural expressions.",
//                 "name" : "Plaza Lasso Mansion",
//                 "pais" : "Ecuador",
//                 "phone" : "02 254 9817 - 02 900 6653",
//                 "prodId" : "-Ke9J-N5rCJPS7Jv7Zen",
//                 "region" : "Pichincha",
//                 "short_description" : "House of presidents",
//                 "web" : "http://www.fce.com.ec"
//             },
//             "-Ke9MPL6W8qhM0Sf0zQU" : {
//                 "address" : "Plaza Street and 18 de Septiembre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9MPL6W8qhM0Sf0zQU%2Faudio%2FThe%20National%20Symphony%20Orchestra%20Mansion.ogg?alt=media&token=bc149b03-7437-445b-8e20-e6b7763d86d3",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "orquesta@sinfonicanacional.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9MP9lmxSIq35HsmYK%2Fcabecera%20osn.jpg?alt=media&token=7b93972a-fd31-4894-b066-0b7c08eccbb4",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.208951, -78.494484",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9MP9lmxSIq35HsmYK%2Flogo%20osn.jpg?alt=media&token=c850f277-1783-4a57-a95b-063ff3a7e025",
//                 "long_description" : "Year construction: 1909. Historic style (neoclassical). Current use: cultural center, offices. In this site there are no guided tours",
//                 "name" : "Mansion of the National Symphony Orchestra",
//                 "pais" : "Ecuador",
//                 "phone" : "02 382 2642",
//                 "prodId" : "-Ke9MP9lmxSIq35HsmYK",
//                 "region" : "Pichincha",
//                 "short_description" : "The typical example of mansions and palaces that were established in La Mariscal neighborhood at the beginning of 20th century",
//                 "web" : "http://www.sinfonicanacional.gob.ec/site/"
//             },
//             "-Ke9ZmaCCv9dicGDkPhW" : {
//                 "address" : "Juan León Mera N 24-67 y J.Pinto",
//                 "audio" : "",
//                 "cat" : "-Ke9YHyXR3WIgI46zuEU",
//                 "city" : "Quito",
//                 "email" : "info@luistipan-ecuador.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9ZmMvTPtyyv3NeFWt%2Fcabecera%20lt?alt=media&token=44a16a59-46de-4646-b3c8-a2af4449b292",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9ZmMvTPtyyv3NeFWt%2Fchimbo1.jpg?alt=media&token=a75daf62-a6d9-4e27-af1e-eafc7877bd9a",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9ZmMvTPtyyv3NeFWt%2Fblue-footed-booby-male.jpg?alt=media&token=a252f8bd-2429-4046-86c8-fdde9bf225bd",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.20224350416094528, -78.49186956882477",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9ZmMvTPtyyv3NeFWt%2FLOGO%203.jpg?alt=media&token=38795bb6-cd1f-4434-ba76-236887ecb690",
//                 "long_description" : "Se organizan cruceros a GALÁPAGOS, Escalada a: Cotopaxi, Chimborazo, Iliniza, Cayambe, etc. Tours a la Amazonía, recorridos diarios al: Cotopaxi, Mindo, Otavalo, Baños, etc. Programas de Español, Trabajo Voluntario, Programas en Ecuador: 12 días, 18 días, y más- INFORMACIÓN GRATUITA !!!",
//                 "name" : "LUIS TIPAN TRAVEL",
//                 "pais" : "Ecuador",
//                 "phone" : "022557453",
//                 "prodId" : "-Ke9ZmMvTPtyyv3NeFWt",
//                 "region" : "Pichincha",
//                 "short_description" : "Galápagos, Selva, Tours diarios",
//                 "web" : "www.luistipan-ecuador.com"
//             },
//             "-KeB1V5Lr_5G9yvp4hli" : {
//                 "address" : "Bolivar Street and Garcia Moreno",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeB1V5Lr_5G9yvp4hli%2Faudio%2FAgricultural%20and%20Industrial%20Credit%20Company.ogg?alt=media&token=a0d289e8-b3c8-42b7-8731-42da99710461",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeB1UxtNilnmGKob1MR%2FBanco%20hipotecario%20Cabecera.jpg?alt=media&token=f01abcc6-5490-4887-96b4-c15ae1e591de",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221948, -78.514169",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeB1UxtNilnmGKob1MR%2FArchivo%20hist%C3%ADco%20B.%20Central%20logo.jpg?alt=media&token=d3dd03ac-6a5c-4133-9d63-120ee876a243",
//                 "long_description" : "Year of construction: 1920. Art Nouveau style. The building is currently occupied by the Ministry of Security. ",
//                 "name" : "Agricultural and Industrial Credit Company",
//                 "pais" : "Ecuador",
//                 "phone" : "02 294 6100 - 02 228 7478",
//                 "prodId" : "-KeB1UxtNilnmGKob1MR",
//                 "region" : "Pichincha",
//                 "short_description" : "Ministry of Security",
//                 "web" : "http://www.seguridad.gob.ec"
//             },
//             "-KeBF2rYnYIjjkdUR7lp" : {
//                 "address" : "Cuenca Street and Bolívar",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2rYnYIjjkdUR7lp%2Faudio%2FAlabado%20Museum.ogg?alt=media&token=9374e750-1ece-47cc-b9fb-1b02d31b995e",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "educacion@alabado.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2Fmuseo%20del%20Alabado%20cabecera.jpg?alt=media&token=0fbbef55-e0d4-4262-8945-7c9f3bbc5fdb",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2FAlabado%203.jpg?alt=media&token=c20eb4dc-a3f9-4042-a87f-439b5852e9c7",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2FAlabado%202.jpg?alt=media&token=36bc3559-296f-40c8-8906-ca62ed3ae69f",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2Falabado%201.jpg?alt=media&token=9e0bc210-703e-4eaf-ac93-5860857d2dbd",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2Falabado%204.jpg?alt=media&token=1e5ed423-fa28-44fb-a7d6-7f14ede7a7f3",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221270, -78.515823",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2FMuseo%20del%20Alabado%20logo.jpg?alt=media&token=ae8171b7-e970-4225-b391-607952c4f6f9",
//                 "long_description" : "Visiting hours: Monday, Tuesday, Thursday, Friday, Saturday, Sunday and holidays from 09h00 to 17h30. Wednesday from 13h30 to 17h30. Entry: Adults: $ 4,00; Children under 12 and adults over 60 $1,00; Students with ID $1,50",
//                 "name" : "Alabado House Museum",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 0772",
//                 "prodId" : "-KeBF2f5yXMKtzwpvSy4",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Museum of Pre-Columbian Art",
//                 "web" : "http://www.alabado.org"
//             },
//             "-KeC298-agDNPjcDT7lI" : {
//                 "address" : "Los Ríos Street and Gandara",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC298-agDNPjcDT7lI%2Faudio%2FCordovez%20Palace.ogg?alt=media&token=a0043ed6-08d7-4fa1-a974-f3fb994326c5",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "mansion@mansiondelangel.com.ec ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC28iUj0atLyi09l9F%2Fcabecera%20mc.jpg?alt=media&token=a10f26a0-2511-4fe4-bcc5-248d5a1da2ff",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215995, -78.500421",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC28iUj0atLyi09l9F%2Flogo.jpg?alt=media&token=400db726-2907-417f-a379-8c570b443eb9",
//                 "long_description" : "It is a building of neoclassical historicist style, that was constructed by the architect Giacomo Radincocini in the year of 1908. At the moment it is used like Hotel Boutique.",
//                 "name" : "Cordovez Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "02 255 7721",
//                 "prodId" : "-KeC28iUj0atLyi09l9F",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 }, {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Construction inspired by the Melgar Palace of Lima",
//                 "web" : "http://www.mansiondelangel.com.ec/en-us/home.aspx"
//             },
//             "-KeC3jZeG9dNwAte5dy1" : {
//                 "address" : "Luis Vargas Torres Street and Francisco de Caldas",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC3jZeG9dNwAte5dy1%2Faudio%2FLand%C3%A1zuri%20Palace.ogg?alt=media&token=a8d938e7-3d95-4647-88fe-bfd3bd16bf01",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC3jC2uvdI78K3IOqd%2Fcabecera%20pl.jpg?alt=media&token=f0e964e4-0efe-4752-a07d-ce52317f98fd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215364, -78.506365",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC3jC2uvdI78K3IOqd%2Flogo%20pl.jpg?alt=media&token=406c4085-ce31-45db-92e8-1ca1363a1faf",
//                 "long_description" : "Year of construction: 1930. Historic style (neoclassical). Current use: housing and commerce",
//                 "name" : "Landazuri Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KeC3jC2uvdI78K3IOqd",
//                 "region" : "Pichincha",
//                 "short_description" : "From its construction to the present time, it is used as housing",
//                 "web" : ""
//             },
//             "-KeC4d0Q0CieAenu9Y8D" : {
//                 "address" : "12 de Octubre Avenue and Baquerizo Moreno",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC4d0Q0CieAenu9Y8D%2Faudio%2FLarrea%20Castle.ogg?alt=media&token=462d6f72-f534-4780-873d-ae413e09e4ae",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "torresdelcastilloec@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC4clsp-qPe-_VQeVo%2Fcabecera%20ca.jpg?alt=media&token=527489f3-3cab-4b36-a949-3deed7661ef1",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.205474, -78.486463",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC4clsp-qPe-_VQeVo%2Flogo%20ca.jpg?alt=media&token=277e7497-6c5d-4cc8-944a-5312efc0484e",
//                 "long_description" : "Year construction: 1939. Historic style (neo-Gothic). Current use: cultural center of the Torres del Castillo business complex.",
//                 "name" : "Larrea Chateau",
//                 "pais" : "Ecuador",
//                 "phone" : "02 290 2764 - 02 290 2765 - 0988436764",
//                 "prodId" : "-KeC4clsp-qPe-_VQeVo",
//                 "region" : "Pichincha",
//                 "short_description" : "Heritage of the city since the 1980s",
//                 "web" : "http://www.valarezonoboa.com"
//             },
//             "-KeC5uB5DHK-WuospMDh" : {
//                 "address" : "6 de Diciembre Avenue and Clemente Ponce",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC5uB5DHK-WuospMDh%2Faudio%2FLasso%20Villa%20.ogg?alt=media&token=80c30d21-9a04-4855-9204-20d95f7aabdd",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "libia.rivas@asambleanacional.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC5u-x_o_-4EEfXXWb%2Fcabecera%20vl.jpg?alt=media&token=2393691a-e733-44a3-9e2b-4448c1c2b066",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.211852, -78.499200",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC5u-x_o_-4EEfXXWb%2Flogo%20vl.jpg?alt=media&token=c04f430c-13ee-44c2-8b46-53b233bbe66c",
//                 "long_description" : "Year of construction: between 1918 and 1920. Art-nouveau style. Current use: House of Protocol of the National Assembly",
//                 "name" : "Lasso-Conto Villa",
//                 "pais" : "Ecuador",
//                 "phone" : "02 399 1000",
//                 "prodId" : "-KeC5u-x_o_-4EEfXXWb",
//                 "region" : "Pichincha",
//                 "short_description" : "Sold by its original owner, at 3.8 million sucres (today: $ 152)",
//                 "web" : "http://www.asambleanacional.gob.ec/es"
//             },
//             "-KeFyqpF_w5rdJxepWDp" : {
//                 "address" : "Tarqui Avenue, between 6 de Diciembre and Gran Colombia",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFyqpF_w5rdJxepWDp%2Faudio%2FFreile%20-%20Larrea%20Palace%20.ogg?alt=media&token=188221cb-1bd7-4765-9180-925fd5c184cd",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "embassy.quito@mfa.gov.eg",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFyq_Po6SWaQa8KvG6%2Fcabecera%20fl.jpg?alt=media&token=e335c486-ef84-4115-af5f-a3f75c5f7914",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.211603, -78.497866",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFyq_Po6SWaQa8KvG6%2Flogo%20pfl.jpg?alt=media&token=4b15a24a-70f9-4a5b-a032-07471b673ff5",
//                 "long_description" : "Year construction: 1944. Historic style (neo-Renaissance). The Tudor style building, dating from the 16th century in England, also features Italian, Flemish and German Gothic and Renaissance details.",
//                 "name" : "Freile-Larrea Mansion",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 5240",
//                 "prodId" : "-KeFyq_Po6SWaQa8KvG6",
//                 "region" : "Pichincha",
//                 "short_description" : "Currently the Egypt Embassy",
//                 "web" : "https://www.embassypages.com/embajada8517/"
//             },
//             "-KeFzws4ZiNskYndMKbW" : {
//                 "address" : "Gran Colombia Avenue and Briceño",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFzws4ZiNskYndMKbW%2Faudio%2FArteta%20House%20.ogg?alt=media&token=5d09f70f-4c2d-4137-84a5-84f12603ea98",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "dirmovccss@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFzwiFly2M0KCqIE4g%2Fcabecera%20dir%20FF%20AA.jpg?alt=media&token=92797350-f956-4929-b72d-c96593c72045",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.216761, -78.504506",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFzwiFly2M0KCqIE4g%2FLOGO%20dir%20FF%20AA.jpg?alt=media&token=e1481ed7-3190-487b-9e32-808de2da5927",
//                 "long_description" : "Year construction: 1931. Neoclassical style. Current use: Armed Forces Mobilization Directorate",
//                 "name" : "Arteta House",
//                 "pais" : "Ecuador",
//                 "phone" : "02 297 6800",
//                 "prodId" : "-KeFzwiFly2M0KCqIE4g",
//                 "region" : "Pichincha",
//                 "short_description" : "Considered the largest private residence of the city at the beginning of the 20th century",
//                 "web" : "http://www.dirmov.mil.ec"
//             },
//             "-KePbjitW6oQfhFdXJ6a" : {
//                 "address" : "Calle García Moreno y Sucre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePbjitW6oQfhFdXJ6a%2Faudio%2FGangotena%20Posse%20House%20.ogg?alt=media&token=20a7cd34-f52a-47d2-bbd9-1e0c573b1c5a",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePbjVxHDtKYoKe6dsb%2Fcebecera%20cgp.jpg?alt=media&token=5c34c273-d4e2-4bcd-9967-570ff6b8892b",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221398, -78.513660",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePbjVxHDtKYoKe6dsb%2Flogo%20cgp.jpg?alt=media&token=29cd0cfd-9c00-4a82-a6ec-103080794367",
//                 "long_description" : "Año de construcción: 1921. Estilo ecléctico. Uso actual: comercial y administrativo",
//                 "name" : "Casa Gangotena Posse",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KePbjVxHDtKYoKe6dsb",
//                 "region" : "Pichincha",
//                 "short_description" : "Por mucho tiempo se la conoció como La Casa del Regalo, debido a un letrero de cerámica que se encuentra al ingreso del local esquinero.",
//                 "web" : "."
//             },
//             "-KePdH7gOYVeZv5ve2FF" : {
//                 "address" : "Guayaquil Street and Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePdH7gOYVeZv5ve2FF%2Faudio%2FChiriboga%20Palace.ogg?alt=media&token=d598b30c-cb81-44b4-aa82-21355ab1b61c",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePdGuNWJXIMJeuZWbU%2FPalacio%20Chiriboga%20cabecera.jpg?alt=media&token=209b7973-7626-406a-bf68-c1970a5e4cf3",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221177, -78.511189",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePdGuNWJXIMJeuZWbU%2FPalacio%20Chiriboga%20logo.jpg?alt=media&token=c71e8850-b5eb-4688-8f0e-7f00848f39bb",
//                 "long_description" : "Year of construction: 1936. Eclectic style, highlighting the neo-Renaissance. Current use: housing and commerce",
//                 "name" : "Chiriboga Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KePdGuNWJXIMJeuZWbU",
//                 "region" : "Pichincha",
//                 "short_description" : "One of the main references of its current in the country.",
//                 "web" : ""
//             },
//             "-KePf6_W1P81w_b24vOX" : {
//                 "address" : "6 de diciembre Avenue and Roca",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePf6_W1P81w_b24vOX%2Faudio%2FPalace%20of%20the%20Alhambra.ogg?alt=media&token=17492bc5-c471-4989-bae7-b41e601bb9c2",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "periodista.anh@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePf6RHxG30yoobQf4L%2Fcabecera%20pa.jpg?alt=media&token=78eb674b-5e24-454e-86d2-fcf1ae7d7a6a",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.206655, -78.493124",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePf6RHxG30yoobQf4L%2Flogo%20pa.jpg?alt=media&token=fd82b067-7b4d-4c48-baca-fef962d254f0",
//                 "long_description" : "Year Construction: 1928. The palace owes its popular name of La Alhambra to the Neomudéjar historicist style, which the Quito imaginary sees as a reflection of the famous homonymous palatial set in Granada, Spain. Today the building is occupied by the National History Academy which has a public library and is open for visits from Monday to Friday from 08h30 to 13h00 and from 13h30 to 16h30.",
//                 "name" : "La Alhambra Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "02 290 7433",
//                 "prodId" : "-KePf6RHxG30yoobQf4L",
//                 "region" : "Pichincha",
//                 "short_description" : "This building has suffered serious damage to its structure and has been restored.",
//                 "web" : "http://www.academianacionaldehistoria.org.ec"
//             },
//             "-KePkyBOPAOWu5ohJeTI" : {
//                 "address" : "Gran Colombia Avenue and Julio Castro",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePkyBOPAOWu5ohJeTI%2Faudio%2FSamaniego%20Palace%20(Capitol%20Theater).ogg?alt=media&token=a82df428-ff30-4d03-8776-070ea47b8880",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "serviciosciudadanos@quito.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePkxz0n5E078HK76oa%2Fcabecera%20tc.jpg?alt=media&token=1e99fb78-45b6-4466-87fc-b3104362d786",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215565, -78.501531",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePkxz0n5E078HK76oa%2Flogo%20tc.jpg?alt=media&token=62520b67-448e-4505-9525-44df385a9a95",
//                 "long_description" : "The Samaniego Palace became a theater in 1933 according to the design of Antonino Russo, one of the foreign architects who defined the urban landscape of Quito in the 1930's. The theater is currently run by the Municipality's Culture Secretariat.",
//                 "name" : "Samaniego Palace (Capitol Theatre)",
//                 "pais" : "Ecuador",
//                 "phone" : "02 395 2300",
//                 "prodId" : "-KePkxz0n5E078HK76oa",
//                 "region" : "Pichincha",
//                 "short_description" : "Old bullring",
//                 "web" : "http://www.quito.gob.ec/index.php/secretarias/secretaria-de-cultura"
//             },
//             "-KePnF3gL0Gh5Ufb-Ds_" : {
//                 "address" : "Garcia Moreno Street, between Sucre and Bolivar",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePnF3gL0Gh5Ufb-Ds_%2Faudio%2FUrrutia-Barba%E2%80%99s%20House%20Museum.ogg?alt=media&token=0a7d6238-faa1-4ea9-acaa-5dec4e0e5fec",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "cmmau@fmdj.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePnEgBUov3ReeVTaO5%2Fcabecera%20cmau.jpg?alt=media&token=6888e7ea-a32f-4a6b-878b-3707c831f4c5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221602, -78.513914",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePnEgBUov3ReeVTaO5%2Flogo%20cnau.jpg?alt=media&token=b9437c57-6021-48a9-9eb7-0bc034c72486",
//                 "long_description" : "Visiting hours: Tuesday to Saturday from 10h00 to 18h00, Sundays from 09h30 to 17h00.",
//                 "name" : "Urrutia Barba House Museum",
//                 "pais" : "Ecuador",
//                 "phone" : "02 258 0103 - 02 258 4174",
//                 "prodId" : "-KePnEgBUov3ReeVTaO5",
//                 "region" : "Pichincha",
//                 "short_description" : "It was the home of Maria Augusta Urrutia, philanthropist aristocrat and patron of art",
//                 "web" : "http://www.quitoadventure.com/leisure-ecuador/tourist-attractions-quito/museums/house-museum-urrutia.html"
//             },
//             "-KePquB8jR1wd1WHHfaK" : {
//                 "address" : "10 de Agosto Avenue and Colón",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePquB8jR1wd1WHHfaK%2Faudio%2FLa%20Circasiana%20Palace.ogg?alt=media&token=f390a663-ea7d-479d-ace7-aa78ca196c7b",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "secretariainpc@inpc.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePqtgVGjdw0EdrocVE%2Fcabecera%20padelac.jpg?alt=media&token=0d8a92ef-9c4c-47da-b18f-cc23e06faedf",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.198094, -78.496940",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePqtgVGjdw0EdrocVE%2Flogo%20pdelac.jpg?alt=media&token=38a3fb2c-bee9-45a5-a177-0d9a4abf970d",
//                 "long_description" : "Currently, the Palace and its gardens belong to the Municipality of Quito, which bought the place to the Jijón-Caamaño family in the 1990s, loaning it to the National Institute of Cultural Heritage, which restored it meticulously and now uses it as its headquarters.",
//                 "name" : "La Circasiana Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 7927",
//                 "prodId" : "-KePqtgVGjdw0EdrocVE",
//                 "region" : "Pichincha",
//                 "short_description" : "It constitutes the greater symbol of the opulence and the power that the aristocracy of Quito had at the beginning of twentieth century",
//                 "web" : "http://www.inpc.gob.ec"
//             },
//             "-KeU6YtUp9xAWsOBi2W9" : {
//                 "address" : "6 de Diciembre Avenue and Patria",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU6YtUp9xAWsOBi2W9%2Faudio%2FBenjam%C3%ADn%20Carri%C3%B3n%20Palace%20(House%20of%20Ecuadorian%20Culture).ogg?alt=media&token=6a680709-2623-4c6b-99b6-32012190be93",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "info@cce.org.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU6YewBAqtqvahcM-G%2Fcabecera%20eadlcdlac.jpg?alt=media&token=ddcf33cb-7158-4349-8a19-89be1cd1aa67",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.209810, -78.496484",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU6YewBAqtqvahcM-G%2Flogo%20eadlcdlac.jpg?alt=media&token=4b54e6cc-b2e1-4220-91dd-4b74c4cb3c46",
//                 "long_description" : "The first president of the House of Culture, Benjamín Carrión, obtains the necessary funds from the president of the Republic José María Velasco Ibarra, and orders the construction of a building of a palatial character for these purposes. Today, the building is occupied by the offices of the House of Culture and exhibition halls.",
//                 "name" : "Benjamin Carrion Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 0967",
//                 "prodId" : "-KeU6YewBAqtqvahcM-G",
//                 "region" : "Pichincha",
//                 "short_description" : "Ecuadorian Culture House",
//                 "web" : "http://www.casadelacultura.gob.ec"
//             },
//             "-KeU7pDjGB6G02MqwjID" : {
//                 "address" : "Chile Street and Guayaquil",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU7pDjGB6G02MqwjID%2Faudio%2FGUERRERO%20MORA%20BUILDING.ogg?alt=media&token=9b6755db-1135-4893-8ed3-f983937a3434",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU7noTp-r6AUwUiJ0H%2Fcabecera%20egm.jpg?alt=media&token=d700b710-c6a2-4e81-9874-efb7ff48e21f",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220291, -78.510925",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU7noTp-r6AUwUiJ0H%2Flog%20egm.jpg?alt=media&token=0e88d588-4abb-4717-a113-ca8f05cc0842",
//                 "long_description" : "This was one of the modern buildings constructed in the historic center before the protection ordinance established dimensional and site restrictions. Currently, the building is used for commerce.",
//                 "name" : "Guerrero Mora Building",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KeU7noTp-r6AUwUiJ0H",
//                 "region" : "Pichincha",
//                 "short_description" : "The legendary House 1028",
//                 "web" : ""
//             },
//             "-KeUA2oxJKi_x-r-9ooo" : {
//                 "address" : "Guayaquil Street and Rocafuerte",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUA2oxJKi_x-r-9ooo%2Faudio%2FGARC%C3%8DA%20MORENO%20HOUSE%20%20.ogg?alt=media&token=9adb41db-3ed5-43d0-ac75-4c73d5e59b0e",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUA2bqfSLLmylid2Hj%2Fcabecera%20cdegm.jpg?alt=media&token=de598c0a-7e4f-4302-982e-710f87e48022",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223742, -78.513360",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUA2bqfSLLmylid2Hj%2Flogo%20cdegm.jpg?alt=media&token=095485ca-6df1-4522-9e0f-65e83b33732e",
//                 "long_description" : "Garcia Moreno had moved to the unfinished house in 1874 and lived a short time in it, before being assassinated in August of 1875 . Currently the building is in remodeling by the municipality.",
//                 "name" : "Garcia Moreno House",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KeUA2bqfSLLmylid2Hj",
//                 "region" : "Pichincha",
//                 "short_description" : "In the year 1870, President Gabriel Garcia Moreno bought the corner land where the house is located.",
//                 "web" : ""
//             },
//             "-KeUCqKWLVSMMz9qtTeX" : {
//                 "address" : "Garcia Moreno and Galapagos",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUCqKWLVSMMz9qtTeX%2Faudio%2FCASA%20DE%20LA%20PE%C3%91A.ogg?alt=media&token=eb0ef450-e5a8-42e1-a48a-35d3349b567f",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUCq93R80A78tjoJMd%2Fcabecera%20cdelap.jpg?alt=media&token=dbf8b628-1106-42e4-9e4f-d048eb925cab",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215424, -78.508804",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUCq93R80A78tjoJMd%2Flogo%20cdelap.jpg?alt=media&token=30508fe4-8403-4552-a7b5-1bc511679644",
//                 "long_description" : "The house is actually on a single floor, but rises several meters above the street level because it is on a large closed solid base, which is nothing more than the \"peña\" (hence its name), a result of the exposed natural cangagua terrain, with a slight slope for greater security of the building.",
//                 "name" : "De La Peña House",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KeUCq93R80A78tjoJMd",
//                 "region" : "Pichincha",
//                 "short_description" : "If this house would talk ... how many stories would it tell us ...",
//                 "web" : ""
//             },
//             "-KeUFtjGFLbhZzAu8hHS" : {
//                 "address" : "Mariano Calvache and Lorenzo Chavez",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUFtjGFLbhZzAu8hHS%2Faudio%2FGUAYASAM%C3%8DN%20HOUSE%20AND%20FOUNDATION.ogg?alt=media&token=fab94081-a200-4aee-bd23-65bc0a33748a",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "secretariainfo@fundacionguayasamin.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUFtPVOMe64RvvQsJP%2Fcabecera%20fg.jpg?alt=media&token=3a94340d-9925-4f62-8d9e-236bcb0460e4",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.190100, -78.469231",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUFtPVOMe64RvvQsJP%2Flogo%20fg.jpg?alt=media&token=2e0771af-99a5-4952-aaf4-c020ab6afa02",
//                 "long_description" : "Visiting hours: Every day, from 10h00 to 17h00. Closed: Regional and national holidays. Admission: Adults $ 8,00; Students, Seniors, Persons with Disabilities $ 4,00. Children up to 12 years old Free. Sunday free admission for Ecuadorian visitors.",
//                 "name" : "Guayasamin House and Foundation",
//                 "pais" : "Ecuador",
//                 "phone" : "02 244 6455 – 02 245 2938 – 02 246 5266",
//                 "prodId" : "-KeUFtPVOMe64RvvQsJP",
//                 "region" : "Pichincha",
//                 "short_description" : "Tal como la quiso el artista y donde hoy, descansan sus restos.",
//                 "web" : "http://www.capilladelhombre.com/"
//             },
//             "-KftUaGf02igGlcpfPKx" : {
//                 "address" : "Calle Gonsalo Vega y Bolaños",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.214287, -78.518232",
//                 "logo" : "",
//                 "long_description" : "desde el siglo XIX se ordenó que en Quito se levantaran panteones tras los conventos de El Tejar y la Recoleta de San Diego. Ambos lugares, en aquellos años, estaban en las afueras de la ciudad. Antes de la construcción de estos espacios, los cadáveres se sepultaban en los conventos o se colocaban en las fachadas de las iglesias.",
//                 "name" : "Cementerio del Tejar",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KftU_s9dcadf4gNtVp3",
//                 "region" : "Pichincha",
//                 "short_description" : "Uno de los cementerios más antiguos de la ciudad",
//                 "web" : "."
//             },
//             "-KftXqinZBPiYsQ8UYoH" : {
//                 "address" : "Garcia Moreno Street and Rocafuerte",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftXqinZBPiYsQ8UYoH%2Faudio%2FSan%20Juan%20de%20Dios%20Hospital%20-%20City%20Museum.ogg?alt=media&token=07a8f5d7-c1b0-4fe9-8841-4423004f6bfb",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "diego.palacios@fmcquito.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftXqBiyO-CfyQSFG1O%2Fcabecera%20mdlc.jpg?alt=media&token=d77d565c-a216-4ff2-afd8-2759a0fdfd26",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223060, -78.515149",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftXqBiyO-CfyQSFG1O%2Flogo%20mdlc.jpg?alt=media&token=7a860711-b193-4dee-8555-efe7451251c9",
//                 "long_description" : "Visiting hours: Tuesday to Sunday, from 09h30 to 17h30 (last admission at 16h30). Free entry on the last Saturday of each month. Entry: Adults: $ 3,00; Students with ID (over 12 years old): $ 2,00; Seniors (over 65): $ 1,00; Children: $ 1,00; Tours in other languages: $ 4,00; People with disabilities: free; Infants 0 to 3 years: free.",
//                 "name" : "City Museum - San Juan de Dios Hospital",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 3883",
//                 "prodId" : "-KftXqBiyO-CfyQSFG1O",
//                 "region" : "Pichincha",
//                 "short_description" : "It was the first hospital in the city and was active for more than 400 years.",
//                 "web" : "http://www.museociudadquito.gob.ec"
//             },
//             "-KftZE0DFYBWL5PVrnQe" : {
//                 "address" : "Venezuela Street and Sucre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftZE0DFYBWL5PVrnQe%2Faudio%2FSucre%E2%80%99s%20House%20Museum.ogg?alt=media&token=31eb80c3-f2d7-4b95-98dc-e2d34ac6e00c",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftZDsP3wNhca8fcIP2%2F20170209_091846.jpg?alt=media&token=476c5f23-c582-491d-acff-b4464260772e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221860, -78.513095",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftZDsP3wNhca8fcIP2%2Flogo%20mcdes.jpg?alt=media&token=35409884-da9d-4a94-aa48-89d71bc7def3",
//                 "long_description" : "Visiting hours: from Tuesday to Friday from 08h00 to 16:45. Saturdays: from 08h30 to 13h00.",
//                 "name" : "Sucre House Museum",
//                 "pais" : "Ecuador",
//                 "phone" : "02 295 2860",
//                 "prodId" : "-KftZDsP3wNhca8fcIP2",
//                 "region" : "Pichincha",
//                 "short_description" : "House of Antonio José de Sucre, Latin American independence hero.",
//                 "web" : "."
//             },
//             "-Kg0UK36FD_te_fu4MpQ" : {
//                 "address" : "Espejo Alleyay and Guayaquil",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0UK36FD_te_fu4MpQ%2Faudio%2FBolivar%20Theater.ogg?alt=media&token=18f072a7-3456-4c80-b4b5-16daaa5c6bee",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "info@teatrobolivar.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0UJlMSy_NEm05zlrc%2Fteatro%20bolivar%20cabecera.jpg?alt=media&token=8143ae80-c5a2-49ac-a9d8-87303dc5dedf",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221494, -78.510992",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0UJlMSy_NEm05zlrc%2Fteatroo%20bolivar%20logo.jpg?alt=media&token=dd382363-6ba2-4cae-a6f6-826fb831a65e",
//                 "long_description" : "Visiting hours: Monday to Friday from 09h00 to 17h30. Special event schedules are posted on the theater website.",
//                 "name" : "Bolivar Theatre",
//                 "pais" : "Ecuador",
//                 "phone" : "02 257 1911",
//                 "prodId" : "-Kg0UJlMSy_NEm05zlrc",
//                 "region" : "Pichincha",
//                 "short_description" : "In 1999 it suffered a serious fire that destroyed 70% of its building.",
//                 "web" : "http://www.teatrobolivar.org/"
//             },
//             "-Kg0VglSK2KiyF6KziDQ" : {
//                 "address" : "Sucre Street and Guayaquil",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0VglSK2KiyF6KziDQ%2Faudio%2FTobar%20Passage.ogg?alt=media&token=cdd1af94-17f1-44a5-932a-c2fbd2cd7989",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0VgZ3Zz2OI8eigJru%2FPasaje%20tobar%20cabecera.jpg?alt=media&token=75fc401d-1f0c-4a75-8082-b3ab211902ca",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222425, -78.512371",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0VgZ3Zz2OI8eigJru%2Fpasaje%20tobar%20logo%202.jpg?alt=media&token=70a387f4-03e9-42da-883f-af5d79393ecb",
//                 "long_description" : "This site is currently used for commerce.",
//                 "name" : "Pasaje Tobar",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-Kg0VgZ3Zz2OI8eigJru",
//                 "region" : "Pichincha",
//                 "short_description" : "Located in a pedestrian passage, predecessor of the modern shopping centers.",
//                 "web" : ""
//             },
//             "-Kg0YnNTUJJ-qLr_whhi" : {
//                 "address" : "Manabí Street, between Guayaquil and Flores",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0YnNTUJJ-qLr_whhi%2Faudio%2FTeatro%20Nacional%20Sucre.ogg?alt=media&token=8fe99e47-1ce0-4bf7-a4e6-f8d647324b09",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "comunicacion@teatrosucre.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0Yn9vGhMP8SgVYO0g%2Fcabecera%20tns.jpg?alt=media&token=cfa98c83-9128-4348-b3ab-810c6bfa720b",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219124, -78.508873",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0Yn9vGhMP8SgVYO0g%2Flogo%20tns.jpg?alt=media&token=c568a99e-eaba-4bd5-8e92-3b2e72690ac7",
//                 "long_description" : "Hours of Operation: Monday to Friday from 09h00 to 17h30. Special event schedules are posted on the theater website.",
//                 "name" : "Sucre National Theatre",
//                 "pais" : "Ecuador",
//                 "phone" : "02 295 1661 - 02 257 0299 - 02 228 0982",
//                 "prodId" : "-Kg0Yn9vGhMP8SgVYO0g",
//                 "region" : "Pichincha",
//                 "short_description" : "Former building of the Butchers. Today is home to art and culture.",
//                 "web" : "http://www.teatrosucre.com"
//             },
//             "-Kg0_RxukOp7a0PhzBlX" : {
//                 "address" : "LaExposición Street and Benigno Vela",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.230886, -78.512442",
//                 "logo" : "",
//                 "long_description" : "Since 1978 the palace became the guardian of the jewels of the crown of Quito. There are no guided tours on this site.",
//                 "name" : "La Recoleta Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "02 298 3200 - 02 295 1951",
//                 "prodId" : "-Kg0_RnLELEkzVSdA7SY",
//                 "region" : "Pichincha",
//                 "short_description" : "Ministry of the Defense",
//                 "web" : "http://www.defensa.gob.ec"
//             },
//             "-Kg1cKSEulsuayzUb-3E" : {
//                 "address" : "Patria Avenue, between 6 de Diciembre and 12 de Octubre",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "info@cce.org.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg1cK3Heq7tcVojpHk8%2Fcabecera%20cce.jpg?alt=media&token=a192df25-6fa8-4faf-87a8-0ef2c730ae5c",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.209850, -78.494928",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg1cK3Heq7tcVojpHk8%2Flogo%20cce.jpg?alt=media&token=8db99258-9505-4689-b0e2-47d6ab0323ad",
//                 "long_description" : "In this building we find the Jaime Roldós Aguilera National Theater, the Alfredo Pareja Diezcanseco cinema, the National Museum of the Central Bank, the Museum of Visual Arts and Musical Instruments, the Agora, the Eugenio Espejo National Library, Radio de la Casa de Cultura, the Mariana de Jesús Performing Arts Hall, the National Cinematheque of Ecuador and the Demetrio Aguilera Malta Theatre.",
//                 "name" : "Building of the Mirrors",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 0967",
//                 "prodId" : "-Kg1cK3Heq7tcVojpHk8",
//                 "region" : "Pichincha",
//                 "short_description" : "The icon building of the House of Ecuadorian Culture",
//                 "web" : "http://www.casadelacultura.gob.ec"
//             },
//             "-Kg5CUaWSzO_VxNNyru_" : {
//                 "address" : "Luis Felipe Borja Street, between Luis Sodiro and Hermanos Pazmiño",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5CUKBt54kVC5xBbEh%2Fcabecera%20ce.jpg?alt=media&token=cb8e780e-b7e1-4b3c-8837-165a256c386b",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.212782, -78.501529",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5CUKBt54kVC5xBbEh%2Flogo%20ce.jpg?alt=media&token=fa73e08c-d145-43aa-88f6-e71e28466fad",
//                 "long_description" : "Year construction: 1922. Historic style (neoclassical). Current use: educational institution.",
//                 "name" : "Espejo Girls School",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kg5CUKBt54kVC5xBbEh",
//                 "region" : "Pichincha",
//                 "short_description" : "The school was created for the centenary of the Spanish battle of independence.",
//                 "web" : "."
//             },
//             "-Kg5G3OuctC13g9SXlMW" : {
//                 "address" : "Carrion Street and 10 de Agosto",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "jfolleco@cancilleria.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5G373st5uDxoMIC5f%2Fcabecera%20c.jpg?alt=media&token=a1148c45-7447-4a5a-892f-f620e18f19bb",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.202616, -78.497528",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5G373st5uDxoMIC5f%2Flogo%20c.jpg?alt=media&token=87c8db56-c7ec-48f8-bdc5-45c57dca484d",
//                 "long_description" : "The function of this dependence of the state is to manage and coordinate international politics, Latin American integration and human mobility. Hours of operation: Monday to Friday from 08h00 to 17h00. This site is not open for tourist visits.",
//                 "name" : "Najas Palace (Chancellery)",
//                 "pais" : "Ecuador",
//                 "phone" : "02 299 3200",
//                 "prodId" : "-Kg5G373st5uDxoMIC5f",
//                 "region" : "Pichincha",
//                 "short_description" : "Ministry of Foreign Affairs and Human Mobility - Chancellery",
//                 "web" : "www.cancilleria.gob.ec"
//             },
//             "-Kg5Hvm1cZ2W-LCrmVtB" : {
//                 "address" : "Plaza de Santo Domingo, Calle Guayaquil y Rocafuerte",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5HvcOb7sHeAqm0bxm%2Fcabecera%20mas.jpg?alt=media&token=60ec669d-b309-477d-9081-0ec52e81b12f",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223719, -78.512174",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5HvcOb7sHeAqm0bxm%2Flogo%20mas.jpg?alt=media&token=444a8d62-fe1f-426d-93ab-5b8630efa901",
//                 "long_description" : "En 1882 el Municipio recibió cinco mil pesos provenientes de la herencia de María Rosa Carcelén de Guevara y Larrea-Zurbano, hermana de la Marquesa de Solanda y por tanto cuñada de Antonio José de Sucre. De acuerdo a las cláusulas del testamento, el dinero debería ser usado exclusivamente para levantar un monumento en honor de su fallecido cuñado.",
//                 "name" : "Monumento a Sucre",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kg5HvcOb7sHeAqm0bxm",
//                 "region" : "Pichincha",
//                 "short_description" : "Su mano derecha señala las faldas del Pichincha, donde ganó nuestra independencia.",
//                 "web" : "."
//             },
//             "-Kg5KdYtw6-Zsul_o6Bn" : {
//                 "address" : "Junin Street and Montufar",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5KdFM4TKuTygxtjJ1%2Fcabecra%20mdems.jpg?alt=media&token=d8ad5698-ae7c-4120-b02b-95c6ba2beeba",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222881, -78.510452",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5KdFM4TKuTygxtjJ1%2Flogo%20mms.jpg?alt=media&token=f0a3927e-b6e0-4687-9407-5d88687c20df",
//                 "long_description" : "Visiting hours: Monday to Friday from 09h30 to 12h30 and from 14h00 to 17h00; Saturdays from 10h00 to 15h00. Sundays only by appointment for groups. Admission: $ 4,00 adults; $ 2,00 students and seniors; $ 1,00 children. The museum offers guided tours and a souvenir shop.",
//                 "name" : "Manuela Saenz House Museum",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 3908",
//                 "prodId" : "-Kg5KdFM4TKuTygxtjJ1",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 } ],
//                 "short_description" : "House of Manuela Sáenz, general of honor of the Republic of Ecuador.",
//                 "web" : "."
//             },
//             "-Kg5OvUjK1ghMMDynBTt" : {
//                 "address" : "Avenida 6 de Diciembre y Patria",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.208219, -78.497865",
//                 "logo" : "",
//                 "long_description" : "Durante los fines de semana, el parque se convierte en una gran sala de exhibición al aire libre, de arte y artesanías. También hay teatro callejero, comidas rápidas y juegos infantiles.",
//                 "name" : "Parque El Ejido",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kg5OvAL7zcIa9r9IiH2",
//                 "region" : "Pichincha",
//                 "short_description" : "Sitio popular de encuentro de jubilados y juegos tradicionales.",
//                 "web" : "."
//             },
//             "-Kg5QZ7fZAyhEU2f04zV" : {
//                 "address" : "Avenida Patria, entre 10 de Agosto y 6 de Diciembre",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5QYvdeKERYgHCjw2E%2Fcabecera%20pc.jpg?alt=media&token=6c17a2bc-9ba7-4a68-9603-ef10a9de1e35",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.208106, -78.497317",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5QYvdeKERYgHCjw2E%2Flogo%20pc.jpg?alt=media&token=bd9c9859-eb58-4254-bf9c-c3fbc9b2e4d9",
//                 "long_description" : "Esta Puerta constituía la entrada al palacio de estilo francés, bautizado como \"La Circasiana\" por sugerencia de la madre de Jacinto Jijón, quien propuso dicho nombre para hacer alusión a la región de Circasia, en la Rusia trans-caucásica, de la cual se decía que provenían las mujeres más bellas del mundo.",
//                 "name" : "Puerta de la Circasiana",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kg5QYvdeKERYgHCjw2E",
//                 "region" : "Pichincha",
//                 "short_description" : "Donada por la Familia Jijón, a la ciudad, en 1970.",
//                 "web" : "."
//             },
//             "-Kg5UQtg-vBEsYB8pfRP" : {
//                 "address" : "Avenida Patria, entre 10 de Agosto y 6 de Diciembre",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5UQgrJi9QcRLxta4O%2Fcabecera%20le.jpg?alt=media&token=6c25dd0c-0310-44be-816c-43743a3ff70d",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.207949, -78.497180",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5UQgrJi9QcRLxta4O%2FLogo%20le.jpg?alt=media&token=c8f5e932-0fcb-4a0e-8b19-c5c2c97673e3",
//                 "long_description" : "Esta escultura de bronce, considerada una de las más bellas de la ciudad, fue colocada en el Parque El Ejido en 1922. Luego de ser trasladada a varios sitios representativos d ella ciudad, volvió a este parque a su ubicación actual.",
//                 "name" : "La Lucha Eterna",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kg5UQgrJi9QcRLxta4O",
//                 "region" : "Pichincha",
//                 "short_description" : "Eterna lucha entre el bien y el mal.",
//                 "web" : "."
//             },
//             "-Kg5XJliyUYzJeogoLGi" : {
//                 "address" : "Parque El Ejido",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.208489, -78.498116",
//                 "logo" : "",
//                 "long_description" : "En el sitio donde hoy se encuentra este monumento, ocurrió el fin del cruel asesinato de el líder liberal Eloy Alfaro en 1912. La Llama Eterna es un símbolo de que sus ideales perdurarán por siempre.",
//                 "name" : "La Llama Eterna",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kg5XJaR3DwnNtM4X92v",
//                 "region" : "Pichincha",
//                 "short_description" : "Permanente recuerdo de \"La Hoguera Bárbara\" de los ideales revolucionarios liberales.",
//                 "web" : "."
//             },
//             "-Kg5_L7Y9iBNdB6_6doW" : {
//                 "address" : "Avenida Patria y 12 de Octubre",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5_L-BonA_5zNg7rPp%2Fcabecera%20li.jpg?alt=media&token=231a1e83-7263-4757-91e5-985ca28bf2dd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.210367, -78.493892",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5_L-BonA_5zNg7rPp%2Flogo%20li.jpg?alt=media&token=c7541a37-abad-473f-a592-501302435edf",
//                 "long_description" : "La escena alude al mito griego que narra la trágica historia de amor entre Eurídice, una ninfa de los valles, y Orfeo, un pastor que tocaba la lira embelesando a todos los que le escuchaban. Los enamorados fueron separados por Hades para toda la eternidad y Orfeo vaga por el mundo tocando su lira hasta que su cabeza es cortada por, alguna vez, negarse a tocarla a petición de las Ménades.",
//                 "name" : "La Insidia",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kg5_L-BonA_5zNg7rPp",
//                 "region" : "Pichincha",
//                 "short_description" : "También conocida como \"La Pileta de las Focas\"",
//                 "web" : "."
//             },
//             "-Kg5dhz2QDu7AB2Lq9eX" : {
//                 "address" : "Sodiro Street and Valparaiso",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "centrodeconvenciones@quito-turismo.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5dhklZSrF-Be__S29%2Fcabecera%20ahee.jpg?alt=media&token=57040e86-f37e-4210-9121-049d7b57a6b7",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215953, -78.498728",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5dhklZSrF-Be__S29%2Flogo%20ahee.jpg?alt=media&token=0ac7f892-0395-41bc-b430-da40d430e127",
//                 "long_description" : "In 1898 the president of Ecuador General Eloy Alfaro Delgado, prompts the construction of a new hospital. In 1901, on May 23, the first stone of its construction was placed and it continued until 1917 and on May 8, it was resolved that everything built must be collapsed, and a new building was constructed, according to new projections. Hours of operation: Monday to Friday from 09h00 to 17h30.",
//                 "name" : "Former Eugenio Espejo Civil Hospital",
//                 "pais" : "Ecuador",
//                 "phone" : "02 299 3300 - 02 290 1333",
//                 "prodId" : "-Kg5dhklZSrF-Be__S29",
//                 "region" : "Pichincha",
//                 "short_description" : "Eugenio Espejo Convention Center, the largest in the city.",
//                 "web" : "www.centrodeconvenciones.com.ec"
//             },
//             "-Kg5hlyj0-fxVMqguf8-" : {
//                 "address" : "Montevideo Street and Luis Davila",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "mediacioncentrodeartec@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.211353, -78.506996",
//                 "logo" : "",
//                 "long_description" : "Hours of operation: from Tuesday to Friday from 10h30 to 17h30; Saturdays and Sundays from 09h00 to 17h30. Free entrance.",
//                 "name" : "Former Military Hospital",
//                 "pais" : "Ecuador",
//                 "phone" : "02 394 6990",
//                 "prodId" : "-Kg5hlkdAkw6RD2pQ4n8",
//                 "region" : "Pichincha",
//                 "short_description" : "Contemporary Art Center",
//                 "web" : "http://www.centrodeartecontemporaneo.gob.ec/index.php"
//             },
//             "-Kg5lGFQQSD6DHM8UVWl" : {
//                 "address" : "Calle Espejo y Flores",
//                 "audio" : "",
//                 "cat" : "-KdSZC6KbkdvxecHxeVe",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5lFhD3kYGFo-cUI2Y%2Fcabecera%20cdesc.jpg?alt=media&token=cec6443e-09f4-4f2e-b98f-265276a28e5f",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221974, -78.510512",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5lFhD3kYGFo-cUI2Y%2Flogo%20cdesc.jpg?alt=media&token=75e84796-40a6-4c8d-8a64-22581528be58",
//                 "long_description" : "Horarios de visitas: lunes a viernes 09h00 a 17h00; sábado 09h00 a 12h30.  Entrada:  adultos $2,50; universitarios $1,00;  niños, tercera edad y personas con capacidades diferentes $0,60",
//                 "name" : "Iglesia y Monasterio de Santa Catalina",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 4000",
//                 "prodId" : "-Kg5lFhD3kYGFo-cUI2Y",
//                 "region" : "Pichincha",
//                 "short_description" : "Monasterio de Clausura en medio de la bulliciosa ciudad.",
//                 "web" : "."
//             },
//             "-KgRupz5lhE_8sgJL1Pm" : {
//                 "address" : "Venezuela Street and Sucre",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRuojxwM7s5oARLb7l%2FPasaje%20Amador%20cabecera.jpg?alt=media&token=e65ae7ba-d2a1-4949-a9ea-51dad2829740",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221229, -78.512919",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRuojxwM7s5oARLb7l%2FPasaje%20amador%20logo.jpg?alt=media&token=bc95bda2-fbb5-42d1-b8ce-468991a34bc1",
//                 "long_description" : "Nowadays in the two levels of the passage there are still about twenty commercial sites and in its four floors there are dozens of houses.",
//                 "name" : "Pasaje Amador",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KgRuojxwM7s5oARLb7l",
//                 "region" : "Pichincha",
//                 "short_description" : "65 years ago, the first city mall",
//                 "web" : ""
//             },
//             "-KgRyfSL85fXgW38-heO" : {
//                 "address" : "Imbabura Street and Manabi",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRyfKyY4VynS7IG1P4%2Fcabecera%20llch.jpg?alt=media&token=4132bab1-0a7c-4d6f-9917-214b378e4373",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215625, -78.513334",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRyfKyY4VynS7IG1P4%2Flogo%20llach.jpg?alt=media&token=fcffef10-8fdc-4e12-8257-f95dbc593402",
//                 "long_description" : "Every day to this place, dozens of low income women arrive to wash their clothes and some of the neighbors and customers who pay for this service.",
//                 "name" : "La Chilena Laundry",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KgRyfKyY4VynS7IG1P4",
//                 "region" : "Pichincha",
//                 "short_description" : "When many services were scarce in the city, this place offered a solution",
//                 "web" : ""
//             },
//             "-KgyB3pCqlfnqZJEYfZN" : {
//                 "address" : "Aguarico Street",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219142, -78.527270",
//                 "logo" : "",
//                 "long_description" : "Visiting Hours: Tuesday to Friday from 09h00 to 17h00; Saturdays from 10h00 to 14h00. Admission: $1,00 foreign tourists; $0,25 children and senior citizens.",
//                 "name" : "Liberty Hill - Temple of the Nation",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 8733",
//                 "prodId" : "-KgyB3PnXkxRE-SRLFXD",
//                 "region" : "Pichincha",
//                 "short_description" : "Sanctuary where the road to freedom was sealed.",
//                 "web" : "."
//             },
//             "-KgyCXGwSAZbQK_ZEeoz" : {
//                 "address" : "Rocafuerte Street and Cumanda",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.217614, -78.520782",
//                 "logo" : "",
//                 "long_description" : "The detention center was closed and the prisoners were taken to a new, high-security one, two hours south of the city. Today, this center is a place for visits.",
//                 "name" : "Former Garcia Moreno Penitentiary",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KgyCX912Q-XLK89Kd07",
//                 "region" : "Pichincha",
//                 "short_description" : "It was created for a capacity of 200 people, but got to have about 4,000",
//                 "web" : "."
//             },
//             "-KgyHGMK5-zm-LAEMf72" : {
//                 "address" : "Calle General Melchor Aymerich",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.228556, -78.518368",
//                 "logo" : "",
//                 "long_description" : "Actualmente, en este barrio habitan alrededor de 10000 personas y está rodeado de un bosque que constituye una importante área verde de la ciudad.",
//                 "name" : "Fortines del Panecillo",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KgyHGDOodUOgL5xFy13",
//                 "region" : "Pichincha",
//                 "short_description" : "Construido para dominar a los quiteños durante las batallas por la independencia en el siglo XIX",
//                 "web" : "."
//             },
//             "-KgyKkuhW2-kljR4NI5F" : {
//                 "address" : "Ambato Street and Mazo",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.227398, -78.514900",
//                 "logo" : "",
//                 "long_description" : ".",
//                 "name" : "Former Geographic Institute Building",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KgyKkgS0eUioHX2m2k3",
//                 "region" : "Pichincha",
//                 "short_description" : "More than 80 years ago, it instituted as \"Military Geographical Service\", as an official dependency of the State",
//                 "web" : "."
//             },
//             "-KgyMU1T_ytP-xS6TV7q" : {
//                 "address" : "Calle Iquique, sector La Tola",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220086, -78.501635",
//                 "logo" : "",
//                 "long_description" : "Actualmente, es un parque público que cuenta con caminerías, ciclovías, lugares de descanso y espacios verdes, además de un centro cultural para exhibiciones. Se puede visitar todos los días desde las 08h00 a 17h00. Entrada gratuita",
//                 "name" : "El Itchimbía",
//                 "pais" : "Ecuador",
//                 "phone" : "02 322 6363 - 02 322 8470 - 02 322 8471",
//                 "prodId" : "-KgyMTsv4lAk2L7tVJKU",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 } ],
//                 "short_description" : "Mirador natural de la ciudad",
//                 "web" : "."
//             },
//             "-KgyOe9q6mJUcpBV3gck" : {
//                 "address" : "Pichincha Avenue, between Esmeraldas and Manabi",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220009, -78.507040",
//                 "logo" : "",
//                 "long_description" : "The market is open every day from 06h00 to 17h00.",
//                 "name" : "Central Market",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "prodId" : "-KgyOe-OfIGjBa9WQYrl",
//                 "region" : "Pichincha",
//                 "short_description" : "In the market you can find everything from fruits, vegetables and flowers to medicinal plants for all diseases.",
//                 "web" : ""
//             },
//             "-KgySHn5F6G-ZjJaCM8G" : {
//                 "address" : "Los Rios Street and Don Bosco",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222738, -78.505026",
//                 "logo" : "",
//                 "long_description" : ".",
//                 "name" : "Don Bosco Institute and Chapel ",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KgySHcyVMkeb3RO0XRd",
//                 "region" : "Pichincha",
//                 "short_description" : "From the beginning, a center of technical and intellectual training of craftsmen",
//                 "web" : "."
//             },
//             "-KgyTT-M7pe_C1EEWQkj" : {
//                 "address" : "Luis Vargas Torres Street and Francisco de Caldas",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgyTStba2cYF5zEQXC1%2Fcabecera%20cls.jpg?alt=media&token=68f9fecb-bc9b-4008-b8a5-14805a776122",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.216002, -78.506490",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgyTStba2cYF5zEQXC1%2Flogo%20cls.jpg?alt=media&token=b0728963-b5e3-4147-9ad8-ee6a8092706e",
//                 "long_description" : ".",
//                 "name" : "Former La Salle School",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-KgyTStba2cYF5zEQXC1",
//                 "region" : "Pichincha",
//                 "short_description" : "It was created in 1907 to educate young people from bourgeois and aristocratic families in Quito",
//                 "web" : "."
//             },
//             "-Kh2nqYuZkpNqGFJQAv6" : {
//                 "address" : "Luis Vargas Street and Antonio Ante",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kh2nq7nwxwls6IlRDX4%2Fcabecera%20inm.jpg?alt=media&token=285373df-6873-49b8-9c9f-fc0d4cbf6f1e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.212241, -78.505361",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kh2nq7nwxwls6IlRDX4%2Flogo%20inm.jpg?alt=media&token=1c1ed196-e187-44a2-8862-e846057462ef",
//                 "long_description" : ".",
//                 "name" : "Mejia National Institute",
//                 "pais" : "Ecuador",
//                 "phone" : "02 256 2841",
//                 "prodId" : "-Kh2nq7nwxwls6IlRDX4",
//                 "region" : "Pichincha",
//                 "short_description" : "This building houses the first secular institution of the city.",
//                 "web" : "http://bgmejia.com.ec"
//             },
//             "-Kh2pQbTyhAyn4A9IvWk" : {
//                 "address" : "Entre avenidas Gran Colombia y 10 de Agosto",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.214640, -78.502553",
//                 "logo" : "",
//                 "long_description" : "Este sitio está abierto al público y se puede llegar a él desde el norte y sur de la ciudad por las líneas de transporte público Trolebús y Ecovía.",
//                 "name" : "Parque de La Alameda",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kh2pQP5eCsC4MbW06aR",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-ios-paw",
//                     "name" : "Pet Friendly"
//                 } ],
//                 "short_description" : "El parque más antiguo de Quito.",
//                 "web" : "."
//             },
//             "-Kh2siMKRfv52rpwC5Jh" : {
//                 "address" : "Entre avenidas Gran Colombia y 10 de Agosto, Parque La Alameda",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : "informacionoaq@epn.edu.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.214888, -78.502480",
//                 "logo" : "",
//                 "long_description" : ".",
//                 "name" : "Observatorio Astronómico",
//                 "pais" : "Ecuador",
//                 "phone" : "02 257 0765 - 02 258 3451",
//                 "prodId" : "-Kh2siCLK5BzOcq3x9mF",
//                 "region" : "Pichincha",
//                 "short_description" : "Uno de los observatorios más antiguos de América",
//                 "web" : "http://oaq.epn.edu.ec"
//             },
//             "-Kh2uRLrU9agedQDvvi7" : {
//                 "address" : "Piedrahita Street and Avenida 6 de Diciembre",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "maria.samaniego@asambleanacional.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kh2uRDh1AyYM7-L7az6%2Fcabecera%20an.jpg?alt=media&token=7b00912a-2b51-4dfb-b929-1a34cf82c3d5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.213092, -78.498814",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kh2uRDh1AyYM7-L7az6%2Flogo%20an.jpg?alt=media&token=b0032389-ad91-4e33-9158-9ba6b54d5430",
//                 "long_description" : ".",
//                 "name" : "Legislative Palace",
//                 "pais" : "Ecuador",
//                 "phone" : "02 399 1000",
//                 "prodId" : "-Kh2uRDh1AyYM7-L7az6",
//                 "region" : "Pichincha",
//                 "short_description" : "National Constituent Assembly",
//                 "web" : "http://www.asambleanacional.gob.ec/es"
//             },
//             "-Kh2wSVDtl0k4wPePqXF" : {
//                 "address" : "Entre avenidas Shyris y Amazonas",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.183010, -78.484584",
//                 "logo" : "",
//                 "long_description" : "Este es un espacio público para recreación que cuenta con espacios para deportes, juegos infantiles, estaciones de comida, etc.",
//                 "name" : "Parque La Carolina",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kh2wSO6sb5MHMOkzc7I",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-ios-paw",
//                     "name" : "Pet Friendly"
//                 } ],
//                 "short_description" : "Antes, Laguna de Iñaquito. Hoy, Parque La Carolina",
//                 "web" : "."
//             },
//             "-Kh2zZuKefLn4iI9fjIJ" : {
//                 "address" : "6 de Diciembre Avenue and Naciones Unidas",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "prensa@cdp.com.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.177520, -78.476683",
//                 "logo" : "",
//                 "long_description" : "Capacity: 38,500 seated people. Dimensions: 105 x 70 m. Materials: Natural lawn (field); Polytan (athletic track). Hours of operation in the Sports Concentration of Pichincha: Monday to Friday from 12h00 to 20h00",
//                 "name" : "Atahualpa Olimpic Stadium",
//                 "pais" : "Ecuador",
//                 "phone" : "02 255 0075 - 02 255 0085 - 02 255 0175",
//                 "prodId" : "-Kh2zZk-i8v7mujE84HI",
//                 "region" : "Pichincha",
//                 "short_description" : "Stage of events, not only sports, but cultural and artistic.",
//                 "web" : "http://www.cdp.com.ec"
//             },
//             "-Kh350Ws_Vtuvkpl-429" : {
//                 "address" : "Mariano Calvache Street and Lorenzo Chavez",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "secretariainfo@fundacionguayasamin.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.190719, -78.469455",
//                 "logo" : "",
//                 "long_description" : "Visiting hours: every day from 10h00 to 17h00. Closed on regional and national holidays. Admission: Adults $8,00; Students, Seniors, Persons with Disabilities $4,00. Children up to 12 years old, free entry. Sundays free admission for Ecuadorian visitors.",
//                 "name" : "Chapel of the Man",
//                 "pais" : "Ecuador",
//                 "phone" : "02 244 6455 – 02 245 2938 – 02 246 5266",
//                 "prodId" : "-Kh350G9-Glfcakhapu8",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 } ],
//                 "short_description" : "A Cultural Center that emerges as a response to the need to pay homage to the human being, his people, his identity.",
//                 "web" : "http://www.capilladelhombre.com"
//             },
//             "-Kh38ADDUvSZMHTPGH67" : {
//                 "address" : "Calle Guanguiltahua, sector Batán Alto.",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : "comunicacion@epmmop.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.177574, -78.460586",
//                 "logo" : "",
//                 "long_description" : "Es un sitio público que puede visitarse de lunes a domingo de 05h30 a 17h30. Espacio con caminos para bicicleta de montaña, caminata, senderos para alistamiento de aves, areas de deportes, juegos infantiles, estaciones de comida rápida, etc.",
//                 "name" : "Parque Metropolitano",
//                 "pais" : "Ecuador",
//                 "phone" : "02 290 7005 - 02 290 4884",
//                 "prodId" : "-Kh38A3AcwEwriRY8z9J",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-ios-paw",
//                     "name" : "Pet Friendly"
//                 } ],
//                 "short_description" : "Un parque-bosque en el centro norte de la ciudad.",
//                 "web" : "http://www.epmmop.gob.ec/epmmop/index.php/proyectos/espacio-publico/parques-y-areas-verdes"
//             },
//             "-Kh3A4ZlpgveHLTzHuRI" : {
//                 "address" : "Gonzales Suarez Avenue",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "reservaciones@hotelquito.com ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.202558, -78.480464",
//                 "logo" : "",
//                 "long_description" : "Accommodation, Events, Members Club, Restaurant.",
//                 "name" : "Hotel Quito",
//                 "pais" : "Ecuador",
//                 "phone" : "02 396 4900",
//                 "prodId" : "-Kh3A4SEte5VP_3EZzkI",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 }, {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "From the 50's, the iconic hotel of the city.",
//                 "web" : "http://www.hotelquito.com.ec/"
//             },
//             "-Kh3F72_dBZq2DazEUZM" : {
//                 "address" : "Ladron de Guevara Avenue and Velasco Ibarra",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "prensa@cdp.com.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.213410, -78.490232",
//                 "logo" : "",
//                 "long_description" : "With capacity for 14,729 spectators, it is the closed space of greater capacity in Quito.",
//                 "name" : "Rumiñahui Coliseum",
//                 "pais" : "Ecuador",
//                 "phone" : "02 255 0075 - 02 255 0085 - 02 255 0175 - 02 255 0185",
//                 "prodId" : "-Kh3F6stAIQBQhewqL-D",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 } ],
//                 "short_description" : "It is a sports complex that complies with international standards for the practice and preparation of Olympic athletes",
//                 "web" : "http://www.cdp.com.ec"
//             },
//             "-Kh3IEHzJc3fSHgDs_yC" : {
//                 "address" : "Ladron de Guevara Avenue",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "info@epn.edu.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.210325, -78.488612",
//                 "logo" : "",
//                 "long_description" : "Academic Period: April - September and October - March",
//                 "name" : "National Polytechnic School",
//                 "pais" : "Ecuador",
//                 "phone" : "02 297 6300",
//                 "prodId" : "-Kh3IDr4XvXtiVziXYGR",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Conceived as the first center for teaching and scientific research and as a generator of national development.",
//                 "web" : "http://www.epn.edu.ec"
//             },
//             "-Kh3LN0ewS5ss1oLmLs4" : {
//                 "address" : "Avenida 12 de Octubre",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : "promocion@puce.edu.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.209239, -78.491414",
//                 "logo" : "",
//                 "long_description" : "Período de estudios: Abril - Agosto. Horarios de atención en oficinas: lunes a viernes 08h00 a 16h30",
//                 "name" : "Campus Pontificia Universidad Católica del Ecuador",
//                 "pais" : "Ecuador",
//                 "phone" : "02 299 1700",
//                 "prodId" : "-Kh3LMv3fcNsjQIG8ias",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 }, {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "La Universidad cuenta con más de 10000 estudiantes",
//                 "web" : "http://www.puce.edu.ec/"
//             },
//             "-Kh3MddzMPj4KGPj1oz2" : {
//                 "address" : "Entre Avenidas 12 de Octubre y 10 de Agosto",
//                 "audio" : "",
//                 "cat" : "-KdSYxqAiBSMhiLMe29w",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.202900, -78.491041",
//                 "logo" : "",
//                 "long_description" : "Este barrio se formó con las primeras casas y Villas de las familias adineradas de Quito. Ahora es un barrio en el que se puede encontrar hospedaje de toda categoría, restaurantes, bares, discotecas, etc.",
//                 "name" : "Barrio La Mariscal",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "prodId" : "-Kh3MdXvwV_rRLJmpxA9",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-ios-paw",
//                     "name" : "Pet Friendly"
//                 } ],
//                 "short_description" : "Barrio turístico y y de vida nocturna de la ciudad",
//                 "web" : "."
//             },
//             "-Kh3OOjZYydx4U01mXth" : {
//                 "address" : "Universitaria Avenue",
//                 "audio" : "",
//                 "cat" : "-Ka2UReDAdgirMnrGCiH",
//                 "city" : "Quito",
//                 "email" : "dcc@uce.edu.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.200846, -78.501984",
//                 "logo" : "",
//                 "long_description" : "Students: 40,000 (approx.). Motto: Omnium Potentior Est Sapientia (Almighty Wisdom). Class times: Monday to Friday from 07h00 to 21h00",
//                 "name" : "Central University of Ecuador",
//                 "pais" : "Ecuador",
//                 "phone" : "098 338 4758",
//                 "prodId" : "-Kh3OOaPgdiKpcg-wrIg",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "The oldest in Ecuador.",
//                 "web" : "http://www.uce.edu.ec"
//             }
//         },
//         "products_es" : {
//             "-Ka2WpCCLh2AETdBuJgB" : {
//                 "address" : "Calle Ricaurte y Eloy Alfaro",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2Faudio%2Fmpthreetest.ogg?alt=media&token=4fd119de-f83d-4138-8b06-db58a7430c66",
//                 "cat" : "-Ka2UNFN94bAZPuCEeyX",
//                 "city" : "Alausi",
//                 "email" : "anakanavas@hotmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2FTikal%20cabecera.jpg?alt=media&token=d1a45f43-5966-4d2e-9755-9891bc7ddc76",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2FTikal%201.jpg?alt=media&token=2049f6e7-76e9-445e-8258-49bf8812d11e",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2Ftikal%202.jpg?alt=media&token=edcdb112-6e9a-4168-9583-aeb51946b65d",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2Ftikal%203.jpg?alt=media&token=8a459dab-55bd-476a-81b2-a9dbe29fe7e5",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2Ftikal%204.jpg?alt=media&token=10d13d48-c528-4d20-8149-d0784618b263",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-2.200928, -78.847509",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ka2WpCCLh2AETdBuJgB%2FTikal%20Logo.jpg?alt=media&token=547d0c47-e28f-446f-b1f6-0798519c4c1d",
//                 "long_description" : "Abierto de Martes a Domingo de 8h00 a 21h00 Atendemos desayuno, almuerzos, cenas y platos a la carta",
//                 "name" : "Restaurante Tikal",
//                 "pais" : "Ecuador",
//                 "phone" : "096006563",
//                 "region" : "Chimborazo",
//                 "short_description" : "Disfrute de la mejor comida y ambiente de Alausí."
//             },
//             "-KbQKjZF2ZB3rTnXU-1e" : {
//                 "address" : "Calle García Moreno entre Chile y Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbQKjZF2ZB3rTnXU-1e%2Faudio%2Fpalacio%20de%20gobierno.ogg?alt=media&token=8faa4e97-f285-4c7b-96b3-be01ebecfb4b",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "http://www.presidencia.gob.ec/contacto/",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbQKjZF2ZB3rTnXU-1e%2Fcabecera%20pp.jpg?alt=media&token=f44e8764-40c8-47d9-80a3-ea73208452dd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219736, -78.512642",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbQKjZF2ZB3rTnXU-1e%2Fpal%20gob%20logo.jpg?alt=media&token=7470011e-431a-45c9-a7b0-c218e29d0a85",
//                 "long_description" : "Horario de visitas: lunes de 15h00 a 18h45; de martes a viernes de 9h00 a 18h45; sábados de 9h00 a 22:00; domingos 09h00 a 16h00. Entrada: Libre – Obligatorio la presentación de una identificación",
//                 "name" : "Palacio de Gobierno",
//                 "pais" : "Ecuador",
//                 "phone" : "02 3827000",
//                 "region" : "Pichincha",
//                 "short_description" : "Palacio de Carondelet: sede del Gobierno y residencia oficial del Presidente del Ecuador",
//                 "web" : "http://www.presidencia.gob.ec"
//             },
//             "-KbVP3seKopD5DzNQBZh" : {
//                 "address" : "Calle Chile y Venezuela",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Faudio%2Fpalacio%20arzobispal.ogg?alt=media&token=8515791f-0f0d-464d-8c7c-467911365215",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "info@ccpalacioarzobisal.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%20cabecera.jpg?alt=media&token=c4c56e3c-bf4e-4121-a505-e0f413cdda08",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%203.jpg?alt=media&token=a70a5196-df30-4e4d-bfa6-8f2417baa8af",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%204.jpg?alt=media&token=b43f1564-ae49-4fdf-a551-de189f32ba0e",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%205.jpg?alt=media&token=efe312e1-2cf8-4cb0-850b-7be9ab8e4252",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2FPalacio%20arzobispal%201.jpg?alt=media&token=d9d5c14d-eaae-4e96-9dfe-e9b3d1f4b711",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219679, -78.511677",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVP3seKopD5DzNQBZh%2Fpalacio%20arzobispal%20logo.jpg?alt=media&token=367b72da-0f50-4602-b762-7a5d7b4f35fe",
//                 "long_description" : "Horarios de visita: lunes a viernes de 09h00 a 21h00; sábados y domingos de 09h00 a 23h00. Entrada: Libre. En este sitio no hay visitas guiadas. ",
//                 "name" : "Palacio Arzobispal",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 7748 - 02 295 9632",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Sede de la Arquidiócesis Metropolitana de Quito y centro comercial.",
//                 "web" : "www.ccpalacioarzobispal.com"
//             },
//             "-KbVbjcCJb7vpYhHN_kx" : {
//                 "address" : "Calle Venezuela entre Chile y Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Faudio%2Fpalacio%20municipal.ogg?alt=media&token=313cb56e-1ab5-4689-8aad-3463e06ec470",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "serviciosciudadanos@quito.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fmunicipio%20de%20quito%20cabecera.jpg?alt=media&token=3c265e6c-590c-436d-b4d6-df9984f53716",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Falcalde%20d%20Quito2.jpg?alt=media&token=2aeb87bf-ee35-48e0-b88d-274dbd9fcd57",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fmunicipio%20de%20quito%206.jpg?alt=media&token=1768e916-a8aa-4d0a-acd2-f57ff6cbe179",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fmunicipio%20de%20quito%207.jpg?alt=media&token=138be030-c643-49c5-94b8-c640333b376b",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fplaza%20interior%202.jpg?alt=media&token=b7e198bd-b2e3-485f-bb7e-92efc94d89ab",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220562, -78.511624",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbVbjcCJb7vpYhHN_kx%2Fmunicipio%20de%20quito%20logo.jpg?alt=media&token=e3e0f656-3a00-410b-a63b-6e8086cd8d3a",
//                 "long_description" : "En este edificio funcionan las oficinas del Consejo Metropolitano y las del Alcalde de la ciudad, Mauricio Rodas, cuya administración termina en el 2018. No hay visitas guiadas. Entrada: libre",
//                 "name" : "Palacio Municipal",
//                 "pais" : "Ecuador",
//                 "phone" : "02 395 2300",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 } ],
//                 "short_description" : "Sede del Municipio del Distrito Metropolitano de Quito",
//                 "web" : "www.quito.gob.ec"
//             },
//             "-Kbfm-8eZTXPyeIaoM9y" : {
//                 "address" : "Calle García Moreno y Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Faudio%2Fcentro%20cultural%20metropolitano.ogg?alt=media&token=5ecdd4e8-623c-4cdc-93cf-7f7a591807da",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "comunicacion@centroculturalq.quito.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Fcentro-cultural-de-metropolitano%20cabecera%201.jpg?alt=media&token=3a86c0c6-8728-41d7-bbec-079688b45c8f",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Fcentro%20cultural%20metropoliatano%203.1.jpg?alt=media&token=7879ab9e-3644-41cd-bfcc-482b0ed25704",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Fcentro%20cult%201.1.jpg?alt=media&token=6f5aaf2b-47c0-4176-b28d-79a56c2bff78",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2FC.C.%20Metropolitano%201.1.jpg?alt=media&token=486108eb-e272-446a-84cc-58f1a0eb9c1f",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Fcentro%20cultural%20metropoliatano%202.1.jpg?alt=media&token=6cd063f5-04f6-4275-a923-1af8f8a8fda3",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220396, -78.513160",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbfm-8eZTXPyeIaoM9y%2Flogo%201%20c.c.%20metropolitano.jpg?alt=media&token=e07b9721-8eca-4194-9a13-b0a9b06270cb",
//                 "long_description" : "Horario de visitas: Lunes a Domingo de 8h00 a 17h00. La mayoría de exhibiciones temporales son gratuitas y se puede acceder a ellas desde las 09h00.",
//                 "name" : "Centro Cultural Metropolitano",
//                 "pais" : "Ecuador",
//                 "phone" : "02 395 2300",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 } ],
//                 "short_description" : "Este edificio tuvo un sentido educativo desde su creación.",
//                 "web" : "www.centroculturalq.quito.gob.ec"
//             },
//             "-Kbgot6xpYNBW06X6EoM" : {
//                 "address" : "Calle Juan de Dios Morales OE 389 y Venezuela",
//                 "audio" : "",
//                 "cat" : "-Ka2UNFN94bAZPuCEeyX",
//                 "city" : "Quito",
//                 "email" : "www.cheztiff.net",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fchez%20tiff%20%20cabecera.jpg?alt=media&token=3cfc3598-8e1b-4899-8eab-1df50db5c4af",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fchez%20tiff%201.1.jpg?alt=media&token=bc5eaecb-4398-4253-aaff-fb4bc6e876c4",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fchez%20tiff%202.1.jpg?alt=media&token=9dc8e5ee-2aa8-4045-92d9-e85897e43974",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fchez%20tiff%206.1.jpg?alt=media&token=4a47fe68-d529-431c-abed-108f2369accd",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Fcheztiff%205.1.jpg?alt=media&token=23f98695-d546-4ebf-8434-daf7061a2613",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.224066, -78.514536",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kbgot6xpYNBW06X6EoM%2Flogo%20chez%20tiff%20logo.jpg?alt=media&token=c21f1883-8f14-4b13-9ef3-92bb3a15bba4",
//                 "long_description" : "Horarios de Visita: Lunes a Domingo de 09h00 a 18h00. Explicación del proceso para hacer chocolate. Degustación Didáctica del Cacao Nacional sabor \"Arriba\" al Chocolate.",
//                 "name" : "Chez Tiff",
//                 "pais" : "Ecuador",
//                 "phone" : "02 22 900 20",
//                 "region" : "Pichincha",
//                 "short_description" : "El placer en sus cinco sentidos!"
//             },
//             "-KbkQjUa50-_sKUHbpjf" : {
//                 "address" : "Avenida José de Sucre y Benalcázar",
//                 "audio" : "",
//                 "cat" : "-Ka2UNFN94bAZPuCEeyX",
//                 "city" : "Quito",
//                 "email" : "www.tianguez.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%20cabecera.jpg?alt=media&token=fa8b345a-9fec-47f8-ab1e-2f8250306928",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%205.jpg?alt=media&token=3e4c47e7-0772-49ba-83a9-81ca38c4962d",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%206.jpg?alt=media&token=72ed718c-73b4-49c9-b19d-16eaf75d97dc",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%202.jpg?alt=media&token=15bd8bc6-dacf-43dd-9a68-96963072b275",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%201.jpg?alt=media&token=b189fbbc-a9de-4e88-9a7b-b99eaa740224",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220254, -78.514974",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KbkQjUa50-_sKUHbpjf%2Ftianguez%204.jpg?alt=media&token=74bb6b9c-5227-4199-9e9d-f94a3535ac8f",
//                 "long_description" : "Horarios: abierto  lunes y martes  de 9h30 a 18h30 y miercoles a domingo de 9h30 a 23h30.",
//                 "name" : "Cafeteria Tianguez",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2230609",
//                 "region" : "Pichincha",
//                 "short_description" : "La magia de la transformación nos invade al cocinar"
//             },
//             "-KdIxtRhqsLKvPI9HtRI" : {
//                 "address" : "Calle Venezuela y Chile",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdIxtRhqsLKvPI9HtRI%2Faudio%2Fcasa%20perez%20pallares.ogg?alt=media&token=67698527-5e18-4412-affe-3f848253b466",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "comunicacion@quito-turismo.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdIxtRhqsLKvPI9HtRI%2FPalacete%20Perez%20Pallares%20cabecera.jpg?alt=media&token=e7c0fa6b-0a46-4115-b9b5-5147a9803142",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220047, -78.511449",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdIxtRhqsLKvPI9HtRI%2FPerez%20pallares%20logo.jpg?alt=media&token=572987ff-15aa-4d78-a97e-6412535bd174",
//                 "long_description" : "En este edificio existen varios salones que se han usado para eventos importantes de la ciudad, sobre todo aquellos con vista hacia la plaza, un despacho protocolar del Alcalde de la ciudad y un salón dedicado a las Reinas de Quito, en el que se exhiben los retratos de las soberanas de la ciudad. Este edificio está ocupado por la Administración General y la Dirección de Relaciones Internacionales del Municipio de Quito.",
//                 "name" : "Casa Perez Pallares",
//                 "pais" : "Ecuador",
//                 "phone" : "02 299 3300",
//                 "region" : "Pichincha",
//                 "short_description" : "Donde nació la historia de amor entre Manuelita y Simón Bolívar",
//                 "web" : "http://www.quito.com.ec"
//             },
//             "-KdW1NH3hUWvzps5nm9v" : {
//                 "address" : "Rocafuerte E 381 y Zaldumbide",
//                 "audio" : "",
//                 "cat" : "-Ka2UOq5KWvoPImZGkUL",
//                 "city" : "Quito",
//                 "email" : "casarocafuertequito@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.227908, -78.509603",
//                 "logo" : "",
//                 "long_description" : "El mejor lugar para disfrutar la historia en una casa colonial de 200 años de historia",
//                 "name" : "Casa Rocafuerte",
//                 "pais" : "Ecuador",
//                 "phone" : "022956522",
//                 "region" : "Pichincha",
//                 "short_description" : "Su casa en el centro histórico"
//             },
//             "-KdWUUyeiAuyB2ogryl7" : {
//                 "address" : "Parque Nacional Yasuní",
//                 "audio" : "",
//                 "cat" : "-Ka2UOq5KWvoPImZGkUL",
//                 "city" : "Francisco de Orellana",
//                 "email" : "sales@napoculturalcenter.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.524903, -76.439702",
//                 "logo" : "",
//                 "long_description" : "El Napo Cultural Center es un proyecto de turismo comunitario administrado y operado 100% por Añangu, una cultura ancestral amazónica. El lodge está construido sobre la base de la arquitectura Kichwa, tiene rigurosos estándares sostenibles y es respetuoso con el medio ambiente.",
//                 "name" : "Yasuni Kichwa Lodge",
//                 "pais" : "Ecuador",
//                 "phone" : "(+593 2) 2547 758 - Móvil y Whatsapp: (+593 99) 3575 272",
//                 "region" : "Orellana",
//                 "short_description" : "Una contribución a la Conservación de la Biodiversidad y la Cultura"
//             },
//             "-KdWodxYRzh6SIzWdaqE" : {
//                 "address" : "Catedral Metropolitana - Venezuela y Espejo 715",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWodxYRzh6SIzWdaqE%2Faudio%2Fcatedral.ogg?alt=media&token=f39a40f4-10aa-4aa1-b7a1-d6fc2d57f869",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "http://www.catedraldequito.org/en/contactos/",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWodxYRzh6SIzWdaqE%2Fcatedral%20cabecera%202.jpg?alt=media&token=2ddbca4a-aabc-4cf2-92f7-2415785baadd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220471, -78.512503",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWodxYRzh6SIzWdaqE%2FCatedral%20Logo.jpg?alt=media&token=725c98b8-c4f9-4cb6-8c61-6a88158c338e",
//                 "long_description" : "Horarios de Visitas: Lunes a sábado: de 09:30 a 17:00/ domingos cerrado. Precio: Ecuatorianos: $2,00 Adultos; $1,00 (Niños, estudiantes, adultos mayores, personas con discapacidad). Visita a Cúpulas (Iglesia + Museo + Cúpulas) 4,00 USD. Extranjeros: $3,00 Adultos; $2,00 (Niños, estudiantes, adultos mayores, personas con discapacidad). Visita a Cúpulas (Iglesia + Museo + Cúpulas) $6,00 ",
//                 "name" : "Catedral Primada de Quito",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "region" : "Pichincha",
//                 "short_description" : "La iglesia es considerada una de las mas hermosas de Quito",
//                 "web" : "www.catedraldequito.org"
//             },
//             "-KdWq3srZivK3gccoCZW" : {
//                 "address" : "Iglesia de la Companía de Jesús - Garcia Moreno y Sucre - Esquina",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWq3srZivK3gccoCZW%2Faudio%2FIg%2CCompa%C3%B1ia%20de%20Jesus.ogg?alt=media&token=c0204d88-7788-4edd-aebb-bc4e3d579b06",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "fundacioniglesiadelacompania.org.ec/portal/",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWq3srZivK3gccoCZW%2FCompa%C3%B1ia%20cabecera.jpg?alt=media&token=f0beffdf-2764-4b01-b7e0-1853e078c9b2",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220974, -78.513687",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdWq3srZivK3gccoCZW%2FLogo.jpg?alt=media&token=e18f86b6-68e3-4ca2-9717-4216976c7d6f",
//                 "long_description" : "Horarios de Visitas: Lunes a Sábados de 08:00 a 16:45. Domingos: de 12h30 a 16h00. Primer domingo de cada mes la entrada es gratuita. Entrada: Ecuatorianos: $2,50 Adultos; $1 Estudiantes Universitarios; $0,50 Estudiantes; Extranjeros: $5 Adultos; $2,50 Estudiantes.",
//                 "name" : "Iglesia de la Companía de Jesús",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2584175",
//                 "region" : "Pichincha",
//                 "short_description" : "Joya del Barroco Latinoamericano",
//                 "web" : ""
//             },
//             "-KdXOwupt9jts1zNAvos" : {
//                 "address" : "Iglesia y Convento de San Francisco",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXOwupt9jts1zNAvos%2Faudio%2FIg%20Y%20convento%20San%20Francisco.ogg?alt=media&token=d0fb33c3-8b83-4c1b-b610-8472e1dbd408",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "info@conventodesanfrancisco.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXOwupt9jts1zNAvos%2FSan%20Francisco%20cabecera.jpg?alt=media&token=c9a29f45-b393-489a-be72-76621e5941f2",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220445, -78.515273",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXOwupt9jts1zNAvos%2FPlaza%20San%20Francisco%20Logo.jpg?alt=media&token=5914b77c-34dc-45ff-ac36-dd565edcd76d",
//                 "long_description" : "Horarios de Visitas: De lunes a sábado de 09h00 a 17h30 y los domingos de 09h00 a 13h00. Entrada: $2.00 Adultos; $1.00 Niños y Estudiantes; $0.50 Tercera Edad.",
//                 "name" : "Iglesia y Convento de San Francisco",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2281-124",
//                 "region" : "Pichincha",
//                 "short_description" : "Es el conjunto arquitectónico más grande de Iberoamérica",
//                 "web" : ""
//             },
//             "-KdXPsirh-j6GUGFJ3JW" : {
//                 "address" : "Iglesia El Sagrario",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXPsirh-j6GUGFJ3JW%2Faudio%2Figlesia%20del%20sagrario.ogg?alt=media&token=9f5dba74-c85e-42df-831d-4264b7958ebf",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXPsirh-j6GUGFJ3JW%2FEl%20sagrario%20cabecera.jpg?alt=media&token=a69354eb-e1ff-4d59-b3f8-dc0d3e06b407",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220571, -78.512876",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXPsirh-j6GUGFJ3JW%2Fel%20sagrario%20logo.jpg?alt=media&token=fdc2f910-3d87-49f6-be17-f522501666ed",
//                 "long_description" : "Horarios de Visitas: de Lunes a Domingo 9:00 a 17:00. Costo de ingreso: Gratuito",
//                 "name" : "Iglesia El Sagrario",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2284 398",
//                 "region" : "Pichincha",
//                 "short_description" : "Dentro de esta maravillosa construcción se expresa la riqueza del barroco quiteño",
//                 "web" : ""
//             },
//             "-KdXaHLGDUs5aiG9r4Kb" : {
//                 "address" : "Calle García Moreno y Chile",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXaHLGDUs5aiG9r4Kb%2Faudio%2FHotel%20Plaza%20grande.ogg?alt=media&token=cfa9410c-aeb2-4690-971e-b3b3f1ec4d71",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "https://www.plazagrandequito.com/contactos",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXaHLGDUs5aiG9r4Kb%2FHtl.%20Plz.%20Grande%20cabecera.jpg?alt=media&token=b89ce94a-8e49-47ff-9149-0f6316d5dbd8",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219612, -78.512127",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdXaHLGDUs5aiG9r4Kb%2FHtl%20Plz%20Grande%20logo.jpg?alt=media&token=1aa87fcf-a1f1-4daf-8312-1529e14960fd",
//                 "long_description" : "Primer hotel de lujo de la ciudad. Año de construcción: 1930, estilo ecléctico. Uso actual: Hotel Boutique. El edificio es ahora un hotel, por lo que no hay visitas guiadas.",
//                 "name" : "Palacio de Pizarro - Hotel Plaza Grande",
//                 "pais" : "Ecuador",
//                 "phone" : "02 251 0777",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "El primer gran hotel de la belle epoque de la ciudad",
//                 "web" : "https://www.plazagrandequito.com"
//             },
//             "-KdfZsJvwrU8J34CSfm8" : {
//                 "address" : "Calle Chile entre Venezuela y García Moreno",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfZsJvwrU8J34CSfm8%2Faudio%2Fcasa%20de%20los%20alcaldes.ogg?alt=media&token=6cbe933f-4251-4180-8824-db8b26934c65",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfZsJvwrU8J34CSfm8%2FCasa%20de%20los%20alcaldes%20cebecera.jpg?alt=media&token=7983282c-2af0-474a-b3d7-0cd4da34f173",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219711, -78.511955",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfZsJvwrU8J34CSfm8%2FCasa%20de%20los%20alcaldes%20logo.jpg?alt=media&token=c5d0be45-8b8d-4642-bc6d-031924b79074",
//                 "long_description" : "Año de construcción: 1830, Estilo historicista (neoclásico). Uso actual: Residencial, protocolar. En este sitio no hay visitas guiadas.",
//                 "name" : "Casa de los Alcaldes",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "region" : "Pichincha",
//                 "short_description" : "Residencia para los Alcaldes de la ciudad",
//                 "web" : "."
//             },
//             "-KdfcRJHtE8FOO02G7z7" : {
//                 "address" : "Convento de la Inmaculada Concepción",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfcRJHtE8FOO02G7z7%2Faudio%2Figlesia%20de%20la%20inmaculada%20concepci%C3%B3n.ogg?alt=media&token=937cb576-f01d-4328-bd07-5441b04b1cd9",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfcRJHtE8FOO02G7z7%2FIg%20Inma.%20concepci%C3%B3n%20cabecera.jpg?alt=media&token=91fe4ec7-b11a-4fb7-87b0-5f76feb92ed5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219474, -78.512233",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfcRJHtE8FOO02G7z7%2FIg%20Inma%20Concepci%C3%B3n%20logo.jpg?alt=media&token=1541342c-8636-4ef2-a7ca-a428122d455e",
//                 "long_description" : "no",
//                 "name" : "Monasterio de la Inmaculada Concepción",
//                 "pais" : "Ecuador",
//                 "phone" : "03 295 9632",
//                 "region" : "Pichincha",
//                 "short_description" : "Primer convento de monjas de clausura en el Ecuador",
//                 "web" : ""
//             },
//             "-Kdfg1p5j3tq_OqDISwM" : {
//                 "address" : "Iglesia y Convento de Santa Clara",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfg1p5j3tq_OqDISwM%2Faudio%2Fconvento%20de%20santa%20clara.ogg?alt=media&token=a69ee287-f0ee-43d7-85ab-52237cdda535",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfg1p5j3tq_OqDISwM%2Fcabecera%20cdesc.jpg?alt=media&token=eb084959-b5cc-4484-b7ed-e700730cd464",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222226, -78.516473",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfg1p5j3tq_OqDISwM%2Flogo%20cdesc.jpg?alt=media&token=20d5e471-9bab-4493-bb00-7961179bfdeb",
//                 "long_description" : "Horarios de visita: Lunes a viernes de 07h00 a 08h00; Domingos: de 08h15 a 10h00. Entrada gratuita.",
//                 "name" : "Iglesia y Convento de Santa Clara",
//                 "pais" : "Ecuador",
//                 "phone" : "02 286 9730",
//                 "region" : "Pichincha",
//                 "short_description" : "Uno de los más antiguos de Quito",
//                 "web" : "http://www.quito.com.ec/que-visitar/arte-cultura-y-patrimonio/museos/iglesia-y-monasterio-de-santa-clara-siglo-xvii"
//             },
//             "-KdfglQScR0wUaMAbYw_" : {
//                 "address" : "Iglesia y Monasterio del Carmen Alto",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfglQScR0wUaMAbYw_%2Faudio%2Fconvento%20del%20carmen%20alto.ogg?alt=media&token=87c5a9e4-2d3c-463b-bf26-1aada0922444",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "museocarmenalto@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfglQScR0wUaMAbYw_%2Fcabecera%20cdelca2.jpg?alt=media&token=44643ff4-f283-4d8b-bb7c-228642b60f0a",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222813, -78.515229",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfglQScR0wUaMAbYw_%2Flogo%20cdelca.jpg?alt=media&token=a4bfd195-016e-44e1-9d51-46afab945720",
//                 "long_description" : "Horarios de visita al museo: de miércoles a domingo de 09h30 a 17h30. Entrada: $3,00 adultos; $2,00 estudiantes con carné; $1,00 niños; tercera edad y personas con discapacidades tienen entrada libre.",
//                 "name" : "Iglesia y Monasterio del Carmen Alto",
//                 "pais" : "Ecuador",
//                 "phone" : "02 288 1513 - 02 295 5817",
//                 "region" : "Pichincha",
//                 "short_description" : "Fue establecida en la casa de la primera santa ecuatoriana, Marianita de Jesús Paredes y Flores",
//                 "web" : "http://www.museocarmenalto.gob.ec"
//             },
//             "-KdfhMcMaHFA73Ln82gH" : {
//                 "address" : "Capilla del Robo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfhMcMaHFA73Ln82gH%2Faudio%2Fcapilla%20del%20robo.ogg?alt=media&token=b00a2a8c-17e7-4cca-a7d7-13db5b9ffb59",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfhMcMaHFA73Ln82gH%2Fcapilla%20del%20robo%20cabecera.jpg?alt=media&token=d17eb1ba-4952-449f-aaf9-6d968a4c237d",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222051, -78.517509",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfhMcMaHFA73Ln82gH%2Fcapilla%20del%20robo%20logo.jpg?alt=media&token=3f5eb332-f519-4bba-b75d-bf746bb522a8",
//                 "long_description" : "no",
//                 "name" : "Capilla del Robo",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "region" : "Pichincha",
//                 "short_description" : "Esta Capilla que fue testigo de un robo muy peculiar",
//                 "web" : ""
//             },
//             "-Kdfi4GkUlZ6QBBhENcV" : {
//                 "address" : "Iglesia y Convento de Santo Domingo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfi4GkUlZ6QBBhENcV%2Faudio%2FIg%20y%20Convento%20Sto.%20Domingo.ogg?alt=media&token=b532fd40-7ea0-4118-976f-612c1e32c549",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfi4GkUlZ6QBBhENcV%2Fcabecera%20idesd.jpg?alt=media&token=0a6282e8-a6d4-4677-b21b-64307d551823",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.224181, -78.512536",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfi4GkUlZ6QBBhENcV%2Flogo%20idesd.jpg?alt=media&token=defe687a-968d-47bd-8d9a-f0908103d0cf",
//                 "long_description" : "El Convento de Santo Domingo está abierto de lunes a sábados de 06h00 a 12h00 y de 16h00 a 19h30. Los domingos de 06h00 a 13h00 y de 17h00 a 19h00.  La entrada es gratuita.",
//                 "name" : "Iglesia y Convento de Santo Domingo",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 2695 - 02 228 0518",
//                 "region" : "Pichincha",
//                 "short_description" : "Es una casa de paz y arte colonial, en medio del bullicio de la céntrica ciudad",
//                 "web" : "http://www.museosquito.gob.ec/index.php/item/56-museo-de-santo-domingo-fray-pedro-bedon"
//             },
//             "-KdfijXTdIvPhXpgOwiK" : {
//                 "address" : "Basílica del Voto Nacional",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfijXTdIvPhXpgOwiK%2Faudio%2FBas%C3%ADlica%20del%20voto%20nacional.ogg?alt=media&token=a4c1dd2b-536b-4868-9726-e8314298a96b",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfijXTdIvPhXpgOwiK%2FBasilica%20cabecera.jpg?alt=media&token=d41f1e3a-156c-41f4-928f-8ad81b06b395",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.214833, -78.507529",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfijXTdIvPhXpgOwiK%2Fbasilica%20logo.jpg?alt=media&token=ba0b8420-37a6-44c0-9af0-005671f2c0f7",
//                 "long_description" : "Horarios de visitas: Lunes a domingo de 09h00 a 17h00. Entrada: $1,00 Adultos Nacionales y $2,00 Extranjeros.",
//                 "name" : "Basílica del Voto Nacional",
//                 "pais" : "Ecuador",
//                 "phone" : "02 258 3891 - 02 228 9428",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 } ],
//                 "short_description" : "La construcción neogótica más grande del continente, y una de las más importantes del mundo",
//                 "web" : ""
//             },
//             "-KdfjJya_VsB96w0vVBd" : {
//                 "address" : "Calle Olmedo y Benalcazar",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjJya_VsB96w0vVBd%2Faudio%2Fplazoleta%20de%20la%20fundacion.ogg?alt=media&token=84bcaf79-35dd-40f6-bb32-bb7006a9d30e",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjJya_VsB96w0vVBd%2FPlz%20De%20la%20fundaci%C3%B3n%20cabecera.jpg?alt=media&token=6a6d3601-117b-4cf8-9549-8de1aa4fc48a",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.217720, -78.511929",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjJya_VsB96w0vVBd%2FPla%20de%20la%20fundaion%20Logo.jpg?alt=media&token=2b4954b0-8ae4-4dc4-a765-8f74b6b610e3",
//                 "long_description" : "En esta plaza se dio la fundación española de la ciudad por Sebastián de Benalcázar el 6 de diciembre de 1534. En ella se encuentra una estadía del fundador español.",
//                 "name" : "Plazoleta de la Fundación",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "Plaza donde nació la ciudad de Quito",
//                 "web" : ""
//             },
//             "-KdfjL--MNtOemzkzas_" : {
//                 "address" : "Iglesia de Santa Teresita",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjL--MNtOemzkzas_%2Faudio%2Figlesia%20de%20sta%2C%20Teresita.ogg?alt=media&token=a5b7121b-8f1a-4086-8395-2c3d43bb178b",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "teresitaquito@hotmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjL--MNtOemzkzas_%2Fcabecera%20idest%202.jpg?alt=media&token=4e0ef29e-82ad-4838-8059-24157fb2359e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.20478622226637824, -78.49623620510101",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfjL--MNtOemzkzas_%2Fcabecera%20idest.jpg?alt=media&token=22e754d2-59c5-493f-b36c-38916a53a0c1",
//                 "long_description" : "La Iglesia está abierta de lunes a domingo de 07h30 a 19h30 (sábados se cierra desde las 12h00 hasta 18h00). Horarios de misas: Domingos 07h30, 09h30, 11h00, 12h30 y 18h00; Lunes 07h30, 11h00, 18h30; Martes a Viernes 07h30, 11h00, 18h30; Sábados 07h30, 11h00, 18h00.",
//                 "name" : "Iglesia de Santa Teresita",
//                 "pais" : "Ecuador",
//                 "phone" : "02 223 0502 - 02 252 8184",
//                 "region" : "Pichincha",
//                 "short_description" : "Su estructura de hormigón armado destaca de los palacetes que lo rodean debido a su color y altura",
//                 "web" : ""
//             },
//             "-KdflWPOB8Gs4ncIS7wu" : {
//                 "address" : "Iglesia y Convento de San Agustín",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflWPOB8Gs4ncIS7wu%2Faudio%2Figlesia%20y%20convento%20de%20San%20Agustin.ogg?alt=media&token=c86dfb28-e5d6-4d04-a624-c347212a7de1",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "migueldesantiago@uio.delconet.net",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflWPOB8Gs4ncIS7wu%2Fcabecera%20idesa.jpg?alt=media&token=ba8448ac-1b54-4529-b3a3-2b2e77659520",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220514, -78.510623",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflWPOB8Gs4ncIS7wu%2Flogo%20idesa.jpg?alt=media&token=1af12977-9ddb-49e3-93b4-d00899779e5f",
//                 "long_description" : "Horarios de visitas: de lunes a viernes de 09h00 a 12h30 y de 14h00 a 17h00. Sábados de 09h00 a 13h00. Entradas al Museo Miguel de Santiago: $1,00 adultos, $0,50 estudiantes, niños y tercera edad.",
//                 "name" : "Iglesia y Convento de San Agustín",
//                 "pais" : "Ecuador",
//                 "phone" : "02 295 5525",
//                 "region" : "Pichincha",
//                 "short_description" : "En su sala Capitular, el pueblo de Quito ratificó la voluntad de independizarse de España",
//                 "web" : ""
//             },
//             "-KdflYZOvUfZMA_sbMjq" : {
//                 "address" : "Calle García Moreno y Chile",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflYZOvUfZMA_sbMjq%2Faudio%2Fplaza%20de%20la%20indpendencia.ogg?alt=media&token=ffc186af-c084-423a-a878-79d963c6d234",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflYZOvUfZMA_sbMjq%2FPlz%20Grande%20cabecera%201.jpg?alt=media&token=a6e95ece-cd49-4082-bc59-adf0809c9865",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220170, -78.512172",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdflYZOvUfZMA_sbMjq%2FPlz%20grande%20logo.jpg?alt=media&token=95268171-a846-4196-add0-be6a874e21a5",
//                 "long_description" : "Esta plaza ha pasado por muchos cambios desde su construcción y ha sido testigo de eventos históricos, acciones políticas y ciudadanas en incluso asesinato de un presidente.",
//                 "name" : "Plaza de la Independencia",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 } ],
//                 "short_description" : "También conocida como la Plaza Grande",
//                 "web" : ""
//             },
//             "-KdfnRx26i9tlQpduik9" : {
//                 "address" : "Iglesia de Santa Bárbara",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfnRx26i9tlQpduik9%2Faudio%2Figlesia%20de%20santa%20barbara.ogg?alt=media&token=d9959223-663f-4595-ac82-72de9a201152",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfnRx26i9tlQpduik9%2Fcabecera%20ide%20sb.jpg?alt=media&token=05caae82-fc43-4d47-894b-81326168948e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.217536, -78.510454",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfnRx26i9tlQpduik9%2Flogo%20idesb.jpg?alt=media&token=e5573a20-1b3f-45fe-8204-94ee521b7f95",
//                 "long_description" : "Horarios de visitas: de lunes a viernes de 07h00 a 09h00, sábados de 16h00 a 18h00, domingos de 07h00 a 10h00.  La entrada es gratuita.",
//                 "name" : "Iglesia de Santa Bárbara",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 8637",
//                 "region" : "Pichincha",
//                 "short_description" : "La parroquia fue residencia temporal de los primeros jesuitas llegados a Quito",
//                 "web" : ""
//             },
//             "-KdfoeNUNgasDzB1XiaU" : {
//                 "address" : "Capilla de los Milagros",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfoeNUNgasDzB1XiaU%2Faudio%2Fcapilla%20de%20los%20milagros.ogg?alt=media&token=8d1dba88-750a-441c-ace7-a4f8c91675e0",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "losmilagrosquito@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfoeNUNgasDzB1XiaU%2Fcabecera%20cdlm.jpg?alt=media&token=60ec312b-5e03-4729-b348-3a54faedf1f0",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.227394, -78.510056",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfoeNUNgasDzB1XiaU%2Flogo%20cdlm.jpg?alt=media&token=7b73d1ed-35e6-4879-b819-2eb469b3942a",
//                 "long_description" : "Horarios de atención del restaurante: Lunes a Jueves 12h00 (sólo con reservación); Viernes y Sábado 12h00 a 22h00; Domingo de 09h30 a 16h00",
//                 "name" : "Capilla de los Milagros",
//                 "pais" : "Ecuador",
//                 "phone" : "098 921 7961 (mobile) - 02 295 5691",
//                 "region" : "Pichincha",
//                 "short_description" : "Templo a la fe católica de Quito",
//                 "web" : "http://www.losmilagrosquito.com"
//             },
//             "-Kdfols99HVUbU2mS4X8" : {
//                 "address" : "Calle García Moreno y Chile",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfols99HVUbU2mS4X8%2Faudio%2Funion_3-15_monumento_a_la_indpendencia.ogg?alt=media&token=3f14f3dc-deea-447d-b5bd-7b04c6c15d76",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfols99HVUbU2mS4X8%2FMomumento%20a%20la%20independencia%20cabecera.jpg?alt=media&token=340b39b2-198c-4c9c-8304-bc205c85d8d1",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220071, -78.512076",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdfols99HVUbU2mS4X8%2FMonumento%20independencia%20logo%20.jpg?alt=media&token=42d3e552-6361-4197-acda-46b6b636b7ae",
//                 "long_description" : "En este monumento están representados los símbolos de independencia de Quito, la ciudad Luz de América.",
//                 "name" : "Monumento a la Independencia",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "10 de agosto de 1809: Primer Grito de Independencia ",
//                 "web" : ""
//             },
//             "-KdfqlH3tthWNwEcvQbY" : {
//                 "address" : "Iglesia de San Sebastián",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfqlH3tthWNwEcvQbY%2Faudio%2Figlesia%20de%20san%20sebastian.ogg?alt=media&token=d0fc60c5-add8-414c-bd2c-cc0bbc406eb6",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfqlH3tthWNwEcvQbY%2FSan%20Sebastian%20cabecera.jpg?alt=media&token=b21660d8-fdd3-41c7-951a-e0d6255d4037",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.228716, -78.513374",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfqlH3tthWNwEcvQbY%2FSan%20Sebastian%20logo.jpg?alt=media&token=9cb28ae2-972e-479a-aa82-fc70327592fd",
//                 "long_description" : "no",
//                 "name" : "Iglesia de San Sebastían",
//                 "pais" : "Ecuador",
//                 "phone" : "no",
//                 "region" : "Pichincha",
//                 "short_description" : "San Sebastián: protector de las pestes y patrono de los militares",
//                 "web" : ""
//             },
//             "-KdftQ18PPNbq8yEK-3n" : {
//                 "address" : "Calle Guayaquil y Manabí",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdftQ18PPNbq8yEK-3n%2Faudio%2Fplaza%20del%20teatro.ogg?alt=media&token=3b3ca5f2-4fa9-409a-a316-75aa2b2f3aca",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdftQ18PPNbq8yEK-3n%2Fcabecera%20pdel%20t.jpg?alt=media&token=efd2c5ba-c1d1-416d-9980-06ca6fb8db1a",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.218899, -78.508560",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdftQ18PPNbq8yEK-3n%2Flogo%20pdel%20t.jpg?alt=media&token=ef17bbd6-4e4c-4f16-b47c-f001314d88dd",
//                 "long_description" : "Espacio público de libre visita",
//                 "name" : "Plaza del Teatro",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Antes llamada plaza de las Carnicerías, y ahora espacio de arte",
//                 "web" : ""
//             },
//             "-KdfunL5eE1mRS1bBK--" : {
//                 "address" : "Calle Guayaquil y Rocafuerte",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfunL5eE1mRS1bBK--%2Faudio%2Fplaza%20de%20santo%20domingo.ogg?alt=media&token=e0cc9b6f-5c70-45be-92ed-c3b73dbddc46",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfunL5eE1mRS1bBK--%2FPlz%20Santo%20domingo%20Cabecera.jpg?alt=media&token=59e52a45-5339-48b5-ab94-2ef5d3f2f2ce",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223516, -78.512875",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdfunL5eE1mRS1bBK--%2Fplz%20Santo%20domingo%20logo.jpg?alt=media&token=32d2b896-111d-444d-a813-30f64b603691",
//                 "long_description" : "Espacio público de libre visita",
//                 "name" : "Plaza de Santo Domingo",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Una de las tres plazas originales de la ciudad española del siglo XVI",
//                 "web" : ""
//             },
//             "-Kdg2rqRcjfFcBix6fsr" : {
//                 "address" : "Avenida José de Sucre y Benalcázar",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg2rqRcjfFcBix6fsr%2Faudio%2Fplaza%20de%20san%20francisco.ogg?alt=media&token=f7b17f8e-0a61-4969-904e-0ace1394342a",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg2rqRcjfFcBix6fsr%2FPlz%20San%20Francisco%20cabecera.jpg?alt=media&token=41b5978d-c84a-409a-8f27-a0881cb97449",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220705, -78.514792",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg2rqRcjfFcBix6fsr%2Fplz%20San%20francisco%20logo.jpg?alt=media&token=ccd29dee-2e76-4a1f-917a-fbbaf0d79be0",
//                 "long_description" : "Espacio público de libre visita",
//                 "name" : "Plaza de San Francisco",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Construida sobre antiguas ruinas del Tianguiz, o mercado aborigen",
//                 "web" : ""
//             },
//             "-Kdg6LYExWLk0EJeAZkQ" : {
//                 "address" : "Calle Guayaquil y Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg6LYExWLk0EJeAZkQ%2Faudio%2Fplaza%20chica.ogg?alt=media&token=c1872747-c675-43ac-a627-27d6f8c9d0d7",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg6LYExWLk0EJeAZkQ%2FPlaza%20chica%20cabecera.jpg?alt=media&token=1fe75901-b0db-4e7c-9537-8bde473253ca",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220981, -78.511376",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg6LYExWLk0EJeAZkQ%2Fplz%20chica%20logo.jpg?alt=media&token=e6c9b925-8895-41c2-bd02-a5b8e3f86b69",
//                 "long_description" : "Espacio público de libre visita",
//                 "name" : "Plaza Chica",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Lleva este nombre por su cercanía y comparación con la “Plaza Grande”.",
//                 "web" : ""
//             },
//             "-Kdg7y42YVpJNjHJ0y_8" : {
//                 "address" : "Loma del Panecillo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg7y42YVpJNjHJ0y_8%2Faudio%2FEl%20Panecillo.ogg?alt=media&token=9bf3c552-c2b4-4a86-aebe-d732fae5a879",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg7y42YVpJNjHJ0y_8%2FPanecillo%20cabecera%201.jpg?alt=media&token=cb360460-8524-4263-bacb-3b5ece16cefd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.228748, -78.518716",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdg7y42YVpJNjHJ0y_8%2Fpanecillo%20logo.jpg?alt=media&token=12c2dc7f-2861-485e-a477-bacdd9a20557",
//                 "long_description" : "Espacio público de libre visita",
//                 "name" : "Loma del Panecillo",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-ios-paw",
//                     "name" : "Pet Friendly"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 } ],
//                 "short_description" : "El mirador natural que divide a Quito en dos: Norte y Sur",
//                 "web" : ""
//             },
//             "-KdgAeuoc5ttkpeMZPvX" : {
//                 "address" : "Avenida Gran Colombia y Guayaquil",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgAeuoc5ttkpeMZPvX%2Faudio%2FMonumento%20a%20Simon%20Bolivar.ogg?alt=media&token=f2d5c2fd-ab94-4548-a9f3-506707789d66",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgAeuoc5ttkpeMZPvX%2FCabecera%20SB.jpg?alt=media&token=dd05c16f-146f-4a72-adb6-dfc6071032b5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.21607824604139975, -78.50395023822784",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgAeuoc5ttkpeMZPvX%2Flogo%20sb.jpg?alt=media&token=635722ca-4fff-45f9-bf21-81ace664600e",
//                 "long_description" : "Fue una de las figuras más destacadas de la emancipación americana frente a España. Contribuyó a inspirar y concretar de manera decisiva la independencia de las actuales Bolivia, Colombia, Ecuador, Panamá, Venezuela y la reorganización del Perú.",
//                 "name" : "Monumento a Simon Bolivar",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Simón José Antonio de la Santísima Trinidad Bolívar Ponte y Palacios Blanco, conocido como Simón Bolívar",
//                 "web" : ""
//             },
//             "-KdgFT2TiriswcPjbqQA" : {
//                 "address" : "Convento del Buen Pastor - Benigno Vela 731 y Av. Maldonado, sector La Recoleta",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgFT2TiriswcPjbqQA%2Faudio%2Fconvento%20del%20buen%20pastor.ogg?alt=media&token=e3a4f813-565b-4c83-9006-623a830a90cc",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.231095, -78.513330",
//                 "logo" : "",
//                 "long_description" : "Horarios de Visita: Lunes a viernes de 10h00 a 13h00 – 15h00 a 17h00; Jueves solo en la tarde. Entrada: $3 Adultos, $1,50 (niños, tercera edad y estudiantes con carnet)",
//                 "name" : "Convento del Buen Pastor",
//                 "pais" : "Ecuador",
//                 "phone" : "099 839 7714 - 02 228 0616",
//                 "region" : "Pichincha",
//                 "short_description" : "Fundado por el famoso religioso y pintor quiteño fray Pedro Bedón",
//                 "web" : ""
//             },
//             "-KdgGdrOLAYkGvSCMz6z" : {
//                 "address" : "Iglesia de San Blas",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgGdrOLAYkGvSCMz6z%2Faudio%2Figlesia%20de%20san%20blas.ogg?alt=media&token=9e4912ce-375a-4fa0-8e60-0c563e536804",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgGdrOLAYkGvSCMz6z%2FIglesia%20San%20Blas%20cabecera.jpg?alt=media&token=d93fb63b-e8b1-4e83-9c76-8706e101e0e6",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.218035, -78.505128",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgGdrOLAYkGvSCMz6z%2FIg%20San%20Blas%20logo.jpg?alt=media&token=3bfa0f9e-60f0-4093-9313-b2334851f10e",
//                 "long_description" : "Horarios de visitas: lunes a viernes de 08h00 a 12h00. Entrada gratuita.",
//                 "name" : "Iglesia de San Blas",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 1893",
//                 "region" : "Pichincha",
//                 "short_description" : "En el límite norte del Quito Colonial, la parroquia más antigua de la ciudad",
//                 "web" : "https://sanblasquito.wordpress.com/acerca-de/"
//             },
//             "-KdgIMVFSa7MeEhUA_yv" : {
//                 "address" : "Santuario de Guápulo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgIMVFSa7MeEhUA_yv%2Faudio%2Fsantuario%20de%20guapulo.ogg?alt=media&token=19e42b41-489d-4c51-9c8a-3a215dc4d005",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "no",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgIMVFSa7MeEhUA_yv%2FCabecera%20sdg.jpg?alt=media&token=6502c1f3-5b17-4213-a95c-e6a4adbb2fab",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.200288, -78.475402",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgIMVFSa7MeEhUA_yv%2FLogo%20sdg.jpg?alt=media&token=05e90b4e-5df5-48e6-87c2-978fb10ab668",
//                 "long_description" : "no",
//                 "name" : "Santuario de Guápulo",
//                 "pais" : "Ecuador",
//                 "phone" : "02 256 5652",
//                 "region" : "Pichincha",
//                 "short_description" : "Un santuario en honor a la Virgen María en el camino a las tierras bajas de la amazonía",
//                 "web" : ""
//             },
//             "-KdgJLihF6jKOafD4aPu" : {
//                 "address" : "Templo de la Dolorosa",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgJLihF6jKOafD4aPu%2Faudio%2Ftemplo%20de%20la%20dolorosa.ogg?alt=media&token=0c32a76c-22b4-4ab3-866d-15c17a156e05",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : "info@parroquialadolorosa.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgJLihF6jKOafD4aPu%2Fcabecera%20idelad.jpg?alt=media&token=7ada9e43-e36b-4fcc-84fb-81f25403f536",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.185826, -78.496320",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgJLihF6jKOafD4aPu%2Flogo%20idelad.jpg?alt=media&token=2d7d3801-1718-4374-88c8-2aff4c415eeb",
//                 "long_description" : "Martes a Sábado: Horarios de atención en secretaría: Martes a Sábado de 08h00 a 12h00 y de 15h00 a 18h00; Domingo: 08h00 a 13h00. Despacho Parroquial: Martes a Viernes: 09h30 a 12h00 y de 15h00 a 18h00",
//                 "name" : "Templo Nacional de la Dolorosa",
//                 "pais" : "Ecuador",
//                 "phone" : "02 245 0826 - 02 224 5550",
//                 "region" : "Pichincha",
//                 "short_description" : "El templo de los devotos del Colegio San Gabriel",
//                 "web" : "http://www.parroquialadolorosa.org"
//             },
//             "-KdgvAKvJCyreqOZUjDZ" : {
//                 "address" : "Loma del Panecillo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgvAKvJCyreqOZUjDZ%2Faudio%2Fvirgen%20del%20Panecillo.ogg?alt=media&token=4093662a-03e4-43b5-8fff-71fa4e59d3cb",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgvAKvJCyreqOZUjDZ%2Fvirgen_panecillo_quito%20cabecera.jpg?alt=media&token=80b7c38b-389d-40cb-a6ad-949dc11de327",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.228926, -78.518605",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdgvAKvJCyreqOZUjDZ%2Fvirgen%20del%20panecillo%20logo.jpg?alt=media&token=3f3625bf-46c4-41ce-b640-5bce58c55830",
//                 "long_description" : "Con sus 30 metros de altura, y 11 más si se suma la base, ocupa el lugar número 58 entre las estatuas más altas del mundo, superando incluso al famoso Cristo Redentor de la ciudad de Río de Janeiro. Es además la escultura de aluminio más alta del planeta.",
//                 "name" : "Virgen del Panecillo",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 } ],
//                 "short_description" : "También conocida como Virgen de Quito ",
//                 "web" : ""
//             },
//             "-Kdh2U7-9o7DnKw5nhf3" : {
//                 "address" : "Calle Garcia Moreno entre Espejo y Chile",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh2U7-9o7DnKw5nhf3%2Faudio%2Fgranaderos%20de%20tarqui.ogg?alt=media&token=5eb3db82-c207-417b-aded-99ab8c7274a6",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh2U7-9o7DnKw5nhf3%2FGranaderos%20tarqui%20cabecera.jpg?alt=media&token=8b119802-513e-4209-8316-e05498d7d815",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219801, -78.512511",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh2U7-9o7DnKw5nhf3%2FGranaderos%20tarqui%20logo.jpg?alt=media&token=12166a8c-b726-4974-8afa-63a25b027bc0",
//                 "long_description" : "El Grupo Escolta Presidencial Granaderos de Tarqui, es una unidad especial de caballería del Ejército ecuatoriano, que conforma la guardia de honor de la Presidencia de la República y resguarda el Palacio de Carondelet en Quito, sede del Gobierno de la República del Ecuador.",
//                 "name" : "Granaderos de Tarqui",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Guardia presidencial",
//                 "web" : ""
//             },
//             "-Kdh523OYQ2Fs4Ma96MG" : {
//                 "address" : "Calle Morales entre Maldonado y García  Moreno",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh523OYQ2Fs4Ma96MG%2Faudio%2Fcalle%20la%20ronda.ogg?alt=media&token=06ca21b8-5d93-4dcf-8d92-42c531199452",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : "lpozo@quito-turismo.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh523OYQ2Fs4Ma96MG%2Fcalle%20la%20ronda%20cabecera.jpg?alt=media&token=6f2ad348-9e9d-42c9-8880-4bc6c69956a7",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.22443594756911092, -78.51377248764036",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kdh523OYQ2Fs4Ma96MG%2FCalle%20lo%20ronda%20logo.jpg?alt=media&token=fed09b97-ed86-477b-a564-ef72800f2406",
//                 "long_description" : "La Ronda también es una calle que nos lleva a nuestro pasado indígena, y en esas ancestrales épocas no se llamaba La Ronda, como le nombraron los españoles o como la conocemos en la actualidad, si no que se supone que su nombre original fue la de “El Chaquiñán”, término que ahora se lo traduce como camino o sendero. Se presume que esta pequeña calle ya se encontró establecida y trazada hacia 1480, cuando los Incas llegaron por primera vez a Quito",
//                 "name" : "Calle La Ronda",
//                 "pais" : "Ecuador",
//                 "phone" : "02 2 570 786",
//                 "region" : "Pichincha",
//                 "short_description" : "Es una calle tradicional, asociada con la bohemia y el arte del Quito de antaño",
//                 "web" : ""
//             },
//             "-KdmFLRPujMBf2jjree4" : {
//                 "address" : "Calle Venezuela y Mejia",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmFLRPujMBf2jjree4%2Faudio%2FAntiguo%20circulo%20militar.ogg?alt=media&token=9873b6f0-3e4f-49b3-af37-94295075ae65",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "rrpp@circulomilitar.org ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmFLRPujMBf2jjree4%2FCabecera%20acm.jpg?alt=media&token=6d7d1b7e-79a4-441f-8946-35fba32261aa",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219215, -78.510611",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmFLRPujMBf2jjree4%2Flogo%20acm.jpg?alt=media&token=6479a1d5-87ee-4131-a370-9c859ba4f0c9",
//                 "long_description" : "Recoge el estilo neoclásico que imperó en la época y, conjuntamente con otros edificios de la misma línea, sientan las bases de un nuevo tipo de arquitectura, que apoyaron al embellecimiento de la ciudad de Quito a la altura de las capitales europeas.. Entrada: libre.",
//                 "name" : "Antiguo Circulo Militar",
//                 "pais" : "Ecuador",
//                 "phone" : "02 257 0123",
//                 "region" : "Pichincha",
//                 "short_description" : "Una de las construcciones monumentales del Centro Histórico de Quito",
//                 "web" : "http://www.museosdefensa.gob.ec/index.php/historicos/antiguo-circulo-militar"
//             },
//             "-KdmHcHUFAqdGbeZVCss" : {
//                 "address" : "Calle Briceño y 10 de Agosto",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmHcHUFAqdGbeZVCss%2Faudio%2Fbanco%20central%20del%20ecuador.ogg?alt=media&token=dc69fba5-7d11-4773-915e-7768a67500b0",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "contacto@bce.ec ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmHcHUFAqdGbeZVCss%2Fcabecera%20bc.jpg?alt=media&token=e3f2b16b-b508-41a8-92bc-21de674c44d9",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.21591195026414478, -78.50458860397339",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmHcHUFAqdGbeZVCss%2Flogo.jpg?alt=media&token=10038118-945d-4625-aee1-d791407ce3b2",
//                 "long_description" : "Año de construcción: 1963 - 1968. Estilo internacional (racionalista). Uso actual: Oficina del Estado.",
//                 "name" : "Banco Central del Ecuador",
//                 "pais" : "Ecuador",
//                 "phone" : "02 393 8600",
//                 "region" : "Pichincha",
//                 "short_description" : "Fue establecido con la misión de promover el desarrollo económico del país.",
//                 "web" : "https://www.bce.fin.ec"
//             },
//             "-KdmJaQdGc5rWtyHx2QL" : {
//                 "address" : "Calle Garcia Moreno y Sucre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmJaQdGc5rWtyHx2QL%2Faudio%2Fcasa%20cornejo%20cevallos.ogg?alt=media&token=32be295b-9b86-4d7d-80a1-295b132f3529",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmJaQdGc5rWtyHx2QL%2FCabecera.jpg?alt=media&token=06c11c88-b827-4cf4-8ed3-359f619e3702",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221204, -78.513533",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KdmJaQdGc5rWtyHx2QL%2Flogo.jpg?alt=media&token=efb70041-c169-4cb1-8e62-db473cc247a1",
//                 "long_description" : "En la decoración en planta alta de las ventanas con balcón y de las puertas interiores: el vano rebajado, está coronado por un querubín desnudo que se encuentra sentado sobre la clave con su miembro erecto, y una guirnalda que cae a los lados del marco exterior. ",
//                 "name" : "Casa Cornejo Cevallos",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "A mediados del siglo XVI el terreno era ocupado por los primeros jesuitas que llegaron a la ciudad",
//                 "web" : "."
//             },
//             "-Ke1d6FQzFU9IUcnomhB" : {
//                 "address" : "Calle Benalcázar y Chile",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1d6FQzFU9IUcnomhB%2Faudio%2Fpalacio%20de%20la%20viceprecidencia.ogg?alt=media&token=e6d296a0-5750-40ec-800b-b36f2f9f5de0",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "info@vicepresidencia.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1d6FQzFU9IUcnomhB%2Fcabecerapv.jpg?alt=media&token=943860d3-f7a3-48b8-813d-3b0aa491a44e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.218733, -78.512549",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1d6FQzFU9IUcnomhB%2Flogo.jpg?alt=media&token=d32108fc-58e8-40e2-bd75-60efc8f99c7b",
//                 "long_description" : "El nombre original del edificio fue el de Palacio de las Comunicaciones (por albergar también las  oficinas de telégrafos), pero terminaría siendo llamado popularmente como \"Palacio de Correos\". No se permiten visitas a este edificio.",
//                 "name" : "Palacio de la Vicepresidencia",
//                 "pais" : "Ecuador",
//                 "phone" : "02 258 4574 - 02 258 4575",
//                 "region" : "Pichincha",
//                 "short_description" : "Oficinas y residencia de la Vicepresidencia de la República",
//                 "web" : "http://www.vicepresidencia.gob.ec"
//             },
//             "-Ke1imM0v-usGd-WyIyH" : {
//                 "address" : "Calle García Moreno y Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1imM0v-usGd-WyIyH%2Faudio%2Fmuseo%20de%20cera.ogg?alt=media&token=33c4d9e0-2e34-407a-bbaa-7f7df32d8bdc",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1imM0v-usGd-WyIyH%2Fcabecera%20mdc.jpg?alt=media&token=4ffc0d39-c2c6-471e-b356-35db6d37e257",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220149, -78.512843",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1imM0v-usGd-WyIyH%2Flogo%20mdc.jpg?alt=media&token=8c25285f-1627-4af7-b540-4db8b24d3b26",
//                 "long_description" : "Horarios de visita: Martes a Sábado 09h00 a 17h30; Domingo 10h00 a 16h00. Entrada: $1,50 Adultos; $0,75 Estudiantes con carnet; $0,50 Niños de 5 a 11 años, Adultos mayores y Personas con discapacidad",
//                 "name" : "Real Cuartel de Lima",
//                 "pais" : "Ecuador",
//                 "phone" : "02 395 2300 - ext. 15535 – 15528 - 15507",
//                 "region" : "Pichincha",
//                 "short_description" : "Hoy es el Museo de Cera, con la famosa escena de la masacre de los héroes de la independencia",
//                 "web" : "http://www.museosquito.gob.ec/index.php/item/44-museo-alberto-mena-caamano"
//             },
//             "-Ke1kbFTwxyJqVpg-Dg5" : {
//                 "address" : "Calle Bolívar y Cuenca",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1kbFTwxyJqVpg-Dg5%2Faudio%2FCasa%20Gangotena.ogg?alt=media&token=94335ecc-8230-43e4-8059-e97ddf7096d5",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "info@casagangotena.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1kbFTwxyJqVpg-Dg5%2Fcabecera%20cg.jpg?alt=media&token=da3ca3a5-36d1-4e46-8f79-32ce71e5b828",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221288, -78.515417",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke1kbFTwxyJqVpg-Dg5%2Flogo%20cg.jpg?alt=media&token=c29153ed-fadd-41b8-bb25-55bc6f540940",
//                 "long_description" : "Año de construcción edificio actual: 1914, sobre la mansión del siglo XVI. Estilo ecléctico. Uso actual: hotel boutique. En este sitio no hay visitas guiadas. ",
//                 "name" : "Casa Gangotena",
//                 "pais" : "Ecuador",
//                 "phone" : "02 400 8000",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Construida sobre antiguos asentamientos Incas",
//                 "web" : "www.casagangotena.com/es/"
//             },
//             "-Ke5nTSUmDH8aSb84Hm2" : {
//                 "address" : "Calle Guayaquil, entre Bolívar y Rocafuerte",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke5nTSUmDH8aSb84Hm2%2Faudio%2Fcasa%20de%20Santa%20Helena.ogg?alt=media&token=e0e6d3ab-c1a4-4b61-8a53-b979ba0e152d",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223402, -78.513165",
//                 "logo" : "",
//                 "long_description" : "Año de construcción: siglo XVII. Estilo historicista (neoclásico). Uso actual: privado. En este edificio no hay visitas guiadas. El edificio está ocupado por locales comerciales y viviendas.",
//                 "name" : "Casa de Santa Helena",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "Donde nació el amor en el Mariscal Sucre",
//                 "web" : ""
//             },
//             "-Ke6FLkPi9t7TCbEJc9W" : {
//                 "address" : "Calle Guayaqui y Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6FLkPi9t7TCbEJc9W%2Faudio%2Fedifico%20la%20previsora.ogg?alt=media&token=c336696a-9993-4f44-bc22-6e3849c9d5ed",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6FLkPi9t7TCbEJc9W%2FEdf%20La%20previsora%20cabecera.jpg?alt=media&token=d5b6eaa1-648d-4bd1-a2a2-335d5a6e97b2",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221190, -78.511353",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6FLkPi9t7TCbEJc9W%2Fedf%20la%20previsora%20logo.jpg?alt=media&token=13a48816-9a2d-4aa1-b777-7856aa71bd55",
//                 "long_description" : "Con sus once pisos en el bloque más alto, constituye el primer edificio, en altura, de la ciudad, y por ello representa un ícono del salto a la modernidad que vivió Quito a mediados del siglo XX. Hoy, este edificio se encuentra desocupado.",
//                 "name" : "Edificio de la Previsora",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "El primer \"rascacielos\" ecuatoriano",
//                 "web" : ""
//             },
//             "-Ke6HMpwX9sPak_0yjez" : {
//                 "address" : "Calle Sucre y Garcia Moreno",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6HMpwX9sPak_0yjez%2Faudio%2Fantiguo%20banco%20central%20del%20ecudor.ogg?alt=media&token=a34c38d6-8c79-40b7-9c7e-f8b658a1500f",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "museo@bce.ec ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6HMpwX9sPak_0yjez%2Fcabecera%20mn.jpg?alt=media&token=6a366bc1-83da-44b9-b21e-3daaccf14905",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221175, -78.513841",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke6HMpwX9sPak_0yjez%2Flogo%20abc.jpg?alt=media&token=23725bec-2fb1-4b88-b1eb-d962358f0048",
//                 "long_description" : "Horario de visitas: Martes a viernes desde las 09h00 a 17h00; Sábado, domingo y feriados desde las 10h00 a las 16h00. El ingreso para turistas ecuatorianos es gratuito. Turistas extranjeros $1. Estudiantes / Tercera edad: $0,50. Niños: $0,25",
//                 "name" : "Antiguo Banco Central del Ecuador",
//                 "pais" : "Ecuador",
//                 "phone" : "02 258 9284",
//                 "region" : "Pichincha",
//                 "short_description" : "Museo Numismático",
//                 "web" : "www.bce.fin.ec/index.php/museo-numismatico1"
//             },
//             "-Ke9CulgFHCumS0C8Sqj" : {
//                 "address" : "Calle Benalcázar y Olmedo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9CulgFHCumS0C8Sqj%2Faudio%2Fcasa%20de%20Benalcazar.ogg?alt=media&token=a569260e-5bbd-45b0-b553-083397e7a1b8",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "iech.quito@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9CulgFHCumS0C8Sqj%2Fcabecera%20mcdeb.jpg?alt=media&token=21d8707e-cc76-4af8-b01f-cde90161cf7b",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.217719, -78.511754",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9CulgFHCumS0C8Sqj%2Flogo%20mcdeb.jpg?alt=media&token=329c4a8e-22c3-4dee-908c-15d95105c293",
//                 "long_description" : "En este sitio se encuentra: el Museo “Conde Urquijo”, con de la escuela quiteña de los siglos XVI, XVII y XVIII; Biblioteca;  un espacio destinado a la presentación de conciertos, talleres, conferencias, seminarios, danza, teatro, presentación de obras literarias, entre otras. Horarios de visitas: lunes a viernes 09h00 a 13h00. Entrada:  niños y adultos mayores $0,50;  público en general $1,00.",
//                 "name" : "Casa de Benalcázar",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 8102 - 02 295 5219 - 098 199 6826",
//                 "region" : "Pichincha",
//                 "short_description" : "Instituto Ecuatoriano de Culturas Hispánicas",
//                 "web" : "http://www.museosquito.gob.ec/index.php/item/36-instituto-ecuatoriano-de-cultura-hispanica"
//             },
//             "-Ke9FFpk2wkJqJB_JS90" : {
//                 "address" : "Calle Venezuela y Mejía",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9FFpk2wkJqJB_JS90%2Faudio%2Fmansion%20eguiguren.ogg?alt=media&token=0423062e-ead8-4f65-b85d-fb4dff8cc90c",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9FFpk2wkJqJB_JS90%2FMansi%C3%B3n%20Eguiguren%20cabecera.jpg?alt=media&token=f614dcee-d051-463d-b994-d18dca3c7686",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219370, -78.511043",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9FFpk2wkJqJB_JS90%2FMansi%C3%B3n%20Eguiguren%20logo.jpg?alt=media&token=1d1929c3-3d8d-4d39-9c15-d8c0cd119d7a",
//                 "long_description" : "El solar perteneció durante siglos a la Fábrica de la Catedral, es decir, el brazo financiero de la Diócesis de Quito, encargada de la administración de sus fondos y de la construcción de edificios y templos asociados. La casa responde, en su mayor parte, al lenguaje arquitectónico del art déco, caracterizado por las líneas rectas y el uso de figuras geométricas.",
//                 "name" : "Mansión Eguiguren ",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Antigua Cancillería",
//                 "web" : "."
//             },
//             "-Ke9H_CPWccqDZ1DTmQd" : {
//                 "address" : "Avenida Colón y José María Urbina",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9H_CPWccqDZ1DTmQd%2Faudio%2Fvilla%20mantilla.ogg?alt=media&token=59c1d082-b0ad-4648-8f7a-c8c3c746b437",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "fundinnoed@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9H_CPWccqDZ1DTmQd%2Fcabecera%20vm.jpg?alt=media&token=64dc501c-82e1-41fd-96f3-d33550e4f9a0",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.201929, -78.487361",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9H_CPWccqDZ1DTmQd%2Flogovm.jpg?alt=media&token=2184862f-536c-4957-8f59-f8507753df96",
//                 "long_description" : "Una de las pocas mansiones que aún se puede ver en esta avenida. Este reducto de la arquitectura burguesa quiteña, fue levantado como residencia para la familia Mantilla-Ortega, propietarios del célebre Diario El Comercio. Hoy, el edificio está ocupado por la Fundación Innovación en la Educación.",
//                 "name" : "Villa Mantilla",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 4035",
//                 "region" : "Pichincha",
//                 "short_description" : "Casa de grandes emprendedores.",
//                 "web" : ""
//             },
//             "-Ke9J-N5rCJPS7Jv7Zen" : {
//                 "address" : "Avenida 6 de Diciembre y Wilson",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9J-N5rCJPS7Jv7Zen%2Faudio%2Fmansion%20plaza%20lasso.ogg?alt=media&token=4e0f1dd2-9dd4-4540-bb67-0126057f8c52",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "gestioncultural@fce.com.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9J-N5rCJPS7Jv7Zen%2Fcabecera%20mplz%20lasso.jpg?alt=media&token=2e9cfc35-e648-4b98-97e7-27c81c24f3b5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.204951, -78.490664",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9J-N5rCJPS7Jv7Zen%2Flogo%20mpl.jpg?alt=media&token=63c7520b-6c11-4316-b05d-0caab82af196",
//                 "long_description" : "Año de construcción: 1940. Estilo historicista (neocolonial). En esta casa se instaló la Academia Diplomática a inicios del siglo XXI, y después fue cedida en comodato a la Unión de Naciones de Suramérica (UNASUR) para instalar la sede provisional de la Secretaría Permanente de este organismo. Uso actual: Centro Cultural Carlos Fuentes que busca promover la cultura mediante expresiones culturales.",
//                 "name" : "Mansión Plaza Lasso",
//                 "pais" : "Ecuador",
//                 "phone" : "02 254 9817 - 02 900 6653",
//                 "region" : "Pichincha",
//                 "short_description" : "Casa de presidentes",
//                 "web" : "http://www.fce.com.ec"
//             },
//             "-Ke9MP9lmxSIq35HsmYK" : {
//                 "address" : "Calle Plaza y 18 de Septiembre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9MP9lmxSIq35HsmYK%2Faudio%2Fmansion%20de%20la%20Sinfonica%20nacional.ogg?alt=media&token=5fa608ab-1cb7-492b-9c82-d76cbba5952a",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "orquesta@sinfonicanacional.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9MP9lmxSIq35HsmYK%2Fcabecera%20osn.jpg?alt=media&token=7b93972a-fd31-4894-b066-0b7c08eccbb4",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.208970, -78.494440",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9MP9lmxSIq35HsmYK%2Flogo%20osn.jpg?alt=media&token=c850f277-1783-4a57-a95b-063ff3a7e025",
//                 "long_description" : "Año de construcción: 1909. Estilo historicista (neoclásico). Uso actual: centro cultural, oficinas. En este sitio no hay visitas guiadas",
//                 "name" : "Orquesta Sinfónica Nacional",
//                 "pais" : "Ecuador",
//                 "phone" : "02 382 2642",
//                 "region" : "Pichincha",
//                 "short_description" : "El típico ejemplo de las mansiones y palacetes que se establecieron en el sector de La Mariscal a inicios del siglo XX",
//                 "web" : "http://www.sinfonicanacional.gob.ec/site/"
//             },
//             "-Ke9ZmMvTPtyyv3NeFWt" : {
//                 "address" : "Juan León Mera N 24-67 y J.Pinto",
//                 "audio" : "",
//                 "cat" : "-Ke9YHvulx1-Gj6lHsqw",
//                 "city" : "Quito",
//                 "email" : "info@luistipan-ecuador.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9ZmMvTPtyyv3NeFWt%2Fcabecera%20lt?alt=media&token=44a16a59-46de-4646-b3c8-a2af4449b292",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9ZmMvTPtyyv3NeFWt%2Fchimbo1.jpg?alt=media&token=a75daf62-a6d9-4e27-af1e-eafc7877bd9a",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9ZmMvTPtyyv3NeFWt%2Fblue-footed-booby-male.jpg?alt=media&token=a252f8bd-2429-4046-86c8-fdde9bf225bd",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.20224350416094528, -78.49186956882477",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Ke9ZmMvTPtyyv3NeFWt%2FLOGO%203.jpg?alt=media&token=38795bb6-cd1f-4434-ba76-236887ecb690",
//                 "long_description" : "Se organizan cruceros a GALÁPAGOS, Escalada a: Cotopaxi, Chimborazo, Iliniza, Cayambe, etc. Tours a la Amazonía, recorridos diarios al: Cotopaxi, Mindo, Otavalo, Baños, etc. Programas de Español, Trabajo Voluntario, Programas en Ecuador: 12 días, 18 días, y más- INFORMACIÓN GRATUITA !!!",
//                 "name" : "LUIS TIPAN TRAVEL",
//                 "pais" : "Ecuador",
//                 "phone" : "022557453",
//                 "region" : "Pichincha",
//                 "short_description" : "Galápagos, Selva, Tours diarios,Escalada.",
//                 "web" : "www.luistipan-ecuador.com"
//             },
//             "-KeB1UxtNilnmGKob1MR" : {
//                 "address" : "Calle Bolívar y García Moreno",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeB1UxtNilnmGKob1MR%2Faudio%2Fcompa%C3%B1ia%20de%20credito%20agricola%20ind.ogg?alt=media&token=54f2abdc-21ec-4694-8bad-9d53a84f474a",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeB1UxtNilnmGKob1MR%2FBanco%20hipotecario%20Cabecera.jpg?alt=media&token=f01abcc6-5490-4887-96b4-c15ae1e591de",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221948, -78.514169",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeB1UxtNilnmGKob1MR%2FArchivo%20hist%C3%ADco%20B.%20Central%20logo.jpg?alt=media&token=d3dd03ac-6a5c-4133-9d63-120ee876a243",
//                 "long_description" : "Año de construcción: 1920. Estilo Art Nouveau. El edificio, actualmente, es ocupado por el Ministerio de Seguridad.",
//                 "name" : "Compañía de Crédito Agrícola e Industrial",
//                 "pais" : "Ecuador",
//                 "phone" : "02 294 6100 - 02 228 7478",
//                 "region" : "Pichincha",
//                 "short_description" : "Ministerio de Seguridad",
//                 "web" : "http://www.seguridad.gob.ec"
//             },
//             "-KeBF2f5yXMKtzwpvSy4" : {
//                 "address" : "Calle Cuenca y Bolívar",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2Faudio%2Fmuseo%20Casa%20del%20Alabado.ogg?alt=media&token=7605dc0e-3acd-4c4d-a7a5-5718224bc536",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "educacion@alabado.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2Fmuseo%20del%20Alabado%20cabecera.jpg?alt=media&token=0fbbef55-e0d4-4262-8945-7c9f3bbc5fdb",
//                 "images" : [ {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2FAlabado%203.jpg?alt=media&token=c20eb4dc-a3f9-4042-a87f-439b5852e9c7",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2FAlabado%202.jpg?alt=media&token=36bc3559-296f-40c8-8906-ca62ed3ae69f",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2Falabado%201.jpg?alt=media&token=9e0bc210-703e-4eaf-ac93-5860857d2dbd",
//                     "sub" : ""
//                 }, {
//                     "src" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2Falabado%204.jpg?alt=media&token=1e5ed423-fa28-44fb-a7d6-7f14ede7a7f3",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221270, -78.515823",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeBF2f5yXMKtzwpvSy4%2FMuseo%20del%20Alabado%20logo.jpg?alt=media&token=ae8171b7-e970-4225-b391-607952c4f6f9",
//                 "long_description" : "Horario de visitas: Lunes, martes, jueves, viernes, sábado, domingo y feriados de 9h00 a 17h30 - Miércoles de 13h30 a 17h30 - Entradas: Adultos: $4,00. Niños menores de 12 y adultos mayores de 60: $1,00 - Estudiantes con carnet: $1,50",
//                 "name" : "Museo Casa del Alabado",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 0772",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 } ],
//                 "short_description" : "Museo de Arte Precolombino",
//                 "web" : "http://www.alabado.org"
//             },
//             "-KeC28iUj0atLyi09l9F" : {
//                 "address" : "Calle Los Ríos y Gandara",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC28iUj0atLyi09l9F%2Faudio%2Fmansion%20cordovez.ogg?alt=media&token=8c42652c-6f74-4713-a703-79137477a24e",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "mansion@mansiondelangel.com.ec ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC28iUj0atLyi09l9F%2Fcabecera%20mc.jpg?alt=media&token=a10f26a0-2511-4fe4-bcc5-248d5a1da2ff",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215995, -78.500421",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC28iUj0atLyi09l9F%2Flogo.jpg?alt=media&token=400db726-2907-417f-a379-8c570b443eb9",
//                 "long_description" : "Es una edificación de estilo historicista neoclásico, que fue construida por el arquitecto Giacomo Radincocini en el año de 1908. Actualmente se la utiliza como Hotel Boutique.",
//                 "name" : "Palacio Cordovez",
//                 "pais" : "Ecuador",
//                 "phone" : "02 255 7721",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 }, {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Construcción inspirada en el Palacio Melgar de Lima",
//                 "web" : "http://www.mansiondelangel.com.ec/en-us/home.aspx"
//             },
//             "-KeC3jC2uvdI78K3IOqd" : {
//                 "address" : "Calle Luis Vargas Torres y Francisco de Caldas, esquina",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC3jC2uvdI78K3IOqd%2Faudio%2Fpalacio%20landazuri.ogg?alt=media&token=b2fda299-61d7-4726-8e7a-ffa0ea057d52",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC3jC2uvdI78K3IOqd%2Fcabecera%20pl.jpg?alt=media&token=f0e964e4-0efe-4752-a07d-ce52317f98fd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215364, -78.506365",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC3jC2uvdI78K3IOqd%2Flogo%20pl.jpg?alt=media&token=406c4085-ce31-45db-92e8-1ca1363a1faf",
//                 "long_description" : "Año de construcción: 1930. Estilo historicista (neoclásico). Uso actual: vivienda y comercio",
//                 "name" : "Palacio Landázuri",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "Desde su construcción, hasta la actualidad, se la utiliza como vivienda",
//                 "web" : ""
//             },
//             "-KeC4clsp-qPe-_VQeVo" : {
//                 "address" : "Avenida 12 de Octubre y Baquerizo Moreno",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC4clsp-qPe-_VQeVo%2Faudio%2Fcastillo%20larrea.ogg?alt=media&token=a9d86bb9-e845-43be-ac68-cd0bd033fdaa",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "torresdelcastilloec@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC4clsp-qPe-_VQeVo%2Fcabecera%20ca.jpg?alt=media&token=527489f3-3cab-4b36-a949-3deed7661ef1",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.205616, -78.486890",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC4clsp-qPe-_VQeVo%2Flogo%20ca.jpg?alt=media&token=277e7497-6c5d-4cc8-944a-5312efc0484e",
//                 "long_description" : "Año de construcción: 1939. Estilo historicista (neogótico). Uso actual: centro cultural del complejo empresarial Torres del Castillo.",
//                 "name" : "Castillo Larrea",
//                 "pais" : "Ecuador",
//                 "phone" : "02 290 2764 - 02 290 2765 - 0988436764",
//                 "region" : "Pichincha",
//                 "short_description" : "Patrimonio de la ciudad desde la década de 1980",
//                 "web" : "http://www.valarezonoboa.com"
//             },
//             "-KeC5u-x_o_-4EEfXXWb" : {
//                 "address" : "Avenida 6 de Diciembre y Tarqui",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC5u-x_o_-4EEfXXWb%2Faudio%2Fvilla%20lasso.ogg?alt=media&token=179a0062-2cb7-4cc8-be4c-eb7268614ec9",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "libia.rivas@asambleanacional.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC5u-x_o_-4EEfXXWb%2Fcabecera%20vl.jpg?alt=media&token=2393691a-e733-44a3-9e2b-4448c1c2b066",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.211852, -78.499200",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeC5u-x_o_-4EEfXXWb%2Flogo%20vl.jpg?alt=media&token=c04f430c-13ee-44c2-8b46-53b233bbe66c",
//                 "long_description" : "Año de construcción: entre 1918 y 1920. Estilo art-nuvó. Uso actual: Casa de Protocolo de la Asamblea Nacional",
//                 "name" : "Villa Lasso - Conto",
//                 "pais" : "Ecuador",
//                 "phone" : "02 399 1000",
//                 "region" : "Pichincha",
//                 "short_description" : "Vendida por su dueño original, en 3,8 millones de sucres (hoy: $152)",
//                 "web" : "http://www.asambleanacional.gob.ec/es"
//             },
//             "-KeFyq_Po6SWaQa8KvG6" : {
//                 "address" : "Avenida Tarqui, entre 6 de Diciembre y Gran Colombia",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFyq_Po6SWaQa8KvG6%2Faudio%2Fpalacete%20freile%20larrea.ogg?alt=media&token=3cbce7f2-da26-405a-a774-7395654838e9",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "embassy.quito@mfa.gov.eg",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFyq_Po6SWaQa8KvG6%2Fcabecera%20fl.jpg?alt=media&token=e335c486-ef84-4115-af5f-a3f75c5f7914",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.211603, -78.497866",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFyq_Po6SWaQa8KvG6%2Flogo%20pfl.jpg?alt=media&token=4b15a24a-70f9-4a5b-a032-07471b673ff5",
//                 "long_description" : "Año de construcción: 1944. Estilo historicista (neorenacentista). La edificación de marcado estilo Tudor, propio del siglo XVI en Inglaterra, también presenta detalles góticos y renacentistas italianos, flamencos y alemanes. ",
//                 "name" : "Palacete Freile-Larrea",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 5240",
//                 "region" : "Pichincha",
//                 "short_description" : "Actualmente la embajada de Egipto",
//                 "web" : "https://www.embassypages.com/embajada8517/"
//             },
//             "-KeFzwiFly2M0KCqIE4g" : {
//                 "address" : "Avenida Gran Colombia y Briceño",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFzwiFly2M0KCqIE4g%2Faudio%2Fcasa%20arteta.ogg?alt=media&token=49cff00d-5831-4d5f-968d-02959fdd47a4",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "dirmovccss@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFzwiFly2M0KCqIE4g%2Fcabecera%20dir%20FF%20AA.jpg?alt=media&token=92797350-f956-4929-b72d-c96593c72045",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.216761, -78.504506",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeFzwiFly2M0KCqIE4g%2FLOGO%20dir%20FF%20AA.jpg?alt=media&token=e1481ed7-3190-487b-9e32-808de2da5927",
//                 "long_description" : "Año de construcción: 1931. Estilo neoclásico. Uso actual: Dirección de Movilización de las Fuerzas Armadas ",
//                 "name" : "Casa Arteta",
//                 "pais" : "Ecuador",
//                 "phone" : "02 297 6800",
//                 "region" : "Pichincha",
//                 "short_description" : "Considerado la residencia particular más grande de la ciudad a inicios del siglo XX",
//                 "web" : "http://www.dirmov.mil.ec"
//             },
//             "-KePbjVxHDtKYoKe6dsb" : {
//                 "address" : "Calle García Moreno y Sucre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePbjVxHDtKYoKe6dsb%2Faudio%2Fcasa%20gangotena%20posse.ogg?alt=media&token=bfb3af74-f11b-4ee2-91ff-771481a0eb97",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePbjVxHDtKYoKe6dsb%2Fcebecera%20cgp.jpg?alt=media&token=5c34c273-d4e2-4bcd-9967-570ff6b8892b",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221398, -78.513660",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePbjVxHDtKYoKe6dsb%2Flogo%20cgp.jpg?alt=media&token=29cd0cfd-9c00-4a82-a6ec-103080794367",
//                 "long_description" : "Año de construcción: 1921. El edificio responde al lenguaje de la arquitectura ecléctica, combinando graciosamente elementos del neoclasicismo con los primeros elementos del art nouveau que se pudieron apreciar en la ciudad de Quito. Hoy el edificio es ocupado por varios almacenes comerciales y algunas viviendas.",
//                 "name" : "Casa Gangotena Posse",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "Antiguo Hotel Calixto, uno de los primeros de la ciudad.",
//                 "web" : ""
//             },
//             "-KePdGuNWJXIMJeuZWbU" : {
//                 "address" : "Calle Guayaquil y Espejo",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePdGuNWJXIMJeuZWbU%2Faudio%2Fpalacio%20chiriboga.ogg?alt=media&token=ca8d74a1-a44d-4ece-a222-fd763085b61e",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePdGuNWJXIMJeuZWbU%2FPalacio%20Chiriboga%20cabecera.jpg?alt=media&token=209b7973-7626-406a-bf68-c1970a5e4cf3",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221177, -78.511189",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePdGuNWJXIMJeuZWbU%2FPalacio%20Chiriboga%20logo.jpg?alt=media&token=c71e8850-b5eb-4688-8f0e-7f00848f39bb",
//                 "long_description" : "Año de contrucción: 1936. Estilo ecléctico, destacando el neorenacentista. Uso actual: vivienda y comercio",
//                 "name" : "Palacio Chiriboga",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "Uno de los principales referentes de su corriente en el país.",
//                 "web" : ""
//             },
//             "-KePf6RHxG30yoobQf4L" : {
//                 "address" : "Avenida 6 de diciembre y Roca",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePf6RHxG30yoobQf4L%2Faudio%2Fpalacio%20de%20la%20alhambra.ogg?alt=media&token=f944951d-a60f-4b22-a2e7-d8b3ff18c391",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "periodista.anh@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePf6RHxG30yoobQf4L%2Fcabecera%20pa.jpg?alt=media&token=78eb674b-5e24-454e-86d2-fcf1ae7d7a6a",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.206640, -78.493050",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePf6RHxG30yoobQf4L%2Flogo%20pa.jpg?alt=media&token=fd82b067-7b4d-4c48-baca-fef962d254f0",
//                 "long_description" : "Año de construcción: 1928. El palacio debe su nombre popular de La Alhambra al estilo historicista neomudéjar, que el imaginario quiteño ve como un reflejo del afamado conjunto palaciego homónimo en Granada, España. Hoy el edificio es ocupado por la Academia Nacional de Historia que cuenta con una biblioteca pública y está abierta para visitas de lunes a viernes de 08h30 a 13h00 y de 13h30 a 16h30.",
//                 "name" : "Palacio de la Alhambra",
//                 "pais" : "Ecuador",
//                 "phone" : "02 290 7433",
//                 "region" : "Pichincha",
//                 "short_description" : "Esta construcción ha sufrido graves daños en su estructura, por lo que ha sido restaurado.",
//                 "web" : "http://www.academianacionaldehistoria.org.ec"
//             },
//             "-KePkxz0n5E078HK76oa" : {
//                 "address" : "Avenida Gran Colombia y Julio Castro",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePkxz0n5E078HK76oa%2Faudio%2Fteatro%20capitol.ogg?alt=media&token=966adb12-bd35-46cb-a88f-3bac74224086",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "serviciosciudadanos@quito.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePkxz0n5E078HK76oa%2Fcabecera%20tc.jpg?alt=media&token=1e99fb78-45b6-4466-87fc-b3104362d786",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215565, -78.501531",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePkxz0n5E078HK76oa%2Flogo%20tc.jpg?alt=media&token=62520b67-448e-4505-9525-44df385a9a95",
//                 "long_description" : "El Palacio Samaniego es convertido en teatro en 1933 según el diseño de Antonino Russo, uno de los arquitectos extranjeros que definieron el paisaje urbanístico de Quito de los años 30. Actualmente, el teatro está a cargo de la Secretaría de Cultura del Municipio.",
//                 "name" : "Palacio Samaniego (Teatro Capitol)",
//                 "pais" : "Ecuador",
//                 "phone" : "02 395 2300",
//                 "region" : "Pichincha",
//                 "short_description" : "Antigua plaza de toros",
//                 "web" : "http://www.quito.gob.ec/index.php/secretarias/secretaria-de-cultura"
//             },
//             "-KePnEgBUov3ReeVTaO5" : {
//                 "address" : "Calle García Moreno entre Sucre y Bolívar",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePnEgBUov3ReeVTaO5%2Faudio%2Fcasa%20museo%20urrutia%20barba.ogg?alt=media&token=697eeca7-237b-4819-ab0a-1c77e05ec1ba",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "cmmau@fmdj.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePnEgBUov3ReeVTaO5%2Fcabecera%20cmau.jpg?alt=media&token=6888e7ea-a32f-4a6b-878b-3707c831f4c5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221602, -78.513914",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePnEgBUov3ReeVTaO5%2Flogo%20cnau.jpg?alt=media&token=b9437c57-6021-48a9-9eb7-0bc034c72486",
//                 "long_description" : "Horarios de visita: martes a sábado de 10h00 a 18h00, domingos de 09h30 a 17h00.",
//                 "name" : "Museo Casa Urrutia Barba",
//                 "pais" : "Ecuador",
//                 "phone" : "02 258 0103 - 02 258 4174",
//                 "region" : "Pichincha",
//                 "short_description" : "Fue el hogar de María Augusta Urrutia, aristócrata filántropa y mecenas de arte",
//                 "web" : "http://www.quitoadventure.com/leisure-ecuador/tourist-attractions-quito/museums/house-museum-urrutia.html"
//             },
//             "-KePqtgVGjdw0EdrocVE" : {
//                 "address" : "Avenida 10 de Agosto y Colón",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePqtgVGjdw0EdrocVE%2Faudio%2Fpalacio%20de%20la%20circasiana.ogg?alt=media&token=a6ba8587-6ab5-4769-8a06-a9d3ccb2ea0f",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "secretariainpc@inpc.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePqtgVGjdw0EdrocVE%2Fcabecera%20padelac.jpg?alt=media&token=0d8a92ef-9c4c-47da-b18f-cc23e06faedf",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.198094, -78.496940",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KePqtgVGjdw0EdrocVE%2Flogo%20pdelac.jpg?alt=media&token=38a3fb2c-bee9-45a5-a177-0d9a4abf970d",
//                 "long_description" : "Actualmente, el Palacio y sus jardines pertenecen al Municipio de Quito, que compró el lugar a la familia Jijón-Caamaño en la década de 1990, cediéndolo en comodato al Instituto Nacional de Patrimonio Cultural, que lo restauró meticulosamente y ahora lo utiliza como su sede.",
//                 "name" : "Palacio de la Circasiana",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 7927",
//                 "region" : "Pichincha",
//                 "short_description" : "Constituye el símbolo mayor de la opulencia y el poder que tenía la aristocracia quiteña de inicios del siglo XX",
//                 "web" : "http://www.inpc.gob.ec"
//             },
//             "-KeU6YewBAqtqvahcM-G" : {
//                 "address" : "Avenida 6 de Diciembre y Patria",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU6YewBAqtqvahcM-G%2Faudio%2Fpalacio%20benjamin%20carrion.ogg?alt=media&token=71f537ff-05ff-49c9-b36d-945b94e99e7a",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "info@cce.org.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU6YewBAqtqvahcM-G%2Fcabecera%20eadlcdlac.jpg?alt=media&token=ddcf33cb-7158-4349-8a19-89be1cd1aa67",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.209810, -78.496484",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU6YewBAqtqvahcM-G%2Flogo%20eadlcdlac.jpg?alt=media&token=4b54e6cc-b2e1-4220-91dd-4b74c4cb3c46",
//                 "long_description" : "El primer presidente de la Casa de la Cultura, Benjamín Carrión, obtiene los fondos necesarios del presidente de la República José María Velasco Ibarra, y encarga la construcción de un edificio de carácter palaciego para dichos fines. Hoy, el edificio es ocupado por las oficinas de la Casa de la Cultura y salas de exhibiciones.",
//                 "name" : "Palacio Benjamín Carrión",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 0967",
//                 "region" : "Pichincha",
//                 "short_description" : "Casa de la Cultura Ecuatoriana",
//                 "web" : "http://www.casadelacultura.gob.ec"
//             },
//             "-KeU7noTp-r6AUwUiJ0H" : {
//                 "address" : "Calle Chile y Guayaquil",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU7noTp-r6AUwUiJ0H%2Faudio%2Fedificio%20guerrero%20mora.ogg?alt=media&token=e5b314d4-307c-49ee-8d31-2ea71f68782b",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU7noTp-r6AUwUiJ0H%2Fcabecera%20egm.jpg?alt=media&token=d700b710-c6a2-4e81-9874-efb7ff48e21f",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220291, -78.510925",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeU7noTp-r6AUwUiJ0H%2Flog%20egm.jpg?alt=media&token=0e88d588-4abb-4717-a113-ca8f05cc0842",
//                 "long_description" : "Éste fue uno de los edificios modernos construidos en el centro histórico antes que la ordenanza de protección estableciera restricciones dimensionales y de emplazamiento.",
//                 "name" : "Edificio Guerrero Mora",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "La legendaria Casa 1028",
//                 "web" : "."
//             },
//             "-KeUA2bqfSLLmylid2Hj" : {
//                 "address" : "Calle Guayaquil y Rocafuerte",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUA2bqfSLLmylid2Hj%2Faudio%2Fcasa%20de%20garcia%20moreno.ogg?alt=media&token=97bb81ba-b2bf-4a01-a397-ca5f3d979ebd",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUA2bqfSLLmylid2Hj%2Fcabecera%20cdegm.jpg?alt=media&token=de598c0a-7e4f-4302-982e-710f87e48022",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223742, -78.513360",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUA2bqfSLLmylid2Hj%2Flogo%20cdegm.jpg?alt=media&token=095485ca-6df1-4522-9e0f-65e83b33732e",
//                 "long_description" : "García Moreno se había trasladado a la casa sin terminar en 1874 y vivió poco tiempo en ella, pues en agosto de 1875 murió asesinado. Actualmente el edificio se encuentra en remodelación por parte del municipio.",
//                 "name" : "Casa de García Moreno",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "En el año 1870, el presidente Gabriel García Moreno compró el terreno esquinero donde se encuentra la casa.",
//                 "web" : ""
//             },
//             "-KeUCq93R80A78tjoJMd" : {
//                 "address" : "Calle García Moreno y Galápagos",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUCq93R80A78tjoJMd%2Faudio%2Fcasa%20de%20la%20pe%C3%B1a.ogg?alt=media&token=32fe0a26-57aa-42b0-899b-fd75d2b62f65",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUCq93R80A78tjoJMd%2Fcabecera%20cdelap.jpg?alt=media&token=dbf8b628-1106-42e4-9e4f-d048eb925cab",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215424, -78.508804",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUCq93R80A78tjoJMd%2Flogo%20cdelap.jpg?alt=media&token=30508fe4-8403-4552-a7b5-1bc511679644",
//                 "long_description" : "La casa en realidad es de un solo piso, pero se eleva varios metros sobre el nivel de la calle por hallarse sobre un gran basamento sólido cerrado, que no es más que la “peña” (de ahí su nombre), resultado del desbanque que dejó expuesto el terreno natural de cangagua, con un ligero talud para mayor seguridad de la edificación.",
//                 "name" : "Casa de la Peña",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "Si esta casa hablara... cuántas historias nos contaría...",
//                 "web" : ""
//             },
//             "-KeUFtPVOMe64RvvQsJP" : {
//                 "address" : "Calle Mariano Calvache y Lorenzo Chávez",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUFtPVOMe64RvvQsJP%2Faudio%2Ffundacion%20guayasamin.ogg?alt=media&token=86d11c5e-d217-4fab-b646-8976a866a7cd",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "secretariainfo@fundacionguayasamin.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUFtPVOMe64RvvQsJP%2Fcabecera%20fg.jpg?alt=media&token=3a94340d-9925-4f62-8d9e-236bcb0460e4",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.190100, -78.469231",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KeUFtPVOMe64RvvQsJP%2Flogo%20fg.jpg?alt=media&token=2e0771af-99a5-4952-aaf4-c020ab6afa02",
//                 "long_description" : "Horarios de visita: Todos los días, de 10h00 a 17h00.  Cerrado: Feriados regionales y nacionales. Entrada: Adultos $8,00; Estudiantes, Adultos mayores, Personas con Discapacidad $4,00. Niños hasta 12 años Gratis. Domingo entrada gratuita para visitantes ecuatorianos.",
//                 "name" : "Casa y Fundación Guayasamín",
//                 "pais" : "Ecuador",
//                 "phone" : "02 244 6455 – 02 245 2938 – 02 246 5266",
//                 "region" : "Pichincha",
//                 "short_description" : "Tal como la quiso el artista y donde hoy descansan sus restos.",
//                 "web" : "http://www.capilladelhombre.com/"
//             },
//             "-KftU_s9dcadf4gNtVp3" : {
//                 "address" : "Calle Gonsalo Vega y Bolaños",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.214287, -78.518232",
//                 "logo" : "",
//                 "long_description" : "Desde el siglo XIX se ordenó que en Quito se levantaran panteones tras los conventos de El Tejar y la Recoleta de San Diego. Ambos lugares, en aquellos años, estaban en las afueras de la ciudad. Antes de la construcción de estos espacios, los cadáveres se sepultaban en los conventos o se colocaban en las fachadas de las iglesias.",
//                 "name" : "Cementerio del Tejar",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Uno de los cementerios más antiguos de la ciudad",
//                 "web" : "."
//             },
//             "-KftXqBiyO-CfyQSFG1O" : {
//                 "address" : "Calle García Moreno y Rocafuerte",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftXqBiyO-CfyQSFG1O%2Faudio%2Fmuseo%20de%20la%20ciudad.ogg?alt=media&token=17b4c52d-e8c6-4edd-bdc0-5387b2ef046e",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "diego.palacios@fmcquito.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftXqBiyO-CfyQSFG1O%2Fcabecera%20mdlc.jpg?alt=media&token=d77d565c-a216-4ff2-afd8-2759a0fdfd26",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223060, -78.515149",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftXqBiyO-CfyQSFG1O%2Flogo%20mdlc.jpg?alt=media&token=7a860711-b193-4dee-8555-efe7451251c9",
//                 "long_description" : "Horarios de visita: Martes a domingo, de 09h30 a 17h30 (último ingreso a las 16h30). Ingreso gratuito el último sábado de cada mes. Precios: Adultos: $3,00; Estudiantes con carné (mayores de 12 años): $2,00; Tercera edad (mayores de 65 años): $1,00; Niños: $1,00; Recorridos en otros idiomas: $4,00; Personas con discapacidad: gratuito; Infantes de 0 a 3 años: gratuito.",
//                 "name" : "Museo de la Ciudad - Hospital San Juan de Dios",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 3883",
//                 "region" : "Pichincha",
//                 "short_description" : "Fue el primer hospital de la ciudad y estuvo activo por más de 400 años.",
//                 "web" : "http://www.museociudadquito.gob.ec"
//             },
//             "-KftZDsP3wNhca8fcIP2" : {
//                 "address" : "Calle Venezuela y Sucre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftZDsP3wNhca8fcIP2%2Faudio%2Fmuseo%20casa%20de%20sucre.ogg?alt=media&token=102a9991-060d-429d-bfe1-599909700c08",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftZDsP3wNhca8fcIP2%2F20170209_091846.jpg?alt=media&token=476c5f23-c582-491d-acff-b4464260772e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221860, -78.513095",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KftZDsP3wNhca8fcIP2%2Flogo%20mcdes.jpg?alt=media&token=35409884-da9d-4a94-aa48-89d71bc7def3",
//                 "long_description" : "Horarios de visita: de Martes a Viernes de 08h00 a 16h45. Sábados: de 08h30 a 13h00.",
//                 "name" : "Casa Museo de Sucre",
//                 "pais" : "Ecuador",
//                 "phone" : "02 295 2860",
//                 "region" : "Pichincha",
//                 "short_description" : "Casa de Antonio José de Sucre, héroe independentista latinoamericano.",
//                 "web" : "."
//             },
//             "-Kg0UJlMSy_NEm05zlrc" : {
//                 "address" : "Pasaje Espejo y Guayaquil",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0UJlMSy_NEm05zlrc%2Faudio%2FTeatro%20Bolivar.ogg?alt=media&token=de91dc94-78d2-4f20-8750-5199cfda044b",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "info@teatrobolivar.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0UJlMSy_NEm05zlrc%2Fteatro%20bolivar%20cabecera.jpg?alt=media&token=8143ae80-c5a2-49ac-a9d8-87303dc5dedf",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221494, -78.510992",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0UJlMSy_NEm05zlrc%2Fteatroo%20bolivar%20logo.jpg?alt=media&token=dd382363-6ba2-4cae-a6f6-826fb831a65e",
//                 "long_description" : "Horarios de visitas: lunes a viernes desde las 09h00 hasta las 17h30. Los horarios de eventos especiales se publican en el sitio web del teatro.",
//                 "name" : "Teatro Bolívar",
//                 "pais" : "Ecuador",
//                 "phone" : "02 257 1911",
//                 "region" : "Pichincha",
//                 "short_description" : "En 1999 sufrió un grave incendio que destruyó el 70% de su edificación. ",
//                 "web" : "http://www.teatrobolivar.org/"
//             },
//             "-Kg0VgZ3Zz2OI8eigJru" : {
//                 "address" : "Calle Sucre y Guayaquil esquina",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0VgZ3Zz2OI8eigJru%2Faudio%2Fpasaje%20tobar.ogg?alt=media&token=017a8fee-25bd-492c-b1a4-142e26e953f0",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0VgZ3Zz2OI8eigJru%2FPasaje%20tobar%20cabecera.jpg?alt=media&token=75fc401d-1f0c-4a75-8082-b3ab211902ca",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222425, -78.512371",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0VgZ3Zz2OI8eigJru%2Fpasaje%20tobar%20logo%202.jpg?alt=media&token=70a387f4-03e9-42da-883f-af5d79393ecb",
//                 "long_description" : "Este sitio actualmente se encuentra ocupado por locales comerciales.",
//                 "name" : "Pasaje Tobar",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "Ubicado en un pasaje peatonal, antecesor de los centros comerciales modernos.",
//                 "web" : ""
//             },
//             "-Kg0Yn9vGhMP8SgVYO0g" : {
//                 "address" : "Calle Manabí, entre Guayaquil y Flores",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0Yn9vGhMP8SgVYO0g%2Faudio%2Fteatro%20nacional%20sucre.ogg?alt=media&token=8e2e7d1e-1038-4ce2-8c88-89279fcd2445",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "comunicacion@teatrosucre.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0Yn9vGhMP8SgVYO0g%2Fcabecera%20tns.jpg?alt=media&token=cfa98c83-9128-4348-b3ab-810c6bfa720b",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219124, -78.508873",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0Yn9vGhMP8SgVYO0g%2Flogo%20tns.jpg?alt=media&token=c568a99e-eaba-4bd5-8e92-3b2e72690ac7",
//                 "long_description" : "Horarios de Atención: Lunes a Viernes de 09h00 a 17h30. Los horarios de eventos especiales se publican en el sitio web del teatro.",
//                 "name" : "Teatro Nacional Sucre",
//                 "pais" : "Ecuador",
//                 "phone" : "02 295 1661 - 02 257 0299 - 02 228 0982",
//                 "region" : "Pichincha",
//                 "short_description" : "Antes edificio de las Carnicerías. Hoy sede del arte y la cultura.",
//                 "web" : "http://www.teatrosucre.com"
//             },
//             "-Kg0_RnLELEkzVSdA7SY" : {
//                 "address" : "Calle la Exposición y Benigno Vela",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg0_RnLELEkzVSdA7SY%2Faudio%2Fpalacio%20de%20la%20recoleta.ogg?alt=media&token=98f70712-a9dc-498e-9e6f-5ac4bf2ac899",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.230886, -78.512442",
//                 "logo" : "",
//                 "long_description" : "Desde 1978 el palacio se convirtió en el guardián de las joyas de la corona quiteña. En este sitio no hay visitas guiadas.",
//                 "name" : "Palacio de la Recoleta",
//                 "pais" : "Ecuador",
//                 "phone" : "02 298 3200 - 02 295 1951",
//                 "region" : "Pichincha",
//                 "short_description" : "Ministerio de Defensa",
//                 "web" : "http://www.defensa.gob.ec"
//             },
//             "-Kg1cK3Heq7tcVojpHk8" : {
//                 "address" : "Avenida Patria, entre 6 de Diciembre y 12 de Octubre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg1cK3Heq7tcVojpHk8%2Faudio%2Fedificio%20de%20los%20espejos.ogg?alt=media&token=9c0b0332-0a9d-4e89-9c0d-daa634408e8c",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "info@cce.org.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg1cK3Heq7tcVojpHk8%2Fcabecera%20cce.jpg?alt=media&token=a192df25-6fa8-4faf-87a8-0ef2c730ae5c",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.209850, -78.494928",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg1cK3Heq7tcVojpHk8%2Flogo%20cce.jpg?alt=media&token=8db99258-9505-4689-b0e2-47d6ab0323ad",
//                 "long_description" : "En este edificio encontramos el Teatro Nacional Jaime Roldós Aguilera, la sala de cine Alfredo Pareja Diezcanseco, el Museo Nacional del Banco Central, el Museo de Artes Visuales e Instrumentos Musicales, el Ágora, la Biblioteca Nacional Eugenio Espejo, La Radio de la Casa de la Cultura, la Sala de Artes Escénicas Mariana de Jesús, la Cinemateca Nacional del Ecuador y el Teatro Demetrio Aguilera Malta. ",
//                 "name" : "Edificio de los Espejos",
//                 "pais" : "Ecuador",
//                 "phone" : "02 222 0967",
//                 "region" : "Pichincha",
//                 "short_description" : "El edificio ícono de la Casa de la Cultura Ecuatoriana",
//                 "web" : "http://www.casadelacultura.gob.ec"
//             },
//             "-Kg5CUKBt54kVC5xBbEh" : {
//                 "address" : "Calle Luis Felipe Borja, entre Luis Sodiro y Hermanos Pazmiño",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5CUKBt54kVC5xBbEh%2Faudio%2Fcolegio%20femenino%20espejo.ogg?alt=media&token=0b0a0e6b-9c76-4ba8-9192-e7673af42f21",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5CUKBt54kVC5xBbEh%2Fcabecera%20ce.jpg?alt=media&token=cb8e780e-b7e1-4b3c-8837-165a256c386b",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.212782, -78.501529",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5CUKBt54kVC5xBbEh%2Flogo%20ce.jpg?alt=media&token=fa73e08c-d145-43aa-88f6-e71e28466fad",
//                 "long_description" : "Año de construcción: 1922. Estilo historicista (neoclásico). Uso actual: institución educativa. ",
//                 "name" : "Colegio Femenino Espejo",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "El colegio creado para el centenario de la batalla de independencia española.",
//                 "web" : "."
//             },
//             "-Kg5G373st5uDxoMIC5f" : {
//                 "address" : "Calle Carrión y 10 de Agosto",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5G373st5uDxoMIC5f%2Faudio%2FPalacio%20de%20Najas%20Cancilleria.ogg?alt=media&token=60fb082c-226f-4fef-83f0-fe650f55fada",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "jfolleco@cancilleria.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5G373st5uDxoMIC5f%2Fcabecera%20c.jpg?alt=media&token=a1148c45-7447-4a5a-892f-f620e18f19bb",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.202616, -78.497528",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5G373st5uDxoMIC5f%2Flogo%20c.jpg?alt=media&token=87c8db56-c7ec-48f8-bdc5-45c57dca484d",
//                 "long_description" : "La función de esta dependencia del estado es gestionar y coordinar la política internacional, la integración latinoamericana y la movilidad humana. Horarios de atención: de lunes a viernes de 08h00 a 17h00. Este sitio no está abierto para visitas turísticas.",
//                 "name" : "Palacio de Najas (Cancillería)",
//                 "pais" : "Ecuador",
//                 "phone" : "02 299 3200",
//                 "region" : "Pichincha",
//                 "short_description" : "Ministerio de Relaciones Exteriores y Movilidad Humana - Cancillería",
//                 "web" : "www.cancilleria.gob.ec"
//             },
//             "-Kg5HvcOb7sHeAqm0bxm" : {
//                 "address" : "Plaza de Santo Domingo, Calle Guayaquil y Rocafuerte",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5HvcOb7sHeAqm0bxm%2Fcabecera%20mas.jpg?alt=media&token=60ec669d-b309-477d-9081-0ec52e81b12f",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.223719, -78.512174",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5HvcOb7sHeAqm0bxm%2Flogo%20mas.jpg?alt=media&token=444a8d62-fe1f-426d-93ab-5b8630efa901",
//                 "long_description" : "En 1882 el Municipio recibió cinco mil pesos provenientes de la herencia de María Rosa Carcelén de Guevara y Larrea-Zurbano, hermana de la Marquesa de Solanda y por tanto cuñada de Antonio José de Sucre. De acuerdo a las cláusulas del testamento, el dinero debería ser usado exclusivamente para levantar un monumento en honor de su fallecido cuñado.",
//                 "name" : "Monumento a Sucre",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Su mano derecha señala las faldas del Pichincha, donde ganó nuestra independencia.",
//                 "web" : "."
//             },
//             "-Kg5KdFM4TKuTygxtjJ1" : {
//                 "address" : "Calle Junín y Montúfar",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5KdFM4TKuTygxtjJ1%2Faudio%2Fcasa%20Manuela%20Saenz.ogg?alt=media&token=1f841eb9-695a-46cd-ba7c-aee03283f7a0",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5KdFM4TKuTygxtjJ1%2Fcabecra%20mdems.jpg?alt=media&token=d8ad5698-ae7c-4120-b02b-95c6ba2beeba",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222881, -78.510452",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5KdFM4TKuTygxtjJ1%2Flogo%20mms.jpg?alt=media&token=f0a3927e-b6e0-4687-9407-5d88687c20df",
//                 "long_description" : "Horario de visitas: Lunes a Viernes de 09h30 a 12h30 y de 14h00 a 17h00; Sábados de 10h00 a 15h00; Domingos únicamente previa cita para grupos. Entrada: $4,00 adultos; $2,00 estudiante sy adultos mayores; $1,00 niños. El museo ofrece visitas guiadas y una tienda de recuerdos.",
//                 "name" : "Casa Museo Manuela Sáenz",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 3908",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 } ],
//                 "short_description" : "Casa de Manuela Sáenz, generala de honor de la República de Ecuador.",
//                 "web" : "."
//             },
//             "-Kg5OvAL7zcIa9r9IiH2" : {
//                 "address" : "Avenida 6 de Diciembre y Patria",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.208219, -78.497865",
//                 "logo" : "",
//                 "long_description" : "Durante los fines de semana, el parque se convierte en una gran sala de exhibición al aire libre, de arte y artesanías. También hay teatro callejero, comidas rápidas y juegos infantiles.",
//                 "name" : "Parque El Ejido",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Sitio popular de encuentro de jubilados y juegos tradicionales.",
//                 "web" : "."
//             },
//             "-Kg5QYvdeKERYgHCjw2E" : {
//                 "address" : "Avenida Patria, entre 10 de Agosto y 6 de Diciembre",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5QYvdeKERYgHCjw2E%2Fcabecera%20pc.jpg?alt=media&token=6c17a2bc-9ba7-4a68-9603-ef10a9de1e35",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.208106, -78.497317",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5QYvdeKERYgHCjw2E%2Flogo%20pc.jpg?alt=media&token=bd9c9859-eb58-4254-bf9c-c3fbc9b2e4d9",
//                 "long_description" : "Esta Puerta constituía la entrada al palacio de estilo francés, bautizado como \"La Circasiana\" por sugerencia de la madre de Jacinto Jijón, quien propuso dicho nombre para hacer alusión a la región de Circasia, en la Rusia trans-caucásica, de la cual se decía que provenían las mujeres más bellas del mundo.",
//                 "name" : "Puerta de la Circasiana",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Donada por la Familia Jijón, a la ciudad, en 1970.",
//                 "web" : "."
//             },
//             "-Kg5UQgrJi9QcRLxta4O" : {
//                 "address" : "Avenida Patria, entre 10 de Agosto y 6 de Diciembre",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5UQgrJi9QcRLxta4O%2Fcabecera%20le.jpg?alt=media&token=6c25dd0c-0310-44be-816c-43743a3ff70d",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.207949, -78.497180",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5UQgrJi9QcRLxta4O%2FLogo%20le.jpg?alt=media&token=c8f5e932-0fcb-4a0e-8b19-c5c2c97673e3",
//                 "long_description" : "Esta escultura de bronce, considerada una de las más bellas de la ciudad, fue colocada en el Parque El Ejido en 1922. Luego de ser trasladada a varios sitios representativos d ella ciudad, volvió a este parque a su ubicación actual.",
//                 "name" : "La Lucha Eterna",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Eterna lucha entre el bien y el mal.",
//                 "web" : "."
//             },
//             "-Kg5XJaR3DwnNtM4X92v" : {
//                 "address" : "Parque El Ejido",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.208489, -78.498116",
//                 "logo" : "",
//                 "long_description" : "En el sitio donde hoy se encuentra este monumento, ocurrió el fin del cruel asesinato de el líder liberal Eloy Alfaro en 1912. La Llama Eterna es un símbolo de que sus ideales perdurarán por siempre.",
//                 "name" : "La Llama Eterna",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Permanente recuerdo de \"La Hoguera Bárbara\" de los ideales revolucionarios liberales.",
//                 "web" : "."
//             },
//             "-Kg5_L-BonA_5zNg7rPp" : {
//                 "address" : "Avenida Patria y 12 de Octubre",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5_L-BonA_5zNg7rPp%2Fcabecera%20li.jpg?alt=media&token=231a1e83-7263-4757-91e5-985ca28bf2dd",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.210367, -78.493892",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5_L-BonA_5zNg7rPp%2Flogo%20li.jpg?alt=media&token=c7541a37-abad-473f-a592-501302435edf",
//                 "long_description" : "La escena alude al mito griego que narra la trágica historia de amor entre Eurídice, una ninfa de los valles, y Orfeo, un pastor que tocaba la lira embelesando a todos los que le escuchaban. Los enamorados fueron separados por Hades para toda la eternidad y Orfeo vaga por el mundo tocando su lira hasta que su cabeza es cortada por, alguna vez, negarse a tocarla a petición de las Ménades.",
//                 "name" : "La Insidia",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "También conocida como \"La Pileta de las Focas\"",
//                 "web" : "."
//             },
//             "-Kg5dhklZSrF-Be__S29" : {
//                 "address" : "Calle Sodiro y Valparaíso",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5dhklZSrF-Be__S29%2Faudio%2Fantiguo%20hospital%20eugenio%20espejo.ogg?alt=media&token=f726042e-9f2e-4a9b-bf61-64cf494e8f68",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "centrodeconvenciones@quito-turismo.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5dhklZSrF-Be__S29%2Fcabecera%20ahee.jpg?alt=media&token=57040e86-f37e-4210-9121-049d7b57a6b7",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215953, -78.498728",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5dhklZSrF-Be__S29%2Flogo%20ahee.jpg?alt=media&token=0ac7f892-0395-41bc-b430-da40d430e127",
//                 "long_description" : "En 1898 el  presidente del Ecuador el General Eloy Alfaro Delgado, impulsa la construcción de un nuevo hospital luego. En 1901, el 23 de mayo se coloca la primera piedra de su construcción y se continúa hasta 1917 y el 8 de mayo, se resuelve que todo lo construido debe ser derrumbado, y se  da  paso a la construcción de un nuevo edificio de acuerdo a nueva proyecciones. Horarios de atención: de lunes a viernes de 09h00 a 17h30.",
//                 "name" : "Antiguo Hospital  Eugenio Espejo",
//                 "pais" : "Ecuador",
//                 "phone" : "02 299 3300 - 02 290 1333",
//                 "region" : "Pichincha",
//                 "short_description" : "Centro de Convenciones Eugenio Espejo, el más grande de la ciudad.",
//                 "web" : "www.centrodeconvenciones.com.ec"
//             },
//             "-Kg5hlkdAkw6RD2pQ4n8" : {
//                 "address" : "Calle Montevideo y Luis Dávila",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5hlkdAkw6RD2pQ4n8%2Faudio%2Fantiguo%20hospital%20militar.ogg?alt=media&token=89bf62de-33eb-44b7-bffa-0ddd98dbed01",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "mediacioncentrodeartec@gmail.com",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.211353, -78.506996",
//                 "logo" : "",
//                 "long_description" : "Horarios de atención: de martes a viernes de 10h30 a 17h30; sábados y domingos de 09h00 a 17h30. Entrada gratuita.",
//                 "name" : "Antiguo Hospital Militar",
//                 "pais" : "Ecuador",
//                 "phone" : "02 394 6990",
//                 "region" : "Pichincha",
//                 "short_description" : "Centro de Arte Contemporáneo",
//                 "web" : "http://www.centrodeartecontemporaneo.gob.ec/index.php"
//             },
//             "-Kg5lFhD3kYGFo-cUI2Y" : {
//                 "address" : "Calle Espejo y Flores",
//                 "audio" : "",
//                 "cat" : "-KdSZC3w2K-R6ZHSxTnL",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5lFhD3kYGFo-cUI2Y%2Fcabecera%20cdesc.jpg?alt=media&token=cec6443e-09f4-4f2e-b98f-265276a28e5f",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221974, -78.510512",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kg5lFhD3kYGFo-cUI2Y%2Flogo%20cdesc.jpg?alt=media&token=75e84796-40a6-4c8d-8a64-22581528be58",
//                 "long_description" : "Horarios de visitas: lunes a viernes 09h00 a 17h00; sábado 09h00 a 12h30.  Entrada:  adultos $2,50; universitarios $1,00;  niños, tercera edad y personas con capacidades diferentes $0,60",
//                 "name" : "Iglesia y Monasterio de Santa Catalina",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 4000",
//                 "region" : "Pichincha",
//                 "short_description" : "Monasterio de Clausura en medio de la bulliciosa ciudad.",
//                 "web" : "."
//             },
//             "-KgRuojxwM7s5oARLb7l" : {
//                 "address" : "Calle Venezuela y Sucre",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRuojxwM7s5oARLb7l%2Faudio%2Fpasaje%20amador.ogg?alt=media&token=364865e1-3f63-450c-a368-7f13ea0f4ef9",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRuojxwM7s5oARLb7l%2FPasaje%20Amador%20cabecera.jpg?alt=media&token=e65ae7ba-d2a1-4949-a9ea-51dad2829740",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.221229, -78.512919",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRuojxwM7s5oARLb7l%2FPasaje%20amador%20logo.jpg?alt=media&token=bc95bda2-fbb5-42d1-b8ce-468991a34bc1",
//                 "long_description" : "Actualmente en los dos niveles del pasaje aún funciona una veintena de locales comerciales y en sus cuatro pisos hay decenas de viviendas.",
//                 "name" : "Pasaje Amador",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "Hace 65 años, el primer centro comercial de la ciudad",
//                 "web" : ""
//             },
//             "-KgRyfKyY4VynS7IG1P4" : {
//                 "address" : "Calle Imbabura y Manabí",
//                 "audio" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRyfKyY4VynS7IG1P4%2Faudio%2Flavanderia%20la%20chilena.ogg?alt=media&token=781fb8e0-683b-431f-8d16-19062f8cc11e",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRyfKyY4VynS7IG1P4%2Fcabecera%20llch.jpg?alt=media&token=4132bab1-0a7c-4d6f-9917-214b378e4373",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.215625, -78.513334",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgRyfKyY4VynS7IG1P4%2Flogo%20llach.jpg?alt=media&token=fcffef10-8fdc-4e12-8257-f95dbc593402",
//                 "long_description" : "Cada día a este lugar, llegan decenas de mujeres humildes para lavar su ropa y la de algunos vecinos y clientes que pagan por este servicio.",
//                 "name" : "Lavandería La Chilena",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "Cuando muchos servicios escaseaban en la ciudad, este lugar brindaba una solución",
//                 "web" : ""
//             },
//             "-KgyB3PnXkxRE-SRLFXD" : {
//                 "address" : "Calle Aguarico",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.219142, -78.527270",
//                 "logo" : "",
//                 "long_description" : "Horario de visitas: martes a viernes de 09h00 a 17h00; sábados de 10h00 a 14h00. Entrada: $1,00 turistas extranjeros; $0,25 niños y tercera edad.",
//                 "name" : "Cima de la Libertad - Templo de la Patria",
//                 "pais" : "Ecuador",
//                 "phone" : "02 228 8733",
//                 "region" : "Pichincha",
//                 "short_description" : "Santuario donde se selló el camino a la libertad.",
//                 "web" : ""
//             },
//             "-KgyCX912Q-XLK89Kd07" : {
//                 "address" : "Calle Rocafuerte y Cumandá",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.217614, -78.520782",
//                 "logo" : "",
//                 "long_description" : "El Centro de detención fue cerrado y los detenidos, pasados a uno nuevo, de alta seguridad, dos horas al sur de la ciudad. Hoy, este centro es un lugar de visitas.",
//                 "name" : "Ex Penal García Moreno",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Fue creado para una capacidad de 200 personas, pero llegó a tener cerca de 4.000 ",
//                 "web" : "."
//             },
//             "-KgyHGDOodUOgL5xFy13" : {
//                 "address" : "Calle General Melchor Aymerich",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.228556, -78.518368",
//                 "logo" : "",
//                 "long_description" : "Actualmente, en este barrio habitan alrededor de 10000 personas y está rodeado de un bosque que constituye una importante área verde de la ciudad.",
//                 "name" : "Fortines del Panecillo",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Construido para dominar a los quiteños durante las batallas por la independencia en el siglo XIX",
//                 "web" : "."
//             },
//             "-KgyKkgS0eUioHX2m2k3" : {
//                 "address" : "Calle Ambato y Mazo",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.227398, -78.514900",
//                 "logo" : "",
//                 "long_description" : ".",
//                 "name" : "Antiguo Edificio del Instituto Geográfico",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Hace más de 80 años, instituyó como “Servicio Geográfico Militar”, como dependencia oficial del Estado",
//                 "web" : "."
//             },
//             "-KgyMTsv4lAk2L7tVJKU" : {
//                 "address" : "Calle Iquique, sector La Tola",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220086, -78.501635",
//                 "logo" : "",
//                 "long_description" : "Actualmente, es un parque público que cuenta con caminerías, ciclovías, lugares de descanso y espacios verdes, además de un centro cultural para exhibiciones. Se puede visitar todos los días desde las 08h00 a 17h00. Entrada gratuita",
//                 "name" : "El Itchimbía",
//                 "pais" : "Ecuador",
//                 "phone" : "02 322 6363 - 02 322 8470 - 02 322 8471",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 } ],
//                 "short_description" : "Mirador natural de la ciudad",
//                 "web" : "."
//             },
//             "-KgyOe-OfIGjBa9WQYrl" : {
//                 "address" : "Avenida Pichincha, entre Esmeraldas y Manabí",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.220009, -78.507040",
//                 "logo" : "",
//                 "long_description" : "El mercado abre sus puertas todos los días desde las 06h00 hasta 17h00.",
//                 "name" : "Mercado Central",
//                 "pais" : "Ecuador",
//                 "phone" : "",
//                 "region" : "Pichincha",
//                 "short_description" : "En el mercado se encuentra de todo: desde frutas, vegetales y flores hasta plantas medicinales para toda enfermedad.",
//                 "web" : ""
//             },
//             "-KgySHcyVMkeb3RO0XRd" : {
//                 "address" : "Calle Los Ríos y Don Bosco",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.222738, -78.505026",
//                 "logo" : "",
//                 "long_description" : ".",
//                 "name" : "Instituto Técnico Don Bosco y Capilla ",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Desde sus inicios, un centro de formación técnica e intelectual de artesanos",
//                 "web" : "."
//             },
//             "-KgyTStba2cYF5zEQXC1" : {
//                 "address" : "Calle Luis Vargas Torres y Francisco de Caldas",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgyTStba2cYF5zEQXC1%2Fcabecera%20cls.jpg?alt=media&token=68f9fecb-bc9b-4008-b8a5-14805a776122",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.216002, -78.506490",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-KgyTStba2cYF5zEQXC1%2Flogo%20cls.jpg?alt=media&token=b0728963-b5e3-4147-9ad8-ee6a8092706e",
//                 "long_description" : ".",
//                 "name" : "Antiguo Colegio La Salle",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "short_description" : "Se creó en 1907 para educar a jóvenes de familias burguesas y aristocráticas de Quito",
//                 "web" : "."
//             },
//             "-Kh2nq7nwxwls6IlRDX4" : {
//                 "address" : "Calle Luis Vargas y Antonio Ante",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kh2nq7nwxwls6IlRDX4%2Fcabecera%20inm.jpg?alt=media&token=285373df-6873-49b8-9c9f-fc0d4cbf6f1e",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.212241, -78.505361",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kh2nq7nwxwls6IlRDX4%2Flogo%20inm.jpg?alt=media&token=1c1ed196-e187-44a2-8862-e846057462ef",
//                 "long_description" : ".",
//                 "name" : "Instituto Nacional Mejía",
//                 "pais" : "Ecuador",
//                 "phone" : "02 256 2841",
//                 "region" : "Pichincha",
//                 "short_description" : "Este edificio alberga la primera institución laica de la ciudad.",
//                 "web" : "http://bgmejia.com.ec"
//             },
//             "-Kh2pQP5eCsC4MbW06aR" : {
//                 "address" : "Entre avenidas Gran Colombia y 10 de Agosto",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.214640, -78.502553",
//                 "logo" : "",
//                 "long_description" : "Este sitio está abierto al público y se puede llegar a él desde el norte y sur de la ciudad por las líneas de transporte público Trolebús y Ecovía.",
//                 "name" : "Parque de La Alameda",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-ios-paw",
//                     "name" : "Pet Friendly"
//                 } ],
//                 "short_description" : "El parque más antiguo de Quito.",
//                 "web" : "."
//             },
//             "-Kh2siCLK5BzOcq3x9mF" : {
//                 "address" : "Entre avenidas Gran Colombia y 10 de Agosto, Parque La Alameda",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : "informacionoaq@epn.edu.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.214888, -78.502480",
//                 "logo" : "",
//                 "long_description" : ".",
//                 "name" : "Observatorio Astronómico",
//                 "pais" : "Ecuador",
//                 "phone" : "02 257 0765 - 02 258 3451",
//                 "region" : "Pichincha",
//                 "short_description" : "Uno de los observatorios más antiguos de América",
//                 "web" : "http://oaq.epn.edu.ec"
//             },
//             "-Kh2uRDh1AyYM7-L7az6" : {
//                 "address" : "Piedrahita y Avenida 6 de Diciembre",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "maria.samaniego@asambleanacional.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kh2uRDh1AyYM7-L7az6%2Fcabecera%20an.jpg?alt=media&token=7b00912a-2b51-4dfb-b929-1a34cf82c3d5",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.213092, -78.498814",
//                 "logo" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/productos%2F-Kh2uRDh1AyYM7-L7az6%2Flogo%20an.jpg?alt=media&token=b0032389-ad91-4e33-9158-9ba6b54d5430",
//                 "long_description" : ".",
//                 "name" : "Palacio Legislativo",
//                 "pais" : "Ecuador",
//                 "phone" : "02 399 1000",
//                 "region" : "Pichincha",
//                 "short_description" : "Asamblea Nacional Constituyente",
//                 "web" : "http://www.asambleanacional.gob.ec/es"
//             },
//             "-Kh2wSO6sb5MHMOkzc7I" : {
//                 "address" : "Entre avenidas Shyris y Amazonas",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.183010, -78.484584",
//                 "logo" : "",
//                 "long_description" : "Este es un espacio público para recreación que cuenta con espacios para deportes, juegos infantiles, estaciones de comida, etc.",
//                 "name" : "Parque La Carolina",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-ios-paw",
//                     "name" : "Pet Friendly"
//                 } ],
//                 "short_description" : "Antes, Laguna de Iñaquito. Hoy, Parque La Carolina",
//                 "web" : "."
//             },
//             "-Kh2zZk-i8v7mujE84HI" : {
//                 "address" : "Avenida 6 de Diciembre y Naciones Unidas",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "prensa@cdp.com.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.177520, -78.476683",
//                 "logo" : "",
//                 "long_description" : "Capacidad: 38.500 espectadores sentados. Dimensiones: 105 x 70 m. Materiales: Césped natural (campo); Polytan (pista atlética). Horario de atención en la Concentración Deportiva de Pichincha: lunes a viernes de 12h00 a 20h00",
//                 "name" : "Estadio Olímpico Atahualpa",
//                 "pais" : "Ecuador",
//                 "phone" : "02 255 0075 - 02 255 0085 - 02 255 0175",
//                 "region" : "Pichincha",
//                 "short_description" : "Escenario de eventos, no sólo deportivos, sino culturales y artísticos.",
//                 "web" : "http://www.cdp.com.ec"
//             },
//             "-Kh350G9-Glfcakhapu8" : {
//                 "address" : "Calle Mariano Calvache y Lorenzo Chávez",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "secretariainfo@fundacionguayasamin.org",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.190719, -78.469455",
//                 "logo" : "",
//                 "long_description" : "Horarios de visita: todos los días de 10h00 a 17h00. Cerrado en Feriados regionales y nacionales. Entrada: Adultos $ 8,00; Estudiantes, Adultos mayores, Personas con Discapacidad $ 4,00. Niños hasta 12 años entran Gratis. Domingos entrada gratuita para visitantes ecuatorianos.  ",
//                 "name" : "Capilla del Hombre",
//                 "pais" : "Ecuador",
//                 "phone" : "02 244 6455 – 02 245 2938 – 02 246 5266",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 } ],
//                 "short_description" : "Un Centro Cultural que surge como respuesta a la necesidad de rendir homenaje al ser humano, a sus pueblos, a su identidad. ",
//                 "web" : "http://www.capilladelhombre.com"
//             },
//             "-Kh38A3AcwEwriRY8z9J" : {
//                 "address" : "Calle Guanguiltahua, sector Batán Alto.",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : "comunicacion@epmmop.gob.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.177574, -78.460586",
//                 "logo" : "",
//                 "long_description" : "Es un sitio público que puede visitarse de lunes a domingo de 05h30 a 17h30. Espacio con caminos para bicicleta de montaña, caminata, senderos para alistamiento de aves, areas de deportes, juegos infantiles, estaciones de comida rápida, etc.",
//                 "name" : "Parque Metropolitano",
//                 "pais" : "Ecuador",
//                 "phone" : "02 290 7005 - 02 290 4884",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-ios-paw",
//                     "name" : "Pet Friendly"
//                 } ],
//                 "short_description" : "Un parque-bosque en el centro norte de la ciudad.",
//                 "web" : "http://www.epmmop.gob.ec/epmmop/index.php/proyectos/espacio-publico/parques-y-areas-verdes"
//             },
//             "-Kh3A4SEte5VP_3EZzkI" : {
//                 "address" : "Avenida Gonzales Suárez",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "reservaciones@hotelquito.com ",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.202558, -78.480464",
//                 "logo" : "",
//                 "long_description" : "Acomodación, Eventos, Club de Miembros, Restaurante.",
//                 "name" : "Hotel Quito",
//                 "pais" : "Ecuador",
//                 "phone" : "02 396 4900",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 }, {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Desde los '50, el hotel ícono de la ciudad.",
//                 "web" : "http://www.hotelquito.com.ec/"
//             },
//             "-Kh3F6stAIQBQhewqL-D" : {
//                 "address" : "Avenidas Ladrón de Guevara y Velasco Ibarra",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "prensa@cdp.com.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.213410, -78.490232",
//                 "logo" : "",
//                 "long_description" : "Con capacidad para 14.729 espectadores, es el espacio cerrado de mayor capacidad en Quito.",
//                 "name" : "Coliseo Rumiñahui",
//                 "pais" : "Ecuador",
//                 "phone" : "02 255 0075 - 02 255 0085 - 02 255 0175 - 02 255 0185",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 } ],
//                 "short_description" : "Es un complejo deportivo que cumple con parámetros internacionales para la práctica y preparación de deportistas olímpicos",
//                 "web" : "http://www.cdp.com.ec"
//             },
//             "-Kh3IDr4XvXtiVziXYGR" : {
//                 "address" : "Avenida Ladrón de Guevara",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "info@epn.edu.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.210325, -78.488612",
//                 "logo" : "",
//                 "long_description" : "Período Académico: Abril – Septiembre y Octubre - Marzo",
//                 "name" : "Escuela Politécnica Nacional",
//                 "pais" : "Ecuador",
//                 "phone" : "02 297 6300",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "Concebida como el primer centro de docencia e investigación científica y como ente generador del desarrollo nacional.",
//                 "web" : "http://www.epn.edu.ec"
//             },
//             "-Kh3LMv3fcNsjQIG8ias" : {
//                 "address" : "Avenida 12 de Octubre",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : "promocion@puce.edu.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.209239, -78.491414",
//                 "logo" : "",
//                 "long_description" : "Período de estudios: Abril - Agosto. Horarios de atención en oficinas: lunes a viernes 08h00 a 16h30",
//                 "name" : "Campus Pontificia Universidad Católica del Ecuador",
//                 "pais" : "Ecuador",
//                 "phone" : "02 299 1700",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-wifi",
//                     "name" : "WIFI"
//                 }, {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "La Universidad cuenta con más de 10000 estudiantes",
//                 "web" : "http://www.puce.edu.ec/"
//             },
//             "-Kh3MdXvwV_rRLJmpxA9" : {
//                 "address" : "Entre Avenidas 12 de Octubre y 10 de Agosto",
//                 "audio" : "",
//                 "cat" : "-KdSYxnr5Xw2q47YdQqt",
//                 "city" : "Quito",
//                 "email" : ".",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.202900, -78.491041",
//                 "logo" : "",
//                 "long_description" : "Este barrio se formó con las primeras casas y Villas de las familias adineradas de Quito. Ahora es un barrio en el que se puede encontrar hospedaje de toda categoría, restaurantes, bares, discotecas, etc.",
//                 "name" : "Barrio La Mariscal",
//                 "pais" : "Ecuador",
//                 "phone" : ".",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-fork",
//                     "name" : "Restaurant"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-tshirt-outline",
//                     "name" : "Gift Shop"
//                 }, {
//                     "icon" : "ion-card",
//                     "name" : "Tarjeta de crédito"
//                 }, {
//                     "icon" : "ion-beer",
//                     "name" : "Bar"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 }, {
//                     "icon" : "ion-ios-paw",
//                     "name" : "Pet Friendly"
//                 } ],
//                 "short_description" : "Barrio turístico y y de vida nocturna de la ciudad",
//                 "web" : "."
//             },
//             "-Kh3OOaPgdiKpcg-wrIg" : {
//                 "address" : "Avenida Universitaria",
//                 "audio" : "",
//                 "cat" : "-Ka2URayd8Y9sBoGTO0Z",
//                 "city" : "Quito",
//                 "email" : "dcc@uce.edu.ec",
//                 "header" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/placeholders%2Fbg-product.png?alt=media&token=8075f9df-88f5-4346-bb67-bd7c2dbbcf03",
//                 "images" : [ {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 }, {
//                     "src" : "",
//                     "sub" : ""
//                 } ],
//                 "latlong" : "-0.200846, -78.501984",
//                 "logo" : "",
//                 "long_description" : "Estudiantes: 40.000 (aprox.). Lema: Omnium Potentior Est Sapientia (Todo Poderosa es la Sabiduría). Horarios de clases: lunes a viernes de 07h00 a 21h00",
//                 "name" : "Universidad Central del Ecuador",
//                 "pais" : "Ecuador",
//                 "phone" : "098 338 4758",
//                 "region" : "Pichincha",
//                 "selected_facilities" : [ {
//                     "icon" : "ion-ios-football",
//                     "name" : "Espacios Deportivos"
//                 }, {
//                     "icon" : "ion-android-bicycle",
//                     "name" : "Parqueadero de Bicis"
//                 }, {
//                     "icon" : "ion-coffee",
//                     "name" : "Cafetería"
//                 } ],
//                 "short_description" : "La más antigua del Ecuador.",
//                 "web" : "http://www.uce.edu.ec"
//             }
//         },
//         "profiles" : {
//             "-KYnj2t3_3-oqtbal4L2" : {
//                 "cities" : [ "Riobamba" ],
//                 "email" : "iwa@moplin.com",
//                 "first_name" : "Raficolito",
//                 "has_cities" : true,
//                 "lang" : "es",
//                 "last_name" : "Matitolito",
//                 "profile_pic" : "https://firebasestorage.googleapis.com/v0/b/ecuadortravelguide-dfcfe.appspot.com/o/profile-images%2FDqRJaqZ1GoQ5qEaF0qRVNVMW9P82.jpg?alt=media&token=c88b72ca-fc62-4005-847c-39e5cc60f71d",
//                 "uid" : "DqRJaqZ1GoQ5qEaF0qRVNVMW9P82"
//             },
//             "-KYuXAtQhJZsBdRwkWXX" : {
//                 "cities" : [ "Cuenca", "Ibarra" ],
//                 "email" : "traveldealsecuador@gmail.com",
//                 "first_name" : "Ecuador",
//                 "has_cities" : true,
//                 "lang" : "es",
//                 "last_name" : "Travel Guide",
//                 "profile_pic" : "",
//                 "uid" : "pJ27OQ4bkjSQbHgfQVSTXi6rqKK2"
//             },
//             "-KZP-qFkJnNddAguPhre" : {
//                 "cities" : [ "Quito" ],
//                 "email" : "davidcando@hotmail.com",
//                 "first_name" : "David",
//                 "has_cities" : true,
//                 "lang" : "es",
//                 "last_name" : "Cando",
//                 "profile_pic" : "http://placehold.it/50x50",
//                 "uid" : "vuXtiGWOz0NpwwsyGuKsCYoPdX23"
//             },
//             "-K_o6Q8jgXDpWVnKKfDM" : {
//                 "cities" : [ "Quito" ],
//                 "email" : "davidcando@hotmial.com",
//                 "first_name" : "David",
//                 "has_cities" : true,
//                 "lang" : "es",
//                 "last_name" : "Cando",
//                 "profile_pic" : "http://placehold.it/50x50",
//                 "uid" : "tJPRIxv0qgWDXQOY3jYSwAabnNg2"
//             },
//             "-KbQCkfZXRFuZ0Ey8Myy" : {
//                 "cities" : [ " Latacunga", "Guaranda", "Tena", "Quito", "Tulcán" ],
//                 "email" : "myam@moplin.com",
//                 "first_name" : "mya",
//                 "has_cities" : true,
//                 "lang" : "es",
//                 "last_name" : "matovelle",
//                 "profile_pic" : "https://firebasestorage.googleapis.com/v0/b/gtfirebase.appspot.com/o/profile-images%2FOHuqrhXPTUUhHI5RrJsXmd0W3zH2.jpg?alt=media&token=f6fb23b0-f604-47d1-92bd-8a6d624d089b",
//                 "uid" : "OHuqrhXPTUUhHI5RrJsXmd0W3zH2"
//             },
//             "-KbV1EDkNLkSjVHONuAs" : {
//                 "cities" : [ "Guaranda", "Esmeraldas", "Cumbaya" ],
//                 "email" : "iwa@moplin.com",
//                 "first_name" : "Panda",
//                 "has_cities" : true,
//                 "lang" : "es",
//                 "last_name" : "Clasic",
//                 "profile_pic" : "http://placehold.it/50x50",
//                 "uid" : "5LuK29uWKuRP7qwKyHYlQvvA17q2"
//             },
//             "-KciUzTb6ypMTTjttv37" : {
//                 "birthdate" : "",
//                 "email" : "srparca@gmail.com",
//                 "first_name" : "Rafael",
//                 "has_cities" : false,
//                 "lang" : "es",
//                 "last_name" : "Matovelle",
//                 "profile_pic" : "http://placehold.it/50x50",
//                 "uid" : "76ikbSY5ZtNP7vPv1ZAJ3YgTegg1"
//             },
//             "-KciWmAJB7nKRowj74xN" : {
//                 "birthdate" : "",
//                 "email" : "nuevo@moplin.com",
//                 "first_name" : "nuevo",
//                 "has_cities" : false,
//                 "lang" : "es",
//                 "last_name" : "nuevo",
//                 "profile_pic" : "http://placehold.it/50x50",
//                 "uid" : "nV1PcX3qhTQkjG7GU7Yfsp0wyVp1"
//             },
//             "-KciYbWwNRiaLC0vNOIg" : {
//                 "birthdate" : "",
//                 "email" : "aaa@moplin.coom",
//                 "first_name" : "hola",
//                 "has_cities" : false,
//                 "lang" : "es",
//                 "last_name" : "hola",
//                 "profile_pic" : "http://placehold.it/50x50",
//                 "uid" : "79MKLskl5xcmS7ad0chYR7YNrjF2"
//             },
//             "-KciZpKRASEV1iPuZkV0" : {
//                 "cities" : [ "Guaranda", "Quito" ],
//                 "email" : "srparca@gmail.com",
//                 "first_name" : "R",
//                 "has_cities" : true,
//                 "lang" : "es",
//                 "last_name" : "M",
//                 "profile_pic" : "http://placehold.it/50x50",
//                 "uid" : "7JE2hvpbh6gz6JwFGBApgj2VNX72"
//             }
//         },
//         "service_en" : {
//             "-KhoDB_hxYyHEn3Axm2T" : {
//                 "address" : "Chile entre Venezuela  y Guayaquil",
//                 "hours" : "24 horas",
//                 "latLong" : "-0.22032683431001598, -78.5109668970108",
//                 "notes" : "Banco del Pacifico",
//                 "serviceId" : "-KhoDBY3gY_Q_VHLaMlu",
//                 "servicesId" : "-KhoBu-Y62x8KTdr2xs3"
//             },
//             "-KhoDgXDd1k9EZxxMg2s" : {
//                 "address" : "Venezuela y Espejo",
//                 "hours" : "8h00 a 19h00",
//                 "latLong" : "-0.2207935352206552, -78.51202368736267",
//                 "notes" : "Banco del Pichincha",
//                 "serviceId" : "-KhoDgUrcjKPcSeonLFA",
//                 "servicesId" : "-KhoBu-Y62x8KTdr2xs3"
//             }
//         },
//         "service_es" : {
//             "-KhoDBY3gY_Q_VHLaMlu" : {
//                 "address" : "Chile entre Venezuela  y Guayaquil",
//                 "hours" : "24 horas",
//                 "latLong" : "-0.22032683431001598, -78.5109668970108",
//                 "notes" : "Banco del Pacifico",
//                 "servicesId" : "-KhoBty4W8jk4I-HRdAh"
//             },
//             "-KhoDgUrcjKPcSeonLFA" : {
//                 "address" : "Venezuela y Espejo",
//                 "hours" : "8h00 a 19h00",
//                 "latLong" : "-0.2207935352206552, -78.51202368736267",
//                 "notes" : "Banco del Pichincha",
//                 "servicesId" : "-KhoBty4W8jk4I-HRdAh"
//             }
//         },
//         "services_en" : {
//             "-KhoBu-Y62x8KTdr2xs3" : {
//                 "description" : "Banco del Pacifico",
//                 "icon" : "ion-information-circled",
//                 "name" : "Cajero automaticos/ATM´S",
//                 "servicesId" : "-KhoBty4W8jk4I-HRdAh"
//             }
//         },
//         "services_es" : {
//             "-KhoBty4W8jk4I-HRdAh" : {
//                 "description" : "Banco del Pacifico",
//                 "icon" : "ion-information-circled",
//                 "name" : "Cajero automaticos/ATM´S"
//             }
//         },
//         "settings" : {
//             "app" : {
//                 "name" : "ETG DEV DB",
//                 "version" : "0.0.4",
//                 "version_data" : 0
//             },
//             "category_icons" : [ {
//                 "name" : "ion-android-restaurant"
//             }, {
//                 "name" : "ion-ios-home"
//             }, {
//                 "name" : "ion-information-circled"
//             }, {
//                 "name" : "ion-android-map"
//             }, {
//                 "name" : "ion-tshirt"
//             }, {
//                 "name" : "ion-navigate"
//             }, {
//                 "name" : "ion-music-note"
//             }, {
//                 "name" : "ion-plane"
//             }, {
//                 "name" : "ion-ios-cart"
//             }, {
//                 "name" : "ion-ios-email-outline"
//             }, {
//                 "name" : "ion-ios-camera-outline"
//             }, {
//                 "name" : "ion-ios-football"
//             }, {
//                 "name" : "ion-android-compass"
//             }, {
//                 "name" : "ion-android-bicycle"
//             }, {
//                 "name" : "ion-android-bar"
//             }, {
//                 "name" : "ion-android-camera"
//             }, {
//                 "name" : "ion-android-contacts"
//             }, {
//                 "name" : "ion-android-bus"
//             }, {
//                 "name" : "ion-android-subway"
//             } ],
//             "cities" : {
//                 "-KeLLEHd3Rv5MPpGzeS6" : {
//                     "name" : "Cuenca",
//                     "province_id" : "0"
//                 },
//                 "-KeLLFt49i15J29L4w7E" : {
//                     "name" : "Guaranda",
//                     "province_id" : "1"
//                 },
//                 "-KeLLH80t-Cz8omafbGL" : {
//                     "name" : "Azogues",
//                     "province_id" : "2"
//                 },
//                 "-KeLLP9S19ZZznBYbI7g" : {
//                     "name" : "Tulcán",
//                     "province_id" : "3"
//                 },
//                 "-KeLLR75r83-6dR-sr1o" : {
//                     "name" : "Riobamba",
//                     "province_id" : "4"
//                 },
//                 "-KeLLSbypaZDKzYvfOUy" : {
//                     "name" : "Latacunga",
//                     "province_id" : "5"
//                 },
//                 "-KeLLVIDf8kaY0e7_ekr" : {
//                     "name" : "Machala",
//                     "province_id" : "6"
//                 },
//                 "-KeLLWQFtHtWHkRI-SfV" : {
//                     "name" : "Esmeraldas",
//                     "province_id" : "7"
//                 },
//                 "-KeLLYHVPNZ3Luxtgesi" : {
//                     "name" : "Puerto Baquerizo Moreno",
//                     "province_id" : "8"
//                 },
//                 "-KeLLZMEm-XSZ0TNWzCP" : {
//                     "name" : "Guayaquil",
//                     "province_id" : "9"
//                 },
//                 "-KeLLbdAE0MpcflJ2OvC" : {
//                     "name" : "Ibarra",
//                     "province_id" : "10"
//                 },
//                 "-KeLLcmEOIUr3Pj_OABt" : {
//                     "name" : "Loja",
//                     "province_id" : "11"
//                 },
//                 "-KeLLdz8Yf9YL3f4Dxgx" : {
//                     "name" : "Babahoyo",
//                     "province_id" : "12"
//                 },
//                 "-KeLLggggkLM76TyCwdF" : {
//                     "name" : "Portoviejo",
//                     "province_id" : "13"
//                 },
//                 "-KeLLheTpl1yUiUa0rgP" : {
//                     "name" : "Macas",
//                     "province_id" : "14"
//                 },
//                 "-KeLLjZkU9kOYnZjD-_M" : {
//                     "name" : "Tena",
//                     "province_id" : "15"
//                 },
//                 "-KeLLlnakSw6NJO6uGJU" : {
//                     "name" : "Francisco de Orellana",
//                     "province_id" : "16"
//                 },
//                 "-KeLLnCy050r6baSwM1h" : {
//                     "name" : "Puyo",
//                     "province_id" : "17"
//                 },
//                 "-KeLLoQDww2eMkAjoN-K" : {
//                     "name" : "Quito",
//                     "province_id" : "18"
//                 },
//                 "-KeLLpvL-vf0YH1c65CH" : {
//                     "name" : "Santa Elena",
//                     "province_id" : "19"
//                 },
//                 "-KeLLs-z7LbCcO7tADDZ" : {
//                     "name" : "Santo Domingo",
//                     "province_id" : "20"
//                 },
//                 "-KeLLtrXLQ2dYLLSvb3T" : {
//                     "name" : "Nueva Loja",
//                     "province_id" : "21"
//                 },
//                 "-KeLLvtVHpr1A4ukXaKg" : {
//                     "name" : "Zamora",
//                     "province_id" : "22"
//                 },
//                 "-KeLQWWUmyfuRiDdSrlH" : {
//                     "name" : "Cumbaya",
//                     "province_id" : "18"
//                 },
//                 "-KeLQzgz0g3n1LrQ0bfc" : {
//                     "name" : "Pifo",
//                     "province_id" : "18"
//                 },
//                 "-KePMWa2Zc1rJPTJLE2_" : {
//                     "name" : "Alausi",
//                     "province_id" : "4"
//                 },
//                 "-KePMs9rXlqno7XUKn9X" : {
//                     "name" : "Piñas",
//                     "province_id" : "6"
//                 },
//                 "-KeZBvZi_aveY6NEwaT9" : {
//                     "name" : "San Rafael",
//                     "province_id" : "18"
//                 },
//                 "-KeaDGRuCn8r6VuoOcrV" : {
//                     "name" : "Guamote",
//                     "province_id" : "4"
//                 },
//                 "-KeaDNkCAF-Ai_I9qqkh" : {
//                     "name" : "Inagapirca",
//                     "province_id" : "2"
//                 },
//                 "-KeaDSsy-MWZxjnzsBEr" : {
//                     "name" : "Zumbahua",
//                     "province_id" : "5"
//                 },
//                 "-KeaDY6Qt5OOFBSjxoCA" : {
//                     "name" : "Chugchilan",
//                     "province_id" : "5"
//                 },
//                 "-KeaDiEZtIQpO-_5cDEi" : {
//                     "name" : "Lasso",
//                     "province_id" : "5"
//                 },
//                 "-KeaDoCsXPnEV8X-5tCS" : {
//                     "name" : "Otavalo",
//                     "province_id" : "10"
//                 },
//                 "-KeaDqvUN5oojVJDZlRF" : {
//                     "name" : "Cotacachi",
//                     "province_id" : "10"
//                 }
//             },
//             "countries" : [ {
//                 "name" : "Ecuador"
//             } ],
//             "facilities" : [ {
//                 "icon" : "ion-wifi",
//                 "name" : "WIFI"
//             }, {
//                 "icon" : "ion-fork",
//                 "name" : "Restaurant"
//             }, {
//                 "icon" : "ion-ios-football",
//                 "name" : "Espacios Deportivos"
//             }, {
//                 "icon" : "ion-android-bicycle",
//                 "name" : "Parqueadero de Bicis"
//             }, {
//                 "icon" : "ion-tshirt-outline",
//                 "name" : "Gift Shop"
//             }, {
//                 "icon" : "ion-card",
//                 "name" : "Tarjeta de crédito"
//             }, {
//                 "icon" : "ion-beer",
//                 "name" : "Bar"
//             }, {
//                 "icon" : "ion-coffee",
//                 "name" : "Cafetería"
//             }, {
//                 "icon" : "ion-ios-paw",
//                 "name" : "Pet Friendly"
//             } ],
//             "provinces" : [ {
//                 "country_id" : "0",
//                 "id" : "0",
//                 "name" : "Azuay"
//             }, {
//                 "country_id" : "0",
//                 "id" : "1",
//                 "name" : "Bolívar"
//             }, {
//                 "country_id" : "0",
//                 "id" : "2",
//                 "name" : "Cañar"
//             }, {
//                 "country_id" : "0",
//                 "id" : "3",
//                 "name" : "Carchi"
//             }, {
//                 "country_id" : "0",
//                 "id" : "4",
//                 "name" : "Chimborazo"
//             }, {
//                 "country_id" : "0",
//                 "id" : "5",
//                 "name" : "Cotopaxi"
//             }, {
//                 "country_id" : "0",
//                 "id" : "6",
//                 "name" : "El Oro"
//             }, {
//                 "country_id" : "0",
//                 "id" : "7",
//                 "name" : "Esmeraldas"
//             }, {
//                 "country_id" : "0",
//                 "id" : "8",
//                 "name" : "Galápagos"
//             }, {
//                 "country_id" : "0",
//                 "id" : "9",
//                 "name" : "Guayas"
//             }, {
//                 "country_id" : "0",
//                 "id" : "10",
//                 "name" : "Imbabura"
//             }, {
//                 "country_id" : "0",
//                 "id" : "11",
//                 "name" : "Loja"
//             }, {
//                 "country_id" : "0",
//                 "id" : "12",
//                 "name" : "Los Ríos"
//             }, {
//                 "country_id" : "0",
//                 "id" : "13",
//                 "name" : "Manabí"
//             }, {
//                 "country_id" : "0",
//                 "id" : "14",
//                 "name" : "Macas"
//             }, {
//                 "country_id" : "0",
//                 "id" : "15",
//                 "name" : "Napo"
//             }, {
//                 "country_id" : "0",
//                 "id" : "16",
//                 "name" : "Orellana"
//             }, {
//                 "country_id" : "0",
//                 "id" : "17",
//                 "name" : "Pastaza"
//             }, {
//                 "country_id" : "0",
//                 "id" : "18",
//                 "name" : "Pichincha"
//             }, {
//                 "country_id" : "0",
//                 "id" : "19",
//                 "name" : "Santa Elena"
//             }, {
//                 "country_id" : "0",
//                 "id" : "20",
//                 "name" : "Santo Domingo de los Tsáchilas"
//             }, {
//                 "country_id" : "0",
//                 "id" : "21",
//                 "name" : "Sucumbíos"
//             }, {
//                 "country_id" : "0",
//                 "id" : "22",
//                 "name" : "Zamora Chinchipe"
//             } ]
//         }
//     }]);
//
//
//
//
//
// db.bulkDocs([
//     {
//         _id: 'mittens',
//         occupation: 'kitten',
//         cuteness: {waxa:10}
//     },
//     {
//         _id: 'katie',
//         occupation: 'kitten',
//         cuteness: {waxa:10}
//     },
//     {
//         _id: 'felix',
//         occupation: 'kitten',
//         cuteness: {waxa:10}
//     }
// ]);
//






db.info().then(function (info) {
    document.getElementById('display').innerHTML = 'We have a database: ' + JSON.stringify(info);
});