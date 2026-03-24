/* ═══════════════════════════════════════════════════════════════
   STAYVENTURE — script.js v2.0
   Features: Navbar · Search · Gemini AI · Destinations · Packages
   Booking · Calendar · Payment · Dashboard · Chatbot · Wishlist
═══════════════════════════════════════════════════════════════ */

const GEMINI_API_KEY = 'AIzaSyCfe_kFEp_XNvd3tHUFQPgi8HE1zcQKOpU';

/* ── DATA ─────────────────────────────────────────────────────── */
const DESTINATIONS = [
  { id:'paris', name:'Paris', country:'France', tag:'Cultural', theme:['cultural'],
    price:'₹82,000', priceNum:82000,
    img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    desc:'The City of Light enchants with its iconic Eiffel Tower, world-class cuisine, magnificent art museums, and romantic Seine riverbanks. Paris blends timeless elegance with vibrant modern culture.',
    attractions:['Eiffel Tower','Louvre Museum','Notre-Dame Cathedral','Champs-Élysées','Montmartre','Palace of Versailles'],
    activities:['Seine River Cruise','Wine & Cheese Tour','Cooking Class','Art Gallery Hop','Shopping at Le Marais'],
    hotels:['Le Meurice (5★)','Hôtel Lutetia (5★)','Paris Marriott (4★)','ibis Paris Centre (3★)'],
    itinerary:[
      {day:'Day 1', title:'Arrival & Eiffel Tower', desc:'Arrive, check-in, evening visit to Eiffel Tower with sunset views.'},
      {day:'Day 2', title:'Louvre & Seine Cruise', desc:'Morning at Louvre, afternoon Seine river cruise, dinner at a bistro.'},
      {day:'Day 3', title:'Versailles Day Trip', desc:'Full day at Palace of Versailles gardens and grand halls.'},
      {day:'Day 4', title:'Montmartre & Shopping', desc:'Morning in Montmartre, Sacré-Cœur, afternoon shopping.'},
      {day:'Day 5', title:'Departure', desc:'Final morning stroll, souvenir shopping, airport transfer.'}
    ],
    costs:{hotel:'₹35,000', flight:'₹28,000', food:'₹12,000', activities:'₹7,000'},
    total:'₹82,000' },

  { id:'dubai', name:'Dubai', country:'UAE', tag:'Desert', theme:['desert','adventure'],
    price:'₹65,000', priceNum:65000,
    img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    desc:'Dubai dazzles with record-breaking skyscrapers, luxury shopping, golden desert dunes, and stunning artificial islands. A city that turned a desert into the world\'s most glamorous destination.',
    attractions:['Burj Khalifa','Palm Jumeirah','Dubai Mall','Desert Safari','Dubai Frame','Burj Al Arab'],
    activities:['Desert Safari & Dune Bashing','Burj Khalifa Observation Deck','Dhow Cruise','Ski Dubai','Gold Souk Tour'],
    hotels:['Burj Al Arab (7★)','Atlantis The Palm (5★)','JW Marriott (5★)','Rove Downtown (4★)'],
    itinerary:[
      {day:'Day 1', title:'City Arrival & Downtown', desc:'Arrive at Dubai International, check-in, evening at Dubai Fountain show.'},
      {day:'Day 2', title:'Burj Khalifa & Mall', desc:'Morning Burj Khalifa At the Top, Dubai Mall, Dubai Aquarium.'},
      {day:'Day 3', title:'Desert Safari', desc:'Full-day desert safari with dune bashing, camel ride, and BBQ dinner.'},
      {day:'Day 4', title:'Palm Jumeirah & Beach', desc:'Atlantis water park, JBR Beach, evening Dhow cruise.'},
      {day:'Day 5', title:'Shopping & Departure', desc:'Gold Souk, Spice Souk, last-minute shopping, airport transfer.'}
    ],
    costs:{hotel:'₹28,000', flight:'₹18,000', food:'₹10,000', activities:'₹9,000'},
    total:'₹65,000' },

  { id:'maldives', name:'Maldives', country:'Indian Ocean', tag:'Beach', theme:['beach','honeymoon'],
    price:'₹1,85,000', priceNum:185000,
    img:'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80',
    desc:'The Maldives offers the ultimate tropical paradise — crystal-clear turquoise waters, powdery white sand beaches, spectacular coral reefs, and luxurious overwater bungalows. Pure heaven on earth.',
    attractions:['Overwater Bungalows','Coral Reefs','Underwater Restaurant','Bioluminescent Beach','Male Fish Market'],
    activities:['Snorkeling & Diving','Sunset Dolphin Cruise','Spa Treatments','Fishing Trip','Glass-Bottom Boat'],
    hotels:['Soneva Jani (5★)','Gili Lankanfushi (5★)','Niyama (5★)','Sun Island Resort (4★)'],
    itinerary:[
      {day:'Day 1', title:'Arrival & Speedboat Transfer', desc:'Fly into Male, speedboat to your resort, welcome cocktails.'},
      {day:'Day 2', title:'Snorkeling & Beach', desc:'House reef snorkeling, beach relaxation, sunset cruise.'},
      {day:'Day 3', title:'Diving Excursion', desc:'PADI diving at pristine reefs, underwater photography.'},
      {day:'Day 4', title:'Island Hopping', desc:'Visit local islands, fishing village, sandbank picnic.'},
      {day:'Day 5', title:'Spa & Relaxation', desc:'Full-day couple spa treatment, bioluminescent beach walk at night.'},
      {day:'Day 6', title:'Farewell & Departure', desc:'Last morning swim, souvenir shopping, speedboat to airport.'}
    ],
    costs:{hotel:'₹1,10,000', flight:'₹42,000', food:'₹18,000', activities:'₹15,000'},
    total:'₹1,85,000' },

  { id:'bali', name:'Bali', country:'Indonesia', tag:'Beach', theme:['beach','adventure','cultural'],
    price:'₹55,000', priceNum:55000,
    img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    desc:'Bali captivates with terraced rice paddies, ancient temples, world-class surf, vibrant nightlife, and the warmest Balinese hospitality. An island of gods that never stops surprising.',
    attractions:['Tanah Lot Temple','Ubud Rice Terraces','Sacred Monkey Forest','Kecak Dance','Uluwatu Temple'],
    activities:['Surfing at Kuta Beach','White Water Rafting','Rice Terrace Trekking','Balinese Cooking Class','Temple Sunrise Tour'],
    hotels:['COMO Uma Ubud (5★)','Alila Villas Uluwatu (5★)','The Legian (4★)','Kuta Paradiso (3★)'],
    itinerary:[
      {day:'Day 1', title:'Arrival & Seminyak', desc:'Land in Denpasar, transfer to hotel, evening at Seminyak Beach.'},
      {day:'Day 2', title:'Ubud & Monkey Forest', desc:'Ubud Sacred Monkey Forest, rice terraces, traditional dance show.'},
      {day:'Day 3', title:'Temples Tour', desc:'Tanah Lot sunrise, Uluwatu Temple, Kecak fire dance.'},
      {day:'Day 4', title:'Adventure Day', desc:'White water rafting on Ayung River, cooking class, spa.'},
      {day:'Day 5', title:'Nusa Dua Beach', desc:'Relaxation at Nusa Dua, water sports, sunset drinks.'},
      {day:'Day 6', title:'Shopping & Departure', desc:'Kuta market shopping, airport transfer.'}
    ],
    costs:{hotel:'₹22,000', flight:'₹18,000', food:'₹8,000', activities:'₹7,000'},
    total:'₹55,000' },

  { id:'switzerland', name:'Switzerland', country:'Europe', tag:'Winter', theme:['winter','adventure'],
    price:'₹1,25,000', priceNum:125000,
    img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    desc:'Switzerland delivers spectacular Alpine scenery, pristine ski slopes, luxury wellness retreats, medieval old towns, and the finest chocolate and cheese in the world.',
    attractions:['Jungfraujoch','Matterhorn','Lake Geneva','Interlaken','Lucerne Old Town','Rhine Falls'],
    activities:['Skiing & Snowboarding','Paragliding','Swiss Chocolate Tour','Mountain Hiking','Glacier Express Train'],
    hotels:['The Dolder Grand (5★)','Badrutt\'s Palace (5★)','Victoria-Jungfrau (5★)','Ibis Zurich (3★)'],
    itinerary:[
      {day:'Day 1', title:'Zurich Arrival', desc:'Land in Zurich, Old Town walking tour, fondue dinner.'},
      {day:'Day 2', title:'Jungfraujoch', desc:'Full day at Jungfraujoch "Top of Europe", snow activities.'},
      {day:'Day 3', title:'Interlaken', desc:'Paragliding over Interlaken, Lake Thun boat cruise.'},
      {day:'Day 4', title:'Matterhorn & Zermatt', desc:'Train to Zermatt, Matterhorn Glacier Paradise views.'},
      {day:'Day 5', title:'Lucerne & Geneva', desc:'Chapel Bridge Lucerne, drive to Geneva, Swiss watches shopping.'},
      {day:'Day 6', title:'Departure', desc:'Chocolaterie visit, souvenir shopping, flight home.'}
    ],
    costs:{hotel:'₹58,000', flight:'₹38,000', food:'₹16,000', activities:'₹13,000'},
    total:'₹1,25,000' },

  { id:'goa', name:'Goa', country:'India', tag:'Beach', theme:['beach','adventure'],
    price:'₹18,000', priceNum:18000,
    img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    desc:'Goa is India\'s sunshine state — golden beaches, Portuguese heritage churches, vibrant nightlife, fresh seafood, and a laid-back vibe that makes it India\'s most beloved holiday destination.',
    attractions:['Calangute Beach','Baga Beach','Basilica of Bom Jesus','Dudhsagar Waterfalls','Fort Aguada'],
    activities:['Water Sports','Spice Plantation Tour','Goa Nightlife','Fish Market Visit','Heritage Walk'],
    hotels:['Taj Exotica (5★)','Park Hyatt (5★)','Alila Diwa (4★)','Citrus Goa (3★)'],
    itinerary:[
      {day:'Day 1', title:'Arrival & North Goa', desc:'Arrive at Dabolim, check-in, evening at Baga Beach.'},
      {day:'Day 2', title:'Heritage & Churches', desc:'Basilica of Bom Jesus, Old Goa churches, lunch at a beach shack.'},
      {day:'Day 3', title:'Water Sports & Beaches', desc:'Calangute water sports, parasailing, jet ski, sunset cruise.'},
      {day:'Day 4', title:'South Goa & Departure', desc:'Dudhsagar Waterfalls, Colva Beach, airport transfer.'}
    ],
    costs:{hotel:'₹7,000', flight:'₹5,000', food:'₹3,500', activities:'₹2,500'},
    total:'₹18,000' },

  { id:'kerala', name:'Kerala', country:'India', tag:'Cultural', theme:['cultural','beach'],
    price:'₹22,000', priceNum:22000,
    img:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    desc:'Kerala — God\'s Own Country — enchants with tranquil backwaters, ayurvedic rejuvenation, lush tea plantations in Munnar, and pristine beaches along its 590km coastline.',
    attractions:['Alleppey Backwaters','Munnar Tea Gardens','Fort Kochi','Periyar Wildlife Sanctuary','Varkala Cliff'],
    activities:['Houseboat Stay','Ayurvedic Spa','Kathakali Dance Show','Elephant Sanctuary Visit','Spice Garden Tour'],
    hotels:['Kumarakom Lake Resort (5★)','CGH Earth Spice Village (4★)','Brunton Boatyard (4★)','Coconut Lagoon (4★)'],
    itinerary:[
      {day:'Day 1', title:'Kochi Arrival', desc:'Arrive in Kochi, Fort Kochi heritage walk, Chinese Fishing Nets.'},
      {day:'Day 2', title:'Munnar Tea Country', desc:'Drive to Munnar, tea estate tours, mountain views.'},
      {day:'Day 3', title:'Backwater Houseboat', desc:'Board luxury houseboat in Alleppey, cruise the backwaters.'},
      {day:'Day 4', title:'Varkala & Departure', desc:'Varkala cliff beach, Ayurvedic massage, return journey.'}
    ],
    costs:{hotel:'₹9,000', flight:'₹5,500', food:'₹4,000', activities:'₹3,500'},
    total:'₹22,000' },

  { id:'japan', name:'Japan', country:'Asia', tag:'Cultural', theme:['cultural','adventure'],
    price:'₹95,000', priceNum:95000,
    img:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    desc:'Japan is a mesmerizing blend of ancient tradition and hyper-modern innovation. From Kyoto\'s bamboo groves to Tokyo\'s neon-lit streets, Japan offers an unmatched cultural experience.',
    attractions:['Mount Fuji','Fushimi Inari Shrine','Tokyo Shibuya Crossing','Arashiyama Bamboo Grove','Nara Deer Park','Hiroshima Peace Memorial'],
    activities:['Tea Ceremony','Sumo Wrestling Match','Bullet Train Ride','Sushi Making Class','Cherry Blossom Viewing'],
    hotels:['Park Hyatt Tokyo (5★)','Aman Kyoto (5★)','The Prince Kyoto (4★)','Dormy Inn (3★)'],
    itinerary:[
      {day:'Day 1', title:'Tokyo Arrival', desc:'Land in Tokyo, Shinjuku exploration, ramen dinner.'},
      {day:'Day 2', title:'Tokyo Highlights', desc:'Shibuya Crossing, Harajuku, Meiji Shrine, teamLab Borderless.'},
      {day:'Day 3', title:'Mount Fuji Day Trip', desc:'Bullet train to Hakone, Mount Fuji views, traditional ryokan.'},
      {day:'Day 4', title:'Kyoto by Shinkansen', desc:'Bullet train to Kyoto, Fushimi Inari, Gion district.'},
      {day:'Day 5', title:'Kyoto Temples', desc:'Kinkaku-ji Golden Pavilion, Arashiyama, bamboo forest.'},
      {day:'Day 6', title:'Nara & Return', desc:'Nara deer park, Todai-ji Temple, return to Tokyo for flight.'}
    ],
    costs:{hotel:'₹42,000', flight:'₹32,000', food:'₹13,000', activities:'₹8,000'},
    total:'₹95,000' },

  { id:'thailand', name:'Thailand', country:'Asia', tag:'Beach', theme:['beach','adventure'],
    price:'₹45,000', priceNum:45000,
    img:'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    desc:'Thailand offers an irresistible combination of golden temples, turquoise island waters, world-famous street food, warm hospitality, and some of the best value for money on earth.',
    attractions:['Phi Phi Islands','Wat Phra Kaew','Chiang Mai Old City','Railay Beach','Floating Markets'],
    activities:['Elephant Sanctuary Visit','Thai Cooking Class','Island Hopping','Tuk-Tuk City Tour','Muay Thai Show'],
    hotels:['Mandarin Oriental Bangkok (5★)','Six Senses Yao Noi (5★)','Anantara Riverside (4★)','Ibis Bangkok (3★)'],
    itinerary:[
      {day:'Day 1', title:'Bangkok Arrival', desc:'Grand Palace, Wat Pho, Chao Phraya river cruise.'},
      {day:'Day 2', title:'Chiang Mai', desc:'Fly to Chiang Mai, elephant sanctuary, temple tour.'},
      {day:'Day 3', title:'Phi Phi Islands', desc:'Fly to Phuket, speedboat to Phi Phi, snorkeling.'},
      {day:'Day 4', title:'Krabi', desc:'Railay Beach, kayaking, rock climbing at Tonsai.'},
      {day:'Day 5', title:'Bangkok & Departure', desc:'Return to Bangkok, Chatuchak Market, flight home.'}
    ],
    costs:{hotel:'₹18,000', flight:'₹15,000', food:'₹6,000', activities:'₹6,000'},
    total:'₹45,000' },

  { id:'singapore', name:'Singapore', country:'Asia', tag:'Cultural', theme:['cultural','adventure'],
    price:'₹52,000', priceNum:52000,
    img:'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
    desc:'Singapore is Asia\'s most dazzling city-state — immaculate streets, futuristic architecture, world-class food, Gardens by the Bay, and Universal Studios all on one tiny island.',
    attractions:['Gardens by the Bay','Marina Bay Sands','Sentosa Island','Chinatown','Little India','Universal Studios'],
    activities:['Night Safari','Cable Car Ride','River Safari','Sky Park Observation Deck','Hawker Centre Food Tour'],
    hotels:['Marina Bay Sands (5★)','Capella Singapore (5★)','Pan Pacific (4★)','Ibis Budget (3★)'],
    itinerary:[
      {day:'Day 1', title:'Arrival & Marina Bay', desc:'Arrive, Marina Bay Sands observation deck, light show.'},
      {day:'Day 2', title:'Gardens & Sentosa', desc:'Gardens by the Bay, Sentosa Island, Universal Studios.'},
      {day:'Day 3', title:'Heritage Districts', desc:'Chinatown, Little India, Kampong Glam, Hawker food tour.'},
      {day:'Day 4', title:'Night Safari & Departure', desc:'Singapore Zoo, Night Safari, Changi Airport wonders before flight.'}
    ],
    costs:{hotel:'₹22,000', flight:'₹16,000', food:'₹8,000', activities:'₹6,000'},
    total:'₹52,000' },

  { id:'santorini', name:'Santorini', country:'Greece', tag:'Beach', theme:['beach','honeymoon'],
    price:'₹1,10,000', priceNum:110000,
    img:'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    desc:'Santorini is the jewel of the Aegean — iconic white-domed churches, cascading bougainvillea, dramatic caldera views, and world-famous sunsets make it the world\'s most photographed island.',
    attractions:['Oia Sunset','Caldera View','Akrotiri Archaeological Site','Red Beach','Fira Town','Wine Caves'],
    activities:['Catamaran Sunset Cruise','Wine Tasting','Volcano Hike','Cliff Diving','Cooking Class'],
    hotels:['Canaves Oia (5★)','Katikies (5★)','Mystique (5★)','Aressana Spa (4★)'],
    itinerary:[
      {day:'Day 1', title:'Fira Arrival', desc:'Arrive at Santorini airport, cable car to Fira, caldera dinner.'},
      {day:'Day 2', title:'Oia & Sunset', desc:'Explore Oia village, blue domes, famous sunset watching.'},
      {day:'Day 3', title:'Volcano & Hot Springs', desc:'Boat tour to active volcano, hot springs swim, Thirassia island.'},
      {day:'Day 4', title:'Beaches & Wine', desc:'Red Beach, Black Beach, winery tour with caldera views.'},
      {day:'Day 5', title:'Departure', desc:'Last morning swim, souvenir shopping, airport transfer.'}
    ],
    costs:{hotel:'₹52,000', flight:'₹32,000', food:'₹14,000', activities:'₹12,000'},
    total:'₹1,10,000' },

  { id:'rajasthan', name:'Rajasthan', country:'India', tag:'Desert', theme:['desert','cultural'],
    price:'₹25,000', priceNum:25000,
    img:'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    desc:'Rajasthan — the Land of Kings — dazzles with majestic forts, ornate palaces, golden sand dunes, colorful bazaars, and the warm hospitality of its noble Rajput heritage.',
    attractions:['Amber Fort Jaipur','City Palace Udaipur','Mehrangarh Fort','Jaisalmer Fort','Sam Sand Dunes'],
    activities:['Camel Safari','Desert Camp Stay','Rajasthani Cooking','Puppet Show','Hot Air Balloon Ride'],
    hotels:['Umaid Bhawan Palace (5★)','Taj Lake Palace (5★)','The Oberoi Rajvilas (5★)','Zostel Jaisalmer (2★)'],
    itinerary:[
      {day:'Day 1', title:'Jaipur — Pink City', desc:'Amber Fort, City Palace, Hawa Mahal, bazaar shopping.'},
      {day:'Day 2', title:'Jodhpur — Blue City', desc:'Mehrangarh Fort, clock tower market, blue city lanes.'},
      {day:'Day 3', title:'Jaisalmer — Golden City', desc:'Golden Fort, camel safari, desert camp with folk music.'},
      {day:'Day 4', title:'Udaipur — City of Lakes', desc:'Lake Pichola boat ride, City Palace, sunset at Karni Mata.'},
      {day:'Day 5', title:'Departure', desc:'Last morning shopping, train/flight to home city.'}
    ],
    costs:{hotel:'₹10,000', flight:'₹6,000', food:'₹4,500', activities:'₹4,500'},
    total:'₹25,000' },

  { id:'iceland', name:'Iceland', country:'Europe', tag:'Winter', theme:['winter','adventure'],
    price:'₹1,35,000', priceNum:135000,
    img:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    desc:'Iceland is nature\'s own masterpiece — erupting geysers, dancing Northern Lights, massive glaciers, thundering waterfalls, volcanic black sand beaches, and midnight sun in summer.',
    attractions:['Northern Lights','Blue Lagoon','Golden Circle','Jökulsárlón Glacier Lagoon','Reynisfjara Black Beach'],
    activities:['Northern Lights Hunting','Glacier Hiking','Whale Watching','Ice Cave Tour','Hot Spring Bathing'],
    hotels:['ION Adventure Hotel (4★)','Hotel Rangá (4★)','Centerhotel Arnarhvoll (4★)','KEX Hostel (2★)'],
    itinerary:[
      {day:'Day 1', title:'Reykjavik Arrival', desc:'Arrive, Blue Lagoon visit, Reykjavik Old Town dinner.'},
      {day:'Day 2', title:'Golden Circle', desc:'Þingvellir, Geysir hot springs, Gullfoss waterfall.'},
      {day:'Day 3', title:'South Coast', desc:'Seljalandsfoss waterfall, Reynisfjara Black Beach, Skógafoss.'},
      {day:'Day 4', title:'Glacier & Ice Cave', desc:'Glacier hiking on Vatnajökull, ice cave tour.'},
      {day:'Day 5', title:'Northern Lights & Departure', desc:'Last Northern Lights hunt, departure.'}
    ],
    costs:{hotel:'₹60,000', flight:'₹42,000', food:'₹18,000', activities:'₹15,000'},
    total:'₹1,35,000' },

  { id:'morocco', name:'Morocco', country:'Africa', tag:'Desert', theme:['desert','cultural'],
    price:'₹68,000', priceNum:68000,
    img:'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
    desc:'Morocco is a sensory feast — labyrinthine medinas, Sahara desert dunes, blue city streets of Chefchaouen, ancient kasbahs, and the intoxicating aromas of souks.',
    attractions:['Sahara Desert Dunes','Jemaa el-Fna Marrakech','Fez Medina','Chefchaouen Blue City','Hassan II Mosque'],
    activities:['Camel Trek & Desert Camp','Spice Market Tour','Hammam Spa','Cooking Class','Atlas Mountain Hike'],
    hotels:['La Mamounia (5★)','Royal Mansour (5★)','Riad Yasmine (4★)','Auberge Dunes d\'Or (3★)'],
    itinerary:[
      {day:'Day 1', title:'Marrakech Arrival', desc:'Arrive, Jemaa el-Fna square, Djemaa night market.'},
      {day:'Day 2', title:'Medina & Souks', desc:'Bahia Palace, Majorelle Garden, spice souk, hammam.'},
      {day:'Day 3', title:'Sahara Journey', desc:'Drive to Merzouga, camel trek, desert camp under stars.'},
      {day:'Day 4', title:'Blue City', desc:'Chefchaouen blue streets, photography, mountain hike.'},
      {day:'Day 5', title:'Casablanca & Departure', desc:'Hassan II Mosque, Old Medina, flight home.'}
    ],
    costs:{hotel:'₹28,000', flight:'₹22,000', food:'₹10,000', activities:'₹8,000'},
    total:'₹68,000' },

  { id:'nz', name:'New Zealand', country:'Oceania', tag:'Adventure', theme:['adventure','winter'],
    price:'₹1,45,000', priceNum:145000,
    img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    desc:'New Zealand is the adventure capital of the world — bungee jumping birthplace, Lord of the Rings landscapes, Maori culture, geothermal wonders, and pristine fjords in Milford Sound.',
    attractions:['Milford Sound','Queenstown','Hobbiton','Rotorua Geysers','Franz Josef Glacier','Bay of Islands'],
    activities:['Bungee Jumping','Skydiving','Heli-Skiing','Lord of the Rings Tour','Maori Cultural Show'],
    hotels:['Eichardt\'s Private Hotel (5★)','Blanket Bay (5★)','Heritage Auckland (4★)','Base Queenstown (2★)'],
    itinerary:[
      {day:'Day 1', title:'Auckland Arrival', desc:'Arrive Auckland, Sky Tower, Viaduct Harbour.'},
      {day:'Day 2', title:'Hobbiton & Rotorua', desc:'Hobbiton movie set, Rotorua geysers, Maori hangi dinner.'},
      {day:'Day 3', title:'Queenstown', desc:'Fly to Queenstown, bungee jumping, Skyline gondola.'},
      {day:'Day 4', title:'Milford Sound', desc:'Scenic drive to Milford Sound, fjord cruise.'},
      {day:'Day 5', title:'Skydiving & Departure', desc:'Tandem skydive over mountains, Auckland departure.'}
    ],
    costs:{hotel:'₹65,000', flight:'₹48,000', food:'₹18,000', activities:'₹14,000'},
    total:'₹1,45,000' },

  { id:'maldives2', name:'Sri Lanka', country:'South Asia', tag:'Cultural', theme:['beach','cultural'],
    price:'₹35,000', priceNum:35000,
    img:'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&q=80',
    desc:'Sri Lanka — the Pearl of the Indian Ocean — offers ancient ruins, wildlife safaris, misty tea highlands, pristine beaches, and some of the best whale watching in the world.',
    attractions:['Sigiriya Rock Fortress','Yala National Park','Temple of the Tooth','Galle Fort','Adam\'s Peak'],
    activities:['Safari & Elephant Watching','Whale Watching','Tea Plantation Walk','Surfing at Arugam Bay','Ayurveda Retreat'],
    hotels:['Heritance Kandalama (5★)','Amanwella (5★)','Cinnamon Lodge (4★)','Barberyn Beach Ayurveda (3★)'],
    itinerary:[
      {day:'Day 1', title:'Colombo Arrival', desc:'Arrive, Colombo city tour, Independence Square.'},
      {day:'Day 2', title:'Sigiriya', desc:'Sigiriya Rock Fortress, Dambulla Cave Temple.'},
      {day:'Day 3', title:'Kandy', desc:'Temple of the Tooth, Peradeniya Botanical Gardens, cultural show.'},
      {day:'Day 4', title:'Yala Safari', desc:'Full day Yala National Park leopard safari.'},
      {day:'Day 5', title:'Beach & Departure', desc:'Mirissa beach, whale watching, Colombo departure.'}
    ],
    costs:{hotel:'₹14,000', flight:'₹10,000', food:'₹6,000', activities:'₹5,000'},
    total:'₹35,000' },

  { id:'vietnam', name:'Vietnam', country:'Asia', tag:'Cultural', theme:['cultural','beach'],
    price:'₹42,000', priceNum:42000,
    img:'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
    desc:'Vietnam stretches from misty northern mountains to tropical southern deltas — Halong Bay limestone karsts, ancient Hoi An lantern streets, Hue royal citadels, and the best street food in Asia.',
    attractions:['Halong Bay','Hoi An Ancient Town','My Son Sanctuary','Hue Citadel','Ho Chi Minh City','Phong Nha Caves'],
    activities:['Halong Bay Cruise','Cooking Class in Hoi An','Motorbike Street Food Tour','Kayaking','Rice Paddy Cycling'],
    hotels:['JW Marriott Hanoi (5★)','Amanoi (5★)','Four Seasons Hoi An (5★)','Hoi An Memories (3★)'],
    itinerary:[
      {day:'Day 1', title:'Hanoi Arrival', desc:'Old Quarter walking tour, Hoan Kiem Lake, street food.'},
      {day:'Day 2', title:'Halong Bay', desc:'Cruise limestone karsts, kayaking, cave exploration.'},
      {day:'Day 3', title:'Hoi An', desc:'Fly south, Ancient Town, tailor street, lantern festival.'},
      {day:'Day 4', title:'Hue Imperial City', desc:'Hue Citadel, Royal Tombs, Thien Mu Pagoda.'},
      {day:'Day 5', title:'Saigon & Departure', desc:'Ho Chi Minh City tour, Cu Chi Tunnels, flight home.'}
    ],
    costs:{hotel:'₹16,000', flight:'₹14,000', food:'₹7,000', activities:'₹5,000'},
    total:'₹42,000' },

  { id:'peru', name:'Peru', country:'South America', tag:'Adventure', theme:['adventure','cultural'],
    price:'₹1,55,000', priceNum:155000,
    img:'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
    desc:'Peru is home to one of the world\'s greatest wonders — Machu Picchu. Combined with the sacred Inca Trail, Lake Titicaca, the Amazon rainforest, and Lima\'s world-class cuisine.',
    attractions:['Machu Picchu','Sacred Valley','Lake Titicaca','Colca Canyon','Larco Herrera Museum'],
    activities:['Inca Trail Trek','Machu Picchu Sunrise','Amazon Jungle Tour','Floating Islands Visit','Lima Food Tour'],
    hotels:['Inkaterra Machu Picchu (5★)','Belmond Miraflores Park (5★)','Palacio del Inca (4★)','Loki Hostel (2★)'],
    itinerary:[
      {day:'Day 1', title:'Lima Arrival', desc:'Arrive Lima, Miraflores District, world-famous ceviche dinner.'},
      {day:'Day 2', title:'Cusco', desc:'Fly to Cusco, acclimatize, Inca ruins exploration.'},
      {day:'Day 3', title:'Sacred Valley', desc:'Pisac Market, Moray Ruins, Salineras Salt Mines.'},
      {day:'Day 4', title:'Machu Picchu', desc:'Sunrise train to Aguas Calientes, Machu Picchu tour.'},
      {day:'Day 5', title:'Amazon & Departure', desc:'Optional Amazon day trip, Lima departure.'}
    ],
    costs:{hotel:'₹68,000', flight:'₹52,000', food:'₹20,000', activities:'₹15,000'},
    total:'₹1,55,000' },

  { id:'maldives3', name:'Coorg', country:'India', tag:'Adventure', theme:['adventure','cultural'],
    price:'₹12,000', priceNum:12000,
    img:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    desc:'Coorg — Scotland of India — is a misty paradise of coffee and spice plantations, cascading Kaveri river, tribal Kodava culture, and lush forests teeming with wildlife.',
    attractions:['Abbey Falls','Raja\'s Seat','Nagarhole National Park','Talacauvery','Dubare Elephant Camp'],
    activities:['Coffee Plantation Tour','Jungle Safari','River Rafting','Bird Watching','Kodava Cultural Experience'],
    hotels:['Vivanta Coorg (5★)','The Tamara Coorg (5★)','Orange County (4★)','Coorg Cliffs (3★)'],
    itinerary:[
      {day:'Day 1', title:'Arrival & Madikeri', desc:'Arrive Coorg, Madikeri Fort, Raja\'s Seat sunset.'},
      {day:'Day 2', title:'Coffee Trail', desc:'Coffee plantation tour, spice estate walk, Abbey Falls.'},
      {day:'Day 3', title:'Wildlife & Departure', desc:'Nagarhole safari, Dubare Elephant Camp, journey home.'}
    ],
    costs:{hotel:'₹4,500', flight:null, food:'₹3,000', activities:'₹4,500'},
    total:'₹12,000' },

  { id:'maldives4', name:'Ladakh', country:'India', tag:'Adventure', theme:['adventure','winter'],
    price:'₹28,000', priceNum:28000,
    img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    desc:'Ladakh — the Land of High Passes — offers other-worldly lunar landscapes, ancient Buddhist monasteries perched on cliffs, the world\'s highest motorable roads, and the sacred Pangong Lake.',
    attractions:['Pangong Tso Lake','Nubra Valley','Hemis Monastery','Magnetic Hill','Khardung La Pass'],
    activities:['Mountain Biking','River Rafting','Monastery Visits','Camel Safari in Nubra','Stargazing'],
    hotels:['The Grand Dragon (4★)','Nimmu House (4★)','Stok Palace (3★)','Zostel Leh (2★)'],
    itinerary:[
      {day:'Day 1', title:'Leh Arrival & Acclimatize', desc:'Fly to Leh, rest, local market walk.'},
      {day:'Day 2', title:'Local Monasteries', desc:'Shanti Stupa, Leh Palace, Hemis Monastery.'},
      {day:'Day 3', title:'Pangong Lake', desc:'Drive via Chang La Pass to Pangong Tso, overnight stay.'},
      {day:'Day 4', title:'Nubra Valley', desc:'Khardung La pass, Nubra Valley, double-hump camel safari.'},
      {day:'Day 5', title:'Return & Departure', desc:'Scenic drive back, final Leh exploration, flight home.'}
    ],
    costs:{hotel:'₹10,000', flight:'₹9,000', food:'₹4,500', activities:'₹4,500'},
    total:'₹28,000' }
];

const PACKAGES = [
  // HONEYMOON
  { id:'h1', cat:'honeymoon', badge:'💕 Honeymoon', badgeClass:'coral', name:'Maldives Honeymoon Bliss', loc:'Maldives', duration:'6 Days', rating:'5.0', reviews:196, price:'₹1,85,000', priceNum:185000, img:'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80', desc:'Secluded overwater bungalow for two, couple spa rituals, private sunset cruises on crystal-clear waters.', highlights:['✓ Overwater Villa included','✓ Couple spa ritual daily','✓ Private sunset cruise','✓ All meals included'], food:['Romantic candlelight dinners','Private beach BBQ','In-villa breakfast daily','Sunset cocktail hours'], places:['Coral reef snorkeling','Bioluminescent beach walk','Sandbank picnic','Male City excursion'], itinerary:[{day:'Day 1',title:'Arrival & Resort',desc:'Speedboat transfer to your private resort, welcome champagne, evening at the beach.'},{day:'Day 2',title:'Snorkeling & Spa',desc:'House reef snorkeling, his & hers couples spa treatment.'},{day:'Day 3',title:'Sunset Cruise',desc:'Private sunset dhoni cruise with canapes and champagne.'},{day:'Day 4',title:'Island Hopping',desc:'Local island visit, sandbank picnic, kayaking.'},{day:'Day 5',title:'Diving & Water Sports',desc:'PADI dive experience, jet ski, parasailing.'},{day:'Day 6',title:'Farewell',desc:'Last swim, souvenir shopping, speedboat to airport.'}], hotelCost:'₹1,10,000', flightCost:'₹42,000', foodCost:'₹18,000', total:'₹1,85,000' },

  { id:'h2', cat:'honeymoon', badge:'💕 Romantic', badgeClass:'coral', name:'Paris Romance Escape', loc:'Paris, France', duration:'5 Days', rating:'4.9', reviews:284, price:'₹1,40,000', priceNum:140000, img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', desc:'City of Love: private Eiffel Tower dinner, Seine cruise for two, and luxury boutique hotel in Le Marais.', highlights:['✓ Private Eiffel Tower dinner','✓ Seine sunset cruise','✓ Boutique hotel Le Marais','✓ Champagne welcome'], food:['Michelin-starred dinner','Croissant baking class','Wine and cheese tasting','Café culture experience'], places:['Eiffel Tower private visit','Versailles Palace','Montmartre art district','Louvre after dark'], itinerary:[{day:'Day 1',title:'Paris Arrival',desc:'Check-in to boutique hotel, evening walk along Seine.'},{day:'Day 2',title:'Eiffel & Louvre',desc:'Louvre tour, Eiffel Tower private dinner at sunset.'},{day:'Day 3',title:'Versailles',desc:'Full day Palace of Versailles, royal gardens.'},{day:'Day 4',title:'Montmartre',desc:'Artist quarter, Sacré-Cœur, wine tasting, Moulin Rouge show.'},{day:'Day 5',title:'Shopping & Departure',desc:'Champs-Élysées shopping, flight home.'}], hotelCost:'₹60,000', flightCost:'₹48,000', foodCost:'₹20,000', total:'₹1,40,000' },

  { id:'h3', cat:'honeymoon', badge:'💕 Honeymoon', badgeClass:'coral', name:'Bali Romantic Retreat', loc:'Bali, Indonesia', duration:'7 Days', rating:'4.9', reviews:312, price:'₹85,000', priceNum:85000, img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', desc:'Romantic villa with private pool amidst Ubud rice terraces, couples Balinese massage, and cliff sunset dinners.', highlights:['✓ Private pool villa','✓ Couples Balinese massage','✓ Cliff dinner at sunset','✓ Temple sunrise tour'], food:['Private villa dinners','Balinese cooking class','Sunset cocktails at Ku De Ta','Romantic beach picnic'], places:['Tegalalang Rice Terrace','Tanah Lot Temple','Kecak Fire Dance','Nusa Penida Island'], itinerary:[{day:'Day 1',title:'Arrival',desc:'Ubud villa check-in, welcome dinner.'},{day:'Day 2',title:'Temples',desc:'Tanah Lot, Uluwatu sunset, Kecak dance.'},{day:'Day 3',title:'Rice Terraces',desc:'Tegalalang trek, Balinese spa ritual.'},{day:'Day 4',title:'Nusa Penida',desc:'Snorkeling with manta rays, cliff views.'},{day:'Day 5',title:'Adventure',desc:'White-water rafting, ATV, waterfall.'},{day:'Day 6',title:'Seminyak',desc:'Beach club, shopping, sunset cocktails.'},{day:'Day 7',title:'Departure',desc:'Breakfast, airport transfer.'}], hotelCost:'₹35,000', flightCost:'₹28,000', foodCost:'₹12,000', total:'₹85,000' },

  { id:'h4', cat:'honeymoon', badge:'💕 Luxury', badgeClass:'coral', name:'Santorini Dream', loc:'Santorini, Greece', duration:'6 Days', rating:'5.0', reviews:148, price:'₹1,55,000', priceNum:155000, img:'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80', desc:'Iconic cave suite with caldera views, private catamaran, and famous Oia sunset champagne moment.', highlights:['✓ Cave suite caldera view','✓ Private catamaran half-day','✓ Oia sunset champagne','✓ Wine tour included'], food:['Caldera view breakfast','Seafood mezze by the sea','Greek wine tasting','Sunset dinner at Oia'], places:['Oia village','Volcano hot springs','Red Beach','Akrotiri ruins'], itinerary:[{day:'Day 1',title:'Arrival',desc:'Fira arrival, cable car, caldera dinner.'},{day:'Day 2',title:'Oia Sunset',desc:'Explore Oia, blue domes, famous sunset.'},{day:'Day 3',title:'Volcano',desc:'Boat to volcano, hot springs swim.'},{day:'Day 4',title:'Catamaran',desc:'Private sunset catamaran with champagne.'},{day:'Day 5',title:'Beaches',desc:'Red Beach, Black Beach, local wine.'},{day:'Day 6',title:'Departure',desc:'Souvenir shopping, airport.'}], hotelCost:'₹72,000', flightCost:'₹52,000', foodCost:'₹18,000', total:'₹1,55,000' },

  { id:'h5', cat:'honeymoon', badge:'💕 Premium', badgeClass:'coral', name:'Kerala Backwater Romance', loc:'Kerala, India', duration:'5 Days', rating:'4.8', reviews:224, price:'₹38,000', priceNum:38000, img:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', desc:'Luxury houseboat through Alleppey backwaters, Munnar tea estate, and traditional Ayurvedic couple spa.', highlights:['✓ Luxury houseboat 2 nights','✓ Ayurvedic couple spa','✓ Munnar tea estate visit','✓ Kathakali performance'], food:['Kerala sadya on banana leaf','Fresh catch seafood','Houseboat chef meals','Spice garden lunch'], places:['Alleppey Backwaters','Munnar Tea Gardens','Fort Kochi','Periyar Tiger Reserve'], itinerary:[{day:'Day 1',title:'Kochi',desc:'Arrive Fort Kochi, Chinese Fishing Nets, heritage walk.'},{day:'Day 2',title:'Munnar',desc:'Drive to Munnar, tea estates, valley views.'},{day:'Day 3',title:'Houseboat',desc:'Board luxury houseboat, glide through backwaters.'},{day:'Day 4',title:'Alleppey',desc:'Morning on houseboat, Ayurvedic spa.'},{day:'Day 5',title:'Departure',desc:'Beach visit, Trivandrum flight.'}], hotelCost:'₹15,000', flightCost:'₹10,000', foodCost:'₹7,000', total:'₹38,000' },

  // VISA FREE
  { id:'v1', cat:'visafree', badge:'✈️ Visa Free', badgeClass:'green', name:'Bali Island Explorer', loc:'Bali, Indonesia', duration:'7 Days', rating:'4.9', reviews:328, price:'₹55,000', priceNum:55000, img:'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80', desc:'Visa-free paradise for Indian passport holders. Beaches, temples, rice paddies, and legendary hospitality.', highlights:['✓ Visa on arrival for Indians','✓ 7 nights resort stay','✓ Airport transfers','✓ Daily breakfast'], food:['Ubud organic cafe','Warungs street food','Seafood BBQ Jimbaran','Cooking class'], places:['Kuta Beach','Ubud Palace','Tanah Lot','Tegalalang'], itinerary:[{day:'Day 1',title:'Arrival',desc:'Land Denpasar, Kuta beach evening.'},{day:'Day 2',title:'Ubud',desc:'Monkey Forest, rice terraces, dance show.'},{day:'Day 3',title:'Temples',desc:'Tanah Lot, Uluwatu, Kecak dance.'},{day:'Day 4',title:'Beach Day',desc:'Nusa Dua watersports, lunch.'},{day:'Day 5',title:'Adventure',desc:'White-water rafting, waterfall.'},{day:'Day 6',title:'Shopping',desc:'Kuta market, Seminyak.'},{day:'Day 7',title:'Departure',desc:'Beach brunch, airport.'}], hotelCost:'₹22,000', flightCost:'₹18,000', foodCost:'₹8,000', total:'₹55,000' },

  { id:'v2', cat:'visafree', badge:'✈️ Visa Free', badgeClass:'green', name:'Thailand Island Hopping', loc:'Thailand', duration:'7 Days', rating:'4.8', reviews:412, price:'₹48,000', priceNum:48000, img:'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80', desc:'Bangkok temples, Chiang Mai elephants, Phi Phi islands — Thailand is visa-free for 30 days for Indians.', highlights:['✓ No visa required for Indians','✓ Bangkok + Phuket included','✓ Island speedboat trips','✓ Elephant sanctuary'], food:['Tom Yum soup class','Floating market foods','Rooftop Bangkok dinner','Seafood Phuket beach'], places:['Grand Palace Bangkok','Phi Phi Islands','Chiang Mai','Railay Beach'], itinerary:[{day:'Day 1',title:'Bangkok',desc:'Grand Palace, Wat Pho, river cruise.'},{day:'Day 2',title:'Chiang Mai',desc:'Fly north, elephant sanctuary, temples.'},{day:'Day 3',title:'Phuket',desc:'Fly south, Patong Beach, evening.'},{day:'Day 4',title:'Phi Phi',desc:'Speedboat to Phi Phi, snorkel, kayak.'},{day:'Day 5',title:'Krabi',desc:'Railay Beach, rock climbing.'},{day:'Day 6',title:'Bangkok',desc:'Return Bangkok, Chatuchak Market.'},{day:'Day 7',title:'Departure',desc:'Airport transfer, fly home.'}], hotelCost:'₹18,000', flightCost:'₹16,000', foodCost:'₹8,000', total:'₹48,000' },

  { id:'v3', cat:'visafree', badge:'✈️ Visa Free', badgeClass:'green', name:'Sri Lanka Heritage Tour', loc:'Sri Lanka', duration:'6 Days', rating:'4.7', reviews:198, price:'₹35,000', priceNum:35000, img:'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&q=80', desc:'Sri Lanka is completely visa-free for Indian passport holders. Ancient ruins, safaris, and pristine beaches.', highlights:['✓ 100% visa free for Indians','✓ Sigiriya Rock included','✓ Yala Safari','✓ Whale watching'], food:['Rice & Curry meals','Seafood at Mirissa','Ceylon tea experience','Kottu roti street food'], places:['Sigiriya Rock Fortress','Yala National Park','Kandy Temple','Mirissa Beach'], itinerary:[{day:'Day 1',title:'Colombo',desc:'Arrive, city tour, Gangaramaya Temple.'},{day:'Day 2',title:'Sigiriya',desc:'Rock Fortress, Dambulla Cave Temple.'},{day:'Day 3',title:'Kandy',desc:'Tooth Temple, botanical gardens, dance show.'},{day:'Day 4',title:'Yala',desc:'Full-day Yala leopard safari.'},{day:'Day 5',title:'Mirissa',desc:'Whale watching, beach.'},{day:'Day 6',title:'Departure',desc:'Galle Fort walk, fly home.'}], hotelCost:'₹14,000', flightCost:'₹10,000', foodCost:'₹6,000', total:'₹35,000' },

  { id:'v4', cat:'visafree', badge:'✈️ Visa Free', badgeClass:'green', name:'Nepal Himalaya Trek', loc:'Nepal', duration:'7 Days', rating:'4.9', reviews:276, price:'₹30,000', priceNum:30000, img:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80', desc:'India-Nepal has open borders — no visa needed! Trek with Everest views, visit Kathmandu temples and lakeside Pokhara.', highlights:['✓ No visa/passport needed','✓ Poon Hill Sunrise Trek','✓ Everest View Flight','✓ Kathmandu temples'], food:['Dal bhat trekking meals','Pokhara lakeside dinner','Newari cuisine experience','Mountain lodge breakfast'], places:['Everest Base Camp View','Poon Hill Trek','Pashupatinath Temple','Phewa Lake Pokhara'], itinerary:[{day:'Day 1',title:'Kathmandu',desc:'Arrive, Pashupatinath, Boudhanath Stupa.'},{day:'Day 2',title:'Pokhara',desc:'Flight to Pokhara, lakeside, mountain views.'},{day:'Day 3',title:'Poon Hill Trek',desc:'Day trek to Poon Hill sunrise viewpoint.'},{day:'Day 4',title:'Annapurna',desc:'Annapurna Base Camp day hike.'},{day:'Day 5',title:'Everest Flight',desc:'Morning mountain flight with Everest views.'},{day:'Day 6',title:'Bhaktapur',desc:'Bhaktapur Durbar Square UNESCO site.'},{day:'Day 7',title:'Departure',desc:'Return to India.'}], hotelCost:'₹10,000', flightCost:'₹9,000', foodCost:'₹6,000', total:'₹30,000' },

  { id:'v5', cat:'visafree', badge:'✈️ Visa Free', badgeClass:'green', name:'Maldives Beach Week', loc:'Maldives', duration:'5 Days', rating:'5.0', reviews:164, price:'₹95,000', priceNum:95000, img:'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80', desc:'Visa on arrival for Indians in the Maldives. Crystal waters, coral reefs, and luxury at paradise prices.', highlights:['✓ Visa on arrival','✓ Overwater bungalow','✓ All meals included','✓ Snorkeling gear'], food:['Overwater restaurant','Beach BBQ night','Tropical fruit breakfasts','Sundowner cocktails'], places:['House Reef','Sandbank','Local island','Male City'], itinerary:[{day:'Day 1',title:'Arrival',desc:'Male airport, speedboat to resort, sunset.'},{day:'Day 2',title:'Snorkeling',desc:'Reef snorkeling, marine biology tour.'},{day:'Day 3',title:'Excursion',desc:'Sandbank picnic, dolphin cruise.'},{day:'Day 4',title:'Spa Day',desc:'Full resort spa, water villa relaxation.'},{day:'Day 5',title:'Departure',desc:'Last swim, speedboat, flight.'}], hotelCost:'₹55,000', flightCost:'₹24,000', foodCost:'₹10,000', total:'₹95,000' },

  // GROUP TRIPS
  { id:'g1', cat:'group', badge:'👥 Group', badgeClass:'blue', name:'Rajasthan Royal Road Trip', loc:'Rajasthan, India', duration:'8 Days', rating:'4.8', reviews:342, price:'₹35,000', priceNum:35000, img:'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80', desc:'Epic group journey through the Pink City, Blue City, and Golden City of Rajasthan. Perfect for 10–20 people.', highlights:['✓ AC coach transport','✓ Heritage hotel stays','✓ Camel safari included','✓ Folk dance evening'], food:['Rajasthani thali dinners','Desert camp BBQ','Breakfast at haveli','Street food tour Jaipur'], places:['Amber Fort Jaipur','Mehrangarh Fort Jodhpur','Jaisalmer Fort','Sam Dunes','Udaipur City Palace'], itinerary:[{day:'Day 1',title:'Jaipur',desc:'City Palace, Hawa Mahal, bazaar tour.'},{day:'Day 2',title:'Amber',desc:'Amber Fort elephant ride, Nahargarh.'},{day:'Day 3',title:'Jodhpur',desc:'Drive Jodhpur, Mehrangarh, blue streets.'},{day:'Day 4',title:'Jaisalmer',desc:'Drive to Jaisalmer Fort, camel safari.'},{day:'Day 5',title:'Sam Dunes',desc:'Desert camp overnight, folk music.'},{day:'Day 6',title:'Udaipur',desc:'Drive to Udaipur, Pichola Lake boat.'},{day:'Day 7',title:'Sightseeing',desc:'City Palace, Fateh Sagar, Monsoon Palace.'},{day:'Day 8',title:'Departure',desc:'Return journey.'}], hotelCost:'₹12,000', flightCost:'₹8,000', foodCost:'₹7,000', total:'₹35,000' },

  { id:'g2', cat:'group', badge:'👥 Group', badgeClass:'blue', name:'Europe Group Explorer', loc:'5 European Countries', duration:'12 Days', rating:'4.7', reviews:188, price:'₹1,85,000', priceNum:185000, img:'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80', desc:'Paris, Amsterdam, Brussels, Zurich, and Vienna in one epic group tour with expert guide throughout.', highlights:['✓ 5 countries in 12 days','✓ Expert local guides','✓ Schengen visa assistance','✓ Group discounts applied'], food:['European breakfast buffets','Local specialties each country','Group BBQ Rhine cruise','Swiss cheese fondue night'], places:['Eiffel Tower Paris','Anne Frank House Amsterdam','Atomium Brussels','Jungfraujoch Switzerland','Schönbrunn Palace Vienna'], itinerary:[{day:'Day 1-2',title:'Paris',desc:'Eiffel, Louvre, Versailles.'},{day:'Day 3-4',title:'Amsterdam',desc:'Canal cruise, Rijksmuseum, Anne Frank.'},{day:'Day 5',title:'Brussels',desc:'Atomium, Grand Place, waffles.'},{day:'Day 6-7',title:'Switzerland',desc:'Jungfraujoch, Lucerne, Rhine Falls.'},{day:'Day 8-9',title:'Vienna',desc:'Schönbrunn, State Opera, classical music.'},{day:'Day 10-12',title:'Return',desc:'Free day, shopping, flight home.'}], hotelCost:'₹85,000', flightCost:'₹62,000', foodCost:'₹24,000', total:'₹1,85,000' },

  { id:'g3', cat:'group', badge:'👥 Friends', badgeClass:'blue', name:'Goa Beach Party Trip', loc:'Goa, India', duration:'4 Days', rating:'4.8', reviews:524, price:'₹16,000', priceNum:16000, img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', desc:'Ultimate friends group getaway to Goa — beach parties, water sports, Portuguese heritage, and fresh seafood.', highlights:['✓ Beach resort stay','✓ Unlimited water sports','✓ Nightclub entry included','✓ Sunset cruise'], food:['Seafood beach shacks','Beach bonfire BBQ','Fresh fish thali','Portuguese cafes'], places:['Baga Beach','Anjuna Flea Market','Old Goa Churches','Dudhsagar Falls'], itinerary:[{day:'Day 1',title:'Arrival',desc:'North Goa beaches, sunset bar hop.'},{day:'Day 2',title:'Water Sports',desc:'Parasailing, jet ski, Anjuna Market.'},{day:'Day 3',title:'South Goa',desc:'Dudhsagar Falls, Colva Beach, sunset cruise.'},{day:'Day 4',title:'Departure',desc:'Morning beach, Old Goa, airport.'}], hotelCost:'₹6,000', flightCost:'₹4,500', foodCost:'₹3,000', total:'₹16,000' },

  { id:'g4', cat:'group', badge:'👥 Group', badgeClass:'blue', name:'North India Heritage Group', loc:'Delhi-Agra-Varanasi', duration:'6 Days', rating:'4.6', reviews:234, price:'₹22,000', priceNum:22000, img:'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80', desc:'Golden Triangle plus Varanasi — experience the heart of India with Taj Mahal, Red Fort, and the holy Ganges.', highlights:['✓ Taj Mahal at sunrise','✓ Ganga Aarti ceremony','✓ AC train between cities','✓ Cultural immersion'], food:['Old Delhi street food walk','Mughal cuisine dinner','Varanasi chai & lassi','Benares thali experience'], places:['Taj Mahal','Agra Fort','Red Fort Delhi','Qutub Minar','Varanasi Ghats'], itinerary:[{day:'Day 1',title:'Delhi',desc:'Red Fort, Qutub Minar, Old Delhi food tour.'},{day:'Day 2',title:'Agra',desc:'Taj Mahal sunrise, Agra Fort.'},{day:'Day 3',title:'Fatehpur Sikri',desc:'Mughal ghost city, drive to Varanasi.'},{day:'Day 4',title:'Varanasi',desc:'Ganga Aarti, sunrise boat, ghats walk.'},{day:'Day 5',title:'Sarnath',desc:'Buddha\'s deer park, archaeology museum.'},{day:'Day 6',title:'Return',desc:'Train back to Delhi, flight home.'}], hotelCost:'₹8,000', flightCost:'₹6,000', foodCost:'₹4,500', total:'₹22,000' },

  { id:'g5', cat:'group', badge:'👥 Adventure', badgeClass:'blue', name:'Manali-Spiti Valley Trek', loc:'Himachal Pradesh', duration:'9 Days', rating:'4.9', reviews:176, price:'₹32,000', priceNum:32000, img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', desc:'Epic group trek through Spiti Valley, Chandratal Lake, and Rohtang Pass with high altitude campsites.', highlights:['✓ Chandratal Lake camping','✓ Rohtang Pass crossing','✓ Highest Shiva statue','✓ Spiti Valley monasteries'], food:['Base camp bonfire meals','Local dhabas','High altitude packed lunches','Campfire chai'], places:['Rohtang Pass','Chandratal Lake','Key Monastery','Pin Valley','Kaza Town'], itinerary:[{day:'Day 1-2',title:'Manali',desc:'Acclimatize, Hadimba Temple, local explore.'},{day:'Day 3',title:'Rohtang',desc:'Rohtang Pass, first snow experience.'},{day:'Day 4',title:'Kaza',desc:'Drive Spiti Valley, Key Monastery.'},{day:'Day 5',title:'Hikkim',desc:'World\'s highest post office, Pin Valley.'},{day:'Day 6',title:'Chandratal',desc:'Trek to Chandratal Lake, overnight camp.'},{day:'Day 7-8',title:'Return',desc:'Scenic drive back to Manali.'},{day:'Day 9',title:'Departure',desc:'Manali market, departure.'}], hotelCost:'₹10,000', flightCost:'₹8,000', foodCost:'₹7,000', total:'₹32,000' },

  // DISNEY CRUISE
  { id:'c1', cat:'cruise', badge:'🚢 Disney Cruise', badgeClass:'purple', name:'Caribbean Disney Cruise', loc:'Caribbean Sea', duration:'7 Nights', rating:'4.9', reviews:156, price:'₹2,85,000', priceNum:285000, img:'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80', desc:'Sail the Caribbean aboard a Disney Dream ship with character meetings, Broadway shows, private island beach day, and world-class dining.', highlights:['✓ Disney character meetups','✓ Broadway shows on board','✓ Private island beach day','✓ All meals included'], food:['Rotational dining (3 restaurants)','24hr room service','Character breakfast','Private island BBQ'], places:['Castaway Cay Private Island','Nassau Bahamas','Cozumel Mexico','Disney Dream Ship'], itinerary:[{day:'Day 1',title:'Embark Port Canaveral',desc:'Board Disney Dream, explore ship, safety drill.'},{day:'Day 2',title:'At Sea',desc:'Pool deck, Broadway show, character meetups.'},{day:'Day 3',title:'Nassau',desc:'Atlantis resort, beach, shopping.'},{day:'Day 4',title:'Castaway Cay',desc:'Disney\'s private island, beach all day.'},{day:'Day 5-6',title:'At Sea',desc:'Spa, shows, dining experiences.'},{day:'Day 7',title:'Disembark',desc:'Breakfast, port transfer, fly home.'}], hotelCost:'₹1,80,000', flightCost:'₹65,000', foodCost:'₹0 (included)', total:'₹2,85,000' },

  { id:'c2', cat:'cruise', badge:'🚢 Cruise', badgeClass:'purple', name:'Mediterranean Cruise', loc:'Mediterranean', duration:'8 Nights', rating:'4.8', reviews:124, price:'₹2,20,000', priceNum:220000, img:'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80', desc:'Rome, Barcelona, Monaco, and Santorini from the luxury of a cruise ship with all-inclusive dining.', highlights:['✓ 4 Mediterranean ports','✓ All-inclusive dining','✓ Live entertainment','✓ Shore excursions included'], food:['International buffet daily','Specialty restaurants','24hr snack bars','Welcome champagne'], places:['Barcelona Spain','Rome Civitavecchia','Monaco French Riviera','Santorini Greece'], itinerary:[{day:'Day 1',title:'Barcelona Embark',desc:'Board ship, sail at sunset.'},{day:'Day 2',title:'At Sea',desc:'Pool day, evening show.'},{day:'Day 3',title:'Rome',desc:'Colosseum, Vatican City shore excursion.'},{day:'Day 4',title:'Monaco',desc:'Monte Carlo Casino, Formula 1 circuit.'},{day:'Day 5-6',title:'At Sea',desc:'Entertainment, spa day.'},{day:'Day 7',title:'Santorini',desc:'Tender to island, caldera views.'},{day:'Day 8',title:'Disembark',desc:'Barcelona, fly home.'}], hotelCost:'₹1,40,000', flightCost:'₹52,000', foodCost:'₹0 (included)', total:'₹2,20,000' },

  // NORTH INDIA
  { id:'n1', cat:'northindia', badge:'🏔 North India', badgeClass:'blue', name:'Kashmir Paradise', loc:'Kashmir, India', duration:'6 Days', rating:'4.9', reviews:348, price:'₹32,000', priceNum:32000, img:'https://images.unsplash.com/photo-1564351987867-b16d99ba2e0a?w=800&q=80', desc:'Heaven on Earth — Dal Lake shikaras, Gulmarg skiing, Pahalgam valleys, and apple orchards of Kashmir.', highlights:['✓ Dal Lake houseboat stay','✓ Gulmarg Gondola ride','✓ Shikara sunrise row','✓ Mughal Gardens'], food:['Wazwan traditional feast','Houseboat chef meals','Kahwa green tea','Seekh kebab evenings'], places:['Dal Lake','Gulmarg','Pahalgam','Sonamarg','Mughal Gardens'], itinerary:[{day:'Day 1',title:'Srinagar',desc:'Dal Lake shikara, Mughal Gardens.'},{day:'Day 2',title:'Gulmarg',desc:'Gondola to Apharwat Peak, snow.'},{day:'Day 3',title:'Pahalgam',desc:'Betaab Valley, Aru Valley, Lidder River.'},{day:'Day 4',title:'Sonamarg',desc:'Glacier trek, Sindh river, thajiwas.'},{day:'Day 5',title:'Srinagar',desc:'Old City, Jama Masjid, markets.'},{day:'Day 6',title:'Departure',desc:'Last shikara, airport.'}], hotelCost:'₹13,000', flightCost:'₹8,000', foodCost:'₹6,000', total:'₹32,000' },

  { id:'n2', cat:'northindia', badge:'🏔 North India', badgeClass:'blue', name:'Ladakh Expedition', loc:'Ladakh, India', duration:'7 Days', rating:'4.9', reviews:212, price:'₹28,000', priceNum:28000, img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', desc:'The Land of High Passes — Pangong Lake, Nubra Valley camel safari, Khardung La, and monasteries.', highlights:['✓ Pangong Lake overnight','✓ Nubra camel safari','✓ Khardung La pass','✓ Monastery visits'], food:['Tibetan thukpa soup','Momos at mountain cafes','Monastery kitchen lunches','Camp bonfire dinners'], places:['Pangong Tso Lake','Nubra Valley','Hemis Monastery','Magnetic Hill','Leh Palace'], itinerary:[{day:'Day 1',title:'Leh Arrival',desc:'Rest, acclimatize, Leh market.'},{day:'Day 2',title:'Monasteries',desc:'Shanti Stupa, Hemis, Thiksey.'},{day:'Day 3',title:'Pangong',desc:'Chang La pass, Pangong Lake overnight.'},{day:'Day 4',title:'Nubra',desc:'Khardung La, Nubra Valley, camel safari.'},{day:'Day 5',title:'Back to Leh',desc:'Diskit Monastery, return.'},{day:'Day 6',title:'Sham Valley',desc:'Magnetic Hill, Sangam point.'},{day:'Day 7',title:'Departure',desc:'Morning Leh, fly home.'}], hotelCost:'₹10,000', flightCost:'₹9,000', foodCost:'₹5,000', total:'₹28,000' },

  { id:'n3', cat:'northindia', badge:'🏔 North India', badgeClass:'blue', name:'Shimla-Manali Hill Tour', loc:'Himachal Pradesh', duration:'6 Days', rating:'4.7', reviews:456, price:'₹20,000', priceNum:20000, img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', desc:'Toy train to Shimla, colonial charm, Manali snow adventures, and Solang Valley activities.', highlights:['✓ Toy train Kalka-Shimla','✓ Rohtang snow','✓ Solang Valley zip-line','✓ Mall Road shopping'], food:['Himachali dham thali','Apple juice straight from orchard','Tibetan momos','Cafe culture Manali'], places:['Shimla Mall Road','Kufri','Manali Old Town','Rohtang Pass','Solang Valley'], itinerary:[{day:'Day 1',title:'Shimla Arrival',desc:'Toy train, Ridge, Christ Church.'},{day:'Day 2',title:'Kufri',desc:'Kufri skiing, Jakhu Monkey Temple.'},{day:'Day 3',title:'Manali',desc:'Drive to Manali, Old Town, Hadimba.'},{day:'Day 4',title:'Rohtang',desc:'Snow activities, Rohtang Pass views.'},{day:'Day 5',title:'Solang',desc:'Zip-line, river crossing, ATV.'},{day:'Day 6',title:'Return',desc:'Bhuntar flight/bus, departure.'}], hotelCost:'₹7,500', flightCost:'₹5,500', foodCost:'₹4,000', total:'₹20,000' },

  // LAST MINUTE
  { id:'l1', cat:'lastminute', badge:'⚡ Last Minute', badgeClass:'gold', name:'Bangkok Express', loc:'Bangkok, Thailand', duration:'4 Days', rating:'4.7', reviews:182, price:'₹28,000', priceNum:28000, img:'https://images.unsplash.com/photo-1562602834-b35d8fbe10ab?w=800&q=80', desc:'Instant booking confirmed! Quick Bangkok getaway — temples, rooftop bars, street food, and night markets.', highlights:['✓ Instant confirmation','✓ Visa on arrival easy','✓ Night market tour','✓ Rooftop bar access'], food:['Khao San Road street food','Rooftop fine dining','Floating market breakfast','Pad Thai cooking class'], places:['Grand Palace','Wat Arun','Chatuchak Market','Asiatique Riverside'], itinerary:[{day:'Day 1',title:'Bangkok Arrival',desc:'Grand Palace, Wat Pho, Chao Phraya cruise.'},{day:'Day 2',title:'Temples & Food',desc:'Wat Arun, street food tour, night market.'},{day:'Day 3',title:'Shopping',desc:'Chatuchak, MBK Mall, rooftop sunset bar.'},{day:'Day 4',title:'Departure',desc:'Morning Lumphini Park, airport.'}], hotelCost:'₹10,000', flightCost:'₹12,000', foodCost:'₹4,000', total:'₹28,000' },

  { id:'l2', cat:'lastminute', badge:'⚡ Last Minute', badgeClass:'gold', name:'Dubai Weekend Getaway', loc:'Dubai, UAE', duration:'3 Days', rating:'4.8', reviews:234, price:'₹38,000', priceNum:38000, img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', desc:'Last-minute Dubai escape — Burj Khalifa, desert safari, and gold souk in just 3 action-packed days.', highlights:['✓ Same week departure','✓ Burj Khalifa included','✓ Desert safari evening','✓ Gold Souk visit'], food:['Burj Al Arab afternoon tea','Old Dubai diner','Desert BBQ dinner','International JBR brunch'], places:['Burj Khalifa','Dubai Mall','Desert Safari','Gold & Spice Souk'], itinerary:[{day:'Day 1',title:'Arrival',desc:'Dubai Mall, Dubai Fountain, Burj Khalifa top.'},{day:'Day 2',title:'Desert Safari',desc:'Dune bashing, camel ride, BBQ dinner.'},{day:'Day 3',title:'Shopping & Departure',desc:'Gold Souk, Spice Souk, airport.'}], hotelCost:'₹14,000', flightCost:'₹16,000', foodCost:'₹5,000', total:'₹38,000' },

  { id:'l3', cat:'lastminute', badge:'⚡ Flash Sale', badgeClass:'gold', name:'Goa Weekend Special', loc:'Goa, India', duration:'3 Days', rating:'4.9', reviews:614, price:'₹12,000', priceNum:12000, img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', desc:'Book today, fly tomorrow! Quick Goa beach weekend with water sports, seafood, and sunset drinks.', highlights:['✓ Book & fly same/next day','✓ Beach resort included','✓ Water sports pass','✓ Seafood dinner'], food:['Baga Beach shacks','Cliff top restaurants','Portuguese bakeries','Fresh coconut water'], places:['Baga Beach','Anjuna Market','Basilica Bom Jesus','Fort Aguada'], itinerary:[{day:'Day 1',title:'Arrival',desc:'Check in, evening beach walk, seafood dinner.'},{day:'Day 2',title:'Full Day Goa',desc:'Water sports, Anjuna Market, sunset bar.'},{day:'Day 3',title:'Departure',desc:'Morning swim, Old Goa, airport.'}], hotelCost:'₹4,000', flightCost:'₹4,500', foodCost:'₹2,500', total:'₹12,000' },

  // PREMIUM
  { id:'p1', cat:'premium', badge:'💎 Ultra Premium', badgeClass:'', name:'Maldives Private Island', loc:'Maldives', duration:'7 Days', rating:'5.0', reviews:42, price:'₹4,50,000', priceNum:450000, img:'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80', desc:'Exclusive private island resort for ultra-luxury seekers. Private butler, seaplane transfer, and personal chef.', highlights:['✓ Private island resort','✓ Seaplane arrival','✓ Personal butler 24/7','✓ Michelin-star chef'], food:['Personal chef 3 meals daily','Underwater restaurant','Private beach BBQ','Dom Perignon champagne'], places:['Private Island','Exclusive reef snorkeling','Seaplane scenic flight','Male City luxury tour'], itinerary:[{day:'Day 1',title:'Seaplane Arrival',desc:'Seaplane from Male, private island welcome.'},{day:'Day 2',title:'Marine Experience',desc:'Private dive guide, marine sanctuary tour.'},{day:'Day 3',title:'Wellness Day',desc:'Overwater spa, yoga, meditation at sunrise.'},{day:'Day 4',title:'Adventure',desc:'Surfing, big game fishing, kayaking.'},{day:'Day 5',title:'Island Hop',desc:'Neighboring island day trip, dolphin encounter.'},{day:'Day 6',title:'Gastronomy',desc:'Cooking with chef, underwater dinner.'},{day:'Day 7',title:'Farewell',desc:'Sunrise breakfast, seaplane departure.'}], hotelCost:'₹2,80,000', flightCost:'₹85,000', foodCost:'₹45,000', total:'₹4,50,000' },

  { id:'p2', cat:'premium', badge:'💎 Premium', badgeClass:'', name:'Switzerland Luxury Alps', loc:'Switzerland', duration:'8 Days', rating:'5.0', reviews:68, price:'₹2,20,000', priceNum:220000, img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', desc:'Five-star alpine resorts, Glacier Express, Grindelwald skiing, and exclusive private train carriages.', highlights:['✓ Glacier Express private car','✓ 5-star alpine resort','✓ Helicopter glacier tour','✓ Luxury spa'], food:['Gourmet Swiss fondue','Michelin dinner Zurich','In-chalet breakfast','Swiss chocolate making'], places:['Jungfraujoch','Matterhorn','Lucerne','Grindelwald','St. Moritz'], itinerary:[{day:'Day 1',title:'Zurich',desc:'5-star hotel, Old Town, fine dining.'},{day:'Day 2',title:'Jungfraujoch',desc:'Top of Europe, luxury train.'},{day:'Day 3',title:'Grindelwald',desc:'Ski resort, First Cliff Walk.'},{day:'Day 4',title:'Helicopter',desc:'Private helicopter glacier flight.'},{day:'Day 5',title:'Matterhorn',desc:'Zermatt, Matterhorn Glacier Paradise.'},{day:'Day 6',title:'Lucerne',desc:'Chapel Bridge, lake cruise, spa.'},{day:'Day 7',title:'St. Moritz',desc:'Luxury ski resort, Badrutt\'s Palace.'},{day:'Day 8',title:'Departure',desc:'Geneva airport, fly home.'}], hotelCost:'₹1,10,000', flightCost:'₹62,000', foodCost:'₹28,000', total:'₹2,20,000' },

  { id:'p3', cat:'premium', badge:'💎 Exclusive', badgeClass:'', name:'Japan Private Journey', loc:'Japan', duration:'10 Days', rating:'5.0', reviews:54, price:'₹1,95,000', priceNum:195000, img:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80', desc:'Private guide for 10 days, ryokan stays, Mt Fuji private viewing, and exclusive tea ceremony with a geisha.', highlights:['✓ Private guide throughout','✓ Luxury ryokan stays','✓ Exclusive geisha tea ceremony','✓ Mt Fuji private sunrise'], food:['Kaiseki ryokan dinners','Tsukiji market tour','Ramen master class','Sake tasting evening'], places:['Tokyo Sumo tournament','Kyoto Geisha district','Mt Fuji private','Hiroshima Peace Memorial','Nara deer park'], itinerary:[{day:'Day 1-3',title:'Tokyo',desc:'Private guide, Shibuya, teamLab Planets.'},{day:'Day 4',title:'Mt Fuji',desc:'Private sunrise viewing, Hakone onsen.'},{day:'Day 5-6',title:'Kyoto',desc:'Fushimi Inari, private geisha tea ceremony.'},{day:'Day 7',title:'Nara',desc:'Deer park, Todai-ji, sake tasting.'},{day:'Day 8',title:'Osaka',desc:'Dotonbori, Osaka Castle, street food.'},{day:'Day 9',title:'Hiroshima',desc:'Peace Memorial, Miyajima Island.'},{day:'Day 10',title:'Departure',desc:'Final Tokyo night, departure.'}], hotelCost:'₹90,000', flightCost:'₹62,000', foodCost:'₹22,000', total:'₹1,95,000' }
];

/* ── DOM READY ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initScrollReveal();
  initCounters();
  initAuthState();
  initPageSpecific();
  initChatbot();
});

/* ── NAVBAR ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  function updateNav() { navbar.classList.toggle('scrolled', window.scrollY > 60); }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('navLinks');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => { btn.classList.toggle('open'); menu.classList.toggle('open'); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { btn.classList.remove('open'); menu.classList.remove('open'); }));
}

/* ── SCROLL REVEAL ── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── COUNTERS ── */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current);
          if (current >= target) clearInterval(timer);
        }, 25);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.c-num').forEach(el => obs.observe(el));
}

/* ── AUTH STATE ── */
function initAuthState() {
  const user = getUser();
  const navAuth = document.getElementById('navAuth');
  if (!navAuth) return;
  if (user) {
    navAuth.innerHTML = `
      <span style="font-size:.85rem;color:var(--text-mid);font-weight:600">Hi, ${user.name.split(' ')[0]}! ✈️</span>
      <a href="Dashboard.html" class="btn-nav-ghost">Dashboard</a>
      <button class="btn-nav-fill" onclick="handleLogout()">Logout</button>`;
  }
}

/* ── AUTH FUNCTIONS ── */
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const toast = document.getElementById('authToast');
  const users = JSON.parse(localStorage.getItem('sv_users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('sv_current_user', JSON.stringify(user));
    showToast(toast, 'success', '✅ Welcome back! Redirecting...');
    setTimeout(() => window.location.href = 'Dashboard.html', 1200);
  } else {
    showToast(toast, 'error', '❌ Invalid email or password. Try demo@stayventure.com / demo123');
    // Auto-create demo if none exists
    if (!users.length) {
      const demo = { name:'Demo User', email:'demo@stayventure.com', password:'demo123' };
      localStorage.setItem('sv_users', JSON.stringify([demo]));
    }
  }
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;
  const toast = document.getElementById('signupToast');
  if (password !== confirm) { showToast(toast, 'error', '❌ Passwords do not match!'); return; }
  if (password.length < 6) { showToast(toast, 'error', '❌ Password must be at least 6 characters'); return; }
  const users = JSON.parse(localStorage.getItem('sv_users') || '[]');
  if (users.find(u => u.email === email)) { showToast(toast, 'error', '❌ Email already registered. Please sign in.'); return; }
  const user = { name, email, password };
  users.push(user);
  localStorage.setItem('sv_users', JSON.stringify(users));
  localStorage.setItem('sv_current_user', JSON.stringify(user));
  showToast(toast, 'success', '🎉 Account created! Redirecting to dashboard...');
  setTimeout(() => window.location.href = 'Dashboard.html', 1400);
}

function handleLogout() {
  localStorage.removeItem('sv_current_user');
  window.location.href = 'index.html';
}

function socialLogin(provider) {
  const user = { name: provider + ' User', email: provider.toLowerCase() + '@social.com', password:'social' };
  localStorage.setItem('sv_current_user', JSON.stringify(user));
  window.location.href = 'Dashboard.html';
}

function getUser() { try { return JSON.parse(localStorage.getItem('sv_current_user')); } catch { return null; } }

function togglePw(id, btn) {
  const input = document.getElementById(id);
  if (!input) return;
  if (input.type === 'password') { input.type = 'text'; btn.textContent = '🔒'; }
  else { input.type = 'password'; btn.textContent = '👁'; }
}

function checkPwStrength(val) {
  const bar = document.getElementById('pwStrengthBar');
  if (!bar) return;
  let strength = 0;
  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;
  const colors = ['#ef4444','#f97316','#f59e0b','#10b981'];
  const widths = ['25%','50%','75%','100%'];
  bar.style.width = widths[strength - 1] || '0%';
  bar.style.background = colors[strength - 1] || 'var(--border)';
}

function showToast(el, type, msg) {
  if (!el) return;
  el.className = 'toast ' + type;
  el.textContent = msg;
  el.style.display = 'block';
}

/* ── GLOBAL TOAST ── */
function showGlobalToast(msg, type='orange') {
  const toast = document.getElementById('globalToast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `global-toast toast-${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── SEARCH ── */
function handleSearch() {
  const query = (document.getElementById('heroSearch')?.value || '').trim();
  if (!query) { showGlobalToast('Please enter a destination to search!'); return; }
  const found = DESTINATIONS.filter(d => d.name.toLowerCase().includes(query.toLowerCase()) || d.country.toLowerCase().includes(query.toLowerCase()) || d.tag.toLowerCase().includes(query.toLowerCase()));
  const section = document.getElementById('searchResultsSection');
  const grid = document.getElementById('searchResultsGrid');
  if (!section || !grid) { window.location.href = `Destination.html?q=${encodeURIComponent(query)}`; return; }
  document.getElementById('searchQueryTitle').textContent = query;
  if (found.length > 0) {
    document.getElementById('searchResultsSubtitle').textContent = `Found ${found.length} destination(s)`;
    grid.innerHTML = found.map(d => destCardHTML(d, false)).join('');
  } else {
    document.getElementById('searchResultsSubtitle').textContent = 'No local results — fetching AI-powered info...';
    grid.innerHTML = `<div class="spinner"><div class="spin"></div>Searching with AI...</div>`;
    fetchGeminiDestination(query, grid);
  }
  section.style.display = 'block';
  section.scrollIntoView({ behavior: 'smooth' });
}

function closeSearch() {
  const section = document.getElementById('searchResultsSection');
  if (section) section.style.display = 'none';
}

async function fetchGeminiDestination(query, container) {
  const prompt = `You are a travel expert. Provide detailed travel information about "${query}" in this exact JSON format (no markdown, no backticks, just pure JSON):
{"name":"destination name","country":"country name","description":"2-3 sentence engaging description","attractions":["attraction1","attraction2","attraction3","attraction4","attraction5"],"activities":["activity1","activity2","activity3","activity4"],"tips":["tip1","tip2","tip3"],"bestTime":"best time to visit","currency":"local currency","language":"local language","estimatedBudget":"budget in INR per person"}`;
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    let info;
    try { info = JSON.parse(text.replace(/```json|```/g, '').trim()); }
    catch { info = null; }
    if (info) {
      const imgs = ['https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80','https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80','https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'];
      container.innerHTML = `
        <div class="search-result-card">
          <div class="src-img" style="background-image:url('${imgs[0]}')"></div>
          <div class="src-body">
            <span class="src-ai-badge">✨ AI Powered</span>
            <h3>${info.name}, ${info.country}</h3>
            <p>${info.description}</p>
            <div class="src-tags">${(info.attractions||[]).slice(0,4).map(a=>`<span class="src-tag">🏛 ${a}</span>`).join('')}</div>
            <div class="src-tags">${(info.activities||[]).slice(0,3).map(a=>`<span class="src-tag">🎯 ${a}</span>`).join('')}</div>
            <div style="margin-top:12px;padding:10px;background:var(--bg-warm);border-radius:8px;font-size:.8rem;color:var(--text-mid)">
              📅 Best Time: <strong>${info.bestTime||'Year-round'}</strong> · 💱 Currency: <strong>${info.currency||'USD'}</strong> · 💰 Budget: <strong>${info.estimatedBudget||'Varies'}</strong>
            </div>
            <div style="margin-top:12px"><strong style="font-size:.82rem">💡 Travel Tips:</strong> ${(info.tips||[]).map(t=>`<div style="font-size:.8rem;color:var(--text-mid);margin-top:4px">• ${t}</div>`).join('')}</div>
            <div style="margin-top:16px;display:flex;gap:8px">
              <button class="btn-explore" onclick="window.location.href='Bookings.html'">Book This Trip</button>
              <button class="btn-secondary" style="padding:8px 16px;border-radius:999px;border:1.5px solid var(--border);background:none;cursor:pointer;font-size:.82rem" onclick="addToWishlistAI('${info.name}','${info.country}')">🤍 Wishlist</button>
            </div>
          </div>
        </div>`;
    } else { container.innerHTML = `<div class="spinner">⚠️ Could not load AI results for "${query}". Please check your API key or try a different search.</div>`; }
  } catch(err) {
    container.innerHTML = `<div class="spinner">⚠️ AI search unavailable. <a href="Destination.html" style="color:var(--orange)">Browse all destinations</a></div>`;
  }
}

function addToWishlistAI(name, country) {
  const wish = JSON.parse(localStorage.getItem('sv_wishlist') || '[]');
  wish.push({ id: name.toLowerCase().replace(/\s/g,''), name, country, img:'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80', price:'Enquire' });
  localStorage.setItem('sv_wishlist', JSON.stringify(wish));
  showGlobalToast(`❤️ ${name} added to wishlist!`, 'green');
}

/* ── DESTINATIONS PAGE ── */
/* OLD initDestinationsPage — superseded by patch below */
function _initDestinationsPageLegacy() { /* replaced */ }

/* OLD filterDest — superseded by patch below */
function _filterDestLegacy(theme, btn) { /* replaced */ }

function destCardHTML(d, ai=false) {
  return `
    <div class="dest-full-card" onclick="openDestDetailPage('${d.id}')">
      <div class="dfc-img" style="background-image:url('${d.img}')"></div>
      <div class="dfc-body">
        ${ai ? '<span class="src-ai-badge">✨ AI</span>' : `<span class="dfc-tag">${d.tag}</span>`}
        <h3>${d.name}, ${d.country}</h3>
        <p>${d.desc.substring(0,100)}...</p>
        <div class="dfc-footer">
          <span class="dfc-price">${d.price}</span>
          <button class="btn-explore" onclick="event.stopPropagation();openDestDetailPage('${d.id}')">Explore →</button>
        </div>
      </div>
    </div>`;
}

/* ── DESTINATION MODAL ── */
let currentModalDest = null;
function openDestModal(id) {
  const dest = DESTINATIONS.find(d => d.id === id);
  if (!dest) return;
  currentModalDest = dest;
  const modal = document.getElementById('destModal');
  if (!modal) return;
  document.getElementById('modalHero').style.backgroundImage = `url('${dest.img}')`;
  document.getElementById('modalTitle').textContent = dest.name;
  document.getElementById('modalCountry').textContent = dest.country;
  document.getElementById('modalDesc').textContent = dest.desc;
  document.getElementById('modalAttractions').innerHTML = dest.attractions.map(a => `<span class="modal-tag">${a}</span>`).join('');
  document.getElementById('modalActivities').innerHTML = dest.activities.map(a => `<span class="modal-tag">🎯 ${a}</span>`).join('');
  document.getElementById('modalItinerary').innerHTML = dest.itinerary.map(i => `<div class="itin-day"><div class="itin-day-num">${i.day.replace('Day ','')}</div><div class="itin-day-content"><h5>${i.title}</h5><p>${i.desc}</p></div></div>`).join('');
  document.getElementById('modalHotels').innerHTML = dest.hotels.map(h => `<span class="modal-tag">🏨 ${h}</span>`).join('');
  document.getElementById('modalCosts').innerHTML = Object.entries(dest.costs).map(([k,v]) => `<div class="cost-item"><div class="label">${k.charAt(0).toUpperCase()+k.slice(1)}</div><div class="value">${v || 'Included'}</div></div>`).join('');
  document.getElementById('modalTotal').textContent = dest.total;
  // Wishlist button state
  const wish = JSON.parse(localStorage.getItem('sv_wishlist') || '[]');
  const btn = document.getElementById('modalWishlistBtn');
  if (btn) btn.textContent = wish.find(w => w.id === id) ? '❤️' : '🤍';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
}

function bookDestination() {
  if (currentModalDest) localStorage.setItem('sv_booking_dest', JSON.stringify(currentModalDest));
  window.location.href = 'Bookings.html';
}

function toggleWishlistModal() {
  if (!currentModalDest) return;
  const wish = JSON.parse(localStorage.getItem('sv_wishlist') || '[]');
  const idx = wish.findIndex(w => w.id === currentModalDest.id);
  const btn = document.getElementById('modalWishlistBtn');
  if (idx > -1) {
    wish.splice(idx, 1);
    localStorage.setItem('sv_wishlist', JSON.stringify(wish));
    if (btn) btn.textContent = '🤍';
    showGlobalToast(`Removed from wishlist`, 'orange');
  } else {
    wish.push({ id: currentModalDest.id, name: currentModalDest.name, country: currentModalDest.country, img: currentModalDest.img, price: currentModalDest.price });
    localStorage.setItem('sv_wishlist', JSON.stringify(wish));
    if (btn) btn.textContent = '❤️';
    showGlobalToast(`❤️ ${currentModalDest.name} added to wishlist!`, 'green');
  }
}

/* ── THEME FILTER (homepage) ── */
function filterTheme(theme) {
  const allCards = document.querySelectorAll('.theme-card');
  allCards.forEach(c => c.classList.toggle('active-theme', c.dataset.theme === theme));
  const results = document.getElementById('themeResults');
  const grid = document.getElementById('themeResultsGrid');
  const title = document.getElementById('themeResultsTitle');
  if (!results || !grid) return;
  const filtered = DESTINATIONS.filter(d => d.theme.includes(theme)).slice(0, 4);
  const names = { beach:'Beach', adventure:'Adventure', winter:'Winter', desert:'Desert' };
  title.innerHTML = `${names[theme] || theme} <em>Destinations</em>`;
  grid.innerHTML = filtered.map(d => destCardHTML(d)).join('');
  results.style.display = 'block';
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── PACKAGES PAGE ── */
function initPackagesPage() {
  if (document.querySelector('.pkg-grid-full')) {
    renderPkgGrid();
  } else {
    filterPkgs('all');
  }
}

function filterPkgs(cat, btn) {
  if (btn) {
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  const grid = document.getElementById('pkgGrid');
  if (!grid) return;
  const pkgs = cat === 'all' ? PACKAGES : PACKAGES.filter(p => p.cat === cat);
  grid.innerHTML = pkgs.map(p => `
    <div class="full-pkg-card reveal" onclick="openPkgModal('${p.id}')">
      <div class="fpkg-img-wrap">
        <div class="fpkg-img" style="background-image:url('${p.img}')"></div>
        <span class="fpkg-badge ${p.badgeClass}">${p.badge}</span>
        <span class="fpkg-duration">${p.duration}</span>
      </div>
      <div class="fpkg-body">
        <div class="fpkg-loc">📍 ${p.loc}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="fpkg-highlights">${p.highlights.slice(0,3).map(h=>`<div class="highlight-item">${h}</div>`).join('')}</div>
        <div class="fpkg-footer">
          <div><div class="fpkg-price"><small>From</small>${p.price}</div><div class="fpkg-rating">⭐ ${p.rating} (${p.reviews})</div></div>
          <button class="btn-book" onclick="event.stopPropagation();openPkgModal('${p.id}')">Book Now</button>
        </div>
      </div>
    </div>`).join('');
  initScrollReveal();
}

let currentPkg = null;
function _openPkgModalLegacy(id) {
  // Replaced by enhanced version below — kept for reference
}

function bookPackage() {
  if (currentPkg) {
    localStorage.setItem('sv_booking_pkg', JSON.stringify(currentPkg));
    localStorage.setItem('sv_booking_dest', JSON.stringify({ name: currentPkg.name, priceNum: currentPkg.priceNum }));
  }
  window.location.href = 'Bookings.html';
}

/* ── CALENDAR ── */
let calState = { year: new Date().getFullYear(), month: new Date().getMonth(), startDate: null, endDate: null, selecting: 'start' };

function toggleCalendar() {
  const popup = document.getElementById('calendarPopup');
  if (!popup) return;
  popup.classList.toggle('open');
  if (popup.classList.contains('open')) renderCalendar();
}

function changeCalMonth(dir) {
  calState.month += dir;
  if (calState.month > 11) { calState.month = 0; calState.year++; }
  if (calState.month < 0) { calState.month = 11; calState.year--; }
  renderCalendar();
}

function renderCalendar() {
  const grid = document.getElementById('calGrid');
  const title = document.getElementById('calMonthTitle');
  if (!grid || !title) return;
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  title.textContent = `${months[calState.month]} ${calState.year}`;
  const firstDay = new Date(calState.year, calState.month, 1).getDay();
  const daysInMonth = new Date(calState.year, calState.month + 1, 0).getDate();
  const today = new Date();
  let html = ['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => `<div class="cal-day-name">${d}</div>`).join('');
  for (let i = 0; i < firstDay; i++) html += `<div class="cal-day empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(calState.year, calState.month, d);
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday = date.toDateString() === today.toDateString();
    const isStart = calState.startDate && date.toDateString() === calState.startDate.toDateString();
    const isEnd = calState.endDate && date.toDateString() === calState.endDate.toDateString();
    const inRange = calState.startDate && calState.endDate && date > calState.startDate && date < calState.endDate;
    let cls = 'cal-day';
    if (isPast) cls += ' past'; else if (isStart) cls += ' selected range-start'; else if (isEnd) cls += ' selected range-end'; else if (inRange) cls += ' in-range'; else if (isToday) cls += ' today';
    html += `<div class="${cls}" ${isPast ? '' : `onclick="selectCalDay(${calState.year},${calState.month},${d})"`}>${d}</div>`;
  }
  grid.innerHTML = html;
}

function selectCalDay(y, m, d) {
  const date = new Date(y, m, d);
  if (calState.selecting === 'start' || (calState.startDate && date <= calState.startDate)) {
    calState.startDate = date; calState.endDate = null; calState.selecting = 'end';
  } else {
    calState.endDate = date; calState.selecting = 'start';
    document.getElementById('calendarPopup')?.classList.remove('open');
  }
  const fmt = dt => dt ? dt.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }) : 'Select date';
  const ci = document.getElementById('checkInDisplay'); if (ci) ci.textContent = fmt(calState.startDate);
  const co = document.getElementById('checkOutDisplay'); if (co) co.textContent = fmt(calState.endDate);
  renderCalendar();
  updateSummary();
}

/* ── GUEST COUNTER ── */
let guests = { adults: 2, children: 0, infants: 0 };
function changeGuest(type, delta) {
  guests[type] = Math.max(0, guests[type] + delta);
  if (type === 'adults') guests[type] = Math.max(1, guests[type]);
  document.getElementById(type + 'Count').textContent = guests[type];
  updateSummary();
}

/* ── BOOKING SUMMARY ── */
const destImgs = {
  'Maldives':'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&q=80',
  'Dubai':'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  'Paris':'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
  'Bali':'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  'Switzerland':'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  'Goa':'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80'
};

function updateSummary() {
  const destSel = document.getElementById('bookDest');
  const pkgSel = document.getElementById('bookPkgType');
  if (!destSel) return;
  const [destName, basePrice] = (destSel.value || '|0').split('|');
  const [pkgType, mult] = (pkgSel?.value || 'standard|1').split('|');
  const nights = (calState.startDate && calState.endDate) ? Math.max(1, Math.round((calState.endDate - calState.startDate) / 86400000)) : 0;
  const totalGuests = guests.adults + guests.children;
  const base = parseInt(basePrice || 0);
  const total = Math.round(base * parseFloat(mult || 1) * Math.max(1, totalGuests));
  const fmt = n => '₹' + n.toLocaleString('en-IN');
  const fmtDate = dt => dt ? dt.toLocaleDateString('en-IN', { day:'numeric', month:'short' }) : '—';
  if (document.getElementById('summaryDest')) document.getElementById('summaryDest').textContent = destName ? `📍 ${destName}` : 'Select a destination';
  if (document.getElementById('summaryTitle')) document.getElementById('summaryTitle').textContent = destName ? `${destName} Trip` : 'Your Perfect Trip';
  if (document.getElementById('sumCheckIn')) document.getElementById('sumCheckIn').textContent = fmtDate(calState.startDate);
  if (document.getElementById('sumCheckOut')) document.getElementById('sumCheckOut').textContent = fmtDate(calState.endDate);
  if (document.getElementById('sumNights')) document.getElementById('sumNights').textContent = nights ? `${nights} nights` : '—';
  if (document.getElementById('sumGuests')) document.getElementById('sumGuests').textContent = `${guests.adults} Adults${guests.children > 0 ? ', ' + guests.children + ' Children' : ''}`;
  if (document.getElementById('sumPkgType')) document.getElementById('sumPkgType').textContent = pkgType?.charAt(0).toUpperCase() + pkgType?.slice(1);
  if (document.getElementById('sumBase')) document.getElementById('sumBase').textContent = base ? fmt(base) + '/person' : '—';
  if (document.getElementById('sumTotal')) document.getElementById('sumTotal').textContent = total ? fmt(total) : '₹0';
  if (document.getElementById('summaryImg') && destImgs[destName]) document.getElementById('summaryImg').style.backgroundImage = `url('${destImgs[destName]}')`;
  // Save to session
  if (destName && total) {
    localStorage.setItem('sv_payment_info', JSON.stringify({
      dest: destName, title: `${destName} Trip`, pkg: pkgType, guests: `${guests.adults} Adults`, nights,
      checkIn: fmtDate(calState.startDate), checkOut: fmtDate(calState.endDate), total: fmt(total), totalNum: total
    }));
  }
}

/* ── BOOKING STEPS ── */
function goToStep(step) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`stepPanel${i}`).style.display = i === step ? 'block' : 'none';
    const stepEl = document.getElementById(`step${i}`);
    if (stepEl) {
      stepEl.classList.remove('active', 'done');
      if (i < step) stepEl.classList.add('done');
      if (i === step) stepEl.classList.add('active');
    }
  }
  if (step === 2) {
    renderCalendar();
    const booked = JSON.parse(localStorage.getItem('sv_booking_dest') || 'null');
    if (booked) {
      const sel = document.getElementById('bookDest');
      if (sel) { for (let o of sel.options) { if (o.value.startsWith(booked.name)) { sel.value = o.value; break; } } }
      updateSummary();
    }
  }
}

function proceedToPayment() {
  const first = document.getElementById('bookFirstName')?.value;
  const email = document.getElementById('bookEmail')?.value;
  if (!first || !email) { showGlobalToast('Please fill in all required fields!'); return; }
  if (!calState.startDate || !calState.endDate) { showGlobalToast('Please select your travel dates!'); return; }
  const dest = document.getElementById('bookDest')?.value;
  if (!dest) { showGlobalToast('Please select a destination!'); return; }
  updateSummary();
  window.location.href = 'Payment.html';
}

/* ── PAYMENT ── */
function initPaymentPage() {
  const info = JSON.parse(localStorage.getItem('sv_payment_info') || 'null');
  if (!info) return;
  if (document.getElementById('payDest')) document.getElementById('payDest').textContent = info.dest || '';
  if (document.getElementById('payTitle')) document.getElementById('payTitle').textContent = info.title || '';
  if (document.getElementById('payDates')) document.getElementById('payDates').textContent = `${info.checkIn || '—'} → ${info.checkOut || '—'}`;
  if (document.getElementById('payNights')) document.getElementById('payNights').textContent = `${info.nights || '—'} nights`;
  if (document.getElementById('payGuests')) document.getElementById('payGuests').textContent = info.guests || '—';
  if (document.getElementById('payPkg')) document.getElementById('payPkg').textContent = info.pkg || '—';
  if (document.getElementById('payTotal')) document.getElementById('payTotal').textContent = info.total || '₹0';
  // Update image
  const img = document.getElementById('paymentSummaryImg');
  if (img && destImgs[info.dest]) img.style.backgroundImage = `url('${destImgs[info.dest]}')`;
}

function selectPayMethod(method, btn) {
  document.querySelectorAll('.pay-method-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('stripeForm').style.display = method === 'stripe' ? 'block' : 'none';
  document.getElementById('razorpayForm').style.display = method === 'razorpay' ? 'block' : 'none';
}

function formatCard(input) {
  let v = input.value.replace(/\D/g,'').substring(0,16);
  input.value = v.replace(/(.{4})/g,'$1 ').trim();
}

function formatExpiry(input) {
  let v = input.value.replace(/\D/g,'').substring(0,4);
  if (v.length >= 2) v = v.substring(0,2) + ' / ' + v.substring(2);
  input.value = v;
}

function processPayment() {
  const btn = document.querySelector('.btn-pay');
  if (btn) { btn.textContent = '⏳ Processing...'; btn.disabled = true; }
  const info = JSON.parse(localStorage.getItem('sv_payment_info') || '{}');
  // Save booking
  const bookings = JSON.parse(localStorage.getItem('sv_bookings') || '[]');
  const ref = 'SV-' + Date.now().toString().slice(-6);
  bookings.push({ ref, ...info, status: 'confirmed', date: new Date().toLocaleDateString(), img: destImgs[info.dest] || '' });
  localStorage.setItem('sv_bookings', JSON.stringify(bookings));
  localStorage.setItem('sv_last_ref', ref);
  setTimeout(() => window.location.href = 'Success.html', 2000);
}

/* ── SUCCESS PAGE ── */
function initSuccessPage() {
  const ref = localStorage.getItem('sv_last_ref') || 'SV-000000';
  const info = JSON.parse(localStorage.getItem('sv_payment_info') || '{}');
  if (document.getElementById('bookingRef')) document.getElementById('bookingRef').textContent = ref;
  const details = document.getElementById('successDetails');
  if (details && info.dest) {
    details.innerHTML = `
      <div class="sd-row"><span>Destination</span><strong>${info.dest}</strong></div>
      <div class="sd-row"><span>Dates</span><strong>${info.checkIn} → ${info.checkOut}</strong></div>
      <div class="sd-row"><span>Guests</span><strong>${info.guests}</strong></div>
      <div class="sd-row"><span>Package</span><strong>${info.pkg}</strong></div>
      <div class="sd-row"><span>Amount Paid</span><strong style="color:var(--orange)">${info.total}</strong></div>`;
  }
}

let userRating = 0;
function setRating(n) {
  userRating = n;
  document.querySelectorAll('.star-btn').forEach((btn, i) => { btn.textContent = i < n ? '⭐' : '☆'; btn.classList.toggle('active', i < n); });
}

function submitFeedback() {
  const text = document.getElementById('feedbackText')?.value;
  if (!userRating) { showGlobalToast('Please select a rating!'); return; }
  const feedbacks = JSON.parse(localStorage.getItem('sv_feedbacks') || '[]');
  const info = JSON.parse(localStorage.getItem('sv_payment_info') || '{}');
  feedbacks.push({ rating: userRating, text, dest: info.dest, date: new Date().toLocaleDateString() });
  localStorage.setItem('sv_feedbacks', JSON.stringify(feedbacks));
  document.getElementById('feedbackMsg').style.display = 'block';
  showGlobalToast('⭐ Thank you for your feedback!', 'green');
}

/* ── DASHBOARD ── */
function initDashboard() {
  const user = getUser();
  if (!user) { window.location.href = 'Login.html'; return; }
  if (document.getElementById('dashAvatar')) document.getElementById('dashAvatar').textContent = user.name.charAt(0).toUpperCase();
  if (document.getElementById('dashName')) document.getElementById('dashName').textContent = user.name;
  if (document.getElementById('dashEmail')) document.getElementById('dashEmail').textContent = user.email;
  if (document.getElementById('welcomeName')) document.getElementById('welcomeName').textContent = user.name.split(' ')[0];
  loadBookings();
  loadWishlist();
  loadPremiumPackages();
}

function showSection(id, el) {
  document.querySelectorAll('.dash-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.dash-nav-item').forEach(i => i.classList.remove('active'));
  document.getElementById(`sec-${id}`)?.classList.add('active');
  el?.classList.add('active');
}

function loadBookings() {
  const bookings = JSON.parse(localStorage.getItem('sv_bookings') || '[]');
  const demo = [
    { ref:'SV-001234', dest:'Bali', title:'Bali Paradise Trip', checkIn:'15 Mar', checkOut:'22 Mar', nights:7, guests:'2 Adults', pkg:'deluxe', total:'₹77,000', status:'confirmed', img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&q=80' },
    { ref:'SV-001198', dest:'Goa', title:'Goa Beach Weekend', checkIn:'01 Feb', checkOut:'04 Feb', nights:3, guests:'4 Adults', pkg:'standard', total:'₹48,000', status:'confirmed', img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&q=80' },
    { ref:'SV-001056', dest:'Kerala', title:'Kerala Backwaters', checkIn:'10 Jan', checkOut:'14 Jan', nights:4, guests:'2 Adults', pkg:'premium', total:'₹39,600', status:'confirmed', img:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=300&q=80' }
  ];
  const all = [...bookings, ...demo];
  if (document.getElementById('statTrips')) document.getElementById('statTrips').textContent = all.length;
  const html = all.slice(0,3).map(b => bookingCardHTML(b)).join('');
  if (document.getElementById('overviewBookings')) document.getElementById('overviewBookings').innerHTML = html;
  if (document.getElementById('allBookingsList')) document.getElementById('allBookingsList').innerHTML = all.map(b => bookingCardHTML(b)).join('');
}

function bookingCardHTML(b) {
  return `<div class="booking-card">
    <div class="booking-card-img" style="background-image:url('${b.img || ''}')"></div>
    <div class="booking-card-body">
      <div class="booking-card-loc">📍 ${b.dest}</div>
      <div class="booking-card-title">${b.title}</div>
      <div class="booking-card-meta"><span>📅 ${b.checkIn} → ${b.checkOut}</span><span>👥 ${b.guests}</span><span>💼 ${b.pkg}</span></div>
      <div class="booking-card-footer">
        <span class="booking-card-price">${b.total}</span>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="booking-status status-${b.status||'confirmed'}">${(b.status||'confirmed').charAt(0).toUpperCase()+(b.status||'confirmed').slice(1)}</span>
          <button class="btn-view-booking" onclick="viewBookingDetail('${b.ref}')">View Booking</button>
          <button class="btn-book" style="padding:8px 16px" onclick="window.location.href='Payment.html'">Buy Again</button>
        </div>
      </div>
    </div>
  </div>`;
}

function viewBookingDetail(ref) {
  showGlobalToast(`📋 Booking ${ref} — Details sent to your email!`, 'green');
}

function loadWishlist() {
  const wish = JSON.parse(localStorage.getItem('sv_wishlist') || '[]');
  if (document.getElementById('statWish')) document.getElementById('statWish').textContent = wish.length;
  const grid = document.getElementById('wishlistGrid');
  if (!grid) return;
  if (!wish.length) { grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-dim)"><div style="font-size:3rem;margin-bottom:12px">💔</div><p>Your wishlist is empty. <a href="Destination.html" style="color:var(--orange)">Explore destinations</a></p></div>`; return; }
  grid.innerHTML = wish.map(w => `
    <div class="wishlist-card">
      <div class="wc-img" style="background-image:url('${w.img}')"></div>
      <div class="wc-body">
        <h4>${w.name}</h4>
        <p>${w.country}</p>
        <div class="wc-footer">
          <span class="wc-price">${w.price}</span>
          <button class="btn-remove-wish" onclick="removeWish('${w.id}')">🗑 Remove</button>
        </div>
      </div>
    </div>`).join('');
}

function removeWish(id) {
  const wish = JSON.parse(localStorage.getItem('sv_wishlist') || '[]').filter(w => w.id !== id);
  localStorage.setItem('sv_wishlist', JSON.stringify(wish));
  loadWishlist();
  showGlobalToast('Removed from wishlist');
}

function loadPremiumPackages() {
  const grid = document.getElementById('premiumGrid');
  if (!grid) return;
  const premium = PACKAGES.filter(p => p.cat === 'premium');
  grid.innerHTML = premium.map(p => `
    <div class="full-pkg-card">
      <div class="fpkg-img-wrap"><div class="fpkg-img" style="background-image:url('${p.img}')"></div><span class="fpkg-badge">${p.badge}</span><span class="fpkg-duration">${p.duration}</span></div>
      <div class="fpkg-body">
        <div class="fpkg-loc">📍 ${p.loc}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="fpkg-footer">
          <div><div class="fpkg-price"><small>From</small>${p.price}</div></div>
          <button class="btn-book" onclick="bookPackageDirect('${p.id}')">Book Now</button>
        </div>
      </div>
    </div>`).join('');
}

function bookPackageDirect(id) { openPkgModal(id); }

function saveProfile() {
  const user = getUser();
  if (!user) return;
  user.name = document.getElementById('profFirst')?.value + ' ' + document.getElementById('profLast')?.value;
  user.email = document.getElementById('profEmail')?.value || user.email;
  user.phone = document.getElementById('profPhone')?.value;
  localStorage.setItem('sv_current_user', JSON.stringify(user));
  showGlobalToast('✅ Profile updated!', 'green');
}

/* ── CONTACT ── */
function submitContact() {
  const toast = document.getElementById('contactToast');
  const name = document.getElementById('cFirstName')?.value;
  const email = document.getElementById('cEmail')?.value;
  const msg = document.getElementById('cMessage')?.value;
  if (!name || !email || !msg) { showToast(toast, 'error', '❌ Please fill all required fields.'); return; }
  showToast(toast, 'success', '✅ Message sent! Our team will contact you within 2 hours.');
  setTimeout(() => { if (toast) { toast.style.display = 'none'; } }, 4000);
}

/* ── CHATBOT ── */
const chatResponses = {
  'hello': 'Hello! 👋 Welcome to StayVenture! I\'m Ventura, your AI travel assistant. Where are you dreaming of going?',
  'hi': 'Hi there! ✈️ I\'m here to help you plan your perfect trip. What destination are you interested in?',
  'package': 'We have 30+ amazing packages! 🌍 From budget-friendly Goa trips (₹12,000) to luxury Maldives escapes (₹4,50,000). <a href="Packages.html" style="color:var(--orange)">Browse all packages →</a>',
  'honeymoon': '💕 We have 5 stunning honeymoon packages! Top picks: Maldives Water Villas (₹1,85,000), Santorini Dream (₹1,55,000), and Bali Romantic Retreat (₹85,000). <a href="Packages.html" style="color:var(--orange)">View all honeymoon packages →</a>',
  'visa free': '✈️ Best visa-free destinations for Indians: Bali, Thailand, Sri Lanka, Nepal, Maldives (visa on arrival). All under our Visa Free category!',
  'budget': '💰 Best budget trips: Goa (₹12,000), Kerala (₹22,000), Rajasthan (₹25,000), Coorg (₹12,000), Nepal (₹30,000). Amazing value for money!',
  'booking': '📋 Ready to book? Head to our <a href="Bookings.html" style="color:var(--orange)">Booking page</a>. Select destination, dates, and guests — we\'ll handle the rest!',
  'contact': '📞 Call us: 8870460519 | 📧 Email: auranookhomes@gmail.com | 📍 Office: Coimbatore, India | We\'re open 9am-9pm daily!',
  'cancel': '🛡️ Most packages offer free cancellation within 48 hours. Premium packages have flexible rescheduling. Contact us at 8870460519 for assistance.',
  'maldives': '🏝 Maldives is magical! We offer: Overwater villas, coral reefs, bioluminescent beaches. Packages from ₹95,000. Perfect for honeymoons!',
  'dubai': '🏙 Dubai is incredible! Burj Khalifa, desert safari, luxury malls. Packages from ₹65,000 including flights and 5-star hotel.',
  'goa': '🌊 Goa is perfect for beach lovers! 4-day packages from ₹12,000. Water sports, seafood, nightlife, and beautiful churches!',
  'default': 'That\'s a great question! 🌍 I can help with destinations, packages, visa info, booking help, and more. You can also call us at <strong>8870460519</strong> or email <strong>auranookhomes@gmail.com</strong>.'
};

function initChatbot() {
  setTimeout(() => addBotMessage('Welcome to StayVenture! 🌟 I\'m Ventura, your personal travel assistant. How can I help you plan your dream trip today?'), 1500);
}

function toggleChatbot() {
  const panel = document.getElementById('chatPanel');
  const badge = document.getElementById('chatBadge');
  if (!panel) return;
  panel.classList.toggle('open');
  if (panel.classList.contains('open') && badge) badge.style.display = 'none';
}

function closeChatbot() {
  document.getElementById('chatPanel')?.classList.remove('open');
}

function toggleCallback() {
  document.getElementById('callbackForm')?.classList.toggle('open');
}

function submitCallback() {
  const name = document.getElementById('callbackName')?.value;
  const phone = document.getElementById('callbackPhone')?.value;
  if (!name || !phone) { showGlobalToast('Please enter your name and phone number!'); return; }
  showGlobalToast(`✅ Call back requested! We'll call ${phone} soon.`, 'green');
  document.getElementById('callbackForm')?.classList.remove('open');
  document.getElementById('callbackName').value = '';
  document.getElementById('callbackPhone').value = '';
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  if (!input || !input.value.trim()) return;
  addUserMessage(input.value);
  const response = getBotResponse(input.value.toLowerCase());
  input.value = '';
  setTimeout(() => addBotMessage(response), 700);
}

function sendQuick(text) {
  addUserMessage(text);
  const response = getBotResponse(text.toLowerCase());
  setTimeout(() => addBotMessage(response), 700);
}

function getBotResponse(msg) {
  for (const [key, reply] of Object.entries(chatResponses)) {
    if (key !== 'default' && msg.includes(key)) return reply;
  }
  return chatResponses.default;
}

function addBotMessage(text) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const now = new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
  msgs.innerHTML += `<div class="chat-msg bot"><div class="chat-bubble">${text}</div><div class="chat-time">${now}</div></div>`;
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMessage(text) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const now = new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
  msgs.innerHTML += `<div class="chat-msg user"><div class="chat-bubble">${text}</div><div class="chat-time">${now}</div></div>`;
  msgs.scrollTop = msgs.scrollHeight;
}

/* ── AI SEARCH (Dest page) ── */
function searchGemini() { document.getElementById('aiSearchModal')?.classList.add('open'); document.body.style.overflow = 'hidden'; }

async function searchGeminiDest() {
  const query = document.getElementById('aiSearchInput')?.value?.trim();
  if (!query) return;
  const result = document.getElementById('aiSearchResult');
  if (result) result.innerHTML = `<div class="spinner"><div class="spin"></div>Searching with AI...</div>`;
  await fetchGeminiDestination(query, result);
}

/* ── PAGE INIT ── */
function _initPageSpecificLegacy() {
  const path = window.location.pathname.split('/').pop();
  if (path === 'Destination.html' || path === 'destination.html') initDestinationsPage();
  if (path === 'Packages.html' || path === 'packages.html') initPackagesPage();
  if (path === 'Bookings.html') { updateSummary(); loadRecentBookings(); }
  if (path === 'Payment.html') initPaymentPage();
  if (path === 'Success.html') initSuccessPage();
  if (path === 'Dashboard.html') initDashboard();
  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; } });
  });
  // Close calendar on outside click
  document.addEventListener('click', e => {
    const cal = document.getElementById('calendarPopup');
    const display = document.querySelector('.date-display');
    if (cal && !cal.contains(e.target) && display && !display.contains(e.target)) cal.classList.remove('open');
  });
}

function loadRecentBookings() {
  const bookings = JSON.parse(localStorage.getItem('sv_bookings') || '[]');
  const section = document.getElementById('recentBookingsSection');
  const list = document.getElementById('recentBookingsList');
  if (!section || !list || !bookings.length) return;
  section.style.display = 'block';
  list.innerHTML = bookings.slice(-3).reverse().map(b => bookingCardHTML(b)).join('');
}

/* ═══════════════════════════════════════════════════════════════
   UPDATE PATCH v2 — Full-screen Packages · Recommendations
   Destination Detail · Search Fix · Hotels · Nav Check
═══════════════════════════════════════════════════════════════ */

/* ── HOTEL DATA (detailed, with prices) ── */
const HOTEL_DATA = {
  paris:[
    {name:'Le Meurice',stars:5,price:'₹32,000/night',location:'1st Arr., Paris',rating:'9.4',img:'🏨'},
    {name:'Hôtel Lutetia',stars:5,price:'₹28,000/night',location:'Saint-Germain',rating:'9.2',img:'🏩'},
    {name:'Paris Marriott Opera',stars:4,price:'₹14,000/night',location:'9th Arr.',rating:'8.7',img:'🏨'},
    {name:'ibis Paris Gare de Lyon',stars:3,price:'₹5,500/night',location:'12th Arr.',rating:'7.8',img:'🏩'}
  ],
  dubai:[
    {name:'Burj Al Arab',stars:7,price:'₹1,20,000/night',location:'Jumeirah Beach',rating:'9.8',img:'🏨'},
    {name:'Atlantis The Palm',stars:5,price:'₹55,000/night',location:'Palm Jumeirah',rating:'9.3',img:'🏩'},
    {name:'JW Marriott Marquis',stars:5,price:'₹22,000/night',location:'Business Bay',rating:'9.0',img:'🏨'},
    {name:'Rove Downtown',stars:4,price:'₹8,500/night',location:'Downtown Dubai',rating:'8.5',img:'🏩'}
  ],
  maldives:[
    {name:'Soneva Jani',stars:5,price:'₹1,80,000/night',location:'Noonu Atoll',rating:'9.9',img:'🏖'},
    {name:'Gili Lankanfushi',stars:5,price:'₹1,40,000/night',location:'North Malé Atoll',rating:'9.7',img:'🏝'},
    {name:'Niyama Private Islands',stars:5,price:'₹95,000/night',location:'Dhaalu Atoll',rating:'9.5',img:'🏖'},
    {name:'Sun Island Resort',stars:4,price:'₹28,000/night',location:'Ari Atoll',rating:'8.8',img:'🏝'}
  ],
  bali:[
    {name:'COMO Uma Ubud',stars:5,price:'₹38,000/night',location:'Ubud',rating:'9.5',img:'🌿'},
    {name:'Alila Villas Uluwatu',stars:5,price:'₹45,000/night',location:'Uluwatu Cliff',rating:'9.6',img:'🏖'},
    {name:'The Legian Seminyak',stars:4,price:'₹22,000/night',location:'Seminyak Beach',rating:'9.0',img:'🌴'},
    {name:'Kuta Paradiso Hotel',stars:3,price:'₹6,500/night',location:'Kuta',rating:'7.9',img:'🏨'}
  ],
  switzerland:[
    {name:'The Dolder Grand',stars:5,price:'₹85,000/night',location:'Zurich',rating:'9.7',img:'🏔'},
    {name:"Badrutt's Palace",stars:5,price:'₹1,10,000/night',location:"St. Moritz",rating:'9.8',img:'🏔'},
    {name:'Victoria-Jungfrau Grand',stars:5,price:'₹75,000/night',location:'Interlaken',rating:'9.4',img:'⛰'},
    {name:'Ibis Styles Zurich City',stars:3,price:'₹8,500/night',location:'Zurich',rating:'8.1',img:'🏨'}
  ],
  goa:[
    {name:'Taj Exotica Goa',stars:5,price:'₹18,000/night',location:'Benaulim South Goa',rating:'9.4',img:'🏖'},
    {name:'Park Hyatt Goa Resort',stars:5,price:'₹22,000/night',location:'Cansaulim',rating:'9.3',img:'🌴'},
    {name:'Alila Diwa Goa',stars:4,price:'₹11,000/night',location:'Majorda',rating:'9.0',img:'🏖'},
    {name:'Citrus Goa',stars:3,price:'₹3,500/night',location:'Candolim',rating:'7.8',img:'🏨'}
  ],
  kerala:[
    {name:'Kumarakom Lake Resort',stars:5,price:'₹22,000/night',location:'Kumarakom',rating:'9.5',img:'🌿'},
    {name:'CGH Earth Spice Village',stars:4,price:'₹14,000/night',location:'Thekkady',rating:'9.2',img:'🌴'},
    {name:'Brunton Boatyard',stars:4,price:'₹12,000/night',location:'Fort Kochi',rating:'9.0',img:'⛵'},
    {name:'Coconut Lagoon',stars:4,price:'₹16,000/night',location:'Kumarakom',rating:'9.1',img:'🌿'}
  ],
  japan:[
    {name:'Park Hyatt Tokyo',stars:5,price:'₹75,000/night',location:'Shinjuku Tokyo',rating:'9.7',img:'🗼'},
    {name:'Aman Kyoto',stars:5,price:'₹1,20,000/night',location:'Kyoto',rating:'9.9',img:'⛩'},
    {name:'The Prince Kyoto',stars:4,price:'₹28,000/night',location:'Higashiyama',rating:'8.9',img:'🏯'},
    {name:'Dormy Inn Kyoto',stars:3,price:'₹6,500/night',location:'Gion Kyoto',rating:'8.2',img:'🏨'}
  ],
  thailand:[
    {name:'Mandarin Oriental Bangkok',stars:5,price:'₹45,000/night',location:'Chao Phraya',rating:'9.8',img:'🏯'},
    {name:'Six Senses Yao Noi',stars:5,price:'₹95,000/night',location:'Phang Nga Bay',rating:'9.7',img:'🏝'},
    {name:'Anantara Riverside',stars:4,price:'₹16,000/night',location:'Bangkok',rating:'9.0',img:'⛵'},
    {name:'Ibis Bangkok Riverside',stars:3,price:'₹4,500/night',location:'Bangkok',rating:'8.0',img:'🏨'}
  ],
  singapore:[
    {name:'Marina Bay Sands',stars:5,price:'₹65,000/night',location:'Marina Bay',rating:'9.5',img:'🌃'},
    {name:'Capella Singapore',stars:5,price:'₹85,000/night',location:'Sentosa Island',rating:'9.8',img:'🏝'},
    {name:'Pan Pacific Singapore',stars:4,price:'₹22,000/night',location:'Marina Square',rating:'9.0',img:'🌆'},
    {name:'Ibis Budget Singapore',stars:2,price:'₹4,800/night',location:'Clarke Quay',rating:'7.5',img:'🏨'}
  ],
  santorini:[
    {name:'Canaves Oia Suites',stars:5,price:'₹1,05,000/night',location:'Oia',rating:'9.9',img:'🌅'},
    {name:'Katikies Hotel',stars:5,price:'₹95,000/night',location:'Oia',rating:'9.8',img:'🏛'},
    {name:'Mystique Santorini',stars:5,price:'₹88,000/night',location:'Oia',rating:'9.7',img:'🌊'},
    {name:'Aressana Spa Hotel',stars:4,price:'₹28,000/night',location:'Fira',rating:'8.5',img:'🏖'}
  ],
  rajasthan:[
    {name:'Umaid Bhawan Palace',stars:5,price:'₹55,000/night',location:'Jodhpur',rating:'9.6',img:'🏰'},
    {name:'Taj Lake Palace',stars:5,price:'₹65,000/night',location:'Udaipur',rating:'9.8',img:'🏯'},
    {name:'The Oberoi Rajvilas',stars:5,price:'₹48,000/night',location:'Jaipur',rating:'9.7',img:'🌺'},
    {name:'Zostel Jaisalmer',stars:2,price:'₹800/night',location:'Jaisalmer',rating:'8.0',img:'🏕'}
  ],
  iceland:[
    {name:'ION Adventure Hotel',stars:4,price:'₹52,000/night',location:'Þingvellir NP',rating:'9.4',img:'🌌'},
    {name:'Hotel Rangá',stars:4,price:'₹42,000/night',location:'South Iceland',rating:'9.2',img:'🌋'},
    {name:'Centerhotel Arnarhvoll',stars:4,price:'₹22,000/night',location:'Reykjavik',rating:'8.9',img:'🏙'},
    {name:'KEX Hostel',stars:2,price:'₹3,800/night',location:'Reykjavik',rating:'8.2',img:'🏨'}
  ],
  morocco:[
    {name:'La Mamounia',stars:5,price:'₹68,000/night',location:'Marrakech Medina',rating:'9.7',img:'🕌'},
    {name:'Royal Mansour',stars:5,price:'₹1,20,000/night',location:'Marrakech',rating:'9.9',img:'🌟'},
    {name:'Riad Yasmine',stars:4,price:'₹8,500/night',location:'Marrakech',rating:'9.0',img:'🌺'},
    {name:"Auberge Dunes d'Or",stars:3,price:'₹4,500/night',location:'Merzouga Desert',rating:'8.5',img:'🏕'}
  ],
  nz:[
    {name:"Eichardt's Private Hotel",stars:5,price:'₹72,000/night',location:'Queenstown',rating:'9.8',img:'🏔'},
    {name:'Blanket Bay Lodge',stars:5,price:'₹1,10,000/night',location:'Glenorchy',rating:'9.9',img:'🌄'},
    {name:'Heritage Auckland',stars:4,price:'₹22,000/night',location:'Auckland CBD',rating:'8.8',img:'🏙'},
    {name:'Base Queenstown',stars:2,price:'₹3,200/night',location:'Queenstown',rating:'7.8',img:'🏕'}
  ]
};

/* RESTAURANT DATA */
const RESTAURANT_DATA = {
  paris:['Le Jules Verne — Eiffel Tower, French haute cuisine','Septime — Saint-Germain, modern French','L\'Ami Louis — Marais, roast chicken legend','Breizh Café — best crêpes in Paris'],
  dubai:['Pierchic — overwater seafood','At.mosphere — Burj Khalifa, world\'s highest restaurant','Al Fanar — traditional Emirati','Zuma — Japanese robatayaki'],
  maldives:['Ithaa Undersea Restaurant — underwater dining','Muraka — Conrad Maldives','Sea Fire Salt — Niyama resort','Subsix — underwater nightclub dining'],
  bali:['Locavore — Ubud, farm-to-table','Barbecue Jimbaran — sunset seafood','Warung Babi Guling Ibu Oka — suckling pig','Kayu Manis — cliff-top dining'],
  switzerland:['The Restaurant — Dolder Grand Zurich','Cheval Blanc — Basel, 3 Michelin stars','Restaurant Chesery — Gstaad','Kronenhalle — Zurich classics'],
  goa:['Fisherman\'s Wharf — Cavelossim, seafood','Thalassa — Vagator, Greek-Goan fusion','Pousada by the Beach — Calangute','Gunpowder — Assagao, pan-Indian'],
  kerala:['Casino Hotel — Kerala sadya','Ginger House — Fort Kochi spices','Malabar Kitchen — Kozhikode','Pepper Spice — traditional fish curry'],
  japan:['Sukiyabashi Jiro — Tokyo sushi legend','Kikunoi — Kyoto kaiseki','Ichiran Ramen — solo ramen experience','Tsukiji Outer Market — fresh sashimi'],
  thailand:['Gaggan — Bangkok, progressive Indian','Nahm — Thai fine dining','Som Tam Nua — Siam, papaya salad','Jeh O Chula — Tom Yum Goong'],
  singapore:['Odette — Marina Bay, 3 Michelin stars','Jumbo Seafood — East Coast, chilli crab','Hawker Chan — world\'s cheapest Michelin meal','Violet Oon — Peranakan cuisine'],
  santorini:['Metaxy Mas — Exo Gonia, off the beaten','Argo Restaurant — Fira caldera views','To Psaraki — Vlychada, fresh fish','1800 Wine Bar — Oia sunset dining'],
  rajasthan:['1135 AD — Amber Fort, royal Rajasthani','Sheesh Mahal — Jaipur roof dining','Upre — Udaipur Lake Pichola views','Jharokha — traditional thali'],
  iceland:['Dill — Reykjavik, New Nordic','Grillmarkadurinn — Reykjavik steak','Matur og Drykkur — heritage Icelandic','Café Loki — hákarl fermented shark'],
  morocco:['Al Fassia — Marrakech, women-run tagine','Nomad — rooftop Medina views','Naranj — Fez, orange garden','Café Clock — Fez, camel burger'],
  nz:['Botswana Butchery — Queenstown lakeside','Rata — Queenstown, fine dining','The Boatshed — Waiheke Island','Soul Bar — Auckland viaduct'],
};

/* QUICK INFO DATA */
const QUICK_INFO = {
  paris:{bestTime:'April–June, Sep–Oct',currency:'EUR (€)',language:'French',timezone:'CET (UTC+1)',visa:'Schengen required for Indians'},
  dubai:{bestTime:'Nov–March',currency:'AED (دِرْهَم)',language:'Arabic, English',timezone:'GST (UTC+4)',visa:'Visa on arrival for Indians'},
  maldives:{bestTime:'Nov–April',currency:'MVR (ރ)',language:'Dhivehi, English',timezone:'MVT (UTC+5)',visa:'Visa on arrival for Indians'},
  bali:{bestTime:'Apr–Oct',currency:'IDR (Rp)',language:'Balinese, Indonesian',timezone:'WITA (UTC+8)',visa:'Visa on arrival for Indians'},
  switzerland:{bestTime:'Jun–Sep (summer), Dec–Feb (ski)',currency:'CHF (Fr)',language:'German, French, Italian',timezone:'CET (UTC+1)',visa:'Schengen required'},
  goa:{bestTime:'Oct–March',currency:'INR (₹)',language:'Konkani, English, Hindi',timezone:'IST (UTC+5:30)',visa:'No visa needed'},
  kerala:{bestTime:'Sep–March',currency:'INR (₹)',language:'Malayalam',timezone:'IST (UTC+5:30)',visa:'No visa needed'},
  japan:{bestTime:'Mar–May (Cherry Blossom), Oct–Nov',currency:'JPY (¥)',language:'Japanese',timezone:'JST (UTC+9)',visa:'E-visa for Indians'},
  thailand:{bestTime:'Nov–March',currency:'THB (฿)',language:'Thai',timezone:'ICT (UTC+7)',visa:'Visa-free 30 days for Indians'},
  singapore:{bestTime:'Feb–April',currency:'SGD (S$)',language:'English, Mandarin',timezone:'SGT (UTC+8)',visa:'Visa-free for Indians'},
  santorini:{bestTime:'Apr–Jun, Sep–Oct',currency:'EUR (€)',language:'Greek',timezone:'EET (UTC+2)',visa:'Schengen required'},
  rajasthan:{bestTime:'Oct–March',currency:'INR (₹)',language:'Hindi, Rajasthani',timezone:'IST (UTC+5:30)',visa:'No visa needed'},
  iceland:{bestTime:'Jun–Aug (midnight sun), Dec–Feb (Northern Lights)',currency:'ISK (kr)',language:'Icelandic',timezone:'GMT (UTC+0)',visa:'Schengen required'},
  morocco:{bestTime:'Mar–May, Sep–Nov',currency:'MAD (د.م.)',language:'Arabic, French',timezone:'WET (UTC+1)',visa:'Visa-free for Indians'},
  nz:{bestTime:'Dec–Feb (summer), Jun–Aug (ski)',currency:'NZD (NZ$)',language:'English, Māori',timezone:'NZST (UTC+12)',visa:'NZeTA required'},
};

/* ── PACKAGES FULLSCREEN ── */
let currentPkgFilter = 'all';
let currentSort = 'default';

function filterPkgsFullscreen(cat, btn) {
  currentPkgFilter = cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPkgGrid();
}

function sortPackages() {
  currentSort = document.getElementById('pkgSortSelect')?.value || 'default';
  renderPkgGrid();
}

function renderPkgGrid() {
  const grid = document.getElementById('pkgGrid');
  if (!grid) return;
  let pkgs = currentPkgFilter === 'all' ? [...PACKAGES] : PACKAGES.filter(p => p.cat === currentPkgFilter);
  if (currentSort === 'priceLow') pkgs.sort((a,b) => a.priceNum - b.priceNum);
  else if (currentSort === 'priceHigh') pkgs.sort((a,b) => b.priceNum - a.priceNum);
  else if (currentSort === 'rating') pkgs.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating));
  const countEl = document.getElementById('pkgCount');
  if (countEl) countEl.textContent = pkgs.length;
  grid.innerHTML = pkgs.map(p => pkgCardV2HTML(p)).join('');
  // re-init scroll reveal
  initScrollReveal();
}

function pkgCardV2HTML(p) {
  return `<div class="pkg-card-v2" onclick="openPkgModal('${p.id}')">
    <div class="pkg-card-v2-img" style="background-image:url('${p.img}')">
      <span class="pkg-badge2">${p.badge}</span>
      <span class="pkg-dur2">${p.duration}</span>
    </div>
    <div class="pkg-card-v2-body">
      <div class="pkg-card-v2-loc">📍 ${p.loc}</div>
      <div class="pkg-card-v2-name">${p.name}</div>
      <div class="pkg-card-v2-desc">${p.desc}</div>
      <div class="pkg-card-v2-highlights">
        ${p.highlights.slice(0,2).map(h=>`<span>${h}</span>`).join('')}
      </div>
      <div class="pkg-card-v2-footer">
        <div>
          <div class="pkg-card-v2-price"><small>From</small>${p.price}</div>
          <div class="pkg-card-v2-rating">⭐ ${p.rating} (${p.reviews} reviews)</div>
        </div>
        <button class="btn-book" style="padding:8px 16px;font-size:.8rem" onclick="event.stopPropagation();openPkgModal('${p.id}')">Book</button>
      </div>
    </div>
  </div>`;
}

/* Override openPkgModal to add hotel cards */
const _origOpenPkgModal = openPkgModal;
// openPkgModal is already defined; we extend it by patching the hotels section:
const _origOpenPkgModalFn = window.openPkgModal || openPkgModal;

function openPkgModal(id) {
  const pkg = PACKAGES.find(p => p.id === id);
  if (!pkg) return;
  currentPkg = pkg;
  const modal = document.getElementById('pkgModal');
  if (!modal) return;
  document.getElementById('pkgModalHero').style.backgroundImage = `url('${pkg.img}')`;
  document.getElementById('pkgModalTitle').textContent = pkg.name;
  document.getElementById('pkgModalLoc').textContent = `📍 ${pkg.loc} · ${pkg.duration}`;
  document.getElementById('pkgDesc').textContent = pkg.desc;
  document.getElementById('pkgCostBreakdown').innerHTML = `
    <div class="cost-item"><div class="label">🏨 Hotel</div><div class="value">${pkg.hotelCost}</div></div>
    <div class="cost-item"><div class="label">✈️ Flights</div><div class="value">${pkg.flightCost}</div></div>
    <div class="cost-item"><div class="label">🍽 Food</div><div class="value">${pkg.foodCost}</div></div>`;
  document.getElementById('pkgFood').innerHTML = pkg.food.map(f=>`<span class="modal-tag">🍽 ${f}</span>`).join('');
  document.getElementById('pkgPlaces').innerHTML = pkg.places.map(pl=>`<span class="modal-tag">📍 ${pl}</span>`).join('');
  document.getElementById('pkgItinerary').innerHTML = pkg.itinerary.map((i,n) => `<div class="itin-day"><div class="itin-day-num">${n+1}</div><div class="itin-day-content"><h5>${i.title}</h5><p>${i.desc}</p></div></div>`).join('');
  document.getElementById('pkgTotal').textContent = pkg.total;
  // Hotels in modal
  const pkgHotels = document.getElementById('pkgModalHotels');
  if (pkgHotels) {
    const destKey = pkg.loc.split(',')[0].toLowerCase().replace(/\s/g,'').replace(/[^a-z]/g,'');
    const hotels = HOTEL_DATA[destKey] || HOTEL_DATA[Object.keys(HOTEL_DATA).find(k => pkg.loc.toLowerCase().includes(k))] || [];
    pkgHotels.innerHTML = hotels.map(h => hotelCardHTML(h)).join('') || '<p style="color:var(--text-dim);font-size:.85rem">Hotels included — contact us for details.</p>';
  }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function hotelCardHTML(h) {
  return `<div class="hotel-card">
    <div class="hotel-card-name">${h.img} ${h.name} ${'★'.repeat(Math.min(h.stars,5))}</div>
    <div class="hotel-card-loc">📍 ${h.location}</div>
    <div class="hotel-card-row">
      <span class="hotel-card-price">${h.price}</span>
      <span class="hotel-card-rating">⭐ ${h.rating}</span>
    </div>
    <button class="hotel-card-btn" onclick="selectHotel('${h.name}')">Select This Hotel</button>
  </div>`;
}

function selectHotel(name) {
  localStorage.setItem('sv_selected_hotel', name);
  showGlobalToast(`🏨 ${name} selected! Proceed to booking.`, 'green');
}

/* ── DESTINATION RECOMMENDATION SYSTEM ── */
let currentPref = 'all';

function setPreference(pref, btn) {
  currentPref = pref;
  document.querySelectorAll('.rec-pref-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderRecommendedDests(pref);
}

function renderRecommendedDests(pref) {
  const grid = document.getElementById('recDestGrid');
  const title = document.getElementById('recResultsTitle');
  const count = document.getElementById('recResultsCount');
  if (!grid) return;
  const filtered = pref === 'all' ? DESTINATIONS : DESTINATIONS.filter(d => d.theme.includes(pref));
  const names = {all:'All',beach:'🏖 Beach',adventure:'🏔 Adventure',winter:'❄️ Winter',desert:'🏜 Desert',cultural:'🏛 Cultural',honeymoon:'💕 Luxury'};
  if (title) title.innerHTML = `${names[pref] || pref} <em>Destinations</em>`;
  if (count) count.textContent = `${filtered.length} destination${filtered.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtered.map(d => recDestCardHTML(d)).join('');
}

function recDestCardHTML(d) {
  return `<div class="dest-full-card" onclick="openDestDetailPage('${d.id}')">
    <div class="dfc-img" style="background-image:url('${d.img}')"></div>
    <div class="dfc-body">
      <span class="dfc-tag">${d.tag}</span>
      <h3>${d.name}, ${d.country}</h3>
      <p>${d.desc.substring(0,90)}...</p>
      <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px">
        ${(HOTEL_DATA[d.id]?.[0]) ? `<span style="font-size:.72rem;color:var(--text-dim)">🏨 ${HOTEL_DATA[d.id][0].name}</span>` : ''}
        ${(RESTAURANT_DATA[d.id]?.[0]) ? `<span style="font-size:.72rem;color:var(--text-dim);margin-left:6px">🍽 ${RESTAURANT_DATA[d.id][0].split('—')[0].trim()}</span>` : ''}
      </div>
      <div class="dfc-footer">
        <span class="dfc-price">${d.price}<small style="font-size:.7rem;color:var(--text-dim);font-weight:400">/person</small></span>
        <button class="btn-explore" onclick="event.stopPropagation();openDestDetailPage('${d.id}')">Explore →</button>
      </div>
    </div>
  </div>`;
}

/* ── DESTINATION FULL PAGE DETAIL ── */
let currentDetailDest = null;

function openDestDetailPage(id) {
  const dest = DESTINATIONS.find(d => d.id === id);
  if (!dest) { openDestModal(id); return; }
  currentDetailDest = dest;
  currentModalDest = dest; // keep for wishlist compatibility

  // Hero
  document.getElementById('ddHero').style.backgroundImage = `url('${dest.img}')`;
  document.getElementById('ddTag').innerHTML = `<span style="background:var(--orange);color:#fff;padding:4px 14px;border-radius:999px;font-size:.78rem;font-weight:700">${dest.tag}</span>`;
  document.getElementById('ddTitle').innerHTML = `${dest.name} <em>${dest.country}</em>`;
  document.getElementById('ddName').textContent = '';
  document.getElementById('ddCountry').textContent = `📍 ${dest.country}`;
  document.getElementById('ddDesc').textContent = dest.desc;

  // Wishlist state
  const wish = JSON.parse(localStorage.getItem('sv_wishlist') || '[]');
  const wishBtn = document.getElementById('ddWishBtn');
  if (wishBtn) wishBtn.textContent = wish.find(w => w.id === id) ? '❤️ Wishlisted' : '🤍 Wishlist';

  // Attractions
  document.getElementById('ddAttractions').innerHTML = dest.attractions.map(a => `<div class="dest-attraction-item">🏛 ${a}</div>`).join('');

  // Activities
  document.getElementById('ddActivities').innerHTML = dest.activities.map(a => `<div class="dest-activity-item">🎯 ${a}</div>`).join('');

  // Restaurants
  const rests = RESTAURANT_DATA[id] || dest.hotels.slice(0,4).map(h => `${h} — Fine Dining`);
  document.getElementById('ddRestaurants').innerHTML = rests.map(r => {
    const parts = r.split('—');
    return `<div class="dest-restaurant-item"><strong>${parts[0].trim()}</strong>${parts[1] ? parts[1].trim() : ''}</div>`;
  }).join('');

  // Itinerary
  document.getElementById('ddItinerary').innerHTML = dest.itinerary.map((i,n) => `<div class="dest-itin-item">
    <div class="dest-itin-num">${n+1}</div>
    <div class="dest-itin-body"><h5>${i.day}: ${i.title}</h5><p>${i.desc}</p></div>
  </div>`).join('');

  // Travel Plan (recommended plan)
  // (itinerary also doubles as travel plan above)

  // Hotels sidebar
  const hotels = HOTEL_DATA[id] || [];
  document.getElementById('ddHotels').innerHTML = hotels.length ? hotels.map(h => `
    <div class="dest-sidebar-hotel">
      <div class="dest-sidebar-hotel-name">${h.img} ${h.name} ${'★'.repeat(Math.min(h.stars,5))}</div>
      <div style="font-size:.75rem;color:var(--text-dim);margin-bottom:4px">📍 ${h.location}</div>
      <div class="dest-sidebar-hotel-meta">
        <span class="dest-sidebar-hotel-price">${h.price}</span>
        <span class="dest-sidebar-hotel-rating">⭐ ${h.rating}</span>
      </div>
      <button class="dest-sidebar-hotel-btn" onclick="selectHotel('${h.name}')">Select Hotel</button>
    </div>`).join('') : '<p style="font-size:.85rem;color:var(--text-dim)">Contact us for hotel options.</p>';

  // Cost breakdown
  document.getElementById('ddCosts').innerHTML = Object.entries(dest.costs).map(([k,v]) =>
    `<div class="dest-cost-item"><span class="dest-cost-label">${k.charAt(0).toUpperCase()+k.slice(1)}</span><span class="dest-cost-value">${v||'Included'}</span></div>`
  ).join('');
  document.getElementById('ddTotalVal').textContent = dest.total;

  // Quick Info
  const info = QUICK_INFO[id];
  if (info) {
    document.getElementById('ddQuickInfoContent').innerHTML = Object.entries(info).map(([k,v]) =>
      `<div class="dest-cost-item"><span class="dest-cost-label" style="text-transform:capitalize">${k.replace(/([A-Z])/g,' $1')}</span><span class="dest-cost-value" style="text-align:right;font-size:.8rem">${v}</span></div>`
    ).join('');
    document.getElementById('ddQuickInfo').style.display = 'block';
  } else {
    document.getElementById('ddQuickInfo').style.display = 'none';
  }

  // Open the page
  const page = document.getElementById('destDetailPage');
  page.classList.add('open');
  page.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeDestDetailPage() {
  document.getElementById('destDetailPage')?.classList.remove('open');
  document.body.style.overflow = '';
}

function bookFromDetail() {
  if (currentDetailDest) localStorage.setItem('sv_booking_dest', JSON.stringify(currentDetailDest));
  window.location.href = 'Bookings.html';
}

function toggleWishFromDetail() {
  if (!currentDetailDest) return;
  const wish = JSON.parse(localStorage.getItem('sv_wishlist') || '[]');
  const idx = wish.findIndex(w => w.id === currentDetailDest.id);
  const btn = document.getElementById('ddWishBtn');
  if (idx > -1) {
    wish.splice(idx, 1);
    localStorage.setItem('sv_wishlist', JSON.stringify(wish));
    if (btn) btn.textContent = '🤍 Wishlist';
    showGlobalToast('Removed from wishlist');
  } else {
    wish.push({ id:currentDetailDest.id, name:currentDetailDest.name, country:currentDetailDest.country, img:currentDetailDest.img, price:currentDetailDest.price });
    localStorage.setItem('sv_wishlist', JSON.stringify(wish));
    if (btn) btn.textContent = '❤️ Wishlisted';
    showGlobalToast(`❤️ ${currentDetailDest.name} added to wishlist!`, 'green');
  }
}

/* ── FIXED SEARCH — NO REDIRECT ── */
// Override handleSearch to never redirect
function handleSearch() {
  const query = (document.getElementById('heroSearch')?.value || '').trim();
  if (!query) { showGlobalToast('Please enter a destination to search!'); return; }

  const section = document.getElementById('searchResultsSection');
  const grid = document.getElementById('searchResultsGrid');
  if (!section || !grid) {
    // On pages without search section (e.g. Destination.html), show in place
    window.location.href = `index.html?q=${encodeURIComponent(query)}`;
    return;
  }

  document.getElementById('searchQueryTitle').textContent = query;
  const found = DESTINATIONS.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.country.toLowerCase().includes(query.toLowerCase()) ||
    d.tag.toLowerCase().includes(query.toLowerCase()) ||
    d.theme.some(t => t.includes(query.toLowerCase()))
  );

  if (found.length > 0) {
    document.getElementById('searchResultsSubtitle').textContent = `Found ${found.length} matching destination${found.length>1?'s':''}`;
    grid.innerHTML = found.map(d => searchResultCardHTML(d, false)).join('');
  } else {
    document.getElementById('searchResultsSubtitle').textContent = `No local results — searching with Gemini AI...`;
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px"><div class="spin" style="width:40px;height:40px;border:3px solid var(--border);border-top-color:var(--orange);border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 16px"></div><p style="color:var(--text-mid)">Fetching AI-powered results for <strong>${query}</strong>...</p></div>`;
    fetchGeminiSearch(query, grid);
  }

  section.style.display = 'block';
  section.scrollIntoView({ behavior:'smooth' });
}

function searchResultCardHTML(d, isAI=false) {
  const hotels = HOTEL_DATA[d.id] || [];
  return `<div class="search-result-card-v2">
    <div class="src-card-img" style="background-image:url('${d.img}')">
      ${isAI ? '<span class="src-ai-pill">✨ AI Result</span>' : ''}
    </div>
    <div class="src-card-body">
      <div class="src-card-title">${d.name}, ${d.country}</div>
      <div class="src-card-desc">${d.desc.substring(0,120)}...</div>
      <div class="src-card-tags">
        ${d.attractions.slice(0,3).map(a=>`<span class="src-card-tag">🏛 ${a}</span>`).join('')}
      </div>
      ${hotels.length ? `<div class="src-card-meta"><span>🏨 From ${hotels[hotels.length-1].price}</span><span>⭐ ${hotels[0].rating}</span></div>` : ''}
      <div class="src-card-actions">
        <button class="btn-book-now" onclick="bookDestinationDirect('${d.id}')">✈️ Book Now</button>
        <button class="btn-wish-sm" onclick="addToWishlistAI('${d.name}','${d.country}')">🤍</button>
        <button class="btn-book-now" style="background:var(--surface);color:var(--text-mid);border:1.5px solid var(--border);flex:none;padding:10px 14px" onclick="openDestDetailPage('${d.id}')">Details</button>
      </div>
    </div>
  </div>`;
}

function bookDestinationDirect(id) {
  const dest = DESTINATIONS.find(d => d.id === id);
  if (dest) localStorage.setItem('sv_booking_dest', JSON.stringify(dest));
  window.location.href = 'Bookings.html';
}

async function fetchGeminiSearch(query, container) {
  const prompt = `You are a travel expert. Give detailed travel information about "${query}" as JSON only (no markdown backticks):
{"name":"","country":"","description":"2-3 sentence description","attractions":["a1","a2","a3","a4","a5"],"activities":["a1","a2","a3"],"hotels":[{"name":"","price":"INR price/night","rating":"8.x","stars":4},{"name":"","price":"INR price/night","rating":"8.x","stars":3}],"restaurants":["name — description","name — description"],"bestTime":"","currency":"","language":"","estimatedBudget":"INR per person","tips":["tip1","tip2"]}`;
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ contents:[{ parts:[{text:prompt}] }] })
    });
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    let info;
    try { info = JSON.parse(text.replace(/```json|```/g,'').trim()); } catch { info = null; }
    if (info) {
      const bgImgs = [
        'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'
      ];
      container.innerHTML = `<div class="search-result-card-v2" style="grid-column:span 2">
        <div class="src-card-img" style="background-image:url('${bgImgs[0]}');height:240px">
          <span class="src-ai-pill">✨ AI Powered by Gemini</span>
        </div>
        <div class="src-card-body">
          <div class="src-card-title">${info.name}, ${info.country}</div>
          <div class="src-card-desc">${info.description}</div>
          <div class="src-card-tags">
            ${(info.attractions||[]).slice(0,5).map(a=>`<span class="src-card-tag">🏛 ${a}</span>`).join('')}
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:14px 0">
            <div>
              <strong style="font-size:.82rem;display:block;margin-bottom:6px">🏨 Hotels</strong>
              ${(info.hotels||[]).map(h=>`<div style="font-size:.78rem;padding:4px 0;border-bottom:1px solid var(--border)"><strong>${h.name}</strong> · ${h.price} · ⭐${h.rating}</div>`).join('')}
            </div>
            <div>
              <strong style="font-size:.82rem;display:block;margin-bottom:6px">📅 Best Time</strong>
              <div style="font-size:.82rem;color:var(--text-mid)">${info.bestTime||'Year-round'}</div>
              <strong style="font-size:.82rem;display:block;margin:8px 0 4px">💰 Budget</strong>
              <div style="font-size:.82rem;color:var(--orange);font-weight:700">${info.estimatedBudget||'Varies'}</div>
              <strong style="font-size:.82rem;display:block;margin:8px 0 4px">💱 Currency</strong>
              <div style="font-size:.82rem;color:var(--text-mid)">${info.currency||'USD'}</div>
            </div>
          </div>
          ${(info.tips||[]).length ? `<div style="background:var(--bg-warm);border-radius:10px;padding:12px;margin-bottom:14px"><strong style="font-size:.82rem">💡 Travel Tips</strong>${info.tips.map(t=>`<div style="font-size:.78rem;color:var(--text-mid);margin-top:4px">• ${t}</div>`).join('')}</div>` : ''}
          <div class="src-card-actions">
            <button class="btn-book-now" onclick="window.location.href='Bookings.html'">✈️ Book This Trip</button>
            <button class="btn-wish-sm" onclick="addToWishlistAI('${info.name}','${info.country}')">🤍 Save</button>
          </div>
        </div>
      </div>`;
    } else {
      container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-dim)">⚠️ Couldn't load AI results. <a href="contact.html" style="color:var(--orange)">Contact us</a> for help finding ${query}.</div>`;
    }
  } catch(err) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-dim)">⚠️ AI search unavailable. <a href="Destination.html" style="color:var(--orange)">Browse all destinations →</a></div>`;
  }
}

/* Also handle ?q= param on index.html load */
function handleSearchQueryParam() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q) {
    const input = document.getElementById('heroSearch');
    if (input) { input.value = q; handleSearch(); }
  }
}

/* ── EXTENDED initDestinationsPage ── */
function initDestinationsPage() {
  // Render main grid
  const grid = document.getElementById('destGrid');
  if (grid) {
    grid.innerHTML = DESTINATIONS.map(d => `
      <div class="dest-full-card reveal" onclick="openDestDetailPage('${d.id}')">
        <div class="dfc-img" style="background-image:url('${d.img}')"></div>
        <div class="dfc-body">
          <span class="dfc-tag">${d.tag}</span>
          <h3>${d.name}, ${d.country}</h3>
          <p>${d.desc.substring(0,100)}...</p>
          <div class="dfc-footer">
            <span class="dfc-price">${d.price}<small style="font-size:.7rem;color:var(--text-dim);font-weight:400">/person</small></span>
            <button class="btn-explore" onclick="event.stopPropagation();openDestDetailPage('${d.id}')">Explore →</button>
          </div>
        </div>
      </div>`).join('');
  }
  // Render recommendation section
  renderRecommendedDests('all');
  initScrollReveal();
}

/* Override filterDest to use full page detail on click */
function filterDest(theme, btn) {
  document.querySelectorAll('.dest-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const grid = document.getElementById('destGrid');
  if (!grid) return;
  const filtered = theme === 'all' ? DESTINATIONS : DESTINATIONS.filter(d => d.theme.includes(theme));
  grid.innerHTML = filtered.map(d => `
    <div class="dest-full-card reveal" onclick="openDestDetailPage('${d.id}')">
      <div class="dfc-img" style="background-image:url('${d.img}')"></div>
      <div class="dfc-body">
        <span class="dfc-tag">${d.tag}</span>
        <h3>${d.name}, ${d.country}</h3>
        <p>${d.desc.substring(0,100)}...</p>
        <div class="dfc-footer">
          <span class="dfc-price">${d.price}<small style="font-size:.7rem;color:var(--text-dim);font-weight:400">/person</small></span>
          <button class="btn-explore" onclick="event.stopPropagation();openDestDetailPage('${d.id}')">Explore →</button>
        </div>
      </div>
    </div>`).join('');
  initScrollReveal();
}

/* ── EXTENDED initPageSpecific ── */
// Patch to add new page calls without removing old ones
function initPageSpecific() {
  _initPageSpecificLegacy();
  const path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === 'Packages.html') renderPkgGrid();
  if (path === 'index.html' || path === '' || path === '/') handleSearchQueryParam();
  // Close detail page on background click
  const ddPage = document.getElementById('destDetailPage');
  if (ddPage) {
    ddPage.addEventListener('click', e => {
      if (e.target === ddPage) closeDestDetailPage();
    });
  }
}

/* ── NAVIGATION CHECK — add Dashboard link dynamically ── */
function addDashboardNavLink() {
  const user = getUser();
  // Show hidden dashboard links
  document.querySelectorAll('#navDashLink').forEach(el => el.style.display = user ? '' : 'none');
  // Also inject if missing
  document.querySelectorAll('.nav-links').forEach(ul => {
    if (!ul.querySelector('a[href="Dashboard.html"]') && user) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="Dashboard.html">Dashboard</a>`;
      ul.appendChild(li);
    }
  });
}

// Call on DOM ready if user is logged in
document.addEventListener('DOMContentLoaded', () => {
  if (getUser()) addDashboardNavLink();
});
