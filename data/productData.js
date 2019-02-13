const data = {
  id: "234567-L",
  productInformation: [
    ["manufacturer", "Brand Name"],
    ["type", "Integral"],
    ["article id", "234567-L"],
    ["ean", "3434562321850"],
    ["paintwork", "Matt"],
    ["gender", "any"]
  ],
  brand: {
    id: 1,
    name: "Brand Name",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo_TV_2015.png/200px-Logo_TV_2015.png"
  },
  name: "Fancy Product",
  reviews: {
    rate: 4,
    quantity: 12
  },
  colors: ["Black/Yellow", "Orange"],
  sizes: ["S", "M", "L", "XL"],
  imageURL:
    "https://elvuelodeldrone.com/wp-content/uploads/2018/01/Portada-Fisherman-Auto-tiny.jpg",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  productDescription: {
    summary:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur ullamcorper nisl, vestibulum vitae tortor cras penatibus egestas ante torquent. Tristique placerat molestie eleifend eget netus libero odio congue in nibh, quis senectus turpis habitant id eros purus dapibus quam ultrices, et himenaeos massa taciti nunc hendrerit litora feugiat venenatis.",
    features:
      "Libero pulvinar dis nullam eu eleifend platea commodo mauris habitasse, himenaeos nunc fermentum rhoncus diam risus felis posuere condimentum est, netus lacinia dictum fusce vestibulum ullamcorper mollis leo. Conubia scelerisque lectus cum mus gravida interdum rhoncus, sodales fringilla neque euismod commodo sed vehicula, vivamus taciti ac montes inceptos rutrum. Fusce commodo cursus gravida arcu ridiculus nunc nam, risus cubilia congue volutpat sem posuere integer facilisi, duis fringilla mi iaculis feugiat dignissim. Pulvinar ultrices a enim malesuada tempus vestibulum convallis hendrerit dignissim felis scelerisque natoque, rutrum ut volutpat proin erat id varius ligula dui tempor dictum, viverra magnis sodales sociis sollicitudin potenti lacinia feugiat gravida aptent nec. Nulla molestie platea eget ut ullamcorper congue sapien mauris, egestas aenean nostra rhoncus duis taciti condimentum, mattis hac a vehicula dignissim gravida quis.Lacus eu parturient ad dignissim platea tempus felis maecenas mauris risus, imperdiet blandit vivamus suspendisse litora hendrerit enim sem praesent, interdum venenatis nullam quis etiam pretium fringilla sed vestibulum.Tristique lacus metus laoreet phasellus convallis dictum, conubia ac volutpat pretium ultrices risus velit, viverra nec accumsan curabitur sollicitudin.Gravida nam nascetur ad nullam aenean facilisis primis fermentum cum, ante bibendum accumsan varius eget tellus lacus euismod porta, rhoncus malesuada sapien lobortis pharetra mollis posuere sociis. Cubilia proin nascetur quisque venenatis nec id tortor odio volutpat lacinia, tempor sollicitudin inceptos ultricies phasellus rhoncus vestibulum magna mauris, in primis augue nullam vitae cum habitant commodo at.Rhoncus urna primis ridiculus dis mi turpis interdum nostra phasellus odio, viverra a velit porttitor penatibus platea himenaeos nec duis.Fermentum torquent nostra arcu praesent himenaeos netus ornare urna, quis malesuada at cubilia justo tempor ligula augue, mattis donec lectus ridiculus neque leo massa. Nostra cursus in conubia dapibus nullam luctus nunc feugiat et, duis fermentum ridiculus dictum a aliquam vivamus donec, eros habitasse posuere netus ornare commodo felis gravida.Torquent ligula per aenean nibh proin quam duis sed, porta urna nam natoque lacus suscipit parturient fermentum, magna sapien himenaeos et cras leo fringilla.Fames quis ad habitasse erat quam potenti lacinia hendrerit aliquam mi ante, volutpat fringilla sagittis vitae luctus class eu lacus cubilia. Phasellus dictum integer arcu velit faucibus tempor ut vel, per commodo lacinia turpis consequat ad litora.Himenaeos venenatis odio vitae suspendisse montes nisi semper, sociis hac viverra volutpat class habitasse purus, orci nec ac tellus morbi aptent.Ullamcorper pellentesque nulla bibendum lacus vivamus cras velit nullam, mus accumsan imperdiet duis libero nascetur hendrerit blandit, enim mattis augue donec vestibulum platea vehicula.",
    wagenpolster:
      "Ultrices pretium pellentesque malesuada ut taciti integer sagittis, tortor torquent aliquet arcu nullam mauris interdum eros, sapien parturient fringilla odio sociis aliquam. Potenti est torquent felis maecenas egestas habitant hendrerit purus quam, penatibus semper condimentum non ullamcorper cum convallis nisi sociosqu, viverra pharetra natoque pulvinar facilisi ultricies lectus nisl. Dictum posuere tempor morbi aliquam integer himenaeos laoreet scelerisque praesent nisl hendrerit vitae, faucibus dictumst netus class maecenas primis metus eros pharetra est.",
    scheilterposter:
      "Sagittis nunc metus habitant netus sapien himenaeos potenti curabitur, felis porta nisl diam aliquet hendrerit nascetur posuere semper, auctor suscipit pulvinar montes volutpat bibendum dictumst rutrum, at magnis blandit mollis pellentesque parturient interdum. Porta nisi ullamcorper duis consequat ac, class convallis facilisis. Non cubilia natoque at nisi dictumst feugiat sapien, vestibulum risus accumsan integer sodales ad, leo blandit aenean torquent tellus duis."
  },
  offer: {
    merchantName: "Merchant Name",
    rate: "4.72",
    price: {
      currency: "€",
      normalPrice: "399.00",
      offerPrice: "319.00",
      discount: "-15%" //this could be calculated but i will place it here to go faster
    },
    delivery: "3-4 days",
    superPoints: 638
  }
};

export { data };
